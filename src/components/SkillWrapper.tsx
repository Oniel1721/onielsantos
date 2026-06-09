export default function SkillWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="skill" title={title}>
      {children}
      {title}
    </li>
  );
}
