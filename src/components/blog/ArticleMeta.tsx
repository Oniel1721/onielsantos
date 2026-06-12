interface ArticleMetaProps {
  author: string;
  date: string;
  sourceHref: string;
  sourceLabel: string;
}

export function ArticleMeta({
  author,
  date,
  sourceHref,
  sourceLabel,
}: ArticleMetaProps) {
  return (
    <div className="flex items-center flex-wrap gap-4 py-5 border-t border-b border-[#1e2535] mb-12 font-sans text-sm text-slate-500">
      <span>
        Por <span className="text-slate-200 font-semibold">{author}</span>
      </span>
      <span className="text-[#334155]">·</span>
      <span>{date}</span>
      <span className="text-[#334155]">·</span>
      <a
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-[var(--primary)] no-underline border border-[#0b3d52] px-3 py-1 rounded transition-colors hover:bg-[#0b3d52]"
      >
        {sourceLabel}
      </a>
    </div>
  );
}
