export function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d1520] border border-[#1e2535] rounded-md px-4 py-3 my-4 font-sans text-xs text-slate-500 leading-relaxed">
      {children}
    </div>
  );
}
