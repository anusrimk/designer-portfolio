import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { works, getWork } from "@/lib/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.name} — Anusri Karmokar`,
    description: work.metaLine1,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return <CaseStudyLayout item={work} backHref="/#works" backLabel="← Works" />;
}
