import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import portfolio from "../assets/portfolio.jpg";
import HalfBanner from "~/components/halfBanner";
import { MAIN_URL } from "../config";

import styles from "../portfolio.css";
import stylesProcessItem from "../components/processItem.css";
import stylesAboutBio from "../components/aboutBio.css";
import stylesHalfBanner from "../components/halfBanner.css";
import stylesPortfolioItem from "../components/portfolioItem.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesProcessItem },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "stylesheet", href: stylesHalfBanner },
  { rel: "stylesheet", href: stylesPortfolioItem },
  { rel: "canonical", href: `${MAIN_URL}/portfolio` },
];

export const meta: V2_MetaFunction = () => [
  {
    title:
      "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | Portfolio",
  },
  {
    name: "description",
    content:
      "Unveil my curated portfolio of captivating designs and success stories. Witness the results of my craftsmanship and envision the possibilities for your online presence. Inspire your own digital journey.",
  },
];

export default function Route() {
  return (
    <div className="Portfolio">
      <HalfBanner
        photo={portfolio}
        photoAlt="portfolio-banner"
        text={"Check out some of my past projects"}
      />
      <Outlet />
    </div>
  );
}
