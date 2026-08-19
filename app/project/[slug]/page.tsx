import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { archiveItems, getArchiveItem } from "@/lib/archive";

export function generateStaticParams() {
  return archiveItems.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) return {};
  return {
    title: `${item.name} — Anusri Karmokar`,
    description: item.metaLine1,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) notFound();

  return <CaseStudyLayout item={item} backHref="/#archive" backLabel="← Archive" />;
}
