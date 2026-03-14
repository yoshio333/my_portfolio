# サイトテキスト編集ドキュメント

**使い方**
- テキストを修正したら行頭の `[ ]` を `[x]` に変える
- 修正後に「流し込んでほしい」と伝えると、このファイルを読んでサイトに反映します
- ユーザーは、日本語版（JP）のみ修正をしますので、変更があった場合、ENを対応する英語に翻訳し、このテキスト上でも置き換え、サイトの内容も変更してください。
- サイトの修正完了後、`[x]` を `[ ]` に戻す

---

## 共通

- [ ] **名前（フル）** `lib/content.ts > name`
  - EN: `Yoshimasa Nishinobu　`
  - JP: `西信 好真 ポートフォリオ`

- [ ] **名前（短縮）** `lib/content.ts > nameShort` ← ヘッダーに使用
  - EN/JP: `Y. Nishinobu`

---

## ナビゲーション `Header.tsx`

- [ ] **メニュー1** `nav`
  - EN: `Mission`
  - JP: `ミッション`

- [ ] **メニュー2** `nav`
  - EN: `Focus Areas`
  - JP: `注力分野`

- [ ] **メニュー3** `nav`
  - EN: `Recent Projects`
  - JP: `最近のプロジェクト`

- [ ] **CTAボタン** `nav > cta`
  - EN: `Say Hello`
  - JP: `連絡する`

---

## ヒーローセクション `HeroSection.tsx`

- [ ] **バッジ（小テキスト）** `hero > available`
  - EN: `Available for collaborations`
  - JP: `コラボレーション受付中`

- [ ] **見出し h1（改行ごとに1要素）** `hero > h1`
  - EN: `Culti` / `vate the Soil,` / `for Dreams.` / `（空白）`
  - JP: `夢が育つ` / `土壌を` / `みなで耕す。` / `（空白）`

- [ ] **本文** `hero > body`
  - EN: `Based in Sasebo, working to build sustainable communities through youth support and education.`
  - JP: `佐世保を拠点に、若者支援と教育を軸に持続可能なコミュニティづくりに挑戦します。`

- [ ] **CTAボタン** `hero > cta`
  - EN: `Say Hello →`
  - JP: `声をかける →`

- [ ] **拠点** `hero > base`
  - EN: `Nagasaki Prefecture`
  - JP: `長崎県`

- [ ] **開始年** `hero > since`
  - EN/JP: `2019`

- [ ] **写真キャプション（ポラロイド下）** `about > photoCaption`
  - EN: `Nagasaki, 2024`
  - JP: `長崎,2026年` / `父を越えてゆけ！`（2行で表示）

- [ ] **プロフィール要約（ポラロイドカード内の紹介文）** `about > summary`
  - EN: `Community builder, planner & bank employee based in Sasebo. Board member of an educational nonprofit.`
  - JP: `佐世保を拠点とするコミュニティビルダー、プランナー、金融機関職員。教育系社団理事。`

- [ ] **プロフィールリンクテキスト（ポラロイドカード内）** `about > viewProfile`
  - EN: `View Profile →`
  - JP: `プロフィールを見る →`

- [ ] **専門分野タグ** `hero > focus`
  - EN: `Youth Support` / `Education` / `Community Building` / `Planning & Implementation`
  - JP: `若者支援` / `教育` / `コミュニティービルド` / `企画と実装`

---

## マーキーバー（流れるテキスト） `MarqueeBar.tsx`

- [ ] **キーワード1** `marquee`
  - EN: `Regional Revitalization`
  - JP: `地域振興`

- [ ] **キーワード2** `marquee`
  - EN: `Youth Empowerment`
  - JP: `若者支援`

- [ ] **キーワード3** `marquee`
  - EN: `Community Building`
  - JP: `コミュニティビルド`

- [ ] **キーワード4** `marquee`
  - EN: `Local Economies`
  - JP: `地域経済`

- [ ] **キーワード5** `marquee`
  - EN: `Alternative Education`
  - JP: `オルタナティブ教育`

- [ ] **キーワード6** `marquee`
  - EN: `Uncovering Local Narratives`
  - JP: `街のナラティブ発掘`


---

## 注力分野セクション `FocusSection.tsx`

- [ ] **セクションラベル（左）** `focus > header`
  - EN: `[ Core Focus ]`
  - JP: `[ 注力分野 ]`

- [ ] **セクションラベル（右）** `focus > header`
  - EN: `How We Grow Together`
  - JP: `今取りかかるべきもの`

