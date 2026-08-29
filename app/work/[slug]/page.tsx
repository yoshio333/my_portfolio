import { CONTENT } from '@/lib/content';
import WorkDetailClient from './WorkDetailClient';

// generateStaticParams で作った slug 以外は 404 を返す。
// これが無いと、存在しない slug でも 200 で白紙ページが返る（ソフト404）。
export const dynamicParams = false;

export async function generateStaticParams() {
  return CONTENT.work.cards.map((card) => ({ slug: card.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  return <WorkDetailClient slug={slug} />;
}
