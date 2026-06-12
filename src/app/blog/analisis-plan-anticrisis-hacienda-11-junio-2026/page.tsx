import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogNav } from "@/components/blog/BlogNav";

export const metadata: Metadata = {
  title: "Análisis Plan Anticrisis — Hacienda, 11 de junio 2026",
  description:
    "Análisis artículo por artículo del Plan Anticrisis presentado por el Ministerio de Hacienda de República Dominicana el 11 de junio de 2026.",
};

const articles = [
  {
    slug: "sobretasa-isr-empresarial",
    category: "Consolidación fiscal",
    title: "Sobretasa de tres puntos porcentuales al ISR Empresarial",
    excerpt:
      "La principal medida del plan: elevar el ISR empresarial al 30% durante tres años para las ~1,000 empresas con ingresos superiores a RD$1,000 millones anuales. Un análisis de su alcance real, las empresas afectadas, y los efectos invisibles sobre precios, empleo y competencia.",
    date: "12 jun 2026",
    readTime: "12 min",
  },
];

export default function PlanAnticrisisIndexPage() {
  return (
    <div className="bg-[#0f1117] min-h-screen text-slate-200">
      <BlogNav
        crumbs={[
          { label: "onielsantos.com" },
          { label: "Plan Anticrisis 2026" },
        ]}
      />

      <div className="mx-auto max-w-215 px-6 pt-16 pb-24">
        <div className="font-sans text-xs font-bold tracking-[0.14em] uppercase text-(--primary) mb-4">
          Análisis · República Dominicana
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-tight tracking-tight mb-4">
          Plan Anticrisis
          <br />
          Ministerio de Hacienda
        </h1>

        <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl mb-2">
          Análisis artículo por artículo del plan presentado el 11 de junio de
          2026. Cada entrada examina el contexto histórico, el alcance real y
          los efectos sobre la población dominicana.
        </p>

        <a
          href="https://www.hacienda.gob.do/plan-anticrisis-del-gobierno-incluye-amnistia-fiscal-eliminacion-del-anticipo-eleva-deducciones-educativas-y-establece-otras-medidas-para-impulsar-la-economia/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-xs text-(--primary) no-underline border border-[#0b3d52] px-3 py-1.5 rounded transition-colors hover:bg-[#0b3d52] mb-12"
        >
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Comunicado oficial — Ministerio de Hacienda, 11 jun 2026
        </a>

        <div className="flex flex-col gap-px bg-[#1e2535] rounded-xl overflow-hidden border border-[#1e2535]">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              href={`/blog/analisis-plan-anticrisis-hacienda-11-junio-2026/${a.slug}`}
              category={a.category}
              title={a.title}
              excerpt={a.excerpt}
              date={a.date}
              readTime={a.readTime}
            />
          ))}
        </div>

        <div className="mt-8 py-6 border border-dashed border-[#1e2535] rounded-lg text-center font-sans text-sm text-slate-600">
          Más análisis del plan en curso — amnistía fiscal, anticipo del ISR,
          deducciones educativas y otras medidas.
        </div>
      </div>
    </div>
  );
}
