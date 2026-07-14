import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { doctorsList, branchesList } from "@/data/team";
import { blogPosts } from "@/data/blog";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/services", "/about", "/doctors", "/therapists", "/branches",
          "/consultation", "/specialists", "/gallery", "/videos", "/stories", "/blog", "/faq",
          "/career", "/research", "/contact", "/appointment", "/privacy", "/terms",
        ];
        const dynamic = [
          ...services.map((s) => `/services/${s.slug}`),
          ...doctorsList.map((d) => `/doctors/${d.slug}`),
          ...branchesList.map((b) => `/branches/${b.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`),
        ];
        const all = [...staticPaths, ...dynamic];
        const urls = all.map(
          (p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});