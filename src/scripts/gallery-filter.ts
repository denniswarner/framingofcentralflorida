import { CATEGORIES } from "@/data/gallery";

const KNOWN = new Set<string>(CATEGORIES);

function apply(root: Element, active: string | null) {
  const cards = root.querySelectorAll<HTMLElement>("[data-categories]");
  let count = 0;

  cards.forEach((card) => {
    const categories = (card.dataset.categories ?? "").split("|").filter(Boolean);
    const show = active === null || categories.includes(active);
    card.hidden = !show;
    if (show) count += 1;
  });

  const empty = root.querySelector<HTMLElement>("[data-gallery-empty]");
  if (empty) empty.hidden = count !== 0;

  const countEl = root.querySelector<HTMLElement>("[data-gallery-count]");
  if (countEl) {
    const noun = count === 1 ? "example" : "examples";
    const suffix = active ? ` in ${active}` : "";
    countEl.textContent = `Showing ${count} ${noun}${suffix}`;
  }

  root.querySelectorAll<HTMLAnchorElement>("[data-filter]").forEach((pill) => {
    const value = pill.dataset.filter ?? "";
    const pressed = value === "" ? active === null : value === active;
    pill.setAttribute("aria-pressed", pressed ? "true" : "false");
  });
}

function initialActive(root: Element): string | null {
  const param = new URLSearchParams(window.location.search).get("category");
  // A query is explicit. An unknown value means All, even on a category page.
  if (param !== null) return KNOWN.has(param) ? param : null;

  const fromPage = root.getAttribute("data-active") ?? "";
  return fromPage && KNOWN.has(fromPage) ? fromPage : null;
}

const root = document.querySelector("[data-gallery]");
if (root) {
  apply(root, initialActive(root));

  root.addEventListener("click", (event) => {
    if (!(event instanceof MouseEvent) || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = event.target;
    if (!(target instanceof Element)) return;

    const pill = target.closest<HTMLAnchorElement>("a[data-filter]");
    if (!pill || !root.contains(pill)) return;

    event.preventDefault();
    const value = pill.dataset.filter ?? "";
    const active = value === "" ? null : value;
    const url = active
      ? `/gallery?${new URLSearchParams({ category: active }).toString()}`
      : "/gallery";

    history.replaceState(null, "", url);
    apply(root, active);
  });
}
