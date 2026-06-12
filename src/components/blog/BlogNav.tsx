import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function BlogNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="border-b border-[#1e2535] py-4">
      <div className="mx-auto max-w-195 px-6 flex items-center gap-2 font-sans text-sm text-slate-500">
        {crumbs.map((crumb, i) => (
          <span key={crumb.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-[#334155]">/</span>}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-(--primary) hover:underline"
              >
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
