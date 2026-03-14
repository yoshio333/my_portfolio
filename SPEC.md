# SPEC.md — Portfolio Site Specification

> Based on prototype: `react-app.js` (Variant)
> Target: Portfolio for a person involved in education, youth support, and regional revitalization in rural Japan

---

## 1. Design Direction

### Concept

**"Brutalist Warmth"**
> A neo-brutalist editorial design system — bold borders, raw typography, flat colors — softened by a mission-driven human tone. The aesthetic signals credibility and seriousness without losing the warmth and humor that defines grassroots community work.

### Tone

| Not this | But this |
|----------|----------|
| Polished corporate | Honest and direct |
| Cute/gentle NPO | Bold and purposeful |
| Minimalist silence | Structured energy |
| Self-promotional | Mission-first |
| Cold modernism | Warm brutalism |

### Color Scheme

| Role | Name | HEX |
|------|------|-----|
| Base (background) | White | `#FFFFFF` |
| Base (text) | Black | `#000000` |
| Accent 1 — Energy | Signal Red | `#FF3131` |
| Accent 2 — Trust | Royal Blue | `#2E5BFF` |
| Accent 3 — Joy | Neon Yellow | `#FFF133` |
| Surface (neutral) | Light Grey | `#E0E0E0` |

**Usage rules:**
- White/Black: structural base, borders always `2px solid #000000`
- Signal Red: CTAs, tags, highlight moments
- Royal Blue: section headers, interactive states
- Neon Yellow: selection highlight, badges, hover fills

### Typography

#### Latin (Primary)

| Font | Weights | Usage |
|------|---------|-------|
| **Space Grotesk** | 300, 400, 500, 600, 700 | Body text, descriptions, UI labels |
| **Space Mono** | 400, 700 (+ italic) | Section labels, tags, monospace badges, nav, footers |

#### Japanese (Secondary)

| Font | Weights | Usage |
|------|---------|-------|
| **Noto Sans JP** | 300, 400, 700 | All Japanese body copy |
| **M PLUS 1p** | 700, 900 | Japanese headings (when JP mode active) |

**Typography rules:**
- Headings: `Space Grotesk` 700–900, `letter-spacing: -0.05em`, `text-transform: uppercase`
- Section labels: `Space Mono` 700, `font-size: 0.875rem`, uppercase with `[ brackets ]`
- Body: `Space Grotesk` 300–500, `line-height: 1.6`
- Monospace tags/badges: `Space Mono` 700
- JP mode: swap heading font to `M PLUS 1p`, body to `Noto Sans JP`; keep all layout unchanged

---

## 2. Section Structure

### [00] Header / Global Nav

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ [■] KENJI SATO        Mission  Focus Areas  Selected Work   │
│                                             [EN|JP] [Say Hello→] │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- Logo: small red square `■` + `KENJI SATO` (bold, uppercase, tracking tight)
- Nav links: `Mission` / `Focus Areas` / `Selected Work` (anchor links)
- Language toggle: `[EN|JP]` pill — black bg, yellow active state
- CTA: `Say Hello` button with brutal shadow

**Interaction:**
- Fixed position, `z-index: 50`, `backdrop: #FFFFFF`
- Nav links: hover fills background with per-link accent color
- CTA button: hover → bg `#2E5BFF`, color `#FFFFFF`; brutal shadow lifts on hover (`translate(4px, 4px)`)
- Language toggle: clicking JP switches all text to Japanese (via `next-intl`); no page reload
- Mobile: nav links hidden (`hidden-mobile`), hamburger menu at `< 768px`

---

### [01] Hero Section (`#mission`)

**Layout:**
```
┌────────────────────────────────┬──────────────────────────────┐
│                      ○ spin   │                              │
│  [ 01 — INTRO ]               │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                               │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  Planting                     │  ░  [Photo — Rural Japan]  ░ │
│  Seeds for   (outline)        │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  Local                        │  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  Futures.                     │                              │
│                               │  ┌─────────────────────┐    │
│  [description]  [↓ btn]       │  │ Current Base         │    │
│                               │  │ Nagano Prefecture    │    │
│                               │  │ LAT: 36.6485° N      │    │
│                               │  └─────────────────────┘    │
└────────────────────────────────┴──────────────────────────────┘
```

**Content:**
- Badge: `[ 01 — INTRO ]` in yellow
- H1 (EN): `Planting / Seeds for / Local / Futures.`
  - "Seeds for" rendered as text-outline (transparent fill, black stroke)
