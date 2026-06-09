export default function ExperienceItem({
  title,
  chip,
  time,
  company,
  children,
}: {
  title: string;
  chip?: string;
  time: string;
  company?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="experience-item">
      <div className="experience-point"></div>
      <h3 className="experience-title">
        {title}
        {chip ? <span>{chip}</span> : null}
      </h3>
      <time>
        {company ? `at ${company} ` : ""}
        {time}
      </time>
      <div className="experience-body">{children}</div>
    </li>
  );
}
