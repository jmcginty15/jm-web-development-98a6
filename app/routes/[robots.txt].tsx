import { LoaderFunction } from "@remix-run/node";
import { MAIN_URL } from "../config";

export const loader: LoaderFunction = () => {
  const robotText = `
  User-agent: Googlebot
  Disallow: /nogooglebot/

  User-agent: *
  Allow: /

  Sitemap: ${MAIN_URL}/sitemap.xml
  `;

  return new Response(robotText, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};
