export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "var(--secondary)",
      }}
    >
      <h1 style={{ fontSize: "10rem", margin: 0, color: "var(--color)" }}>
        404
      </h1>
      <p style={{ fontSize: "2rem", margin: 0 }}>Page not found</p>
      <a
        href="/"
        style={{ fontSize: "2rem", margin: 0, color: "var(--primary)" }}
      >
        Go back home
      </a>
    </main>
  );
}
