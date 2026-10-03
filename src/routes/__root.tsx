import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AL Aamir Khan | Bhopal Influencer & Content Creator" },
      {
        name: "description",
        content:
  "AL Aamir Khan is a Bhopal-based Instagram influencer & content creator. Automobile, tech, real estate & food reels. Book brand collaborations in MP.",
      },
      { name: "author", content: "AL Aamir Khan" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-MP" },
      { name: "geo.placename", content: "Bhopal" },
      { name: "theme-color", content: "#e1306c" },

      // Open Graph (WhatsApp / Facebook / LinkedIn)
      { property: "og:site_name", content: "AL Aamir Khan" },
      { property: "og:title", content: "AL Aamir Khan | Bhopal Influencer & Content Creator" },
      {
        property: "og:description",
        content:
          "Bhopal-based creator for automobile, tech, real estate and lifestyle brands. Book a collaboration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alaamirkhan.in/" },
      { property: "og:image", content: "https://alaamirkhan.in/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AL Aamir Khan | Bhopal Influencer & Content Creator" },
      {
        name: "twitter:description",
        content:
          "Bhopal-based creator for automobile, tech, real estate and lifestyle brands.",
      },
      { name: "twitter:image", content: "https://alaamirkhan.in/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://alaamirkhan.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "AL Aamir Khan",
          url: "https://alaamirkhan.in/",
          image: "https://alaamirkhan.in/og-image.jpg",
          jobTitle: "Social Media Influencer & Content Creator",
          description:
            "Bhopal-based content creator covering automobile, tech, real estate, lifestyle and food.",
          nationality: "Indian",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bhopal",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          knowsAbout: [
            "Influencer marketing in Bhopal",
            "Instagram reels and brand collaborations",
            "YouTube vlogging",
            "Automobile and car reviews",
            "Tech and gadget reviews",
            "Real estate and property promotion",
            "Food vlogging and lifestyle content",
            "Madhya Pradesh content creation",
          ],
          sameAs: [
            "https://www.instagram.com/alaamirkhan/",
            "https://www.youtube.com/alaamirkhan",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
