/*
 * workshop-explorer.js — homepage workshop grid: search, chip filters, group-by.
 *
 * Behavior:
 *  - Multi-select chips within a dimension → OR; across dimensions → AND.
 *  - Search matches title + description substring (case-insensitive).
 *  - Group-by re-parents cards under heading sections while preserving DOM.
 *  - State is reflected to location.hash so URL sharing restores selections.
 *  - No framework, no new runtime deps.
 */
(function () {
  "use strict";

  var explorer = document.querySelector(".workshop-explorer[data-interactive='true']");
  var filters = document.querySelector(".workshop-explorer-filters");
  if (!explorer || !filters) return;

  // Collect all card elements (direct spans) and remember their home <li>.
  var cards = Array.prototype.slice.call(
    explorer.querySelectorAll(".workshop-button")
  );
  if (cards.length === 0) return;

  var originalParents = cards.map(function (c) {
    return { card: c, parent: c.parentNode, next: c.nextSibling };
  });

  var searchInput = filters.querySelector(".we-search-input");
  var clearBtn = filters.querySelector("#we-clear");
  var groupSelect = filters.querySelector("#we-groupby");
  var resultCountEl = filters.querySelector(".we-result-count");
  var emptyEl = explorer.querySelector(".workshop-explorer-empty");
  var chipGroups = Array.prototype.slice.call(
    filters.querySelectorAll(".we-chip-group")
  );

  // State: { difficulties: Set, language: Set, topics: Set, q: string, group: string }
  var state = {
    difficulties: new Set(),
    language: new Set(),
    topics: new Set(),
    q: "",
    group: "none",
  };

  // Group-by containers are created lazily and removed when not grouping.
  var groupContainer = null;

  function parseHash() {
    if (!location.hash || location.hash.length < 2) return;
    var raw = location.hash.slice(1);
    try {
      raw.split("&").forEach(function (pair) {
        var eq = pair.indexOf("=");
        if (eq < 0) return;
        var k = decodeURIComponent(pair.slice(0, eq));
        var v = decodeURIComponent(pair.slice(eq + 1));
        if (k === "q") state.q = v;
        else if (k === "group") state.group = v || "none";
        else if (state[k] instanceof Set && v) {
          v.split(",").forEach(function (t) {
            if (t) state[k].add(t);
          });
        }
      });
    } catch (_e) {
      /* ignore malformed hashes */
    }
  }

  function writeHash() {
    var parts = [];
    ["difficulties", "language", "topics"].forEach(function (dim) {
      if (state[dim].size) {
        parts.push(
          encodeURIComponent(dim) +
            "=" +
            encodeURIComponent(Array.from(state[dim]).join(","))
        );
      }
    });
    if (state.q) parts.push("q=" + encodeURIComponent(state.q));
    if (state.group && state.group !== "none") {
      parts.push("group=" + encodeURIComponent(state.group));
    }
    var next = parts.length ? "#" + parts.join("&") : "";
    if (next !== location.hash) {
      // Avoid adding history entries for every keystroke.
      history.replaceState(null, "", location.pathname + location.search + next);
    }
  }

  function syncControlsFromState() {
    searchInput.value = state.q;
    groupSelect.value = state.group;
    chipGroups.forEach(function (group) {
      var dim = group.getAttribute("data-dimension");
      var selected = state[dim];
      Array.prototype.forEach.call(
        group.querySelectorAll(".we-chip"),
        function (chip) {
          var v = chip.getAttribute("data-value");
          var on = selected.has(v);
          chip.setAttribute("aria-pressed", on ? "true" : "false");
          chip.classList.toggle("is-active", on);
        }
      );
    });
    updateActiveCount();
  }

  function updateActiveCount() {
    var badge = filters.querySelector(".we-active-count");
    if (!badge) return;
    var n =
      state.difficulties.size +
      state.language.size +
      state.topics.size +
      (state.q ? 1 : 0) +
      (state.group && state.group !== "none" ? 1 : 0);
    if (n > 0) {
      badge.textContent = String(n);
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  }

  function tokens(attr) {
    if (!attr) return [];
    return attr.split(/\s+/).filter(Boolean);
  }

  function cardMatches(card) {
    // Never surface hidden workshops in interactive mode either.
    if (card.getAttribute("data-hidden") === "true") return false;

    if (state.q) {
      var q = state.q.toLowerCase();
      var title = (card.getAttribute("data-title") || "").toLowerCase();
      var desc = (card.getAttribute("data-description") || "").toLowerCase();
      if (title.indexOf(q) === -1 && desc.indexOf(q) === -1) return false;
    }
    // difficulties: set of tokens, OR within dimension.
    if (state.difficulties.size) {
      var dtoks = tokens(card.getAttribute("data-difficulties"));
      var ok = false;
      for (var i = 0; i < dtoks.length; i++) {
        if (state.difficulties.has(dtoks[i])) { ok = true; break; }
      }
      if (!ok) return false;
    }
    if (state.language.size) {
      var lang = card.getAttribute("data-language") || "";
      if (!state.language.has(lang)) return false;
    }
    if (state.topics.size) {
      var ttoks = tokens(card.getAttribute("data-topics"));
      var ok2 = false;
      for (var j = 0; j < ttoks.length; j++) {
        if (state.topics.has(ttoks[j])) { ok2 = true; break; }
      }
      if (!ok2) return false;
    }
    return true;
  }

  function restoreCardHomes() {
    originalParents.forEach(function (rec) {
      if (rec.card.parentNode !== rec.parent) {
        if (rec.next && rec.next.parentNode === rec.parent) {
          rec.parent.insertBefore(rec.card, rec.next);
        } else {
          rec.parent.appendChild(rec.card);
        }
      }
    });
    if (groupContainer && groupContainer.parentNode) {
      groupContainer.parentNode.removeChild(groupContainer);
    }
    groupContainer = null;
  }

  function getGroupBuckets(dim, visibleCards) {
    var buckets = Object.create(null);
    visibleCards.forEach(function (card) {
      var keys;
      if (dim === "language") {
        keys = [card.getAttribute("data-language") || "unspecified"];
      } else {
        keys = tokens(card.getAttribute("data-" + dim));
        if (keys.length === 0) keys = ["unspecified"];
      }
      keys.forEach(function (k) {
        (buckets[k] = buckets[k] || []).push(card);
      });
    });
    return buckets;
  }

  function labelForGroupKey(dim, key) {
    // i18n labels are rendered server-side on chips; mirror them client-side
    // by reading the button text for that value.
    var chipGroup = filters.querySelector(
      ".we-chip-group[data-dimension='" + dim + "']"
    );
    if (chipGroup) {
      var chip = chipGroup.querySelector(".we-chip[data-value='" + CSS.escape(key) + "']");
      if (chip) return chip.textContent.trim();
    }
    return key;
  }

  function render() {
    restoreCardHomes();

    var visibleCount = 0;
    var visibleCards = [];
    cards.forEach(function (card) {
      var visible = cardMatches(card);
      card.style.display = visible ? "" : "none";
      if (visible) {
        visibleCount++;
        visibleCards.push(card);
      }
    });

    // Grouping — rebuild container.
    if (state.group && state.group !== "none" && visibleCount > 0) {
      var ul = explorer.querySelector(".children");
      if (ul) {
        groupContainer = document.createElement("div");
        groupContainer.className = "workshop-explorer-groups";
        var buckets = getGroupBuckets(state.group, visibleCards);
        // Preserve taxonomy declaration order where possible.
        var chipGroup = filters.querySelector(
          ".we-chip-group[data-dimension='" + state.group + "']"
        );
        var order = chipGroup
          ? Array.prototype.map.call(
              chipGroup.querySelectorAll(".we-chip"),
              function (c) { return c.getAttribute("data-value"); }
            )
          : Object.keys(buckets);
        Object.keys(buckets).forEach(function (k) {
          if (order.indexOf(k) === -1) order.push(k);
        });
        order.forEach(function (key) {
          if (!buckets[key]) return;
          var section = document.createElement("section");
          section.className = "workshop-explorer-group";
          var h = document.createElement("h3");
          h.className = "workshop-explorer-group-title";
          h.textContent = labelForGroupKey(state.group, key);
          section.appendChild(h);
          var groupUl = document.createElement("ul");
          groupUl.className = "children children-card";
          buckets[key].forEach(function (card) {
            groupUl.appendChild(card);
          });
          section.appendChild(groupUl);
          groupContainer.appendChild(section);
        });
        ul.parentNode.insertBefore(groupContainer, ul.nextSibling);
        ul.style.display = "none";
      }
    } else {
      var ul2 = explorer.querySelector(".children");
      if (ul2) ul2.style.display = "";
    }

    if (emptyEl) emptyEl.hidden = visibleCount > 0;
    if (resultCountEl) {
      var tmpl = resultCountEl.getAttribute("data-template") ||
        (window.WORKSHOP_EXPLORER_I18N && window.WORKSHOP_EXPLORER_I18N.count) ||
        "{n} workshops";
      resultCountEl.textContent = tmpl.replace("{n}", visibleCount);
    }

    writeHash();
  }

  // Wire events.
  chipGroups.forEach(function (group) {
    var dim = group.getAttribute("data-dimension");
    group.addEventListener("click", function (ev) {
      var chip = ev.target.closest(".we-chip");
      if (!chip) return;
      var v = chip.getAttribute("data-value");
      var set = state[dim];
      if (set.has(v)) set.delete(v);
      else set.add(v);
      syncControlsFromState();
      render();
    });
  });

  var searchDebounce = null;
  searchInput.addEventListener("input", function () {
    clearTimeout(searchDebounce);
    var v = searchInput.value;
    searchDebounce = setTimeout(function () {
      state.q = v.trim();
      render();
    }, 120);
  });

  groupSelect.addEventListener("change", function () {
    state.group = groupSelect.value;
    render();
  });

  clearBtn.addEventListener("click", function () {
    state.difficulties.clear();
    state.language.clear();
    state.topics.clear();
    state.q = "";
    state.group = "none";
    syncControlsFromState();
    render();
  });

  // Init.
  parseHash();
  syncControlsFromState();
  render();

  // Collapsible filter body.
  (function setupToggle() {
    var toggle = filters.querySelector("#we-toggle");
    var body = filters.querySelector("#we-body");
    if (!toggle || !body) return;
    var STORAGE_KEY = "workshopExplorer.collapsed";
    function setCollapsed(collapsed, persist) {
      filters.classList.toggle("is-collapsed", collapsed);
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      body.hidden = collapsed;
      if (persist) {
        try {
          if (collapsed) localStorage.setItem(STORAGE_KEY, "1");
          else localStorage.removeItem(STORAGE_KEY);
        } catch (_e) { /* ignore */ }
      }
    }
    var initialCollapsed = false;
    try {
      initialCollapsed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch (_e) { /* ignore */ }
    // On narrow viewports, default to collapsed if no explicit preference.
    if (
      localStorage.getItem &&
      localStorage.getItem(STORAGE_KEY) === null &&
      window.matchMedia &&
      window.matchMedia("(max-width: 720px)").matches
    ) {
      initialCollapsed = true;
    }
    setCollapsed(initialCollapsed, false);
    toggle.addEventListener("click", function () {
      var nowCollapsed = toggle.getAttribute("aria-expanded") === "true";
      setCollapsed(nowCollapsed, true);
    });
  })();
})();
