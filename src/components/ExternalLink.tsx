import React from "react";

export default function ExternalLink({
  href,
  style,
  children,
}: {
  href: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a style={style} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
