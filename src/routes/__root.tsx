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
    <div className="min-h-screen bg-gradient-to-b from-muted/60 to-background flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl text-center">
        <div className="mx-auto inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Error 404</div>
        <h1 className="mt-6 font-display text-7xl md:text-9xl leading-none tracking-tight text-primary">
          404
        </h1>
        <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tight">This page has moved on.</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
          The page you're looking for isn't here — but the rest of Speech Therapy Lab is. Try one of these instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em]">
            Go home
          </Link>
          <Link to="/services" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted">
            Browse services
          </Link>
          <Link to="/appointment" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted">
            Book appointment
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted">
            Contact us
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
      { title: "Speech Therapy Lab — Perfect Therapeutic Medicine For A Functional Life" },
      { name: "description", content: "Premium multi-specialty pediatric therapy and rehabilitation clinic. Speech, occupational, ABA, sensory integration, physiotherapy and 20+ evidence-based programs." },
      { name: "author", content: "Speech Therapy Lab" },
      { property: "og:title", content: "Speech Therapy Lab" },
      { property: "og:description", content: "Perfect therapeutic medicine for leading a functional life. Evidence-based pediatric therapy and rehabilitation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
