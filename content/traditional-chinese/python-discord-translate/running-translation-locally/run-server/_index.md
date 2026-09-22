---
title: "在本地運行 LibreTranslate"
draft: false
weight: 1
---

Nuvi 想要快速且私密的翻譯，因此你將在您的機器上運行翻譯“核心”。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 說：</strong> 本地化操作可以避免網絡延遲，並為練習項目提供更好的隱私支持。
{{< /alert >}}

## 1. 添加到 requirements.txt
打開您專案的 `requirements.txt` 文件，並新增（或確認存在以下行）：
```text
libretranslate
requests
```
儲存該檔案。

### 使用 VS Code 終端安裝
要打開終端，您可以：
- 使用選單：View → Terminal（檢視→終端）
- 或使用快捷鍵：`Ctrl+``（反引號鍵，通常在 Tab 上方）。在 macOS 上使用 `Cmd+``。
- 或點擊終端標籤或上方面板區域的加號 (+) 圖示。

1. 確保您選擇了虛擬環境（在底部狀態欄查看 `.venv` 字樣）。如果未選擇，請選擇它。
2. 在 VS Code 中打開新的終端（``Ctrl+` ``）。
3. 執行：
```pwsh
pip install -r requirements.txt
```
4. 等待安裝完成且無錯誤。
5. （可選）列出已安裝的套件以驗證：
```pwsh
pip show libretranslate
```

---

## 2. 在本地運行 LibreTranslate
在終端中啟動伺服器（測試時請保持此窗口打開）：

```bash
libretranslate --load-only en,es
```
這將啟動伺服器，並支援翻譯英語和西班牙語——這是 Nuvi 想要優先支援的兩種語言。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 需要更多語言？可以重新啟動伺服器而不加 `--load-only`，或新增語言代碼（例如：`--load-only en,es,fr`）。
{{< /alert >}}

首次運行時可能需要下載語言數據。這可能需要幾分鐘。

![LibreTranslate 啟動中](../../media/libretranslate-starting.png)

完成後，打開瀏覽器，訪問：
```
http://127.0.0.1:5000
```
您應該會看到一個簡單的頁面。要查看伺服器支援的語言，請訪問：
```
http://127.0.0.1:5000/languages
```

---

## 3. 疑難排解
| 問題 | 解決方案 |
|---------|-----|
| `No module named libretranslate` | 確保您的終端顯示 (.venv) 字樣，或者請求幫助。 |
| 伺服器啟動後立即退出 | 閱讀錯誤文字；重新安裝或再試一次。 |
| 無法打開 127.0.0.1:5000 | 確保伺服器仍在運行；檢查防火牆。 |
| 第一次翻譯緩慢 | 模型仍在加載中。稍等片刻。 |
| 輸出為空或奇怪 | 確保使用了 POST 並包含鍵：`q`, `source`, `target`, `format`。 |
| 埠已被佔用 | 使用不同埠：`python -m libretranslate --port 5001`，並更新 URL。 |

---