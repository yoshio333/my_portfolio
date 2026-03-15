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
            tagline: 'Memory as archive.',
            story: "When a beloved local restaurant closes, it's not just the food that disappears — the owner's stories, the regulars' rituals, and recipes passed down without ever being written all vanish too. Noren Bank creates ZINEs that capture it all: an interview with the owner, memories from loyal customers, and the recipes that defined the place. Like a seed bank for culture, we preserve what would otherwise be lost.",
            outcomes: ['ZINEs published and distributed locally', 'Restaurants documented across Sasebo', 'Available at libraries and community spaces', 'Ongoing project since 2023'],
          },
          JP: {
            tagline: '記憶を、アーカイブする。',
            story: '名店が閉まるとき、料理だけでなく、その場に宿っていた物語も消えていく。のれんバンクは、店主へのインタビュー・常連客の思い出・当時のレシピをZINEにまとめ、街の無形文化を後世へ手渡します。',
            outcomes: ['ZINEを制作・配布', '佐世保市内の名店をアーカイブ', '地域図書館・コミュニティスペースで閲覧可能', '2023年より継続中'],
          },
        },
        imgSrc: '/images/resize/noren-bank.jpg',
        imgAlt: 'のれんバンク — 街の名店の記憶を残すZINEプロジェクト',
      },
      {
        slug: 'on-c',
        tag: { EN: 'Community Space', JP: 'コラボレーションスペース' },
        year: { EN: '2024– / Sasebo', JP: '2024年〜 / 佐世保市' },
        title: { EN: 'on°C (Ondo)', JP: 'on°C（オンド）' },
        desc: {
          EN: 'A collaboration space co-run with local businesses, connecting the town with students and raising the temperature of the community. Hosting unique events like "Intern Clinic" and "Battle the Boss."',
          JP: 'まちと学生をつなぐコラボレーションスペース。「社長とバトる。」など地域の温度を上げるユニークな企画を、事業者とともに運営。',
        },
        detail: {
          EN: {
            tagline: 'Raise the temperature.',
            story: 'on°C (Ondo) is a collaboration space co-run with local Sasebo businesses, designed to connect the town with students and heat up the local community. From "Intern Clinic" — where students with top company offers coach local CEOs on the latest job-hunting trends — to "Battle the Boss," where executives and students face off in impromptu presentations, on°C hosts events that spark unexpected connections. It also serves as a student study room and community kitchen.',
            outcomes: ['Unique events co-produced with local businesses', 'Students and CEOs connected through hands-on programs', 'Used as study room, community kitchen, and event venue', 'Ongoing since 2024'],
          },
          JP: {
            tagline: '地域の温度を上げる。',
            story: '地域の事業者とともに企画運営する、まちと学生をつなぐコラボレーションスペース。大手内定学生が地元企業の社長に就活の最新事情をレクチャーする「インターンクリニック」、社長と学生が初見のスライドでプレゼン力を競う「社長とバトる。」など、ユニークな企画が続々。学生の自習室・こども食堂としても活用されている。',
            outcomes: ['地域事業者と共同プログラムを企画・運営', '学生と社長をつなぐ独自イベントを継続開催', '自習室・こども食堂としても地域に開放', '2024年より継続中'],
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
            tagline: 'Learning alongside, not from above.',
            story: 'When Nagasaki Kita High School reached out for help redesigning its inquiry curriculum, we assembled a 7-member volunteer team of local professionals — not to lecture, but to walk alongside. For three years, Polaris Q co-designs and co-runs inquiry sessions with the incoming class of 2025, helping students find their own questions and build the capacity to pursue them. A new model for school-community collaboration.',
            outcomes: ['7 volunteer professionals assembled', '3-year inquiry program co-designed', 'New school-community PBL model in development', 'Ongoing since 2025'],
          },
          JP: {
            tagline: '隣で、一緒に学ぶ。',
            story: '長崎北高校からの依頼を受け、地域の民間人有志7名からなる専門家チームを結成。2025年入学の新1年生に対して、3年間の探究プログラムの設計から授業の伴走まで一貫して関わる。教える側・教えられる側という関係を超えた、民学連携PBLの新しい形をめざしている。',
            outcomes: ['民間有志7名のチームを結成', '3年間の探究プログラムを共同設計', '民学連携PBLの新モデルを構築中', '2025年より継続中'],
          },
        },
        imgSrc: '/images/resize/polaris-q.jpg',
        imgAlt: 'ポラリスQ — 長崎北高探究支援チーム',
      },
      {
        slug: 'dummy-4',
        tag: { EN: 'Community', JP: 'コミュニティ' },
        year: { EN: '2025〜 / Higashisonogi, Sasebo, Karatsu', JP: '2025年〜　／　東彼杵町、佐世保市、唐津市' },
        title: { EN: 'Goccco', JP: 'Goccco（ゴッコ）' },
        desc: {
          EN: "A program turning kids' simple dreams into real businesses — right now. With adults stepping back, kids like 'Goodbye Stiff Shoulders' and 'Pokéjan' discover genuine agency and build confidence that lasts.",
          JP: '子どもの夢を、今すぐ商いに変えるプログラム。「グッバイ肩こり」「ポケじゃん」など、大人が口を出さないことで本物の自信と自己効力感が育まれる。',
        },
        detail: {
          EN: {
            tagline: 'Children\'s dreams, turned into real business.',
            story: 'A program supporting children in turning their simple dreams into real businesses right now. By keeping adults from interfering, kids come to life with genuine energy.',
            outcomes: ['In planning'],
          },
          JP: {
            tagline: '子どもの夢を、今すぐ商いに。',
            story: '子どもたちの素朴な夢を、今すぐ商いの形で実現することを支援するプログラム。大人が余計な横槍を入れないことで、子どもたちは生き生きと学びを深めていく。',
            outcomes: ['準備中'],
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
          EN: "Co-hosting Nagasaki's largest high school inquiry summit with NPO Katariba. Now in its 4th year, the event has produced a Minister of Education Award winner — leading inquiry-based learning across the prefecture.",
          JP: 'カタリバと連携し、長崎県内最大の高校の探究学習発表サミットを主催。今年で4回目の開催。昨年度は文部科学大臣賞受賞プロジェクトも生まれ、長崎の探究学習を牽引している。',
        },
        detail: {
          EN: {
            tagline: 'Elevating student inquiry across Nagasaki.',
            story: 'Partnering with Katariba, a leading education NPO, we host a summit where high school students present and share their inquiry-based learning projects. Now in its fourth year, the event has helped fuel growing momentum for inquiry-based education in Nagasaki—last year, one participating team went on to win the Minister of Education Award.',
            outcomes: ['4th annual summit', 'Minister of Education Award recipient emerged from program', 'Partnership with Katariba NPO'],
          },
          JP: {
            tagline: '長崎の高校生の探究を、県全体で育てる。',
            story: '大手教育系NPOカタリバと連携し、高校生の探究学習の発表と学びの大会を主催している。今年で4回目の開催となり、昨年度は文部科学大臣賞を受賞するプロジェクトが生まれるなど、長崎での探究学習の気運の高まりの一翼を担っている。',
            outcomes: ['4回目の開催', '文部科学大臣賞受賞プロジェクトを輩出', 'カタリバとの協働'],
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
          JP: '地域の経営者・学生と共にエージェントAIを学ぶ月例プログラム。Claude CodeやClaw系ツールなどを互いに教え合いながら習得を目指す。技術の進化に流されない地域の強さを探していく。',
        },
        detail: {
          EN: {
            tagline: 'Learning AI together, one month at a time.',
            story: 'What started as a casual, irregular programming study group with local business owners and students—focused on social implementation—has evolved into a monthly program. Now in its practical phase, participants teach and learn from each other on Claude Code and other AI agent tools, building hands-on AI capability from the ground up.',
            outcomes: ['Monthly sessions launched 2025', 'Peer-led learning model', 'Community of local business owners & students'],
          },
          JP: {
            tagline: '地域からAI実装の波を、仲間と共に起こす。',
            story: '数年前より地域の経営者や学生と共に、カジュアルな社会実装を目標に、不定期で開催していたプログラミング勉強会。今年4月からは、実用フェーズに入ったエージェントAIにキャッチアップするため、Claude Codeなどの最新ツールを相互に学び教え合う毎月開催のプログラムを実施している。',
            outcomes: ['2025年4月より月例開催', '経営者・学生の相互学習モデル', 'エージェントAIの実務実装を目指す'],
          },
        },
        imgSrc: '/images/resize/ai-study.jpg',
        imgAlt: 'AI社員育成計画 — 地域の経営者・学生とAIを学ぶ月例プログラム',
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
      { label: 'Mail', href: 'mailto:hello@example.com', hoverBg: '#FF3131', hoverColor: '#FFFFFF' },
      { label: 'Facebook', href: '#', hoverBg: '#2E5BFF', hoverColor: '#FFFFFF' },
      { label: 'Note.jp', href: '#', hoverBg: '#FFF133', hoverColor: '#000000' },
    ],
  },
  awards: {
    label: { EN: '[ Projects & Recognition ]', JP: '[ プロジェクト実績 ]' },
    items: [
      {
        award: { EN: '1st Shinkumi Brand Award — Grand Prize', JP: '第１回しんくみブランド表彰　大賞' },
        project: { EN: 'Machi no Gakushoku', JP: 'まちの学食' },
        role: { EN: 'Planning & Implementation', JP: '企画・実装' },
      },
      {
        award: { EN: '19th Corporate Philanthropy Award', JP: '第19回企業フィランソロピー賞' },
        project: { EN: 'Machi no Gakushoku', JP: 'まちの学食' },
        role: { EN: 'Planning & Implementation', JP: '企画・実装' },
      },
      {
        award: { EN: 'Good Design Award — Good Focus / Best 100', JP: 'グッドデザイン グッドフォーカス賞 ／ ベスト100' },
        project: { EN: 'Sakimeshi', JP: 'さきめし' },
        role: { EN: 'Project Initiation & Naming', JP: '企画起案・ネーミング' },
      },
    ],
  },
} as const;
