export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (React.ReactNode[] | { cells: React.ReactNode[]; highlight?: boolean })[];
}) {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-[#1e2535]">
      <table className="w-full border-collapse font-sans text-sm">
        <thead className="bg-[#141824]">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold tracking-widest uppercase text-slate-500 border-b border-[#1e2535]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const cells = Array.isArray(row) ? row : row.cells;
            const highlight = !Array.isArray(row) && row.highlight;
            return (
              <tr
                key={i}
                className={
                  highlight
                    ? "bg-[#0b1c2e] text-slate-100"
                    : "border-b border-[#131929] last:border-0 hover:bg-[#141824]"
                }
              >
                {cells.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-slate-300 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
