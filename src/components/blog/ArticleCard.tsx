import Link from "next/link";

interface ArticleCardProps {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export function ArticleCard({
  href,
  category,
  title,
  excerpt,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-[#141824] p-8 text-inherit no-underline transition-colors hover:bg-[#181f2e]"
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <span className="bg-[#0b3d52] text-(--primary) font-sans text-[0.68rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
          {category}
        </span>
        <div className="flex items-center gap-3 font-sans text-xs text-slate-600">
          <span>{date}</span>
          <span className="text-[#1e2535]">·</span>
          <span>{readTime} lectura</span>
        </div>
      </div>

      <div className="text-lg font-bold text-slate-100 leading-snug tracking-tight mb-2">
        {title}
      </div>

      <div className="font-sans text-sm text-slate-500 leading-relaxed mb-5 max-w-2xl">
        {excerpt}
      </div>

      <div className="flex items-center gap-1.5 font-sans text-[0.82rem] font-semibold text-(--primary)">
        Leer análisis{" "}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
