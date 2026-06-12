export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0a1f2e] border border-[#0b3d52] rounded-lg px-6 py-5 my-8">
      {title && (
        <div className="font-sans text-xs font-bold tracking-widest uppercase text-(--primary) mb-3">
          {title}
        </div>
      )}
      <div className="font-sans text-sm text-slate-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
