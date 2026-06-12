import type { Metadata } from "next";
import Link from "next/link";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { BlogNav } from "@/components/blog/BlogNav";
import { Callout } from "@/components/blog/Callout";
import { DataTable } from "@/components/blog/DataTable";
import { SourceNote } from "@/components/blog/SourceNote";

export const metadata: Metadata = {
  title:
    "Sobretasa de tres puntos porcentuales al ISR Empresarial — Oniel Santos Álvarez",
  description:
    "Análisis de la sobretasa al ISR Empresarial propuesta en el Plan Anticrisis del Ministerio de Hacienda de República Dominicana, junio 2026.",
};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-(--primary) border-b border-dashed border-[#0b3d52] hover:border-(--primary) transition-colors"
    >
      {children}
    </a>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-100 mt-12 mb-4 pb-3 border-b-2 border-[#1e2535] tracking-tight">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-(--primary) font-sans mt-10 mb-3">
      {children}
    </h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-sans text-[0.75rem] font-bold tracking-widest uppercase text-slate-500 mt-8 mb-2">
      {children}
    </h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[1.05rem] leading-[1.8] text-slate-300 mb-5">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-none border-t border-[#1e2535] my-10" />;
}

export default function SobretasaISRPage() {
  return (
    <div
      className="bg-[#0f1117] min-h-screen text-slate-200"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <BlogNav
        crumbs={[
          { label: "onielsantos.com" },
          {
            label: "Plan Anticrisis 2026",
            href: "/blog/analisis-plan-anticrisis-hacienda-11-junio-2026",
          },
          { label: "Sobretasa ISR" },
        ]}
      />

      <article className="mx-auto max-w-195 px-6 pt-12 pb-24">
        <span className="inline-block bg-[#0b3d52] text-(--primary) font-sans text-[0.72rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm mb-6">
          Consolidación fiscal
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight tracking-tight mb-6">
          Sobretasa de tres puntos porcentuales al ISR Empresarial
        </h1>

        <div className="text-lg leading-[1.7] text-slate-400 border-l-[3px] border-(--primary) pl-5 mb-8 italic">
          La principal medida de consolidación fiscal es una sobretasa de tres
          puntos porcentuales al Impuesto sobre la Renta (ISR) Empresarial, que
          se elevaría a 30% durante tres años, aplicable exclusivamente a los
          grandes contribuyentes con ingresos superiores a RD$1,000 millones
          anuales. Esa franja comprende poco más de 1,000 empresas de un
          universo de 140,000 que presentaron declaración del ISR en 2025,
          equivalente a menos del 0.8% del total.
        </div>

        <ArticleMeta
          author="Oniel Santos Álvarez"
          date="12 de junio de 2026"
          sourceHref="https://www.hacienda.gob.do/plan-anticrisis-del-gobierno-incluye-amnistia-fiscal-eliminacion-del-anticipo-eleva-deducciones-educativas-y-establece-otras-medidas-para-impulsar-la-economia/"
          sourceLabel="Fuente oficial — Ministerio de Hacienda"
        />

        {/* ── SECTION 1 ── */}
        <H2>1. Contexto histórico del ISR Empresarial</H2>

        <H3>¿Qué es el Impuesto sobre la Renta Empresarial?</H3>
        <P>
          Es el impuesto que grava toda renta, ingreso, utilidad o beneficio
          obtenido por personas jurídicas (empresas y sociedades) en un período
          fiscal determinado. Su base legal vigente es el Título II de la Ley
          11-92 (Código Tributario) del 16 de mayo de 1992 y sus modificaciones
          posteriores.
        </P>
        <SourceNote>
          <strong className="text-slate-400">Fuente:</strong>{" "}
          <A href="https://dgii.gov.do/cicloContribuyente/obligacionesTributarias/principalesImpuestos/Paginas/impuestoSobreRenta.aspx">
            DGII — Impuesto sobre la Renta
          </A>{" "}
          | Fuente primaria oficial. Alta fiabilidad.
        </SourceNote>

        <Divider />

        <H3>¿Cuándo se creó, bajo qué gobierno y en qué contexto?</H3>
        <P>
          El impuesto sobre la renta en República Dominicana tiene su origen en{" "}
          <strong className="text-slate-100">1949</strong>, cuando la Ley 1927
          creó el primer impuesto a la renta. En diciembre de{" "}
          <strong className="text-slate-100">1950</strong> fue reemplazado por
          el Impuesto a las Utilidades. En{" "}
          <strong className="text-slate-100">1962</strong>, mediante la Ley
          5911, se restableció el Impuesto sobre la Renta. El marco moderno que
          rige hoy se estableció con la{" "}
          <strong className="text-slate-100">Ley 11-92</strong> (Código
          Tributario), promulgada el 16 de mayo de{" "}
          <strong className="text-slate-100">1992</strong>, durante el gobierno
          de <strong className="text-slate-100">Joaquín Balaguer</strong>.
        </P>
        <P>
          Cabe destacar que tanto la Ley 1927 de 1949 como la sustitución por el
          Impuesto sobre el Beneficio en 1950 ocurrieron durante la dictadura de{" "}
          <strong className="text-slate-100">Rafael Leónidas Trujillo</strong>{" "}
          (1930–1961). La Ley 5911 de 1962 se promulgó en el período de
          transición democrática inmediatamente posterior a su ajusticiamiento
          en mayo de 1961.
        </P>
        <SourceNote>
          <strong className="text-slate-400">Fuentes:</strong>{" "}
          <A href="https://eldinero.com.do/284383/reformas-fiscales-que-han-impactado-la-economia-dominicana/">
            El Dinero — Reformas fiscales
          </A>{" "}
          | Fiabilidad media-alta. /{" "}
          <A href="https://dgii.gov.do/et/preContribuyentes/nivelPrimario/Materiales%20Educativos/8-Historia%20de%20los%20Impuestos.pdf">
            DGII — Historia de los Impuestos
          </A>{" "}
          | Fuente primaria oficial. Alta fiabilidad.
        </SourceNote>

        <Divider />

        <H3>Evolución histórica de la tasa</H3>
        <DataTable
          headers={["Año", "Tasa", "Ley", "Gobierno"]}
          rows={[
            [
              "1962–1992",
              "No determinada*",
              "Ley 5911 y modificaciones",
              "Varios",
            ],
            [
              "1992",
              <strong key="t92">30%</strong>,
              "Ley 11-92",
              "Joaquín Balaguer",
            ],
            [
              "2007",
              <strong key="t07">25%</strong>,
              "Ley 172-07",
              "Leonel Fernández",
            ],
            [
              "2012",
              <strong key="t12">27%</strong>,
              "Ley 253-12",
              "Danilo Medina",
            ],
            {
              cells: [
                "2026 (propuesta)",
                <strong key="t26">30% (+3% sobretasa temporal)</strong>,
                "Proyecto anticrisis",
                "Luis Abinader",
              ],
              highlight: true,
            },
          ]}
        />
        <P>
          La última modificación de fondo fue en{" "}
          <strong className="text-slate-100">2012</strong> mediante la{" "}
          <strong className="text-slate-100">Ley 253-12</strong>, conocida como
          el "paquetazo fiscal" del gobierno de{" "}
          <strong className="text-slate-100">Danilo Medina</strong>, que elevó
          la tasa del 25% al 27% — nivel en el que se ha mantenido por más de
          una década.
        </P>
        <SourceNote>
          <strong className="text-slate-400">Nota sobre 1962–1992:</strong> No
          fue posible verificar digitalmente las tasas específicas. Se requiere
          consulta de la Gaceta Oficial o archivos físicos de la DGII.
          <br />
          <strong className="text-slate-400">
            Nota sobre la tasa de 1992:
          </strong>{" "}
          Se infiere que era 30% porque la{" "}
          <A href="https://www.hacienda.gob.do/wp-content/uploads/2023/12/ley_no_172-07-1.pdf">
            Ley 172-07
          </A>{" "}
          se denomina expresamente "ley que reduce la tasa del Impuesto sobre la
          Renta".
        </SourceNote>

        {/* ── SECTION 2 ── */}
        <H2>2. Alcance real de la medida</H2>

        <H3>¿El umbral de RD$1,000 millones es de ingresos brutos o netos?</H3>
        <P>
          El umbral de clasificación es de{" "}
          <strong className="text-slate-100">ingresos brutos</strong>. La DGII
          clasifica a los contribuyentes usando ventas brutas como criterio
          principal. Una vez clasificada, la empresa tributa sobre su{" "}
          <strong className="text-slate-100">renta neta imponible</strong>{" "}
          (ingresos brutos menos gastos y deducciones permitidas), que es la
          base sobre la que se aplica la tasa del 30%.
        </P>
        <SourceNote>
          <strong className="text-slate-400">Fuentes:</strong>{" "}
          <A href="https://blog.alegra.com/republica-dominicana/tipos-de-contribuyentes/">
            Alegra — Tipos de contribuyentes en RD
          </A>{" "}
          | Fiabilidad media-alta. /{" "}
          <A href="https://dgii.gov.do/cicloContribuyente/obligacionesTributarias/principalesImpuestos/Paginas/impuestoSobreRenta.aspx">
            DGII — Impuesto sobre la Renta
          </A>{" "}
          | Alta fiabilidad.
        </SourceNote>

        <Divider />

        <H3>¿La cifra de ~1,000 empresas es verificable?</H3>
        <P>
          La cifra proviene directamente del comunicado del Ministerio de
          Hacienda y no fue posible verificarla de forma independiente. La DGII
          indica que la clasificación se realiza internamente basada en una
          política interna (POL-DEET-002) que no es pública. La cifra de 140,000
          empresas que presentaron declaración de ISR en 2025 sí es consistente
          con el universo de contribuyentes registrados.
        </P>
        <SourceNote>
          <strong className="text-slate-400">Fuentes:</strong>{" "}
          <A href="https://ayuda.dgii.gov.do/conversations/discusiones/como-se-determina-una-empresa-como-grande-contribuyente/5f3c17ca8cd858ce87aaed34">
            DGII — Clasificación de grandes contribuyentes
          </A>{" "}
          /{" "}
          <A href="https://www.hacienda.gob.do/plan-anticrisis-del-gobierno-incluye-amnistia-fiscal-eliminacion-del-anticipo-eleva-deducciones-educativas-y-establece-otras-medidas-para-impulsar-la-economia/">
            Ministerio de Hacienda — Comunicado plan anticrisis
          </A>
        </SourceNote>

        <Divider />

        <H3>Ejemplos concretos de empresas en esta franja</H3>
        <DataTable
          headers={["Empresa", "Dato disponible", "Fuente"]}
          rows={[
            [
              "Banreservas",
              "Utilidades netas RD$27,566 MM en 2024; activos RD$1.28 billones",
              <A
                key="br"
                href="https://www.diariolibre.com/economia/negocios/2025/01/21/activos-de-banreservas-crecen-78--al-cierre-del-2024/2974419"
              >
                Diario Libre
              </A>,
            ],
            [
              "Banco Popular Dominicano",
              "Utilidades netas RD$26,940 MM en 2024",
              "Reporte Grupo Popular 2024",
            ],
            [
              "BHD",
              "Utilidades netas RD$13,224 MM en 2024",
              "Reporte BHD 2024",
            ],
            [
              "Cervecería Nacional Dominicana",
              "RD$22,270 MM en impuesto selectivo al consumo en 2024",
              <A
                key="cnd"
                href="https://eldinero.com.do/340506/rd-paga-mas-impuestos-por-cerveza-que-toda-latinoamerica-segun-cerveceria-nacional/"
              >
                El Dinero
              </A>,
            ],
            [
              "AFP Popular",
              "RD$3,790 MM en comisiones en 2025",
              <A
                key="afp"
                href="https://www.infobae.com/republica-dominicana/2026/02/23/administradoras-de-fondos-de-pensiones-de-republica-dominicana-alcanzan-ingresos-de-11500-millones-de-pesos-en-comisiones-durante-2025/"
              >
                Infobae RD
              </A>,
            ],
            [
              "Claro Dominicana",
              "Multinacional de telecomunicaciones, 5to en MERCO 2024",
              <A
                key="claro"
                href="https://popularenlinea.com/Personas/sala-de-prensa/Documents/2024/febrero/NP-Grupo-Popular-empresa-mas-admirada-pais/Ranking-mas-admiradas-Mercado-2024.pdf"
              >
                MERCO 2024
              </A>,
            ],
            [
              "Grupo Ramos",
              "Cadena de supermercados líder; top 10 en reputación corporativa",
              "MERCO 2024",
            ],
          ]}
        />

        {/* ── SECTION 3 ── */}
        <H2>3. Peso económico y social de las empresas afectadas</H2>

        <H3>Empleo y alcance estructural</H3>
        <P>
          Según el{" "}
          <A href="https://www.bancentral.gov.do/a/d/2532-encuesta-nacional-continua-de-fuerza-de-trabajo-encft">
            Banco Central de la República Dominicana
          </A>
          , aproximadamente el{" "}
          <strong className="text-slate-100">
            60.8% de los empleados formales
          </strong>{" "}
          del país trabajan en empresas grandes, equivalente a unos{" "}
          <strong className="text-slate-100">1,556,000 trabajadores</strong>.
          Este universo es más amplio que las ~1,000 afectadas por la sobretasa,
          pero ilustra el peso estructural del segmento en el mercado laboral.
        </P>

        <H3>Sobretasa estimada por empresa</H3>
        <DataTable
          headers={[
            "Empresa",
            "Empleados",
            "Sobretasa estimada (3% s/ renta neta)",
          ]}
          rows={[
            ["Banreservas", "~12,760 directos", "~RD$827 MM/año"],
            [
              "Banco Popular Dominicano",
              "~4,000–5,000 directos (estimado)",
              "~RD$808 MM/año",
            ],
            ["BHD", "N/D", "~RD$397 MM/año"],
            [
              "Claro Dominicana",
              "+15,000 directos e indirectos",
              "No calculable (utilidad neta no pública)",
            ],
            ["Altice Dominicana", "~2,000–3,000 directos", "No calculable"],
            ["Cervecería Nacional / León Jimenes", "N/D", "No calculable"],
            ["Grupo Ramos", "~8,000–10,000 directos", "No calculable"],
            [
              "Grupo Puntacana",
              "+15,000 directos e indirectos",
              "No calculable",
            ],
            {
              cells: [
                <strong key="b3">Banca (3 bancos grandes, combinado)</strong>,
                "—",
                <strong key="tot">~RD$2,032 MM/año</strong>,
              ],
              highlight: true,
            },
          ]}
        />
        <SourceNote>
          La sobretasa estimada se calcula como{" "}
          <code className="font-mono text-[0.85em] bg-[#1e2535] px-1 rounded">
            utilidad neta reportada × 3%
          </code>{" "}
          y es una aproximación — la renta neta imponible fiscal puede diferir
          de la utilidad contable. Solo fue posible calcularlo para los bancos,
          que publican estados financieros con detalle suficiente.
        </SourceNote>

        {/* ── SECTION 4 ── */}
        <H2>4. Impacto en la población</H2>

        <H3>Las opciones de las empresas ante el nuevo costo</H3>
        <P>
          Un impuesto nuevo no destruye riqueza de la nada — la redistribuye y
          la desplaza. Ante la sobretasa, las grandes empresas tienen estas
          palancas:
        </P>

        <H4>1. Trasladar el costo al consumidor</H4>
        <P>
          Es la respuesta más racional cuando el consumidor no puede sustituir
          fácilmente el producto o servicio. Un banco, una empresa de
          telecomunicaciones, una distribuidora eléctrica: el dominicano
          promedio no tiene muchas alternativas. El costo del impuesto se
          convierte en un costo oculto trasladado al consumidor final. Se ve el
          ingreso fiscal al gobierno — no se ve el precio más alto que paga cada
          dominicano en su factura, en su cuota de préstamo, o en su servicio de
          internet.
        </P>

        <H4>2. Reducir costos operativos</H4>
        <P>
          Recorte o congelación de planilla, reducción de beneficios laborales,
          postergación de inversiones, presión sobre proveedores. Las empresas
          con márgenes más ajustados — supermercados, distribuidoras,
          agroindustria — tendrán más presión aquí que los bancos.{" "}
          <strong className="text-slate-100">
            El empleado es siempre el eslabón más vulnerable en esta cadena.
          </strong>
        </P>

        <H4>3. Reducir inversión y expansión</H4>
        <P>
          Con una carga fiscal mayor, el umbral de rentabilidad para abrir una
          nueva sucursal o contratar más personal sube. Proyectos de expansión
          se posponen. Este efecto es invisible — son los empleos que nunca se
          crean, la sucursal que nunca abrió.
        </P>

        <H4>4. Absorberlo vía reducción de márgenes</H4>
        <P>
          Solo las empresas con márgenes muy altos pueden absorber el golpe sin
          reacción inmediata. Los tres grandes bancos tienen esa capacidad en el
          corto plazo — pero los accionistas, entre ellos AFP y fondos de
          pensiones, presionarán para mantener rendimientos. No es una solución
          sostenible.
        </P>

        <Divider />

        <H3>Efectos sobre los precios</H3>
        <P>
          El ISR no aparece en la factura como el ITBIS. Pero eso no significa
          que no se traslade — simplemente se traslada de forma{" "}
          <strong className="text-slate-100">invisible</strong>. La empresa que
          antes fijaba un precio que le dejaba determinado margen neto, ahora
          necesita un precio más alto para mantener ese margen después de
          impuestos.
        </P>
        <P>
          En sectores con poca competencia — banca, telecomunicaciones, energía
          — este traslado es casi automático. El consumidor de menor ingreso es
          el más afectado: destina un mayor porcentaje de su ingreso a bienes y
          servicios básicos que estas empresas producen.
        </P>

        <Divider />

        <H3>Efectos sobre la empleabilidad</H3>
        <P>
          <strong className="text-slate-100">Efecto directo:</strong> Las
          propias grandes empresas contraen o congelan su planilla para
          compensar el costo nuevo. Incluso una congelación de contrataciones
          tiene impacto neto sobre el mercado laboral.
        </P>
        <P>
          <strong className="text-slate-100">
            Efecto indirecto — el más importante:
          </strong>{" "}
          Los bancos trasladan su costo nuevo vía tasas de interés activas más
          altas. Esto encarece el crédito para <em>toda</em> la economía. El
          emprendedor que estaba evaluando si el negocio era viable deja de
          serlo. El empleado que iba a ser contratado nunca aparece en ninguna
          estadística de desempleo — simplemente no existe.
        </P>

        <Divider />

        <H3>El incentivo perverso al crecimiento</H3>
        <P>El plan crea un esquema escalonado con una distorsión clara:</P>
        <ul className="pl-6 mb-5 space-y-2">
          <li className="text-[1.05rem] leading-[1.8] text-slate-300">
            <strong className="text-slate-100">Microempresa:</strong> sin
            anticipo, tres pagos al año, exenciones — condiciones favorables
          </li>
          <li className="text-[1.05rem] leading-[1.8] text-slate-300">
            <strong className="text-slate-100">
              Gran empresa (+RD$1,000MM en ingresos):
            </strong>{" "}
            sobretasa del 3% — carga mayor
          </li>
          <li className="text-[1.05rem] leading-[1.8] text-slate-300">
            <strong className="text-slate-100">
              La empresa en crecimiento:
            </strong>{" "}
            sin los beneficios de la micro, sin la escala para absorber como la
            grande
          </li>
        </ul>
        <P>
          El empresario que se aproxima al umbral enfrenta un incentivo
          perverso: <em>no crecer</em>. O fragmentar artificialmente su
          operación para mantenerse por debajo del umbral. La decisión
          empresarial deja de ser puramente productiva y pasa a estar
          distorsionada por la conveniencia fiscal.
        </P>

        <Divider />

        <H3>Efectos sobre la competencia y nuevas empresas</H3>
        <P>
          Las grandes empresas ya establecidas enfrentan la sobretasa, pero
          también se protegen indirectamente de nuevos competidores. Una empresa
          que quiera crecer hasta competir a la escala de Banreservas o Grupo
          Ramos necesita acceso a crédito barato durante años. Si ese crédito es
          más caro, el camino se alarga o se cierra.
        </P>
        <P>
          El impuesto termina funcionando como una{" "}
          <strong className="text-slate-100">
            barrera de entrada involuntaria
          </strong>{" "}
          que consolida la posición dominante de los mismos que grava. El
          resultado a largo plazo: menos competencia, mayor concentración, y
          menos presión para que las grandes empresas sean eficientes.
        </P>

        <Divider />

        <H3>Lo visible y lo invisible</H3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-[#0a1f1a] border border-[#0d3d2a] rounded-lg p-5">
            <div className="font-sans text-xs font-bold tracking-widest uppercase text-green-400 mb-3">
              Lo visible
            </div>
            <ul className="pl-4 space-y-1.5 list-disc">
              <li className="font-sans text-sm text-slate-400">
                El gobierno proyecta recaudar entre RD$40,000 y RD$50,000
                millones adicionales en el corto plazo*
              </li>
            </ul>
          </div>
          <div className="bg-[#1a0a0a] border border-[#3d1414] rounded-lg p-5">
            <div className="font-sans text-xs font-bold tracking-widest uppercase text-red-400 mb-3">
              Lo invisible
            </div>
            <ul className="pl-4 space-y-1.5 list-disc">
              {[
                "Precios más altos en sectores básicos",
                "Crédito más caro para toda la economía",
                "Empleos que no se crean por congelación de expansión",
                "Empresas que no crecen para no cruzar el umbral de RD$1,000MM",
                "Negocios que no arrancan porque el financiamiento es más costoso",
                "Mercados más concentrados por la barrera de entrada que crea el diferencial de tasas",
              ].map((item) => (
                <li key={item} className="font-sans text-sm text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SourceNote>
          *Cifra que proviene del propio Ministerio de Hacienda y no ha sido
          verificada de forma independiente. El historial de proyecciones
          fiscales dominicanas invita a la cautela con estos estimados.
        </SourceNote>

        <Callout title="Conclusión">
          La carga real del impuesto no la absorben únicamente los accionistas
          de Banreservas o Grupo Ramos — se distribuye, diluida e invisible,
          entre los consumidores que pagan más, los empleados cuyo puesto nunca
          se crea, y los emprendedores que no pudieron competir.
        </Callout>

        <div className="mt-16 pt-8 border-t border-[#1e2535] font-sans text-sm text-slate-500">
          <p>
            Publicado el 12 de junio de 2026 por{" "}
            <strong className="text-slate-300">Oniel Santos Álvarez</strong> ·{" "}
            <Link
              href="/blog/analisis-plan-anticrisis-hacienda-11-junio-2026"
              className="text-(--primary) hover:underline"
            >
              ← Ver todos los análisis del Plan Anticrisis
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
