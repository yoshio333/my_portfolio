import { CONTENT } from '@/lib/content';
import WorkDetailClient from './WorkDetailClient';

export async function generateStaticParams() {
  return CONTENT.work.cards.map((card) => ({ slug: card.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  return <WorkDetailClient slug={slug} />;
}
