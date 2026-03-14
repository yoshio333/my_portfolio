import { CONTENT } from '@/lib/content';
import FocusDetailClient from './FocusDetailClient';

export async function generateStaticParams() {
  return CONTENT.focus.items.map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function FocusDetailPage({ params }: Props) {
  const { slug } = await params;
  return <FocusDetailClient slug={slug} />;
}
