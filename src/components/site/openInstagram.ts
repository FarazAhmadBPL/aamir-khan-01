export function openInstagram(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string
) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;

  try {
    const { pathname } = new URL(url);
    const parts = pathname.split("/").filter(Boolean);
    let deepLink = "";

    if (parts[0] === "reel" || parts[0] === "p") {
      deepLink = `instagram://media?id=${parts[1]}`;
    } else if (parts[0]) {
      deepLink = `instagram://user?username=${parts[0]}`;
    }
    if (!deepLink) return;

    e.preventDefault();

    const fallback = window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 900);

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.hidden) window.clearTimeout(fallback);
      },
      { once: true }
    );

    window.location.href = deepLink;
  } catch {
    /* ignore */
  }
}