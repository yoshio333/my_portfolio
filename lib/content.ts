export type Lang = 'EN' | 'JP';

// ─── Card colour palette (6 colours, auto-rotates by index % 6) ──────────────
export const CARD_PALETTE = [
  // 1. Red
  { bg: '#FF3131', textColor: '#FFFFFF', tagBg: '#000000', tagColor: '#FFFFFF', tagBorder: '#000000', arrowBg: '#000000', arrowColor: '#FFFFFF', descBg: 'rgba(0,0,0,0.18)', descText: '#FFFFFF' },
  // 2. Yellow
  { bg: '#FFF133', textColor: '#000000', tagBg: '#000000', tagColor: '#FFFFFF', tagBorder: '#000000', arrowBg: '#000000', arrowColor: '#FFFFFF', descBg: 'rgba(0,0,0,0.08)', descText: '#000000' },
  // 3. Blue
  { bg: '#2E5BFF', textColor: '#FFFFFF', tagBg: '#FFFFFF', tagColor: '#000000', tagBorder: 'rgba(255,255,255,0.3)', arrowBg: '#FFFFFF', arrowColor: '#000000', descBg: 'rgba(255,255,255,0.15)', descText: '#FFFFFF' },
  // 4. Navy
  { bg: '#0A2340', textColor: '#FFFFFF', tagBg: '#FFFFFF', tagColor: '#000000', tagBorder: 'rgba(255,255,255,0.3)', arrowBg: '#FFFFFF', arrowColor: '#000000', descBg: 'rgba(255,255,255,0.08)', descText: '#FFFFFF' },
  // 5. Green
  { bg: '#009B4E', textColor: '#FFFFFF', tagBg: '#FFFFFF', tagColor: '#000000', tagBorder: 'rgba(255,255,255,0.3)', arrowBg: '#FFFFFF', arrowColor: '#000000', descBg: 'rgba(255,255,255,0.15)', descText: '#FFFFFF' },
  // 6. Orange
  { bg: '#FF6B00', textColor: '#FFFFFF', tagBg: '#000000', tagColor: '#FFFFFF', tagBorder: '#000000', arrowBg: '#000000', arrowColor: '#FFFFFF', descBg: 'rgba(0,0,0,0.18)', descText: '#FFFFFF' },
] as const;

// ─── Text content ────────────────────────────────────────────────────────────
// To swap text: edit the EN/JP values in each section below.

