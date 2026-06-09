export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>{" "}
        Source code on{" "}
        <a
          href="https://github.com/Oniel1721/onielsantos"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>Copyright © {new Date().getFullYear()} Oniel Santos</p>
    </footer>
  );
}