### カード 01

- [ ] **タイトル** `focus > items[0] > title`
  - EN: `Educational` / `Ecosystems`
  - JP: `耐AI` / `オルタナ教育`

- [ ] **説明文** `focus > items[0] > desc`
  - EN: `Redesigning local curriculums to integrate community-based learning. Connecting students with local industries, artisans, and real-world civic challenges.`
  - JP: `探究学習支援、PBL、こども社長コミュニティー。AI代替不侵性を持つAGI時代に適切な教育プログラムを模索します。`

### カード 02

- [ ] **タイトル** `focus > items[2] > title`
  - EN: `Civic` / `Dialogue`
  - JP: `トキメキ駆動型` / `課題解決`

- [ ] **説明文** `focus > items[2] > desc`
  - EN: `Bridging the gap between local government planners and the citizens who actually live there. Making town planning engaging, accessible, and occasionally fun.`
  - JP: `予算もリソースも少ない地方都市で、仲間を増やしうねりを作るため、ドキドキを秘めたソーシャルプロジェクトを走らせます。`

---

## 注力分野 詳細ページ `/focus/[slug]`

### 詳細 01：Educational Ecosystems

- [ ] **タグライン** `focus > items[0] > detail > tagline`
  - EN: `Learning rooted in place.`
  - JP: `地域に根ざした学び。`

- [ ] **イントロ文** `focus > items[0] > detail > intro`
  - EN: `Education that matters starts where students live. We work with local governments and schools to redesign curriculum frameworks that connect classroom learning to the real texture of community life — the fishing docks, the mountain farms, the town meetings.`
  - JP: `本当に意味のある教育は、子どもたちが暮らす場所から始まります。地方自治体・学校と協力し、漁港・山岳農業・まちづくりの現場とつながったカリキュラムを再設計します。`

- [ ] **活動一覧** `focus > items[0] > detail > activities`
  - EN: `Curriculum co-design with local municipalities` / `Industry × classroom connection programs` / `Student-led civic challenge projects` / `Teacher upskilling workshops`
  - JP: `自治体との教育課程の共同設計` / `地域産業と教室をつなぐプログラム` / `生徒主体の地域課題プロジェクト` / `教員向けアップスキルワークショップ`

- [ ] **インパクト数字** `focus > items[0] > detail > impact`
  - EN: `12 Schools` / `800+ Students` / `6 Municipalities`
  - JP: `12 校` / `800+ 生徒` / `6 自治体`

### 詳細 02：Youth Mentorship

- [ ] **タグライン** `focus > items[1] > detail > tagline`
  - EN: `A place to dream, close to home.`
  - JP: `地元で夢を持てる場所。`

- [ ] **イントロ文** `focus > items[1] > detail > intro`
  - EN: `Young people in rural Japan face a stark choice: leave for the city, or stay and give up ambition. We're building a third option — vibrant local spaces, mentorship networks, and community micro-ventures that make staying feel like a decision, not a defeat.`
  - JP: `地方の若者は「都市に出るか、残って諦めるか」の二択を迫られがちです。私たちは第三の選択肢をつくります。残ることが「敗北」ではなく「選択」になる、ユースハブ・メンターネットワーク・地域マイクロベンチャーです。`

- [ ] **活動一覧** `focus > items[1] > detail > activities`
  - EN: `Youth hub space design & operations` / `Peer mentorship network development` / `Local micro-venture incubation` / `Creative confidence workshops`
  - JP: `ユースハブのスペース設計・運営` / `ピアメンターネットワーク構築` / `地域マイクロベンチャーのインキュベーション` / `クリエイティブ自信ワークショップ`

- [ ] **インパクト数字** `focus > items[1] > detail > impact`
  - EN: `5 Youth Hubs` / `300+ Youth Members` / `18 Micro-ventures`
  - JP: `5 ユースハブ` / `300+ 会員` / `18 マイクロベンチャー`

### 詳細 03：Civic Dialogue

- [ ] **タグライン** `focus > items[2] > detail > tagline`
  - EN: `Policy that listens.`
  - JP: `聞く政策を。`

- [ ] **イントロ文** `focus > items[2] > detail > intro`
  - EN: `Too many town plans are written by planners who don't live there, for residents who never get to read them. We design participatory processes that make civic planning genuinely collaborative — with special emphasis on amplifying youth and minority voices.`
  - JP: `まちづくりの計画書は、現地に住まない計画者が書き、住民が読む機会もないことが多い。私たちは若者や少数派の声を特に重視した、真に協働的な参加型プロセスを設計します。`

