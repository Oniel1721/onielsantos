import ButtonExternalLink from "./ButtonExternalLink";
import ExternalLink from "./ExternalLink";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ExternalLink href="https://www.linkedin.com/in/onielsantos/">
          <LinkedinIcon />
          LinkedIn
        </ExternalLink>
        <ExternalLink href="https://github.com/Oniel1721">
          <GithubIcon />
          GitHub
        </ExternalLink>
        <ButtonExternalLink
          style={{ marginInlineStart: "auto" }}
          href="/oniel-santos-resume.pdf"
        >
          Download CV
        </ButtonExternalLink>
      </nav>
      <a style={{ display: "block" }} href="mailto:oniel.san.alv@gmail.com">
        oniel.san.alv@gmail.com
      </a>
    </>
  );
}