- H1 (JP): `地域に／種を／まく。`
- Body (EN): `I collaborate with regional cities to design sustainable communities, focusing on **education** and **youth empowerment**.`
- Body (JP): `地方都市と連携し、**教育**と**若者支援**を軸に、持続可能なコミュニティをデザインします。`
- Location badge: `Current Base / Nagano Prefecture / LAT: 36.6485° N`
- Spinning circle badge: `* 100% LOCALLY SOURCED IDEAS * SUSTAINABLE *`

**Interaction:**
- Circle badge: `animation: spinSlow 12s linear infinite`
- Down arrow button: hover → bg `#2E5BFF`, icon color `#FFFFFF`
- Hero photo: `filter: grayscale(100%)` → `grayscale(0%)` on hover; red offset shadow shifts on hover
- Scroll into view: H1 words slide up with stagger (Framer Motion, `initial: {y:40, opacity:0}`)
- Red shadow div behind photo: `transition: transform 0.3s` on card hover

---

### [02] Marquee Bar

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ ● Regional Revitalization ■ ● Youth Empowerment ■ ● Community Design ■ ● Local Economies → loop │
└─────────────────────────────────────────────────────────────┘
```

**Content (EN):**
`● Regional Revitalization` `● Youth Empowerment` `● Community Design` `● Local Economies`

**Content (JP):**
`● 地域再生` `● 若者支援` `● コミュニティデザイン` `● 地域経済`

**Interaction:**
- `animation: marquee 25s linear infinite`
- Background: `#000000`, text alternates `#FF3131`, `#FFF133`, `#FFFFFF`, `#2E5BFF`
- Decorative square icons between items

---

### [03] Focus Areas (`#focus`)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ [ Core Focus ]                      How We Grow Together    │  ← blue header bar
├────────────────┬────────────────────────────────┬───────────┤
│ 01.            │ Redesigning local curriculums  │ Explore → │
│ Educational    │ to integrate community-based   │           │
│ Ecosystems     │ learning...                    │           │
├────────────────┼────────────────────────────────┼───────────┤
│ 02.            │ Creating safe 'third places'   │ Explore → │
│ Youth          │ for young people in rural      │           │
│ Mentorship     │ areas...                       │           │
├────────────────┼────────────────────────────────┼───────────┤
│ 03.            │ Bridging the gap between local │ Explore → │
│ Civic          │ government planners and the    │           │
│ Dialogue       │ citizens...                    │           │
└────────────────┴────────────────────────────────┴───────────┘
```

**Content (EN):**

| # | Title | Description |
|---|-------|-------------|
| 01 | Educational Ecosystems | Redesigning local curriculums to integrate community-based learning. We connect students with local industries, artisans, and real-world civic challenges rather than just textbooks. |
| 02 | Youth Mentorship | Creating safe 'third places' for young people in rural areas to gather, dream, and build. Facilitating mentorship programs that foster local entrepreneurship and creative confidence. |
| 03 | Civic Dialogue | Bridging the gap between local government planners and the citizens who actually live there. We design participatory workshops that make town planning engaging, accessible, and occasionally fun. |

**Content (JP):**

| # | Title | Description |
|---|-------|-------------|
| 01 | 教育エコシステム | 地域課題に根ざした学びを設計し、地元の産業・職人・行政課題を教材に変えます。 |
| 02 | ユース・メンタシップ | 農村部の若者が集い、夢を描き、挑戦できる「サードプレイス」を創出します。 |
| 03 | 市民対話 | 行政と市民の距離を縮める参加型ワークショップで、まちづくりをもっと身近に。 |

**Interaction:**
- Each row: hover → full-row background swap per-item accent color (`#FFF133` / `#2E5BFF` / `#FF3131`)
- Arrow icon box: rotates or scales on hover per-item config
- Cursor changes to `crosshair` on hover
- Rows animate in on scroll: `initial: {x:-20, opacity:0}` stagger with Framer Motion

---

### [04] Selected Work (`#work`)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ Recent                    [ Portfolio Selects ]             │
│ Initiatives (outline)     A curated look at projects...     │
├──────────────────┬─────────────────────┬────────────────────┤
│ [Education]  →  │   [Space Design] →  │  [Civic Design] →  │
│                  │                     │                    │
│  RED BG CARD     │   YELLOW BG CARD    │  BLUE BG / PHOTO   │
│                  │    (offset top)     │                    │
│ ┌──────────────┐ │ ┌───────────────┐  │ ┌────────────────┐ │
│ │ 2023         │ │ │ 2022          │  │ │ 2024 / Ongoing │ │
│ │ Local Tech   │ │ │ Roots Youth   │  │ │ Town Hall 2.0  │ │
│ │ Camp         │ │ │ Hub           │  │ │                │ │
│ └──────────────┘ │ └───────────────┘  │ └────────────────┘ │
└──────────────────┴─────────────────────┴────────────────────┘
                   [ View Complete Archive → ]
