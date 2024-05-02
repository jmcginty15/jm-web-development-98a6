import { LoaderFunction } from "@remix-run/node";
import { MAIN_URL } from "../config";

export const loader: LoaderFunction = () => {
  const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${MAIN_URL}</loc>
                <lastmod>2023-07-12</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${MAIN_URL}/about</loc>
                <lastmod>2023-07-12</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${MAIN_URL}/process</loc>
                <lastmod>2023-07-12</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${MAIN_URL}/portfolio</loc>
                <lastmod>2023-07-12</lastmod>
                <priority>1.0</priority>
            </url>
        </urlset>
    `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