- [ ] **活動一覧** `focus > items[2] > detail > activities`
  - EN: `Participatory town-planning workshops` / `Youth policy panels & feedback loops` / `Visual facilitation & public exhibitions` / `Online-offline hybrid engagement tools`
  - JP: `参加型まちづくりワークショップ` / `若者政策パネル・フィードバックループ` / `ビジュアルファシリテーション・公開展示` / `オンライン・オフラインハイブリッド参加ツール`

- [ ] **インパクト数字** `focus > items[2] > detail > impact`
  - EN: `24 Workshops` / `2,000+ Participants` / `4 Policy Outcomes`
  - JP: `24 ワークショップ` / `2,000+ 参加者` / `4 政策反映`

---

## 実績セクション `WorkSection.tsx`

- [ ] **見出し行1** `work > header > h2Line1`
  - EN: `Recent`
  - JP: `最近の`

- [ ] **見出し行2** `work > header > h2Line2`
  - EN: `Initiatives`
  - JP: `プロジェクト`

- [ ] **サブテキスト** `work > header > sub`
  - EN: `A curated look at projects focused on breathing new life into local ecosystems and empowering the next generation.`
  - JP: `地域のエコシステムを活性化し、次世代を育てるプロジェクトを紹介します。`

- [ ] **アーカイブCTA** `work > archiveCta`
  - EN: `View Complete Archive`
  - JP: `アーカイブを見る`

### カード 1：Local Tech Camp

- [ ] **タグ** `work > cards[0] > tag`
  - EN: `Education`
  - JP: `教育`

- [ ] **年・地名** `work > cards[0] > year`
  - EN: `2023 / Kamiyama Town`
  - JP: `2023年 / 神山町`

- [ ] **タイトル** `work > cards[0] > title`
  - EN: `Local Tech Camp`
  - JP: `地域テックキャンプ`

- [ ] **説明文（ホバー時に展開）** `work > cards[0] > desc`
  - EN: `Empowering middle schoolers with coding skills to solve hyper-local agricultural issues.`
  - JP: `中学生がコーディングで地域農業課題を解決する。`

### カード 2：Roots Youth Hub

- [ ] **タグ** `work > cards[1] > tag`
  - EN: `Space Design`
  - JP: `スペースデザイン`

- [ ] **年・地名** `work > cards[1] > year`
  - EN: `2022 / Shiojiri City`
  - JP: `2022年 / 塩尻市`

- [ ] **タイトル** `work > cards[1] > title`
  - EN: `Roots Youth Hub`
  - JP: `Rootsユースハブ`

- [ ] **説明文（ホバー時に展開）** `work > cards[1] > desc`
  - EN: `Renovating an abandoned post office into a vibrant community and youth co-working center.`
  - JP: `廃郵便局をコミュニティスペースに再生。`

### カード 3：Town Hall 2.0

- [ ] **タグ** `work > cards[2] > tag`
  - EN: `Civic Design`
  - JP: `市民設計`

- [ ] **年・地名** `work > cards[2] > year`
  - EN: `2024 / Ongoing`
  - JP: `2024年 / 進行中`

- [ ] **タイトル** `work > cards[2] > title`
  - EN: `Town Hall 2.0`
  - JP: `タウンホール2.0`

- [ ] **説明文（ホバー時に展開）** `work > cards[2] > desc`
  - EN: `A workshop series redefining how local policies are drafted, putting youth voices at the table.`
  - JP: `若者の声を政策立案に。参加型ワークショップシリーズ。`

---

## 実績 詳細ページ `/work/[slug]`

### 詳細 1：Local Tech Camp

- [ ] **タグライン** `work > cards[0] > detail > tagline`
  - EN: `Code for the community.`
  - JP: `地域のためのコード。`

- [ ] **ストーリー文** `work > cards[0] > detail > story`
  - EN: `In Kamiyama Town, an aging farming community with shrinking school rolls, we launched a summer coding camp that asked one simple question: what problems in your town could technology help solve? The results surprised everyone — from irrigation sensors to community event apps, the students showed what local tech can look like.`
  - JP: `少子高齢化が進む神山町で、「地域の課題を技術で解決するとしたら？」というシンプルな問いからサマーコーディングキャンプを開始。灌漑センサーからコミュニティイベントアプリまで、生徒たちが地域密着のテクノロジーを生み出しました。`

