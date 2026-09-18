// A list (array) of Korean snacks. Each item is an object holding
// the emoji, name, pronunciation guide, a one-line fun fact,
// and a "did you know?" historical/cultural tidbit.
const snacks = [
  { emoji: "🌶️", name: "Tteokbokki",   pronounce: "(duck-BO-kee)",     fact: "Spicy chewy rice cakes in red pepper sauce.",                                       didYouKnow: "Originally a royal court dish in the 1800s, made with soy sauce, not red pepper." },
  { emoji: "🍙", name: "Kimbap",        pronounce: "(GIM-bap)",         fact: "Rice and veggies rolled in seaweed, perfect for a picnic.",                          didYouKnow: "Often packed for school field trips and picnics across Korea." },
  { emoji: "🥞", name: "Hotteok",       pronounce: "(ho-DDOK)",         fact: "Sweet pancakes filled with brown sugar and cinnamon.",                              didYouKnow: "Brought to Korea by Chinese merchants in the late 1800s." },
  { emoji: "🍧", name: "Bingsu",        pronounce: "(BING-soo)",        fact: "Shaved ice piled with fruit, red bean, and condensed milk.",                        didYouKnow: "Bingsu became popular in Korea during the Joseon era as a royal summer treat." },
  { emoji: "🍫", name: "Pepero",        pronounce: "(PEH-peh-roh)",     fact: "Crunchy chocolate-dipped sticks. Pepero Day is November 11!",                       didYouKnow: "Pepero Day (11/11) is one of Korea's biggest friendship holidays." },
  { emoji: "🍯", name: "Yakgwa",        pronounce: "(YAK-gwa)",         fact: "Honey-glazed flower-shaped cookies, a classic Korean dessert.",                     didYouKnow: "A traditional Joseon dynasty dessert served at weddings and royal ceremonies." },
  { emoji: "🍪", name: "Choco Pie",     pronounce: "(CHO-ko pie)",      fact: "Two soft cakes with marshmallow inside, dipped in chocolate.",                      didYouKnow: "Korean soldiers became fans in the 1970s, turning it into a national snack." },
  { emoji: "🐟", name: "Bungeoppang",   pronounce: "(BUNG-uh-PPANG)",   fact: "Fish-shaped bread filled with sweet red bean paste, a winter street food.",         didYouKnow: "First appeared in Korea in the 1930s, inspired by Japan's taiyaki." }
];

// Pick a random snack from the array.
function pickRandomSnack() {
  const index = Math.floor(Math.random() * snacks.length);
  return snacks[index];
}

// Find the parts of the page we want to update.
const emojiEl       = document.querySelector(".emoji");
const nameEl        = document.querySelector(".snack-name");
const pronounceEl   = document.querySelector(".snack-pronounce");
const factEl        = document.querySelector(".snack-fact");
const didYouKnowEl  = document.querySelector(".snack-did-you-know");
const button        = document.getElementById("pickBtn");

// Pick a snack, write it into the card, and play the pop animation.
function showSnack() {
  const snack = pickRandomSnack();
  emojiEl.textContent     = snack.emoji;
  nameEl.textContent      = snack.name;
  pronounceEl.textContent = snack.pronounce;
  factEl.textContent      = snack.fact;

  // Show the "Did you know?" callout. innerHTML lets us bold the label.
  didYouKnowEl.innerHTML = "<strong>Did you know?</strong> " + snack.didYouKnow;
  didYouKnowEl.hidden = false;

  // Restart the CSS pop animation by removing + re-adding the class.
  const card = document.getElementById("card");
  card.classList.remove("pop");
  void card.offsetWidth; // forces the browser to reflow before re-adding
  card.classList.add("pop");

  // After the first click, change the button to invite another pick.
  button.textContent = "Try another snack / 다른 간식 보기";
}

// Run showSnack() every time the button is clicked.
button.addEventListener("click", showSnack);
