import { MetadataRoute } from 'next';
import { CONTENT } from '@/lib/content';

const siteUrl = 'https://y-nishinobu.soitgoes.page';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
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
    ...CONTENT.work.cards.map((card) => ({
      url: `${siteUrl}/work/${card.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
