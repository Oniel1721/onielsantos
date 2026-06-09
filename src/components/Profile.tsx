import Image from "next/image";
import Nav from "./Nav";

export default function Profile() {
  return (
    <div className="profile-container">
      <Image
        className="profile"
        src="/images/oniel-profile.webp"
        alt="Oniel Santos"
        height={300}
        width={300}
      />
      <div className="profile-caption">
        <h1 className="profile-name">Oniel Santos</h1>
        <h2 className="profile-position">Software Engineer</h2>
        <p className="profile-bio">
          Software Engineer with <strong>over 5 years of experience</strong> in
          fullstack development, working with Node.js, Nest.js, React.js,
          Next.js, TypeScript, JavaScript, AWS, and Docker. I&apos;ve created
          solutions for industries like healthcare, business administration,
          small businesses and more.
        </p>
        <Nav />
      </div>
    </div>
  );
}
