# MailFlow Compliance Site Deployment & Demo Guide

此資料夾包含了 Google OAuth 驗證所需的網站內容：
1.  **首頁**: `index.html` (包含 App 介紹)
2.  **隱私權政策**: `privacy.html`
3.  **服務條款**: `terms.html`

## 步驟 1: 部署網站 (變為公開連結)

Google 驗證要求這些文件必須在一個**公開的網域**上。最簡單的方法是使用 **GitHub Pages** (如果您使用 GitHub)：

1.  確保這些文件推送到您的 GitHub Repository。
2.  進入 Repo Settings -> Pages。
3.  Source 選擇 `main` branch (或您存放這些文件的 branch)。
4.  Folder 選擇 `/mailflow/compliance_site` (如果 GitHub Pages 只允許 root 或 docs，您可能需要將這些文件搬到 `/docs` 資料夾)。
5.  保存後，您會獲得一個網址 (例如 `https://username.github.io/repo-name/`)。

您的隱私權政策連結將會是: `https://.../privacy.html`。
請將此連結填入 Google Cloud Console 的 OAuth 同意畫面設定中。

*如果不使用 GitHub Pages，您也可以上傳到任何靜態網頁託管服務 (Netlify, Vercel, Firebase Hosting 等)。*

## 步驟 2: 錄製驗證影片 (Demo Video)

為了通過驗證，您需要錄製一段 YouTube 影片 (設為不公開) 展示 App 如何使用權限。

**錄製腳本:**

1.  **展示 App 資訊**:
    *   在影片開始，展示 App 的名稱。如果是 Web App，清楚顯示網址列。
    *   如果是 Mobile App (模擬器或實機)，展示 App Icon 和啟動畫面。

2.  **觸發登入**:
    *   點擊 App 內的 "Sign in with Google" 按鈕。

3.  **展示 OAuth 同意畫面 (關鍵!)**:
    *   當 Google 登入視窗彈出時，**暫停一下**或放慢動作。
    *   清楚展示視窗上的 App 名稱和請求的權限列表 (必須包含 `Read, compose, send, and permanently delete all your email from Gmail`).
    *   點擊 "Allow" (允許)。

4.  **展示功能**:
    *   登入成功後，展示 App 讀取了郵件列表 (證明用了 Read 權限)。
    *   展示一個修改操作，例如：將一封郵件歸檔 (Archive) 或標記星號 (Star)，或刪除一封測試郵件。這證明了您為什麼需要 `modify` 權限。

5.  **結束**:
    *   展示操作成功反饋。

**注意**: 影片中不要錄製到真實的敏感個人數據（建議使用一個測試用的 Gmail 帳號）。

## 步驟 3: 填寫資料

打開 `privacy.html` 和 `terms.html`，搜尋 `[INSERT YOUR CONTACT EMAIL HERE]` 並替換成您真實的聯絡 email。