```

**Content:**

| Card | Tag | Year / Location | Title | Description |
|------|-----|-----------------|-------|-------------|
| 1 | Education | 2023 / Kamiyama Town | Local Tech Camp | Empowering middle schoolers with coding skills to solve hyper-local agricultural issues. |
| 2 | Space Design | 2022 / Shiojiri City | Roots Youth Hub | Renovating an abandoned post office into a vibrant community and youth co-working center. |
| 3 | Civic Design | 2024 / Ongoing | Town Hall 2.0 | A workshop series redefining how local policies are drafted, putting youth voices at the table. |

**JP Content titles:** `地域テックキャンプ` / `Rootsユースハブ` / `タウンホール2.0`

**Interaction:**
- Card hover: brutal shadow lifts (`transform: translate(4px,4px)` → `translate(0,0)`)
- Photo card: `grayscale(100%)` → `grayscale(0%)` on hover
- Card 2 is offset `margin-top: 64px` for staggered visual rhythm
- Arrow icon: rotates 90deg or scales 1.25x depending on card
- Cards animate in on scroll: `initial: {y:30, opacity:0}` stagger
- "View Complete Archive" button: hover → bg `#FFF133`, arrow slides right

---

### [05] Footer / Contact (`#contact`)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│        [BG TEXT: LET'S TALK LET'S TALK — large, faint]     │
│        [BG TEXT: YOUR TOWN YOUR TOWN — large, faint]        │
│                                                             │
│              [ Open For Collaborations ]                    │
│                                                             │
│                    Ready to                                 │
│                    Revitalize?                              │
│                                                             │
│     Whether you're a local government, an educational      │
│     institution, or a passionate citizen...                 │
│                                                             │
│              [ Start a Conversation → ]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ■ © 2024 Kenji Sato. Local Focus, Global Mind.             │
│                          Instagram  LinkedIn  Note.jp       │
└─────────────────────────────────────────────────────────────┘
```

**Content (EN):**
- Badge: `[ Open For Collaborations ]`
- H2: `Ready to / Revitalize?`
- Body: `Whether you're a local government, an educational institution, or a passionate citizen, let's build something meaningful together that outlasts us.`
- CTA: `Start a Conversation →` → `mailto:hello@example.com`
- Footer line: `© 2024 Kenji Sato. Local Focus, Global Mind.`

**Content (JP):**
- Badge: `[ コラボレーション受付中 ]`
- H2: `一緒に／つくりませんか？`
- Body: `行政、教育機関、または情熱ある市民の方、共に持続可能な未来をつくりましょう。`
- CTA: `話しかけてみる →`

**Interaction:**
- Background text: `opacity: 0.1`, decorative only, `pointer-events: none`
- CTA button: hover → bg `#2E5BFF`, arrow icon rotates 12deg
- Brutal shadow on CTA button
- Social links: per-link hover color (`#FF3131` / `#2E5BFF` / `#FFF133`)
- Footer fades in on scroll with Framer Motion

---

## 3. Global Interaction Specification

### Scroll Animation

- Library: **Framer Motion** (`useInView` + `motion.div`)
- Default entry: `initial: { opacity: 0, y: 30 }` → `animate: { opacity: 1, y: 0 }`
- Duration: `0.5s`, easing: `easeOut`
- Stagger for lists/grids: `0.1s` delay between children
- Marquee bar: CSS `animation: marquee 25s linear infinite` (no Framer)
- Spinning badge: CSS `animation: spinSlow 12s linear infinite` (no Framer)

### Hover Effects

| Element | Effect |
|---------|--------|
| Brutal shadow cards/buttons | `box-shadow: 8px 8px 0px #000` → `0px 0px 0px #000` + `translate(4px, 4px)` |
| Nav links | Instant bg fill with per-link accent color |
| Focus rows | Full row bg swap + text color flip |
| Work cards | Shadow lift + photo desaturation toggle |
| CTA buttons | Bg color swap + icon transform |
| Arrow boxes | Rotate or scale per config |
| Grayscale images | `filter: grayscale(100%)` → `grayscale(0%)` |

### Page Transitions

- Next.js App Router with Framer Motion `<AnimatePresence>`
- Page enter: `initial: {opacity: 0}` → `animate: {opacity: 1}`, `0.3s`
- Page exit: `animate: {opacity: 0}`, `0.2s`
- No complex slide transitions; clean fade preferred

