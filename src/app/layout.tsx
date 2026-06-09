import type { Metadata } from "next";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Oniel Santos - Full Stack Developer",
  description:
    "Oniel Santos - Software Engineer with over 5 years of experience in fullstack development, working with Node.js, Nest.js, React.js, Next.js, TypeScript, JavaScript, AWS, and Docker.",
  keywords:
    "Oniel Santos,Oniel,Experienced,Healthcare,Software,Developer,Self-taught,Professional,Skills,Thryv,Intellisys,Fullstack,Engineer,Engineer,Node.js,Nest.js,React.js,Next.js,TypeScript,JavaScript,AWS,Docker",
  authors: [{ name: "OnielSantos" }],
  openGraph: {
    title: "Oniel Santos | Software Engineer",
    description:
      "Oniel Santos - Software Engineer with over 5 years of experience in fullstack development, working with Node.js, Nest.js, React.js, Next.js, TypeScript, JavaScript, AWS, and Docker.",
    images: ["/images/oniel-profile.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <TRPCReactProvider>
        <body>{children}</body>
      </TRPCReactProvider>
    </html>
  );
}
