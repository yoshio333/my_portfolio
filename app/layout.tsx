import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const siteUrl = 'https://y-nishinobu.soitgoes.page';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '西信好真 ポートフォリオ — 夢が育つ土壌を、みなで耕す。',
  description:
    '長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー、西信好真のポートフォリオサイト。',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: '西信好真 ポートフォリオ — 夢が育つ土壌を、みなで耕す。',
    description:
      '長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー、西信好真のポートフォリオサイト。',
    images: [{ url: '/images/profile.jpg', width: 800, height: 800, alt: '西信好真' }],
    siteName: '西信好真 ポートフォリオ',
    locale: 'ja_JP',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '西信好真 ポートフォリオ',
    description: '佐世保発。若者支援・地域振興・オルタナ教育のコミュニティビルダー。',
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: '西信好真',
              alternateName: 'Yoshimasa Nishinobu',
              url: siteUrl,
              image: `${siteUrl}/images/profile.jpg`,
              jobTitle: '地域振興室 副室長',
              worksFor: {
                '@type': 'Organization',
                name: '西海みずき信用組合',
              },
              memberOf: {
                '@type': 'Organization',
                name: '一般社団法人 共感結社モルタル',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: '佐世保市',
                addressRegion: '長崎県',
                addressCountry: 'JP',
              },
              knowsAbout: [
                '若者支援',
                '地域振興',
                'オルタナティブ教育',
                'コミュニティビルド',
                '探究学習',
                'まちづくり',
              ],
              sameAs: [
                'https://www.facebook.com/ynishinobu',
                'https://note.com/yoshimasa_n',
              ],
              description:
                '長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー。西海みずき信用組合 地域振興室 副室長、一般社団法人 共感結社モルタル 理事。2019年より活動。',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
