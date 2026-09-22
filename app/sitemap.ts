import { MetadataRoute } from 'next';
import { CONTENT } from '@/lib/content';

const siteUrl = 'https://y-nishinobu.soitgoes.page';

// /ai/ 配下のAI活動レポート（public/ai/ の静的HTML）。新しい回を足したらここにも1行足す。
const AI_REPORTS = [
  { file: 'tosu-report-2026-09-17.html', lastmod: '2026-09-23' },
  { file: 'hackathon-report-2026-08-22.html', lastmod: '2026-08-26' },
  { file: 'ochiai-talk-2026-08-22.html', lastmod: '2026-08-26' },
  { file: 'hackathon-report-2026-07-27.html', lastmod: '2026-07-28' },
  { file: 'student-showcase-report-2026-07-24.html', lastmod: '2026-07-30' },
  { file: 'koryukai-report-2026-07-07.html', lastmod: '2026-07-28' },
  { file: 'event-proposal.html', lastmod: '2026-09-23' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tankyu/`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // AI活動レポート一覧＋各回（2026-09-23 に ambassador-report.vercel.app から移設）
    {
      url: `${siteUrl}/ai/`,
      lastModified: new Date('2026-09-23'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...AI_REPORTS.map((r) => ({
      url: `${siteUrl}/ai/${r.file}`,
      lastModified: new Date(r.lastmod),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...CONTENT.work.cards.map((card) => ({
      url: `${siteUrl}/work/${card.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
