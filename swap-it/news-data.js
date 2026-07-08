const newsData = {
    // 預設語言 (zh)
    zh: {
        faq: [],
        announcements: [
            {
                date: "2026-07-08",
                tag: "重大更新",
                title: "🎉 1.9.0 大改版：多效期庫存、自訂欄位與更聰明的多份使用管理",
                content: "這次 1.9.0 帶來了許多更貼近真實生活情境的功能升級與介面翻新！<br><br>✨ <b>批次庫存效期管理</b><br>買了不同批次的相同物品？現在可以為個別庫存設定不同的有效期限了！系統會幫你分批管理庫存，並優先提醒快過期的那一份。<br><br>✨ <b>新增自訂欄位</b><br>除了內建的屬性，現在你可以為物品新增專屬的自訂欄位（包含文字與日期選擇器），像是記錄美妝保養品的「開封後保存期限 (PAO)」變得更容易了。<br><br>✨ <b>支援同時使用多份物品</b><br>所有物品現在都支援同時拆開多份來用！卡片上會清楚並列顯示每一份的使用狀態與剩餘庫存，用完一份直接記錄，再也不會互相干擾。<br><br>✨ <b>介面與體驗全面升級</b><br>我們重新梳理了物品表單與詳情頁的排版，物況卡片也換上了更直覺的純倒數設計。此外，我們也修正了 Android 版本桌面小工具偶發消失與通知的問題，讓日常操作更順暢穩定。"
            }
        ],
        roadmap: [
            {
                status: "已完成",
                items: [
                    "批次庫存效期管理（支援不同有效期限）",
                    "自訂物品資訊欄位（支援文字與日期）",
                    "支援同時使用多份物品（涵蓋所有類型）",
                    "物品狀態卡與詳情頁排版大更新"
                ]
            }
        ],
        bugs: [
            { status: "已修復", text: "修復 Android 桌面小工具設定後偶爾消失的問題" },
            { status: "已修復", text: "修復 Android 版本通知權限無法正常開啟，以及無法收到推播提醒的問題" },
            { status: "已修復", text: "修復 1.8.0 升級後部分列表顯示不一致的狀況" },
            { status: "已修復", text: "修復繁體中文語系 (zh-Hant) 偶發顯示英文的問題" },
            { status: "已修復", text: "修復單位重複判斷的錯誤" }
        ]
    },
    // 英文 (en)
    en: {
        faq: [],
        announcements: [
            {
                date: "2026-07-08",
                tag: "Major Update",
                title: "🎉 1.9.0 Major Update: Batch Expiry, Custom Fields, and Smarter Multi-Instance Usage",
                content: "The 1.9.0 update brings practical features and interface upgrades tailored to your daily life!<br><br>✨ <b>Batch Expiry Management</b><br>Bought the same item from different batches? You can now set distinct expiry dates for each batch! The system will manage them separately and remind you of the one expiring first.<br><br>✨ <b>Custom Fields</b><br>In addition to built-in attributes, you can now add custom fields (including text and date pickers) to items. Tracking the Period After Opening (PAO) for your beauty products has never been easier.<br><br>✨ <b>Simultaneous Multi-Instance Usage</b><br>All items now support having multiple open instances at the same time! The cards clearly display the usage status and remaining stock for each instance side-by-side.<br><br>✨ <b>UI & UX Upgrades</b><br>We've redesigned the layout of the item forms and detail pages, and updated the status cards with a more intuitive countdown design. We've also fixed issues with the Android home screen widget and notifications for a smoother experience."
            }
        ],
        roadmap: [
            {
                status: "Done",
                items: [
                    "Batch expiry management (supports different expiry dates)",
                    "Custom item fields (supports text and dates)",
                    "Simultaneous multi-instance usage for all item types",
                    "Major layout updates for item status cards and detail pages"
                ]
            }
        ],
        bugs: [
            { status: "Fixed", text: "Fixed an issue where the Android home screen widget occasionally disappeared after setup" },
            { status: "Fixed", text: "Fixed an issue on Android where notification permissions could not be enabled properly and push notifications were not received" },
            { status: "Fixed", text: "Fixed layout inconsistencies in some lists after upgrading from 1.8.0" },
            { status: "Fixed", text: "Fixed an occasional issue where English text would appear in the Traditional Chinese (zh-Hant) locale" },
            { status: "Fixed", text: "Fixed a validation error related to duplicate units" }
        ]
    },
    // 日文 (ja)
    ja: {
        faq: [],
        announcements: [
            {
                date: "2026-07-08",
                tag: "大型アップデート",
                title: "🎉 1.9.0 大型アップデート：バッチごとの期限管理、カスタムフィールド、よりスマートな複数使用管理",
                content: "1.9.0アップデートでは、実際の生活シーンにさらに寄り添った機能のアップグレードとインターフェースの刷新をお届けします！<br><br>✨ <b>バッチごとの期限管理</b><br>違うバッチの同じアイテムを買いましたか？それぞれの在庫に異なる有効期限を設定できるようになりました！システムがバッチごとに管理し、期限が近いものを優先してお知らせします。<br><br>✨ <b>カスタムフィールドの追加</b><br>組み込みの属性に加えて、専用のカスタムフィールド（テキストおよび日付選択を含む）を追加できるようになりました。コスメの「開封後使用期限（PAO）」の記録などがもっと簡単になります。<br><br>✨ <b>複数アイテムの同時使用をサポート</b><br>すべてのアイテムで、複数のパッケージを同時に開けて使用できるようになりました！カードにはそれぞれの使用状況と残量が並んで明確に表示されます。<br><br>✨ <b>インターフェースと体験の全面アップグレード</b><br>アイテムのフォームや詳細ページのレイアウトを見直し、ステータスカードもより直感的なカウントダウンデザインに変更しました。さらに、Android版のホーム画面ウィジェットが消える問題や通知の問題も修正され、よりスムーズに操作できるようになりました。"
            }
        ],
        roadmap: [
            {
                status: "完了",
                items: [
                    "バッチごとの有効期限管理（異なる有効期限をサポート）",
                    "カスタムアイテムフィールド（テキストと日付をサポート）",
                    "すべてのアイテムタイプでの複数同時使用のサポート",
                    "アイテムのステータスカードと詳細ページのレイアウトの大幅更新"
                ]
            }
        ],
        bugs: [
            { status: "修正済み", text: "Androidのホーム画面ウィジェットが設定後に時々消える問題を修正" },
            { status: "修正済み", text: "Androidで通知権限が正常に有効にできず、プッシュ通知が届かない問題を修正" },
            { status: "修正済み", text: "1.8.0からのアップグレード後、一部のリストの表示が一致しない問題を修正" },
            { status: "修正済み", text: "繁体字中国語（zh-Hant）のロケールで時々英語が表示される問題を修正" },
            { status: "修正済み", text: "単位の重複判定に関するエラーを修正" }
        ]
    },
    // 韓文 (ko)
    ko: {
        faq: [],
        announcements: [
            {
                date: "2026-07-08",
                tag: "대규모 업데이트",
                title: "🎉 1.9.0 대규모 업데이트: 재고별 유통기한, 사용자 정의 필드 및 더 스마트한 여러 개 사용 관리",
                content: "이번 1.9.0 업데이트에서는 실제 생활에 더욱 밀접한 기능 업그레이드와 인터페이스 개편을 선보입니다!<br><br>✨ <b>재고별 유통기한 관리</b><br>같은 물품을 다른 배치로 구매하셨나요? 이제 개별 재고에 다른 유통기한을 설정할 수 있습니다! 시스템이 재고를 나누어 관리하고 유통기한이 가장 가까운 것을 우선적으로 알려줍니다.<br><br>✨ <b>사용자 정의 필드 추가</b><br>기본 속성 외에도 이제 물품에 전용 사용자 정의 필드(텍스트 및 날짜 선택기 포함)를 추가할 수 있습니다. 뷰티 제품의 '개봉 후 사용 기간(PAO)'을 기록하는 것이 더욱 쉬워졌습니다.<br><br>✨ <b>여러 개 동시 사용 지원</b><br>모든 물품은 이제 여러 개를 동시에 개봉하여 사용하는 것을 지원합니다! 카드에 각 물품의 사용 상태와 남은 재고가 나란히 명확하게 표시됩니다.<br><br>✨ <b>인터페이스 및 경험 전면 업그레이드</b><br>물품 양식과 상세 페이지의 레이아웃을 재정비하고, 상태 카드도 더 직관적인 카운트다운 디자인으로 변경했습니다. 또한, Android 버전에서 홈 화면 위젯이 사라지거나 알림이 오지 않던 문제를 수정하여 더욱 원활하고 안정적인 사용이 가능해졌습니다."
            }
        ],
        roadmap: [
            {
                status: "완료",
                items: [
                    "재고별 유통기한 관리 (다양한 유통기한 지원)",
                    "사용자 정의 물품 필드 (텍스트 및 날짜 지원)",
                    "모든 물품 유형의 여러 개 동시 사용 지원",
                    "물품 상태 카드 및 상세 페이지 레이아웃 대폭 업데이트"
                ]
            }
        ],
        bugs: [
            { status: "수정됨", text: "Android 홈 화면 위젯이 설정 후 간헐적으로 사라지던 문제를 수정" },
            { status: "수정됨", text: "Android에서 알림 권한이 정상적으로 켜지지 않고 푸시 알림을 받을 수 없던 문제를 수정" },
            { status: "수정됨", text: "1.8.0 업그레이드 후 일부 목록 표시가 일치하지 않던 현상을 수정" },
            { status: "수정됨", text: "번체 중국어(zh-Hant) 언어 설정에서 간헐적으로 영어가 표시되던 문제를 수정" },
            { status: "수정됨", text: "단위 중복 판단 관련 오류를 수정" }
        ]
    }
};

// 介面翻譯字串 (UI translations)
const uiTranslations = {
    zh: {
        title: "幫助與動態 - 該換了吧 Swap It",
        logoTitle: "該換了吧 Swap It",
        pageTitle: "幫助與動態",
        pageSubtitle: "快速尋找解答，或追蹤我們的最新消息與開發計畫",
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
        title: "Help & Updates - Swap It",
        logoTitle: "Swap It",
        pageTitle: "Help & Updates",
        pageSubtitle: "Find answers quickly, or track our latest news and roadmap",
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
        title: "ヘルプと最新情報 - Swap It",
        logoTitle: "Swap It",
        pageTitle: "ヘルプと最新情報",
        pageSubtitle: "解決策を素早く見つけるか、最新ニュースと開発計画を確認します",
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
        title: "도움말 및 최신 업데이트 - Swap It",
        logoTitle: "Swap 기",
        pageTitle: "도움말 및 최신 업데이트",
        pageSubtitle: "빠르게 답변을 찾거나 최신 뉴스 및 개발 계획을 확인하세요",
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
