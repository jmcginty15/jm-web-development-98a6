import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import logo from "~/assets/logo.png";
import Bio from "~/components/bio";
import ContactForm from "~/components/contactForm";
import { PERSONAL_URL, MAIN_URL } from "~/config";

import styles from "../_index.css";
import computer from "../assets/computer.jpg";
import stylesBio from "../components/bio.css";
import stylesContactForm from "../components/contactForm.css";
import Pitch from "../components/pitch";
import stylesPitch from "../components/pitch.css";
import stylesPitchItem from "../components/pitchItem.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesContactForm },
  { rel: "stylesheet", href: stylesPitch },
  { rel: "stylesheet", href: stylesPitchItem },
  { rel: "stylesheet", href: stylesBio },
  { rel: "canonical", href: MAIN_URL },
];

export const meta: MetaFunction = () => [
  {
    title: "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas",
  },
  {
    name: "description",
    content:
      "Transform your online presence with expert web development, SEO, and online marketing services tailored for small businesses. Enhance your digital footprint and reach your target audience effectively.",
  },
];

export const loader: LoaderFunction = () => {
  return {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    userId: process.env.USER_ID,
  };
};

export default function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const keys = useLoaderData<{
    serviceId: string;
    templateId: string;
    userId: string;
  }>();

  const scrollDown = () => {
    ref.current!.scrollIntoView();
  };

  return (
    <main>
      <div className="Banner" style={{ backgroundImage: `url(${computer})` }}>
        <span
          className="background-image"
          role="img"
          aria-label="main-banner"
        />
        <div className="Banner-overlay">
          <div className="Banner-content">
            <div className="Banner-content-inner">
              <h3 className="Banner-subtitle">
                I&apos;m{" "}
                <a
                  className="Banner-highlight"
                  href={PERSONAL_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Jason McGinty
                </a>
                , owner/operator of
              </h3>
              <img
                src={logo}
                className="Banner-logo"
                alt="jm-web-development-logo"
              />
              <h1 className="Banner-title">
                Web Development <small>LLC</small>
              </h1>
            </div>
            <div className="Banner-tagline">
              I craft elegant, modern, responsive websites to help small
              businesses put their best foot forward.
            </div>
          </div>
          <RiArrowDownSLine id="down-arrow" onClick={scrollDown} />
        </div>
      </div>
      <Pitch refProp={ref} />
      <Bio />
      <ContactForm keys={keys} />
    </main>
  );
}