### Responsive Policy

| Breakpoint | Behavior |
|------------|----------|
| `≥ 1024px` | Full two-column hero, three-column work grid, full nav |
| `768px–1023px` | Two-column hero stacked (55/45 → full width each), two-column work grid |
| `< 768px` | Single column everything; nav hidden, hamburger menu; hero text scales with `clamp()`; work cards full width |

- All section padding scales: `px-6 md:px-12 lg:px-16`
- Font sizes use `clamp()` for fluid type
- `flex-wrap: wrap` with `min-width` guards on all two-column layouts
- Images: `object-fit: cover`, always fill their container

### Selection & Scrollbar

- `::selection`: bg `#FFF133`, color `#000000`
- Custom scrollbar: `width: 12px`, track `#FFFFFF` with `border-left: 2px solid #000000`, thumb `#000000`

---

## 4. Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | **Next.js 14+** (App Router) | `app/` directory, RSC where possible |
| Styling | **Tailwind CSS v3** | Custom config for brand colors, fonts, brutal shadow utilities |
| Animation | **Framer Motion** | Scroll-triggered via `useInView`, page transitions via `AnimatePresence` |
| i18n | **next-intl** | EN (default) + JP; locale switcher in header; no URL prefix, cookie-based |
| Deploy | **Vercel** | Auto-deploy from `main` branch; preview deploys per PR |
| Analytics | **Google Analytics 4** | Via `@next/third-parties/google`; no cookie banner needed for Japan-only audience |

### Tailwind Custom Config (excerpt)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-red':    '#FF3131',
        'brand-blue':   '#2E5BFF',
        'brand-yellow': '#FFF133',
      },
      fontFamily: {
        sans:  ['Space Grotesk', 'Noto Sans JP', 'sans-serif'],
        mono:  ['Space Mono', 'monospace'],
        jp:    ['M PLUS 1p', 'Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        'brutal':    '8px 8px 0px #000000',
        'brutal-sm': '4px 4px 0px #000000',
      },
    },
  },
}
```

### Directory Structure

```
app/
├── [locale]/               # next-intl locale wrapper (en / ja)
│   ├── layout.tsx
│   └── page.tsx            # HomePage
├── globals.css
components/
├── Header.tsx
├── HeroSection.tsx
├── MarqueeBar.tsx
├── FocusSection.tsx
├── WorkSection.tsx
├── Footer.tsx
└── ui/
    ├── BrutalCard.tsx
    ├── BrutalButton.tsx
    └── SectionLabel.tsx
messages/
├── en.json
└── ja.json
public/
└── fonts/                  # Self-hosted Space Grotesk, Space Mono
```

### i18n Message Structure (excerpt)

```json
// messages/en.json
{
  "nav": { "mission": "Mission", "focus": "Focus Areas", "work": "Selected Work", "cta": "Say Hello" },
  "hero": {
    "badge": "[ 01 — INTRO ]",
    "h1_line1": "Planting",
    "h1_line2": "Seeds for",
    "h1_line3": "Local",
    "h1_line4": "Futures.",
    "body": "I collaborate with regional cities to design sustainable communities...",
    "location_label": "Current Base",
    "location_name": "Nagano Prefecture",
    "location_lat": "LAT: 36.6485° N"
  }
}
```

```json
// messages/ja.json
{
  "nav": { "mission": "ミッション", "focus": "重点領域", "work": "実績", "cta": "連絡する" },
  "hero": {
    "badge": "[ 01 — はじめに ]",
    "h1_line1": "地域に",
    "h1_line2": "種を",
    "h1_line3": "",
    "h1_line4": "まく。",
    "body": "地方都市と連携し、教育と若者支援を軸に持続可能なコミュニティをデザインします。",
    "location_label": "活動拠点",
    "location_name": "長野県",
    "location_lat": "LAT: 36.6485° N"
  }
}
```

---

## 5. Open Questions / Decisions Needed

- [ ] 実際の写真素材はあるか？（現状 Unsplash プレースホルダー使用）
- [ ] 実名・所在地・メールアドレスを本番に入れるか確認
- [ ] Note.jp / Instagram / LinkedIn の実URLを取得
- [ ] JP モードでのヘッディングフォントは M PLUS 1p か Noto Sans JP か（視認性テスト必要）
- [ ] 「View Complete Archive」のリンク先はアーカイブページか外部か
- [ ] Google Analytics の Measurement ID

---

*Generated from prototype `react-app.js` · Design System: Brutalist Warmth · Stack: Next.js + Tailwind + Framer Motion + next-intl*
