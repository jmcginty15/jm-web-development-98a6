import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/header";
import Footer from "./components/footer";
import FooterNav from "./components/footerNav";
import { indexMenuLinks } from "./components/config/menuLinks";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import stylesRoot from "./root.css";
import stylesHeader from "./components/header.css";
import stylesIndexNumber from "./components/indexNumber.css";
import stylesSocialIcons from "./components/socialIcons.css";
import stylesFooter from "./components/footer.css";
import stylesFooterNav from "./components/footerNav.css";
import stylesRotator from "./components/rotator.css";
import stylesRemixIcons from "remixicon/fonts/remixicon.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Poppins:400, 600",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: stylesRoot },
  { rel: "stylesheet", href: stylesHeader },
  { rel: "stylesheet", href: stylesIndexNumber },
  { rel: "stylesheet", href: stylesSocialIcons },
  { rel: "stylesheet", href: stylesFooter },
  { rel: "stylesheet", href: stylesRotator },
  { rel: "stylesheet", href: stylesFooterNav },
  { rel: "stylesheet", href: stylesRemixIcons },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SSZ7GBDGW8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SSZ7GBDGW8');
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header menuLinks={indexMenuLinks} />
        <Outlet />
        <FooterNav menuLinks={indexMenuLinks} />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
