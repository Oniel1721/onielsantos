export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      {title && <h2 className="section-title color-title">{title}</h2>}
      {children}
    </section>
  );
}
