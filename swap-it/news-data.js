const newsData = {
    // 預設語言 (zh)
    zh: {
        faq: [
            {
                category: "基本操作",
                questions: [
                    {
                        q: "「更換週期」和「效期」有什麼不同？",
                        a: "更換週期是你自己決定的汰換節奏，例如牙刷用三個月就換；效期是商品本身的保存期限，例如保養品的到期日。兩者可以同時設定，App 會分別提醒：週期到了顯示「已逾期」，效期過了顯示「已過期」。"
                    },
                    {
                        q: "同一樣東西囤了好幾份，要怎麼記？",
                        a: "在物品裡把庫存數量加上去就可以。你可以設定「安全備量」，庫存低於這個數字時 App 會提醒你補貨。如果多份會同時開來用（例如兩罐洗衣精一起用），1.9.0 之後可以讓每一份各自記錄狀態和效期。"
                    },
                    {
                        q: "桌面小工具怎麼加？",
                        a: "iOS：長按桌面空白處，點左上角「＋」，搜尋「該換了吧」後選擇尺寸加入。<br>Android：長按桌面空白處，選「小工具」，找到「該換了吧」拖到桌面。Android 使用者請更新到 1.9.0 以上，舊版有小工具偶發消失的問題。"
                    }
                ]
            },
            {
                category: "備份與資料",
                questions: [
                    {
                        q: "換手機資料會不見嗎？",
                        a: "資料存在手機本機。換手機前先在設定裡執行「雲端備份」（Pro 版功能，需登入帳號），新手機登入同一個帳號後用「還原」把資料拿回來。請注意這是手動備份，不是即時同步——換機前記得先備份一次最新狀態。照片部分以貼紙顯示圖為主，原始大圖不保證完整還原。"
                    },
                    {
                        q: "為什麼我找不到登入／雲端備份的選項？",
                        a: "登入與雲端備份是 Pro 版功能，需要在已購買 Pro 的裝置上才能使用備份與還原。免費版的資料只存在手機本機。"
                    },
                    {
                        q: "你們看得到我記錄的物品內容嗎？",
                        a: "看不到。物品名稱、照片、備註、存放位置都只存在你的手機裡；就算使用雲端備份，內容也只用於你自己的還原。我們的匿名統計不包含任何這類內容。"
                    }
                ]
            },
            {
                category: "通知與提醒",
                questions: [
                    {
                        q: "收不到提醒通知怎麼辦？",
                        a: "先到系統設定確認「該換了吧」的通知權限有開啟。Android 使用者請更新到 1.9.0 以上，舊版有通知權限無法正常開啟的問題。若還是收不到，可以檢查系統的省電模式是否限制了 App 背景運作。"
                    }
                ]
            },
            {
                category: "購買與方案",
                questions: [
                    {
                        q: "免費版和 Pro 差在哪？",
                        a: "免費版可以使用核心功能，但物品數量、存放位置、分類等都有數量限制。Pro 解鎖這些上限，並開放雲端備份等完整功能。"
                    },
                    {
                        q: "換手機後 Pro 資格怎麼拿回來？",
                        a: "用購買時的同一個 Apple ID／Google 帳號登入商店，到 App 設定裡點「恢復購買」即可，不需要重新付費。"
                    }
                ]
            }
        ],
        announcements: [
            {
                date: "2026-07-11",
                tag: "新版本",
                version: "1.9.0",
                platforms: ["ios", "android"],
                title: "🚀 1.9.0 正式推出：批次庫存效期、自訂欄位與更聰明的多份使用管理",
                content: "這次 1.9.0 帶來更貼近日常使用情境的功能升級！<br><br>✨ 批次庫存效期：不同批次的備品可各自設定效期<br>✨ 開封後保質期：設定開封後可用天數，效期隨之計算<br>✨ 多份同時使用：並列顯示各份的狀態和效期<br>✨ 自訂欄位：可以為物品加上更多自訂描述<br>✨ 語言切換：App 內可指定顯示語言<br>✨ 提醒設定：自訂效期提醒的提前天數，Pro 用戶可個別設定<br>✨ 用量物品重新設計：現在把使用量跟備品數量分開算，備品用完才會自動換上新的一份<br>✨ 調整使用時間：用量物品紀錄時可以調整使用時間<br>✨ 介面優化：畫面更簡潔，狀態一眼就懂<br><br>此外也包含多項細節優化，提升整體穩定性。",
                images: [
                    { src: "assets/news/1.9.0/zh-TW/item-detail-full-info.webp", caption: "有效期限與開封保質期：目前物品的使用期限與 PAO 都會分別提醒，剩餘天數一眼看懂。" },
                    { src: "assets/news/1.9.0/zh-TW/item-detail-custom-fields.webp", caption: "完整資訊：完整手機畫面保留產品名、廠牌、型號、專用耗材型號、序號與購買通路等細節。" },
                    { src: "assets/news/1.9.0/zh-TW/language-menu-open.webp", caption: "自訂語言：在設定中直接選擇跟隨系統、繁中、English、日本語或 한국어。" }
                ]
            },
            {
                date: "2026-06-15",
                tag: "公告",
                title: "✨ 歡迎使用「該換了吧」",
                content: "感謝你下載並使用我們的 App！我們持續在改善使用體驗，如有任何建議歡迎隨時回饋。"
            }
        ],
        roadmap: [
            {
                statusCode: "doing",
                status: "開發中",
                items: [
                    "家庭共用空間：與家人共用物品清單與庫存，誰補了貨全家都知道"
                ]
            },
            {
                statusCode: "done",
                status: "已完成",
                items: [
                    "支援管理有效期限與開封保質期 (PAO)",
                    "用量物品紀錄時可以調整使用時間",
                    "App 內可直接切換顯示語言"
                ]
            }
        ],
        bugs: [
            { statusCode: "done", status: "已修復", text: "修復分類標籤無法調整的問題", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "已修復", text: "修復繁體中文語系 (zh-Hant) 偶發顯示英文的問題", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "已修復", text: "修復單位重複判斷的錯誤", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "已修復", text: "修復 Android 桌面小工具設定後偶爾消失的問題", version: "1.8.1", platforms: ["android"] },
            { statusCode: "done", status: "已修復", text: "修復 Android 版本通知權限無法正常開啟，以及無法收到推播提醒的問題", version: "1.8.1", platforms: ["android"] }
        ]
    },
    // 英文 (en)
    en: {
        faq: [
            {
                category: "Getting Started",
                questions: [
                    {
                        q: "What's the difference between the replacement cycle and the expiry date?",
                        a: "The replacement cycle is a rhythm you set yourself — for example, swapping your toothbrush every three months. The expiry date is the product's own shelf life, like a skincare product's best-before date. You can set both, and the app reminds you about each separately."
                    },
                    {
                        q: "How do I track multiples of the same item?",
                        a: "Just add them to the item's stock count. You can set a safety stock level, and the app will remind you to restock when you fall below it. If you use several at the same time (say, two bottles of detergent), from 1.9.0 each one can track its own status and expiry."
                    },
                    {
                        q: "How do I add the home screen widget?",
                        a: "iOS: long-press an empty spot on the home screen, tap \"+\" in the top corner, search for \"Swap It.\" and pick a size.<br>Android: long-press the home screen, choose Widgets, and drag \"Swap It.\" onto the screen. On Android, please update to 1.9.0 or later — older versions had an issue where the widget could disappear."
                    }
                ]
            },
            {
                category: "Backup & Data",
                questions: [
                    {
                        q: "Will I lose my data when I switch phones?",
                        a: "Your data lives on your phone. Before switching, run a Cloud Backup in Settings (a Pro feature — sign-in required), then sign in with the same account on the new phone and restore. Note this is a manual backup, not real-time sync — back up right before you switch. For photos, sticker display images are backed up first; original full-size photos aren't guaranteed to be fully restored."
                    },
                    {
                        q: "Why can't I find the sign-in / cloud backup option?",
                        a: "Sign-in and cloud backup are Pro features. Backup and restore are only available on a device with an active Pro purchase. On the free plan, data is stored only on your phone."
                    },
                    {
                        q: "Can you see what I record in the app?",
                        a: "No. Item names, photos, notes, and storage locations stay on your phone; even with cloud backup, the content is used only for your own restore. Our anonymous statistics never include any of it."
                    }
                ]
            },
            {
                category: "Notifications & Reminders",
                questions: [
                    {
                        q: "I'm not getting reminder notifications — what should I check?",
                        a: "First, make sure notifications are enabled for Swap It. in system settings. On Android, update to 1.9.0 or later — older versions had a bug where notification permission couldn't be enabled. If it still doesn't work, check whether battery saver is restricting the app in the background."
                    }
                ]
            },
            {
                category: "Purchases & Plans",
                questions: [
                    {
                        q: "What's the difference between Free and Pro?",
                        a: "The free plan covers the core features, with limits on the number of items, storage locations, categories, and so on. Pro lifts those limits and unlocks the full feature set, including cloud backup."
                    },
                    {
                        q: "How do I get Pro back on a new phone?",
                        a: "Sign in to the store with the same Apple ID / Google account you purchased with, then tap \"Restore Purchases\" in the app's settings. No need to pay again."
                    }
                ]
            }
        ],
        announcements: [
            {
                date: "2026-07-11",
                tag: "New Version",
                version: "1.9.0",
                platforms: ["ios", "android"],
                title: "🚀 1.9.0 Is Here: Batch Expiry, Custom Fields, and Smarter Multi-Instance Usage",
                content: "1.9.0 brings feature upgrades that fit your everyday routine!<br><br>✨ Batch Expiry: set an expiry date for each stock batch<br>✨ Period After Opening: expiry follows the date you open it<br>✨ Multiple In Use: see each one's status and expiry side by side<br>✨ Custom Fields: add your own details to items<br>✨ Language Switch: choose the app language in Settings<br>✨ Reminders: set days ahead to be reminded (Pro can set per item)<br>✨ Usage Items Redesigned: usage amount and spare stock are now tracked separately, with a new spare swapped in once the current one runs out<br>✨ Adjust Usage Time: you can adjust the usage time when logging usage items<br>✨ UI Upgrade: cleaner screens, status at a glance<br><br>We've also improved overall stability for a smoother experience.",
                images: [
                    { src: "assets/news/1.9.0/en/item-detail-full-info.webp", caption: "Expiry & Period After Opening: Track the item's expiry and PAO separately, with the days remaining clearly shown for each." },
                    { src: "assets/news/1.9.0/en/item-detail-custom-fields.webp", caption: "Complete Details: The full phone view keeps product name, brand, model, consumable model, serial number, and purchase channel close at hand." },
                    { src: "assets/news/1.9.0/en/language-menu-open.webp", caption: "Language Preferences: Choose Follow System, Traditional Chinese, English, Japanese, or Korean directly in Settings." }
                ]
            },
            {
                date: "2026-06-15",
                tag: "Notice",
                title: "✨ Welcome to Swap It.",
                content: "Thank you for downloading our app! We're constantly improving the experience — feedback is always welcome."
            }
        ],
        roadmap: [
            {
                statusCode: "doing",
                status: "In Progress",
                items: [
                    "Family Space: share your item list and stock with family — when someone restocks, everyone knows"
                ]
            },
            {
                statusCode: "done",
                status: "Done",
                items: [
                    "Support for Expiry Date and Period After Opening (PAO)",
                    "Adjust usage time when logging usage items",
                    "In-app language switch settings"
                ]
            }
        ],
        bugs: [
            { statusCode: "done", status: "Fixed", text: "Fixed an issue where category tags could not be adjusted", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "Fixed", text: "Fixed an occasional issue where English text would appear in the Traditional Chinese (zh-Hant) locale", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "Fixed", text: "Fixed a validation error related to duplicate units", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "Fixed", text: "Fixed an issue where the Android home screen widget occasionally disappeared after setup", version: "1.8.1", platforms: ["android"] },
            { statusCode: "done", status: "Fixed", text: "Fixed an issue on Android where notification permissions could not be enabled properly and push notifications were not received", version: "1.8.1", platforms: ["android"] }
        ]
    },
    // 日文 (ja)
    ja: {
        faq: [
            {
                category: "基本操作",
                questions: [
                    {
                        q: "「交換サイクル」と「使用期限」の違いは？",
                        a: "交換サイクルは自分で決める交換のリズムです（例：歯ブラシは3か月ごとに交換）。使用期限は商品そのものの期限です（例：スキンケア用品の期限）。両方設定でき、アプリはそれぞれ別々にリマインドします。"
                    },
                    {
                        q: "同じものを複数ストックしている場合はどう記録する？",
                        a: "アイテムの在庫数を増やすだけでOKです。「安全在庫」を設定しておくと、在庫がその数を下回ったときに補充をお知らせします。複数を同時に使う場合（例：洗剤を2本並行して使う）は、1.9.0以降それぞれの状態と期限を個別に記録できます。"
                    },
                    {
                        q: "ホーム画面ウィジェットの追加方法は？",
                        a: "iOS：ホーム画面を長押し→左上の「＋」→「Swap It.」を検索してサイズを選択。<br>Android：ホーム画面を長押し→ウィジェット→「Swap It.」をドラッグ。Androidは1.9.0以降への更新をお願いします（旧バージョンにはウィジェットが消えることがある問題がありました）。"
                    }
                ]
            },
            {
                category: "バックアップとデータ",
                questions: [
                    {
                        q: "機種変更でデータは消えますか？",
                        a: "データは端末内に保存されています。機種変更の前に設定から「クラウドバックアップ」（Pro機能・ログインが必要）を実行し、新しい端末で同じアカウントにログインして復元してください。リアルタイム同期ではなく手動バックアップなので、変更直前に最新の状態をバックアップするのがおすすめです。写真はステッカー表示用の画像が中心で、元の大きな画像の完全な復元は保証されません。"
                    },
                    {
                        q: "ログイン／クラウドバックアップの項目が見つかりません",
                        a: "ログインとクラウドバックアップはPro版の機能です。Proを購入済みの端末でのみバックアップ・復元が利用できます。無料版のデータは端末内のみに保存されます。"
                    },
                    {
                        q: "記録した内容は運営側から見えますか？",
                        a: "見えません。アイテム名・写真・メモ・保管場所はすべて端末内に保存され、クラウドバックアップを使ってもご自身の復元にのみ使われます。匿名の統計にこれらの内容が含まれることはありません。"
                    }
                ]
            },
            {
                category: "通知とリマインダー",
                questions: [
                    {
                        q: "リマインダー通知が届きません",
                        a: "まず端末の設定で「Swap It.」の通知権限がオンになっているか確認してください。Androidは1.9.0以降への更新をお願いします（旧バージョンには通知権限を有効にできない問題がありました）。それでも届かない場合は、省電力モードがアプリのバックグラウンド動作を制限していないか確認してください。"
                    }
                ]
            },
            {
                category: "購入とプラン",
                questions: [
                    {
                        q: "無料版とProの違いは？",
                        a: "無料版でも主要機能は使えますが、アイテム数・保管場所・カテゴリなどに数の上限があります。Proでは上限が解除され、クラウドバックアップを含む全機能が使えます。"
                    },
                    {
                        q: "機種変更後にProを引き継ぐには？",
                        a: "購入時と同じApple ID／Googleアカウントでストアにログインし、アプリの設定で「購入の復元」をタップしてください。再購入は不要です。"
                    }
                ]
            }
        ],
        announcements: [
            {
                date: "2026-07-11",
                tag: "新バージョン",
                version: "1.9.0",
                platforms: ["ios", "android"],
                title: "🚀 1.9.0 公開：バッチごとの期限管理、カスタムフィールド、よりスマートな複数使用管理",
                content: "1.9.0では、日常により寄り添った機能アップグレードをお届けします！<br><br>✨ バッチ期限管理：ストックを購入分ごとに分けて期限を設定<br>✨ 開封後の使用期限：開封日に合わせて期限を計算<br>✨ 複数同時使用：それぞれの状態と期限を並べて確認<br>✨ カスタム項目：自由な情報をアイテムに追加<br>✨ 言語切替：設定からアプリの表示言語を選択<br>✨ リマインダー設定：何日前に知らせるかを設定可能（Proならアイテムごとに）<br>✨ 使用量アイテムを刷新：使用量と予備の数を分けて管理し、使い切ったら自動で新しい予備に切り替わります<br>✨ 使用時間の調整：使用量アイテムを記録する際に使用時間を調整できるようになりました<br>✨ インターフェース刷新：デザインを整理し、状態がひと目でわかるように<br><br>さらに、全体的な安定性を向上し、より快適にご利用いただけます。",
                images: [
                    { src: "assets/news/1.9.0/ja/item-detail-full-info.webp", caption: "使用期限と開封後の使用期限：それぞれを個別に管理し、残り日数をひと目で確認できます。" },
                    { src: "assets/news/1.9.0/ja/item-detail-custom-fields.webp", caption: "詳しい情報：フル画面で製品名、メーカー、型番、専用消耗品の型番、シリアル番号、購入先まで確認できます。" },
                    { src: "assets/news/1.9.0/ja/language-menu-open.webp", caption: "表示言語：設定からシステムに合わせる、繁體中文、English、日本語、한국어を直接選べます。" }
                ]
            },
            {
                date: "2026-06-15",
                tag: "お知らせ",
                title: "✨ 「Swap It.」へようこそ",
                content: "アプリをダウンロードいただきありがとうございます！より良い体験を目指して改善を続けています。ご意見・ご要望はいつでもお寄せください。"
            }
        ],
        roadmap: [
            {
                statusCode: "doing",
                status: "開発中",
                items: [
                    "ファミリー共有スペース：家族でアイテムリストと在庫を共有。誰かが補充すればみんなに伝わります"
                ]
            },
            {
                statusCode: "done",
                status: "完了",
                items: [
                    "使用期限と開封後の使用期限 (PAO) の管理に対応",
                    "使用量アイテムを記録する際に使用時間を調整可能に",
                    "アプリ内での表示言語切り替え"
                ]
            }
        ],
        bugs: [
            { statusCode: "done", status: "修正済み", text: "カテゴリタグが調整できない問題を修正", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "修正済み", text: "繁体字中国語（zh-Hant）のロケールで時々英語が表示される問題を修正", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "修正済み", text: "単位の重複判定に関するエラーを修正", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "修正済み", text: "Androidのホーム画面ウィジェットが設定後に時々消える問題を修正", version: "1.8.1", platforms: ["android"] },
            { statusCode: "done", status: "修正済み", text: "Androidで通知権限が正常に有効にできず、プッシュ通知が届かない問題を修正", version: "1.8.1", platforms: ["android"] }
        ]
    },
    // 韓文 (ko)
    ko: {
        faq: [
            {
                category: "기본 사용법",
                questions: [
                    {
                        q: "'교체 주기'와 '유통기한'은 무엇이 다른가요?",
                        a: "교체 주기는 직접 정하는 교체 리듬입니다(예: 칫솔은 3개월마다 교체). 유통기한은 제품 자체의 기한입니다(예: 화장품 사용기한). 둘 다 설정할 수 있고, 앱이 각각 따로 알려드립니다."
                    },
                    {
                        q: "같은 물건을 여러 개 쟁여두면 어떻게 기록하나요?",
                        a: "물품의 재고 수량을 늘리면 됩니다. '안전 재고'를 설정해 두면 재고가 그 수치 아래로 내려갈 때 보충 알림을 받을 수 있어요. 여러 개를 동시에 사용하는 경우(예: 세제 두 통을 같이 사용), 1.9.0부터는 각각의 상태와 기한을 따로 기록할 수 있습니다."
                    },
                    {
                        q: "홈 화면 위젯은 어떻게 추가하나요?",
                        a: "iOS: 홈 화면을 길게 누르고 왼쪽 위 '+'를 눌러 'Swap It.'을 검색한 뒤 크기를 선택하세요.<br>Android: 홈 화면을 길게 누르고 '위젯'에서 'Swap It.'을 끌어다 놓으세요. Android는 1.9.0 이상으로 업데이트해 주세요(이전 버전에는 위젯이 사라지는 문제가 있었습니다)."
                    }
                ]
            },
            {
                category: "백업 및 데이터",
                questions: [
                    {
                        q: "휴대폰을 바꾸면 데이터가 사라지나요?",
                        a: "데이터는 휴대폰에 저장됩니다. 기기를 바꾸기 전에 설정에서 '클라우드 백업'(Pro 기능, 로그인 필요)을 실행하고, 새 기기에서 같은 계정으로 로그인해 복원하세요. 실시간 동기화가 아닌 수동 백업이므로 바꾸기 직전에 최신 상태를 백업해 두는 것이 좋습니다. 사진은 스티커 표시용 이미지 위주로 백업되며, 원본 큰 이미지의 완전한 복원은 보장되지 않습니다."
                    },
                    {
                        q: "로그인/클라우드 백업 메뉴가 보이지 않아요",
                        a: "로그인과 클라우드 백업은 Pro 기능입니다. Pro를 구매한 기기에서만 백업과 복원을 사용할 수 있습니다. 무료 버전의 데이터는 휴대폰에만 저장됩니다."
                    },
                    {
                        q: "제가 기록한 내용을 운영진이 볼 수 있나요?",
                        a: "볼 수 없습니다. 물품 이름, 사진, 메모, 보관 위치는 모두 휴대폰에만 저장되며, 클라우드 백업을 사용해도 본인의 복원에만 사용됩니다. 익명 통계에는 이런 내용이 포함되지 않습니다."
                    }
                ]
            },
            {
                category: "알림 및 리마인더",
                questions: [
                    {
                        q: "리마인더 알림이 오지 않아요",
                        a: "먼저 시스템 설정에서 'Swap It.'의 알림 권한이 켜져 있는지 확인하세요. Android는 1.9.0 이상으로 업데이트해 주세요(이전 버전에는 알림 권한을 켤 수 없는 문제가 있었습니다). 그래도 오지 않으면 절전 모드가 앱의 백그라운드 동작을 제한하고 있지 않은지 확인해 보세요."
                    }
                ]
            },
            {
                category: "구매 및 요금제",
                questions: [
                    {
                        q: "무료 버전과 Pro는 무엇이 다른가요?",
                        a: "무료 버전에서도 핵심 기능을 사용할 수 있지만 물품 수, 보관 위치, 카테고리 등에 수량 제한이 있습니다. Pro에서는 이런 제한이 해제되고 클라우드 백업을 포함한 전체 기능이 열립니다."
                    },
                    {
                        q: "휴대폰을 바꾼 후 Pro를 어떻게 복원하나요?",
                        a: "구매할 때 사용한 것과 같은 Apple ID/Google 계정으로 스토어에 로그인한 뒤, 앱 설정에서 '구매 복원'을 누르세요. 다시 결제할 필요가 없습니다."
                    }
                ]
            }
        ],
        announcements: [
            {
                date: "2026-07-11",
                tag: "새 버전",
                version: "1.9.0",
                platforms: ["ios", "android"],
                title: "🚀 1.9.0 출시: 재고별 유통기한, 사용자 정의 필드 및 더 스마트한 여러 개 사용 관리",
                content: "1.9.0는 일상에 더 밀접한 기능 업그레이드를 제공합니다!<br><br>✨ 재고별 유통기한: 재고를 구매분별로 나눠 각각 기한 설정<br>✨ 개봉 후 사용기한: 개봉일에 맞춰 기한 계산<br>✨ 여러 개 동시 사용: 각각의 상태와 기한을 나란히 확인<br>✨ 사용자 정의 필드: 물품에 자유롭게 정보 추가<br>✨ 언어 전환: 설정에서 앱 표시 언어 직접 선택<br>✨ 알림 설정: 며칠 전에 알릴지 설정 (Pro 사용자는 물품별 설정 가능)<br>✨ 사용량 아이템 재설계: 사용량과 여분 수량을 따로 계산하고, 다 쓰면 자동으로 새 여분으로 바뀝니다<br>✨ 사용 시간 조정: 사용량 아이템 기록 시 사용 시간을 조정할 수 있습니다<br>✨ 인터페이스 개편: 상태를 한눈에 확인할 수 있는 깔끔한 디자인<br><br>또한 전반적인 안정성을 개선하여 더욱 원활하게 이용하실 수 있습니다.",
                images: [
                    { src: "assets/news/1.9.0/ko/item-detail-full-info.webp", caption: "유통기한과 개봉 후 사용기한: 각각 따로 관리하고 남은 일수를 한눈에 확인할 수 있어요." },
                    { src: "assets/news/1.9.0/ko/item-detail-custom-fields.webp", caption: "상세 정보: 전체 휴대폰 화면에서 제품명, 브랜드, 모델, 전용 소모품 모델, 일련번호와 구매처까지 확인하세요." },
                    { src: "assets/news/1.9.0/ko/language-menu-open.webp", caption: "언어 설정: 설정에서 시스템 설정 따르기, 繁體中文, English, 日本語, 한국어를 바로 선택할 수 있어요." }
                ]
            },
            {
                date: "2026-06-15",
                tag: "공지",
                title: "✨ 'Swap It.'에 오신 것을 환영합니다",
                content: "앱을 다운로드해 주셔서 감사합니다! 더 나은 사용 경험을 위해 계속 개선하고 있습니다. 의견이 있으시면 언제든지 알려주세요."
            }
        ],
        roadmap: [
            {
                statusCode: "doing",
                status: "개발 중",
                items: [
                    "가족 공유 공간: 가족과 물품 목록·재고를 공유하고, 누가 보충했는지 모두가 알 수 있어요"
                ]
            },
            {
                statusCode: "done",
                status: "완료",
                items: [
                    "유통기한 및 개봉 후 사용기한(PAO) 관리 지원",
                    "사용량 아이템 기록 시 사용 시간 조정 가능",
                    "앱 내 표시 언어 전환 기능"
                ]
            }
        ],
        bugs: [
            { statusCode: "done", status: "수정됨", text: "카테고리 태그를 조정할 수 없던 문제 수정", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "수정됨", text: "번체 중국어(zh-Hant) 언어 설정에서 간헐적으로 영어가 표시되던 문제를 수정", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "수정됨", text: "단위 중복 판단 관련 오류를 수정", version: "1.9.0", platforms: ["ios", "android"] },
            { statusCode: "done", status: "수정됨", text: "Android 홈 화면 위젯이 설정 후 간헐적으로 사라지던 문제를 수정", version: "1.8.1", platforms: ["android"] },
            { statusCode: "done", status: "수정됨", text: "Android에서 알림 권한이 정상적으로 켜지지 않고 푸시 알림을 받을 수 없던 문제를 수정", version: "1.8.1", platforms: ["android"] }
        ]
    }
};

