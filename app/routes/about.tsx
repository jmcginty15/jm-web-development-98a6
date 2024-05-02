import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef, useEffect } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import TabLayout from "~/components/tabLayout";
import AboutBio from "~/components/aboutBio";
import topeka from "../assets/topeka-ks.jpg";
import tulsa from "../assets/tulsa-ok.jpg";
import Logo from "~/assets/logo";
import { pitchItems } from "~/config";
import { MAIN_URL } from "../config";

import styles from "../about.css";
import stylesTabLayout from "../components/tabLayout.css";
import stylesPitchItemFull from "../components/pitchItemFull.css";
import stylesAboutBio from "../components/aboutBio.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesTabLayout },
  { rel: "stylesheet", href: stylesPitchItemFull },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "canonical", href: `${MAIN_URL}/about` },
];

export const meta: V2_MetaFunction = () => [
  {
    title: "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | About",
  },
  {
    name: "description",
    content:
      "Discover my web design philosophy, compelling reasons to choose me, and the creative mind behind it all. Craft exceptional digital experiences with personalized service and expertise dedicated to your success.",
  },
];

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const pitchItem = url.searchParams.get("item");
  const ref = url.searchParams.get("ref");
  if (pitchItem)
    for (let item of pitchItems) if (pitchItem === item.route) return item;
  if (ref) return ref;
  return null;
};

export default function Route() {
  const data = useLoaderData();
  const tabRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof data === "string")
      bioRef.current!.scrollIntoView({ behavior: "smooth", block: "center" });
    else if (data)
      tabRef.current!.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const goToItem = typeof data === "string" ? null : data;

  return (
    <div className="About">
      <div className="About-banner-container">
        <div className="About-banner">
          <div
            className="About-banner-image"
            style={{ backgroundImage: `url(${topeka})` }}
          >
            <span className="background-image" role="img" aria-label="topeka" />
            <div className="About-banner-overlay" />
          </div>
          <div
            className="About-banner-image"
            style={{ backgroundImage: `url(${tulsa})` }}
          >
            <span className="background-image" role="img" aria-label="tulsa" />
            <div className="About-banner-overlay" />
          </div>
        </div>
        <div className="About-banner-main">
          <RiArrowRightSLine id="right-arrow" />
          <RiArrowDownSLine id="down-arrow" />
          <div className="About-banner-content">
            <div className="About-title-container">
              <h1 className="About-title">From Topeka to Tulsa and beyond,</h1>
              <h6 className="About-text">
                <Logo className="About-logo" /> Web Development{" "}
                <small>LLC</small>
                <br />
              </h6>
            </div>
            <div className="About-title-container">
              <h2 className="About-subtitle">
                my business is to make your business look great.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <TabLayout refProp={tabRef} goToItem={goToItem} />
      <AboutBio refProp={bioRef} />
    </div>
  );
}
