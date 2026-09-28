const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

/* Theme toggle — circular reveal from the button via View Transitions */
document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    if (!document.startViewTransition || reduceMotion.matches) {
      apply();
      return;
    }

    const { left, top, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 520, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  });
});

/* Nav: surface appears once the page scrolls */
const nav = document.querySelector<HTMLElement>("[data-nav]");
if (nav) {
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:8px;width:1px;pointer-events:none";
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => {
    nav.toggleAttribute("data-scrolled", !entry.isIntersecting);
  }).observe(sentinel);
}

/* Scroll spy — marks the section currently in view */
const spyLinks = document.querySelectorAll<HTMLAnchorElement>("[data-spy]");
if (spyLinks.length) {
  const byId = new Map([...spyLinks].map((link) => [link.dataset.spy, link]));
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const link = byId.get(entry.target.id);
        if (!link) continue;
        if (entry.isIntersecting) {
          for (const l of spyLinks) l.removeAttribute("aria-current");
          link.setAttribute("aria-current", "true");
        } else if (link.hasAttribute("aria-current")) {
          link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  byId.forEach((_, id) => {
    const section = id && document.getElementById(id);
    if (section) spy.observe(section);
  });
}

/* Mobile menu */
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const menu = document.getElementById("mobile-menu");
if (menuButton && menu) {
  const setOpen = (open: boolean) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.toggleAttribute("data-open", open);
    nav?.toggleAttribute("data-menu-open", open);
  };
  menuButton.addEventListener("click", () => setOpen(menuButton.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.hasAttribute("data-open")) {
      setOpen(false);
      menuButton.focus();
    }
  });
  matchMedia("(min-width: 768px)").addEventListener("change", () => setOpen(false));
}

/* Reveal on scroll */
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (revealables.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px" },
  );
  for (const el of revealables) observer.observe(el);
}

/* Cursor-following border highlight on cards */
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  for (const card of document.querySelectorAll<HTMLElement>("[data-spotlight]")) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  }
}

/* Pause looping illustrations while they are off-screen */
const liveVisuals = document.querySelectorAll<HTMLElement>("[data-live]");
if (liveVisuals.length) {
  const live = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.toggleAttribute("data-visible", entry.isIntersecting);
  });
  for (const el of liveVisuals) live.observe(el);
}

/* Copy email */
document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((button) => {
  const label = button.querySelector<HTMLElement>("[data-copy-label]");
  const initial = label?.textContent ?? "";
  let timer: number | undefined;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? "");
      button.dataset.copied = "";
      if (label) label.textContent = "Copied";
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        delete button.dataset.copied;
        if (label) label.textContent = initial;
      }, 1800);
    } catch {
      location.href = `mailto:${button.dataset.copy}`;
    }
  });
});