// 介面翻譯字串 (UI translations)
const uiTranslations = {
    zh: {
        title: "最新動態 - 該換了吧 Swap It.",
        logoTitle: "該換了吧 Swap It.",
        pageTitle: "最新動態",
        pageSubtitle: "追蹤我們的最新消息與開發計畫",
        tabFaq: "常見問題",
        tabAnnouncements: "最新公告",
        tabRoadmap: "開發計畫",
        tabBugs: "已知問題",
        searchPlaceholder: "搜尋問題或關鍵字...",
        noFaqResults: "找不到相關的問題，請嘗試其他關鍵字",
        noFaqData: "目前還沒有建立常見問題",
        noAnnouncementsData: "目前沒有新公告",
        noRoadmapData: "目前沒有公開的開發計畫",
        noBugsData: "目前沒有已知的問題，系統一切正常！"
    },
    en: {
        title: "News & Updates - Swap It.",
        logoTitle: "Swap It.",
        pageTitle: "News & Updates",
        pageSubtitle: "Track our latest news and roadmap",
        tabFaq: "FAQ",
        tabAnnouncements: "Announcements",
        tabRoadmap: "Roadmap",
        tabBugs: "Known Issues",
        searchPlaceholder: "Search questions or keywords...",
        noFaqResults: "No relevant questions found. Please try other keywords.",
        noFaqData: "No FAQs added yet.",
        noAnnouncementsData: "No new announcements.",
        noRoadmapData: "No public roadmap available.",
        noBugsData: "No known issues. Everything is running smoothly!"
    },
    ja: {
        title: "最新情報 - Swap It.",
        logoTitle: "Swap It.",
        pageTitle: "最新情報",
        pageSubtitle: "最新ニュースと開発計画を確認します",
        tabFaq: "よくある質問",
        tabAnnouncements: "お知らせ",
        tabRoadmap: "開発計画",
        tabBugs: "既知の問題",
        searchPlaceholder: "質問やキーワードを検索...",
        noFaqResults: "関連する質問が見つかりませんでした。別のキーワードをお試しください。",
        noFaqData: "まだよくある質問は追加されていません。",
        noAnnouncementsData: "新しいお知らせはありません。",
        noRoadmapData: "公開されている開発計画はありません。",
        noBugsData: "現在、既知の問題はありません。システムは正常に稼働しています！"
    },
    ko: {
        title: "최신 업데이트 - Swap It.",
        logoTitle: "Swap It.",
        pageTitle: "최신 업데이트",
        pageSubtitle: "최신 뉴스 및 개발 계획을 확인하세요",
        tabFaq: "자주 묻는 질문",
        tabAnnouncements: "공지사항",
        tabRoadmap: "개발 계획",
        tabBugs: "알려진 문제",
        searchPlaceholder: "질문이나 키워드 검색...",
        noFaqResults: "관련 질문을 찾을 수 없습니다. 다른 키워드를 시도해 보세요.",
        noFaqData: "아직 등록된 자주 묻는 질문이 없습니다.",
        noAnnouncementsData: "새로운 공지사항이 없습니다.",
        noRoadmapData: "공개된 개발 계획이 없습니다.",
        noBugsData: "현재 알려진 문제가 없습니다. 시스템이 정상적으로 작동 중입니다!"
    }
};