- [ ] **成果一覧** `work > cards[0] > detail > outcomes`
  - EN: `48 students trained` / `Nagasaki prefectural award` / `3 projects adopted by local businesses` / `Annual program now in year 3`
  - JP: `48名の生徒を育成` / `長崎県教育委員会表彰` / `3プロジェクトが地元企業に採用` / `現在3年目の年間プログラムへ発展`

### 詳細 2：Roots Youth Hub

- [ ] **タグライン** `work > cards[1] > detail > tagline`
  - EN: `Old walls, new energy.`
  - JP: `古い壁、新しいエネルギー。`

- [ ] **ストーリー文** `work > cards[1] > detail > story`
  - EN: `When Shiojiri's last post office branch closed, the building sat empty for four years. We worked with the city, local architects, and 40 young residents to transform it into Roots — a co-working space, event venue, and community kitchen that now hosts over 200 visitors a month.`
  - JP: `塩尻最後の郵便局が閉鎖されてから4年、建物は空き家のままでした。市・地元建築家・40名の若者と協力し、月200名以上が訪れるコワーキングスペース・イベント会場・コミュニティキッチン「Roots」へ転換しました。`

- [ ] **成果一覧** `work > cards[1] > detail > outcomes`
  - EN: `Former post office repurposed` / `200+ monthly visitors` / `12 local youth employed part-time` / `Featured in Nikkei Regional Report`
  - JP: `廃郵便局の再活用` / `月間200名以上の来訪者` / `地元若者12名をパートタイム雇用` / `日経地域レポートに掲載`

### 詳細 3：Town Hall 2.0

- [ ] **タグライン** `work > cards[2] > detail > tagline`
  - EN: `Democracy, upgraded.`
  - JP: `民主主義をアップデート。`

- [ ] **ストーリー文** `work > cards[2] > detail > story`
  - EN: `Traditional town halls are often inaccessible, jargon-heavy, and dominated by a handful of regular attendees. Town Hall 2.0 flips the format — short, energetic sessions with visual voting, live synthesis, and structured follow-up that ensures every voice reaches the planner's desk.`
  - JP: `従来のタウンホールは専門用語が多く、常連参加者に偏りがちです。「タウンホール2.0」は形式を刷新。ビジュアル投票・ライブ集約・確実なフォローアップで、すべての声を計画担当者まで届けます。`

- [ ] **成果一覧** `work > cards[2] > detail > outcomes`
  - EN: `24 sessions held across 4 cities` / `2,000+ total participants` / `4 youth policy proposals adopted` / `Open-source facilitation guide published`
  - JP: `4都市で24セッション開催` / `延べ参加者2,000名以上` / `若者提案4件が政策に反映` / `ファシリテーションガイドをオープンソース公開`

---

## フッター・コンタクト `Footer.tsx`

- [ ] **バッジ** `footer > badge`
  - EN: `[ Open For Collaborations ]`
  - JP: `[ コラボレーション受付中 ]`

- [ ] **見出し行1** `footer > h2[0]`
  - EN: `Ready to`
  - JP: `一緒に`

- [ ] **見出し行2** `footer > h2[1]`
  - EN: `Let's Do It!`
  - JP: `やりましょう！`

- [ ] **本文** `footer > body`
  - EN: `If you'd like to support any of the projects listed here, or if something caught your attention — please feel free to reach out!`
  - JP: `掲載しているプロジェクトを応援したい方、その他、なにかピンときた方はお気軽にご連絡ください！`

- [ ] **CTAボタン** `footer > cta`
  - EN: `Start a Conversation`
  - JP: `声をかける`

- [ ] **背景大文字1** `footer > bgText1`
  - EN: `TELL ME`
  - JP: `聞かせてください`

- [ ] **背景大文字2** `footer > bgText2`
  - EN: `YOUR VOICE`
  - JP: `あなたの声で`

- [ ] **コピーライト** `footer > copy`
  - EN/JP: `© 2026 Yoshimasa Nishinobu.`

---

## 要差し替え（ダミーのまま） ⚠️

- [ ] **メールアドレス** `Footer.tsx` に直書き
  - 現在: `hello@example.com`
  - 変更後: `` ← ここに記入

- [ ] **Instagram URL** `footer > social[0] > href`
  - 現在: `#`
  - 変更後: `` ← ここに記入

- [ ] **LinkedIn URL** `footer > social[1] > href`
  - 現在: `#`
  - 変更後: `` ← ここに記入

- [ ] **Note.jp URL** `footer > social[2] > href`
  - 現在: `#`
  - 変更後: `` ← ここに記入