export const CONTENT = {
  name: { EN: 'Yoshimasa Nishinobu', JP: '西信 好真' },
  nameHeader: { EN: 'Yoshimasa Nishinobu — Portfolio', JP: '西信 好真　ポートフォリオ' },
  nameShort: 'Y. Nishinobu',

  nav: {
    EN: [
      { href: '#mission', label: 'Mission', hoverBg: '#FFF133', hoverColor: '#000000' },
      { href: '#focus', label: 'Focus Areas', hoverBg: '#2E5BFF', hoverColor: '#FFFFFF' },
      { href: '#work', label: 'Recent Projects', hoverBg: '#FF3131', hoverColor: '#FFFFFF' },
      { href: '/about', label: 'About', hoverBg: '#000000', hoverColor: '#FFFFFF' },
    ],
    JP: [
      { href: '#mission', label: 'ミッション', hoverBg: '#FFF133', hoverColor: '#000000' },
      { href: '#focus', label: '注力分野', hoverBg: '#2E5BFF', hoverColor: '#FFFFFF' },
      { href: '#work', label: '最近のプロジェクト', hoverBg: '#FF3131', hoverColor: '#FFFFFF' },
      { href: '/about', label: 'プロフィール', hoverBg: '#000000', hoverColor: '#FFFFFF' },
    ],
    cta: { EN: 'Say Hello', JP: '連絡する' },
  },

  hero: {
    EN: {
      available: 'Available for collaborations',
      h1: ['Culti', 'vate the Soil,', 'for Dreams.', ''],
      body: 'Based in Sasebo, working to build sustainable communities through youth support and education.',
      cta: 'Say Hello →',
      base: 'Nagasaki Prefecture',
      since: '2019',
      focus: ['Youth Support', 'Education', 'Community Building', 'Planning & Implementation'],
    },
    JP: {
      available: 'コラボレーション受付中',
      h1: ['夢が育つ', '', '土壌を', 'みなで耕す。'],
      body: '佐世保の街で、地域振興と教育を軸に持続可能なコミュニティづくりに挑戦します。',
      cta: '声をかける →',
      base: '長崎県',
      since: '2019',
      focus: ['若者支援', '教育', 'コミュニティービルド', '企画と実装'],
    },
  },

  marquee: {
    EN: ['Regional Revitalization', 'Youth Empowerment', 'Community Building', 'Local Economies', 'Alternative Education', 'Uncovering Local Narratives'],
    JP: ['地域振興', '若者支援', 'コミュニティビルド', '地域経済', 'オルタナティブ教育', '街のナラティブ発掘'],
  },

  focus: {
    header: {
      EN: { left: '[ Core Focus ]', right: '2 Pillars of My Work' },
      JP: { left: '[ 注力分野 ]', right: '活動の中心にある２つの軸' },
    },
    items: [
      {
        slug: 'educational-ecosystems',
        num: '01.',
        title: { EN: ['AI-Resistant Alternative', 'Education'], JP: ['アンチAI', 'オルタナ教育'] },
        desc: {
          EN: 'Inquiry-based learning, community-wide PBL, and growing a community of kid CEOs. Taking on the challenge of education that resists obsolescence and AI replacement in the age of AGI.',
          JP: '探究学習支援、街ぐるみのPBL、こども社長コミュニティー育成。AGI時代に陳腐化しない、AIに代替されにくい教育プログラムに挑戦しています。',
        },
        detail: {
          EN: {
            tagline: 'Learning rooted in place.',
            intro: 'Education that matters starts where students live. We work with local governments and schools to redesign curriculum frameworks that connect classroom learning to the real texture of community life — the fishing docks, the mountain farms, the town meetings.',
            activities: [
              'Curriculum co-design with local municipalities',
              'Industry × classroom connection programs',
              'Student-led civic challenge projects',
              'Teacher upskilling workshops',
            ],
            impact: [
              { stat: '12', label: 'Schools' },
              { stat: '800+', label: 'Students' },
              { stat: '6', label: 'Municipalities' },
            ],
          },
          JP: {
            tagline: '地域に根ざした学び。',
            intro: '本当に意味のある教育は、子どもたちが暮らす場所から始まります。地方自治体・学校と協力し、漁港・山岳農業・まちづくりの現場とつながったカリキュラムを再設計します。',
            activities: [
              '自治体との教育課程の共同設計',
              '地域産業と教室をつなぐプログラム',
              '生徒主体の地域課題プロジェクト',
              '教員向けアップスキルワークショップ',
            ],
            impact: [
              { stat: '12', label: '校' },
              { stat: '800+', label: '生徒' },
              { stat: '6', label: '自治体' },
            ],
          },
        },
        coverImg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
        numBg: '#000000',
        numColor: '#FFFFFF',
        hoverBg: '#FFF133',
        hoverColor: '#000000',
        arrowBg: '#FF3131',
        arrowColor: '#FFFFFF',
        rotate: 'rotate(12deg)',
        tags: { EN: ['Alt. Education', 'Inquiry / PBL', 'Youth Dev'], JP: ['オルタナ教育', '探究学習', '若者支援'] },
      },
      {
        slug: 'civic-dialogue',
        num: '02.',
        title: { EN: ['Spark-Driven', 'Social Problem Solving'], JP: ['トキメキ駆動型', '社会課題解決'] },
        desc: {
          EN: 'In regional cities with limited budgets and resources, we run social projects full of excitement to grow our community and build momentum.',
          JP: '予算もリソースも少ない地方都市で、仲間を増やしうねりを作るため、ドキドキを秘めたソーシャルプロジェクトを走らせています。',
        },
        detail: {
          EN: {
            tagline: 'Policy that listens.',
            intro: 'Too many town plans are written by planners who don\'t live there, for residents who never get to read them. We design participatory processes that make civic planning genuinely collaborative — with special emphasis on amplifying youth and minority voices.',
            activities: [
              'Participatory town-planning workshops',
              'Youth policy panels & feedback loops',
              'Visual facilitation & public exhibitions',
              'Online-offline hybrid engagement tools',
            ],
            impact: [
              { stat: '24', label: 'Workshops' },
              { stat: '2,000+', label: 'Participants' },
              { stat: '4', label: 'Policy Outcomes' },
            ],
          },
          JP: {
            tagline: '聞く政策を。',
            intro: 'まちづくりの計画書は、現地に住まない計画者が書き、住民が読む機会もないことが多い。私たちは若者や少数派の声を特に重視した、真に協働的な参加型プロセスを設計します。',
            activities: [
              '参加型まちづくりワークショップ',
              '若者政策パネル・フィードバックループ',
              'ビジュアルファシリテーション・公開展示',
              'オンライン・オフラインハイブリッド参加ツール',
            ],
            impact: [
              { stat: '24', label: 'ワークショップ' },
              { stat: '2,000+', label: '参加者' },
              { stat: '4', label: '政策反映' },
            ],
          },
        },
        coverImg: 'https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?auto=format&fit=crop&q=80&w=1200',
        numBg: '#FFFFFF',
        numColor: '#000000',
        hoverBg: '#FF3131',
        hoverColor: '#FFFFFF',
        arrowBg: '#2E5BFF',
        arrowColor: '#FFFFFF',
        rotate: 'scale(1.1)',
        tags: { EN: ['Spark-Driven', 'Community Design', 'Social Action'], JP: ['トキメキ実装', 'まちづくり', 'ソーシャルアクション'] },
      },
    ],
  },

  work: {
    header: {
      EN: { h2Line1: 'Recent', h2Line2: 'Initiatives', sub: "A look at the projects I'm actively working on. Browse the archive for past unique projects." },
      JP: { h2Line1: '最近の', h2Line2: 'プロジェクト', sub: '現在私が取り組んでいるプロジェクトを紹介します。アーカイブからは過去のユニークなプロジェクトが見られます。' },
    },
    cards: [
      {
        slug: 'noren-bank',
        tag: { EN: 'Cultural Preservation', JP: '文化保護' },
        year: { EN: '2023– / Sasebo', JP: '2023年〜 / 佐世保市' },
        title: { EN: 'Noren Bank', JP: 'のれんバンク' },
        desc: {
          EN: "Preserving memories of beloved closed restaurants as ZINEs — owner interviews, customer stories, old recipes. A seed bank for the soft culture of our streets, for generations to come.",
          JP: '閉店した名店の"記憶"をZINEとして残す。店主のインタビュー、客の思い出、当時のレシピ。消えゆく街の文化をシードバンクのように、後世へ。',
        },
        detail: {
          EN: {
            tagline: "Preserving a town's flavors, for memory.",
            story: "Every town has its beloved restaurants. When they close, it's not just the food that disappears — the stories, the memories, the very soul of the place vanish with them. Noren Bank captures it all in a ZINE: an interview with the owner, memories from loyal regulars, and the recipes that defined a time and place — preserving the soft culture of our streets for generations to come.\n\nImagine a young cook who wants to recreate the taste of a long-gone favorite. Or a storyteller looking to weave old flavors into new tourism. Or your grandfather, quietly wishing he could taste that dish just one more time.\n\nIf Noren Bank is there when those moments arrive, the memory of a place can be revived — and the hidden charm of a town can live again.",
            outcomes: [
              { text: 'Built a prototype of the Noren Bank app', year: '2023', status: 'done' },
              { text: "Project relaunched — first ZINE '天津包子館' produced and bound", year: '2025', status: 'done' },
              { text: 'Two more ZINEs in production', year: '2026', status: 'next' },
              { text: 'Pop-up event with revived recipes', year: '2026', status: 'next' },
              { text: 'Website and social media launch', year: '2026', status: 'next' },
              { text: 'Tell us about a restaurant worth preserving', status: 'help' },
              { text: 'Buy a ZINE and help spread the word', status: 'help' },
            ],
          },
          JP: {
            tagline: 'まちの味の記憶を保存する。',
            story: '街にある飲食の名店たち。その店が閉まるとき、料理だけでなく、その場に宿っていた物語も思い出も消えていきます。のれんバンクは、店主へのインタビュー・常連客の思い出・当時のレシピをZINEにまとめ、街の無形文化を後世へ手渡していきます。\n\nいつの日か、あの名店の味を再現したい若者が現れた時。あるいは、新しい観光コンテンツを作りたい若者が現れた時。あるいはもう一度思い出の味を食べたいと、あなたのおじいちゃんが嘆いた時。\n\nそんな時に、のれんバンクが機能していれば、街の記憶が蘇り、新しい街の魅力をもう一度生み出してくれるでしょう。',
            outcomes: [
              { text: '「のれんバンク」アプリのプロトタイプ版を作成', year: '2023', status: 'done' },
              { text: 'プロジェクト再始動　第一弾ZINE「天津包子館」を制作・製本', year: '2025', status: 'done' },
              { text: '追加取材とZINE制作（2店舗）', year: '2026', status: 'next' },
              { text: '復刻メニューのイベント開催', year: '2026', status: 'next' },
              { text: 'ウェブサイト・SNS開設', year: '2026', status: 'next' },
              { text: '"残したい名店"の情報提供', status: 'help' },
              { text: 'ZINEの購入と保存活動の周知', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/noren-bank.jpg',
        imgAlt: 'のれんバンク — 街の名店の記憶を残すZINEプロジェクト',
      },
      {
        slug: 'on-c',
        caseSensitiveTitle: true,
        tag: { EN: 'Community Space', JP: 'コラボレーションスペース' },
        year: { EN: '2024– / Sasebo', JP: '2024年〜 / 佐世保市' },
        title: { EN: 'on°C (Ondo)', JP: 'on°C（オンド）' },
        desc: {
          EN: 'A collaboration space co-run with local businesses, connecting the town with students and raising the temperature of the community. Hosting unique events like "Intern Clinic" and "Battle the Boss."',
          JP: 'まちと学生をつなぐコラボレーションスペース。「社長とバトる。」など地域の温度を上げるユニークな企画を、事業者とともに運営。',
        },
        detail: {
          EN: {
            tagline: 'Nurturing young leaders who take the lead and raise the temperature of the town.',
            story: 'on°C (Ondo) is a collaboration space co-run with local Sasebo businesses, connecting the town with students. In an open space overlooking the Sasebo River, unique events are born one after another — from "Intern Clinic," where students with top company offers coach local CEOs on the latest hiring trends, to "Battle the Boss," where executives and students face off in impromptu slide presentations.\n\nThe space is also regularly used as a student study room and community kitchen, serving as a hub for empowering young people in the heart of Sasebo.\n\nThe space is co-run by three organizations: handon Inc., Hibi Kenkyusho Inc., and Saikai Mizuki Credit Union. Several local businesses support operations as "On-bu" — official on°C sponsor companies.',
            outcomes: [
              { text: 'Hosted "Intern Clinic" and other student-business exchange events', status: 'done' },
              { text: 'Open as a free study room for students', status: 'done' },
              { text: 'Space lent out for community kitchen programs', status: 'done' },
              { text: 'New events in collaboration with Goccco', year: '2026', status: 'next' },
              { text: 'Open as an inquiry learning base for students', year: '2026', status: 'next' },
              { text: 'Introduce a passionate student', status: 'help' },
              { text: 'Join as an "On-bu" supporting company', status: 'help' },
            ],
          },
          JP: {
            tagline: 'まちの音頭を取り、まちの温度を上げる若者を育てる。',
            story: '地域の事業者とともに企画・運営する、まちと学生をつなぐコラボレーションスペース。佐世保川を望む開放的な空間では、大手内定学生が地元企業の社長に就活の最新事情をレクチャーする「インターンクリニック」や、社長と学生が初見のスライドでプレゼン力を競う「社長とバトる。」など、ユニークな企画が続々と生まれている。\n\n学生の自習室・こども食堂としても定期的に活用され、佐世保のまちなかで若者がエンパワーメントされる拠点となっている。\n\n企画・運営は㈱handon、日々研究所㈱、西海みずき信用組合の3法人が主体。地場の企業数社が応援企業「オン部」として運営費を支援している。',
            outcomes: [
              { text: '「インターンクリニック」など企業と学生の交流イベントを実施', status: 'done' },
              { text: '学生向け「自習室」として開放', status: 'done' },
              { text: '「こども食堂」へのスペース貸し出し', status: 'done' },
              { text: 'Gocccoと連携した新規イベントを実施', year: '2026', status: 'next' },
              { text: '探究学習の活動拠点としての貸し出し', year: '2026', status: 'next' },
              { text: '情熱ある学生の紹介', status: 'help' },
              { text: '応援企業（オン部）としての参画', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/on-c.jpg',
        imgAlt: 'on°C（オンド）— 佐世保のコラボレーションスペース',
      },
      {
        slug: 'polaris-q',
        tag: { EN: 'Inquiry-Based Learning / PBL', JP: '探究学習支援・PBL' },
        year: { EN: '2025– / Nagasaki City', JP: '2025年〜 / 長崎市' },
        title: { EN: '"Polaris Q" Inquiry Support Team', JP: '長崎北高探究支援チーム「ポラリスQ」' },
        desc: {
          EN: 'A 7-member volunteer expert team commissioned by a high school to co-design and run a 3-year inquiry program, pioneering a new model of school-community PBL.',
          JP: '学校の依頼で結成した民間有志7名の専門家チームが、高校3年間の探究プログラムを伴走。民学連携PBLの新しい形に挑戦。',
        },
        detail: {
          EN: {
            tagline: 'Building a new era of education, together with the community.',
            story: 'Commissioned by Nagasaki Prefectural Kita High School to support their inquiry curriculum, we assembled "Polaris Q" — a volunteer team of seven local professionals. For three years, we co-design and run an inquiry program alongside the class entering in 2025, from initial framework design through in-class facilitation.\n\nOur goal is to move beyond the traditional teacher-student, school-community divide, and build a new model of school-community PBL where all parties learn alongside each other.\n\nMembers include: Steve Takeshita (freelance), Mitsuhiro Hayashida (Representative Director, Peace Education Lab Nagasaki), Risa Yamano (Kita High alumna / Fukuoka Women\'s University), Tetsuro Ishimaru (CEO, ISIAL Group), Kyosuke Mori (Tsukurunowa Design), Yumi Yoshino (Main personality, FM Nagasaki), and Taikai Kodai (Buddhist monk, Kyosoji Temple) — along with myself. Together, we are working to create an inquiry program that sets a new standard for the next generation.',
            outcomes: [
              { text: 'Launched inquiry support for Nagasaki Kita High Year 1 students', year: '2025', status: 'done' },
              { text: 'First half: "Oshi Battle Royale", "50 Favorite Verbs", "University Major Inquiry"', year: '2025', status: 'done' },
              { text: 'Second half: "Empowerment Inquiry" program', year: '2025', status: 'done' },
              { text: 'Finalize and run Year 2 inquiry program', year: '2026', status: 'next' },
              { text: 'Research and apply for grants', year: '2026', status: 'next' },
              { text: 'Share grant information with us (all members currently volunteering their time)', status: 'help' },
            ],
          },
          JP: {
            tagline: '新しい時代の教育を地域とともに作り出す。',
            story: '長崎県立北高校から探究授業の支援依頼を受け、地域の民間プロフェッショナル7名からなる有志の専門家チーム「ポラリスQ」を結成。2025年入学の新1年生に対して、3年間の探究プログラムの設計と授業への伴走を一貫して担っている。\n\n教員↔生徒、学校↔民間、教える側↔教えられる側という従来の関係を超えた、民学連携PBLの新しい形をめざしている。\n\nメンバーは、竹下スティーブ（フリーランス）、林田光弘（Peace Education Lab Nagasaki 代表理事）、山野里紗（長崎北高OG／福岡女子大学）、石丸徹郎（ISIALグループ代表）、森恭佑（株式会社つくるのわデザイン）、芳野裕美（FM長崎メインパーソナリティ）、小岱海（教宗寺僧侶）と私の計8名。多彩な専門性を持つ仲間とともに、次世代のスタンダードとなる探究プログラムの実現をめざしている。',
            outcomes: [
              { text: '長崎北高1年生の探究学習支援を開始', year: '2025', status: 'done' },
              { text: '前半：「推しバトルロワイヤル」「50の好きな動詞」「大学学部探究」を実施', year: '2025', status: 'done' },
              { text: '後半：「エンパワ探究」を実施', year: '2025', status: 'done' },
              { text: '2年時の探究プログラムの確定と実施', year: '2026', status: 'next' },
              { text: '助成金などの調査と申込み', year: '2026', status: 'next' },
              { text: '助成金情報などの共有（現状参加メンバーが無償での協力のため）', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/polaris-q.jpg',
        imgAlt: 'ポラリスQ — 長崎北高探究支援チーム',
      },
      {
        slug: 'dummy-4',
        caseSensitiveTitle: true,
        tag: { EN: 'Kids Commerce', JP: 'キッズ小商い' },
        year: { EN: '2025〜 / Higashisonogi, Sasebo, Karatsu', JP: '2025年〜　／　東彼杵町、佐世保市、唐津市' },
        title: { EN: 'Goccco', JP: 'Goccco（ゴッコ）' },
        desc: {
          EN: "A program that turns children's dreams into real businesses, right here in town. Freed from adult ideas and assumptions, kids like 'Goodbye Stiff Shoulders' and 'Pokéjan' discover genuine confidence and self-efficacy.",
          JP: '子どもの夢を、今すぐ街で実現できる商いに変えるプログラム。「グッバイ肩こり」「ポケじゃん」など、大人の発想から解き放たれた子どもたちに、本物の自信と自己効力感が生まれる。',
        },
        detail: {
          EN: {
            tagline: 'Business experience in childhood — a passport to a life of freedom.',
            story: 'Born as a spin-off of on°C, Goccco is a program where kids turn what they want to do into a real business and actually sell it in town. Adults support them with everything they\'ve got — making that simple experience possible.\n\nShaping your own values into a business, and putting them out into the world. That experience draws out learning from children that far exceeds what adults would expect.\n\nOne episode has stayed with me. A boy who had been running a game of chance told us after the event: "I\'m not doing this business anymore." When we asked why, he said: "My friend\'s customers left happy. Mine left looking frustrated." His sales that day were about the same as his friend\'s — but he had discovered, on his own, that there\'s a value beyond money.',
            outcomes: [
              { text: '1st Goccco @ Higashisonogi held', year: '2025', status: 'done' },
              { text: '2nd Goccco @ Sasebo held', year: '2025', status: 'done' },
              { text: '3rd Goccco @ Karatsu in preparation (with InnoDrops)', year: '2026', status: 'next' },
              { text: 'Expand frequency and scale of Goccco events', year: '2026', status: 'next' },
              { text: 'Build a Goccco community', year: '2026', status: 'next' },
              { text: 'Know a kid full of energy? Send them our way', status: 'help' },
            ],
          },
          JP: {
            tagline: '就学期のビジネス経験が自由な人生のパスポートに。',
            story: 'on°Cのスピンオフ企画として生まれた「Goccco」。子どもたちのやりたいことをビジネスの形に変え、街なかで実際に売ってみる。そんなシンプルな体験ができる環境づくりを、大人たちが全力でサポートする。\n\n自分の価値観をビジネスの形に変え、社会と接点を持ってみる。その経験は、大人の想像以上に子どもたちから深い学びを引き出す。\n\nある男の子のエピソードが印象に残っている。彼は軽い射幸性のある商売をしていたのだが、イベント後に「僕はこのビジネスはもうやらない」と言った。理由を尋ねると、「友達のビジネスはお客さんが喜んで帰っていくのに、僕のお客さんは悔しそうにして帰っていくから」と話した。その日の売上は友人とほぼ同じだったにもかかわらず、彼はお金以外の価値があることに、自分で気づいたのだ。',
            outcomes: [
              { text: '第1回Goccco＠東彼杵　開催', year: '2025', status: 'done' },
              { text: '第2回Goccco＠佐世保　開催', year: '2025', status: 'done' },
              { text: '第3回Goccco＠唐津を準備中（InnoDropsと連携）', year: '2026', status: 'next' },
              { text: 'Gocccoの開催頻度と規模を拡大する', year: '2026', status: 'next' },
              { text: 'Gocccoコミュニティーを作る', year: '2026', status: 'next' },
              { text: 'とにかく元気な子どもの紹介', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/goccco.jpg',
        imgAlt: 'Goccco（ゴッコ）— 子どもの夢を商いに変えるプログラム',
      },
      {
        slug: 'dummy-5',
        tag: { EN: 'Inquiry-Based Learning', JP: '探究学習' },
        year: { EN: '2023– / Sasebo', JP: '2023年〜　／　佐世保市' },
        title: { EN: 'Nagasaki Maipro Summit', JP: 'マイプロジェクト長崎県Summit' },
        desc: {
          EN: "Co-hosting Nagasaki's largest high school inquiry showcase with NPO Katariba. Now in its 4th year, the event has produced a Minister of Education Award winner — one of the leading events driving inquiry-based learning across Nagasaki.",
          JP: 'カタリバと連携し、長崎県内最大の高校の探究学習発表会を主催。今年で4回目の開催。昨年度は文部科学大臣賞受賞プロジェクトも生まれ、長崎の探究学習を牽引するイベントの一つ。',
        },
        detail: {
          EN: {
            tagline: 'The flagship of community-wide PBL.',
            story: 'Partnering with Katariba, a leading education NPO, we host an annual showcase where Nagasaki high school students present and share their inquiry-based learning projects. Now in its fourth year, the event has helped fuel growing momentum for inquiry-based education across the prefecture — last year, one participating team went on to win the Minister of Education Award.\n\nEach year, we invite nearly 20 local professionals from diverse backgrounds to serve as mentors, offering feedback and dialogue on student presentations. In doing so, the event has also become a way of growing a broader community of inquiry supporters across the region.',
            outcomes: [
              { text: 'Summit 22 (Pre-event) held', year: '2023', status: 'done' },
              { text: 'Summit 23 / 22 teams, 64 participants', year: '2024', status: 'done' },
              { text: 'Summit 24 / 38 teams, 107 participants', year: '2025', status: 'done' },
              { text: 'Minister of Education Award winner emerged', year: '2025', status: 'done' },
              { text: 'Summit 25 / 26 teams, 82 participants', year: '2026', status: 'done' },
              { text: 'Preparation for the 2026 Summit', year: '2026', status: 'next' },
              { text: 'Strengthen support opportunities in the early stages of inquiry', year: '2026', status: 'next' },
              { text: 'Strengthen the organizational structure', year: '2026', status: 'next' },
              { text: 'Introduce inquiry-experienced people or maipro alumni who can support operations', status: 'help' },
              { text: 'Introduce members who can collaborate as secretariat staff', status: 'help' },
            ],
          },
          JP: {
            tagline: '街ぐるみのPBLのフラッグシップ。',
            story: '大手教育系NPOカタリバと連携し、長崎の高校生の探究学習の発表と学びの大会を主催している。今年で4回目の開催となり、昨年度は文部科学大臣賞を受賞するプロジェクトが生まれるなど、長崎での探究学習の気運の高まりの一翼を担っている。\n\n毎年、様々な経験を持つ地域のプロフェッショナル20名近くに、社会人メンターとして発表へのフィードバックと対話をお願いしている。そのことが地域の探究支援者を増やすことにもつながっている。',
            outcomes: [
              { text: '長崎県Summit 22（プレ大会）開催', year: '2023', status: 'done' },
              { text: '長崎県Summit 23 / 22チーム・64名参加', year: '2024', status: 'done' },
              { text: '長崎県Summit 24 / 38チーム・107名参加', year: '2025', status: 'done' },
              { text: '文部科学大臣賞受賞プロジェクトを輩出', year: '2025', status: 'done' },
              { text: '長崎県Summit 25 / 26チーム・82名参加', year: '2026', status: 'done' },
              { text: '26年度大会の準備', year: '2026', status: 'next' },
              { text: '探究初期段階の支援機会の強化', year: '2026', status: 'next' },
              { text: '運営体制の強化', year: '2026', status: 'next' },
              { text: '運営を支援してくれる探究経験者、マイプロOBの紹介', status: 'help' },
              { text: '事務局メンバーとして協働してくれるメンバーの紹介', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/maipro.jpg',
        imgAlt: 'マイプロジェクト長崎県Summit — 高校生の探究学習発表大会',
      },
      {
        slug: 'dummy-6',
        tag: { EN: 'AI Learning', JP: 'AI学習' },
        year: { EN: '2023– / Sasebo', JP: '2023年〜　／　佐世保市' },
        title: { EN: 'AI Staff Training Program', JP: 'AI社員育成計画' },
        desc: {
          EN: 'A monthly program learning agent AI together with local business owners and students. Teaching each other tools like Claude Code, we work toward building regional strength that won\'t be swept away by the pace of tech change.',
          JP: '地域の経営者・学生と共にエージェントAIを学ぶ月例プログラム。Claude CodeやClaw系ツールなどを互いに教え合いながら習得を目指す。技術の進歩に流されない地域本来の強さを模索していく。',
        },
        detail: {
          EN: {
            tagline: 'Learning AI together, one month at a time.',
            story: 'What began years ago as an informal, irregularly-held programming study group with local business owners and students — focused on practical social implementation — has evolved into a monthly program. Starting this April, participants now meet regularly to learn and teach each other tools like Claude Code and Claw-based platforms, catching up with agent AI that has entered its practical phase.\n\nRegional cities have always been prone to falling behind in technology and information. But in this age of AI, a lag of even one or two years could prove critically damaging for local businesses and students. To prevent that — to keep the community from sinking — we urgently need to grow a circle of people who learn the latest AI together and spread that knowledge outward.',
            outcomes: [
              { text: 'Weekly "Prototype Study Group" held, mainly with university students', year: '2023', status: 'done' },
              { text: 'Regular sessions from April — starting with Claude Code', year: '2026', status: 'next' },
              { text: 'From summer: parallel study of Claw-based tools and local LLMs', year: '2026', status: 'next' },
              { text: 'Looking for members to run satellite study groups as branch chapters', status: 'help' },
            ],
          },
          JP: {
            tagline: '地域からAI実装の波を、仲間と共に起こす。',
            story: '数年前より地域の経営者や学生と共に、カジュアルな社会実装を目標に、不定期で開催していたプログラミング勉強会。今年4月からは、実用フェーズに入ったエージェントAIにキャッチアップするため、Claude CodeやClaw系ツールなどの最新ツールを相互に学び、教え合う毎月開催の新規プログラムを実施している。\n\n地方都市はもともと技術や情報のキャッチアップが遅れがちだが、このAI時代に、1〜2年の技術的な遅れが、地場の事業者やローカルの学生にとって致命的なダメージになる可能性がある。それを少しでも防ぎ、地域の沈没を防ぐために、ともに最新のAIを学び、周囲に拡散してくれる仲間を急ぎ増やす必要がある。',
            outcomes: [
              { text: '大学生を中心とした「プロトタイプ勉強会」を毎週開催', year: '2023', status: 'done' },
              { text: '4月より定期開催。最初は「Claude Code」から', year: '2026', status: 'next' },
              { text: '夏以降、Claw系ツールとローカルLLMの学習を並行で開始', year: '2026', status: 'next' },
              { text: '分室として勉強会を運営してくれるメンバーを複数募集', status: 'help' },
            ],
          },
        },
        imgSrc: '/images/resize/ai-study.jpg',
        imgAlt: 'AI社員育成計画 — 地域の経営者・学生とAIを学ぶ月例プログラム',
      },
      {
        archived: true,
        slug: 'sakimeshi',
        tag: { EN: 'Business Support', JP: '事業者支援' },
        year: { EN: '2020 / Sasebo', JP: '2020年　／　佐世保市' },
        title: { EN: 'Sakimeshi', JP: 'さきめし' },
        desc: {
          EN: 'A digital meal-voucher service to support COVID-hit restaurants. Proposed the concept and name to Fukuoka-based IT firm Gigi. Earned a Good Design Award and major support from Suntory, growing into a nationally recognized platform.',
          JP: 'コロナ禍の飲食店を支援するデジタル前売り券サービス。企画とサービス名を起案し、福岡のIT企業Gigiに提案。グッドデザイン賞受賞・サントリーの大型支援を獲得し、全国的なサービスへと成長した。',
        },
        detail: {
          EN: {
            tagline: 'A name and an insight that sparked a national movement.',
            story: 'When COVID-19 hit in early 2020, restaurants across Japan were watching their customers disappear overnight. Looking for a way to help local diners survive the crisis, the concept of a digital prepaid meal-voucher service took shape — a simple idea: buy a meal now, eat it later.\n\nThe concept and the name "Sakimeshi" were proposed to Fukuoka-based IT firm Gigi, and the first participating restaurant was a beloved diner in Sasebo. From that single shop, the service spread rapidly across Japan, eventually attracting major support from Suntory and earning a Good Design Award — a testament to how a locally-rooted idea can scale when the timing and need align.',
            outcomes: [
              { text: 'Concept and name "Sakimeshi" proposed to Gigi', year: '2020', status: 'done' },
              { text: 'First Sakimeshi restaurant launched in Sasebo', year: '2020', status: 'done' },
              { text: 'Service expanded nationally', year: '2020', status: 'done' },
              { text: 'Major support secured from Suntory', year: '2020', status: 'done' },
              { text: 'Good Design Award received', year: '2020', status: 'done' },
            ],
          },
          JP: {
            tagline: '一つの名前と着想が全国規模のムーブメントを生む',
            story: '2020年初頭、コロナ禍で飲食店の客足が一夜にして消えていった。静まりかえる街並みを歩きながら、日々美味しい食事を提供するオーナーたちの努力とは無関係な、その理不尽さに怒りと悔しさを感じていた。なにか地域の金融機関としてできないか。そうして地元の飲食店を守るためにひらめいたのが、デジタル前売り券という仕組み。「先払いして、後で食べる」というシンプルなアイデアだ。\n\n企画とサービス名「さきめし」を福岡のIT企業Gigiに提案し、さきめし1号店は佐世保の四軒目食堂からスタートした。そこから全国に急速に広がり、サントリーの大型支援獲得やグッドデザイン賞受賞など、地域発の一つのアイデアがタイミングと必要性が重なることで全国規模に育っていった。',
            outcomes: [
              { text: '「さきめし」の企画・ネーミングをGigiに提案', year: '2020', status: 'done' },
              { text: 'さきめし1号店（佐世保・四軒目食堂）スタート', year: '2020', status: 'done' },
              { text: '全国展開へ', year: '2020', status: 'done' },
              { text: 'サントリーによる大型支援を獲得', year: '2020', status: 'done' },
              { text: 'グッドデザイン賞受賞', year: '2020', status: 'done' },
            ],
          },
        },
        imgSrc: '/images/resize/sakimeshi.jpg',
        imgAlt: 'さきめし — コロナ禍の飲食店を支援するデジタル前売り券サービス',
      },
      {
        archived: true,
        slug: 'machi-gakushoku',
        tag: { EN: 'Student Support', JP: '学生支援' },
        year: { EN: '2020 / Sasebo', JP: '2020年　／　佐世保市' },
        title: { EN: "Machi no Gakushoku", JP: 'まちの学食' },
        desc: {
          EN: 'A project to support university students struggling during COVID-19 — unable to attend classes or work part-time jobs, many were facing mental health challenges. Funded by donations from local businesses, partner restaurants near campus offered free meals to students. Around 4,000 meals were provided in total.',
          JP: 'コロナ禍で授業もアルバイトも失い、心を病む大学生を支援するために始めたプロジェクト。地域企業の寄付を原資に、大学近くの飲食店で学生が無償で食べられるメニューを用意。約4,000食が提供された。',
        },
        detail: {
          EN: {
            tagline: 'When students had nowhere to go, the town became their cafeteria.',
            story: 'In the summer of 2020, universities were still largely closed and part-time jobs had dried up. Reports of students struggling with isolation and mental health began to surface — and the need for both food and human connection was clear.\n\nThe idea was straightforward: gather donations from local businesses and use them to fund free meals at restaurants near campus. Students could walk in, eat, and feel a little less alone. The project provided around 4,000 meals in total — not just food, but small moments of warmth during an isolating time.',
            outcomes: [
              { text: 'Launched with donations from local businesses', year: '2020', status: 'done' },
              { text: 'Approx. 4,000 free meals provided to students', year: '2020', status: 'done' },
            ],
          },
          JP: {
            tagline: '学生の居場所がなくなったとき、まちが食堂になった。',
            story: '2020年夏、大学の授業はまだほぼ閉鎖され、アルバイトも消えていた。孤立や心の不調を抱える学生の声が聞こえはじめ、食と居場所の両方が必要だと感じた。\n\n地域企業に寄付を募り、大学近くの飲食店で学生が無償で食べられるメニューを用意した。学生はふらっと立ち寄り、食事をとり、少しだけ孤独から解放された。期間中に合計約4,000食が提供された。\n\nこれはただの食事の提供ではなく、故郷を離れ、見知らぬ街で孤独に過ごす学生に「あなたを気にかけている大人たちがこの街にはいる」というメッセージを伝える意味もあった。そうした思いやりに共感する地域企業の輪が広がっていった——心温まるプロジェクトとなった。',
            outcomes: [
              { text: '地域企業の寄付によりプロジェクト始動', year: '2020', status: 'done' },
              { text: '学生への無償提供　約4,000食', year: '2023', status: 'done' },
            ],
          },
        },
        imgSrc: '/images/resize/machi-gakushoku.jpg',
        imgAlt: 'まちの学食 — コロナ禍の大学生を支援する無償食事プロジェクト',
      },
    ],
    archiveCta: { EN: 'View Complete Archive', JP: 'アーカイブを見る' },
  },

  about: {
    EN: {
      role: 'Bank Employee / Local Planner',
      bio: 'After beginning my career in documentary and video production at a major Tokyo production company, I relocated to Nagano, where I organized events and helped local businesses tell their stories from a coworking space. That experience gradually drew me into community-based work.\n\nIn 2019, I moved to Sasebo in Nagasaki Prefecture. I now serve as Deputy Director of the Community Development Division at Saikai Mizuki Shinkumi Bank and as a board member of Mortar, an educational nonprofit.\n\nMy work sits at the intersection of regional development, inquiry-based learning for schools, and support for local businesses. I collaborate with local governments, companies, educators, and grassroots communities to develop projects that strengthen the long-term vitality of regional ecosystems.',
      summary: 'Community builder, planner & bank employee based in Sasebo. Board member of an educational nonprofit.',
      viewProfile: 'View Profile →',
      skills: ['Social Project Planning & Implementation', 'Inquiry-Based Learning & PBL Curriculum Design', 'Youth Development Program Management', 'Facilitation', 'Community Mapping'],
      backLabel: '← Back',
      ctaLabel: 'Start a Conversation →',
      photoCaption: 'Yoshimasa Nishinobu @ Sasebo\n"Surpass your father!"',
      base: 'Nagasaki Prefecture',
      since: '2019',
    },
    JP: {
      role: '金融機関職員 / ローカルプランナー',
      bio: '東京の大手映像プロダクションでドキュメンタリーなどの映像制作に従事。その後長野県に移住し、現地のコワーキングスペースを拠点にイベント企画や地元企業のPR支援などをおこなう。以後、全国の地域と関わる仕事が増える。\n\n2019年、長崎県佐世保市に移住。西海みずき信用組合 地域振興室 副室長、共感結社モルタル（教育系の社団）の理事として、地域に根を下ろして活動している。\n\n地域振興・学校の探究学習支援・事業者支援の交差点に立ち、自治体・企業・学校・草の根コミュニティと連携しながら、地域のエコシステムに長期的な活力をもたらすプロジェクトを構築しています。',
      summary: '佐世保を拠点とするコミュニティビルダー、プランナー、金融機関職員。教育系社団理事。',
      viewProfile: 'プロフィールを見る →',
      skills: ['ソーシャルプロジェクトの企画＆実装', '探究学習・PBLカリキュラムの設計', '若者育成プログラム運営', 'ファシリテーション', 'コミュニティマッピング'],
      backLabel: '← 戻る',
      ctaLabel: '話しかけてみる →',
      photoCaption: '西信 好真 ＠佐世保\n「父を越えてゆけ！」',
      base: '長崎県',
      since: '2019',
    },
  },

  workPage: {
    EN: {
      title: 'All Projects',
      subtitle: 'A complete record of community initiatives, design projects, and civic programs.',
      backLabel: '← Back to Home',
    },
    JP: {
      title: '全プロジェクト',
      subtitle: 'コミュニティプロジェクト・デザイン活動・市民プログラムの全記録。',
      backLabel: '← ホームに戻る',
    },
  },

  footer: {
    EN: {
      badge: '[ Open For Collaborations ]',
      h2: ['Ready to', "Let's Do It!"],
      body: "If you'd like to support any of the projects listed here, or if something caught your attention — please feel free to reach out!",
      cta: 'Start a Conversation',
      bgText1: 'TELL ME',
      bgText2: 'YOUR VOICE',
      copy: '© 2026 Yoshimasa Nishinobu',
    },
    JP: {
      badge: '[ コラボレーション受付中 ]',
      h2: ['一緒に', 'やりましょう！'],
      body: '掲載しているプロジェクトを応援したい方、その他、なにかピンときた方はお気軽にご連絡ください！',
      cta: '声をかける',
      bgText1: '聞かせてください',
      bgText2: 'あなたの声で',
      copy: '© 2026 Yoshimasa Nishinobu',
    },
    social: [
      { label: 'Mail', href: 'mailto:yoshimasa.nishinobu@gmail.com?subject=ポートフォリオサイトからの連絡&body=西信様%0Aポートフォリオサイトを見て連絡をしました。%0A%0A', hoverBg: '#FF3131', hoverColor: '#FFFFFF' },
      { label: 'Facebook', href: 'https://www.facebook.com/ynishinobu', hoverBg: '#2E5BFF', hoverColor: '#FFFFFF' },
      { label: 'Note.jp', href: 'https://note.com/yoshio333333', hoverBg: '#FFF133', hoverColor: '#000000' },
    ],
  },
  awards: {
    label: { EN: '[ Projects & Recognition ]', JP: '[ プロジェクト実績 ]' },
    items: [
      {
        award: { EN: '1st Shinkumi Brand Award — Grand Prize', JP: '第１回しんくみブランド表彰　大賞' },
        project: { EN: 'Machi no Gakushoku', JP: 'まちの学食' },
        role: { EN: 'Planning & Implementation', JP: '企画・実装' },
        slug: 'machi-gakushoku',
      },
      {
        award: { EN: '19th Corporate Philanthropy Award', JP: '第19回企業フィランソロピー賞' },
        project: { EN: 'Machi no Gakushoku', JP: 'まちの学食' },
        role: { EN: 'Planning & Implementation', JP: '企画・実装' },
        slug: 'machi-gakushoku',
      },
      {
        award: { EN: 'Good Design Award — Good Focus / Best 100', JP: 'グッドデザイン グッドフォーカス賞 ／ ベスト100' },
        project: { EN: 'Sakimeshi', JP: 'さきめし' },
        role: { EN: 'Project Initiation & Naming', JP: '企画起案・ネーミング' },
        slug: 'sakimeshi',
      },
    ],
  },
} as const;
