import React from "react";

export default function ButtonExternalLink({
  href,
  style,
  children,
}: {
  href: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      className="btn"
      style={style}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
