import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";

import ContactForm from "~/components/contactForm";
import HalfBanner from "~/components/halfBanner";
import ProcessTabLayout from "~/components/processTabLayout";

import processPhoto from "../assets/process.jpg";
import stylesAboutBio from "../components/aboutBio.css";
import stylesContactForm from "../components/contactForm.css";
import stylesHalfBanner from "../components/halfBanner.css";
import stylesProcessItem from "../components/processItem.css";
import stylesProcessTabLayout from "../components/processTabLayout.css";
import { MAIN_URL } from "../config";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesProcessTabLayout },
  { rel: "stylesheet", href: stylesProcessItem },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "stylesheet", href: stylesContactForm },
  { rel: "stylesheet", href: stylesHalfBanner },
  { rel: "canonical", href: `${MAIN_URL}/process` },
];

export const meta: MetaFunction = () => [
  {
    title:
      "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | My Process",
  },
  {
    name: "description",
    content:
      "Explore my collaborative process from consultation to support. Seamless communication, customized solutions, and a website that reflects your vision. Unlock your online success with me.",
  },
];

export const loader: LoaderFunction = () => {
  return {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    userId: process.env.USER_ID,
  };
};

export default function Route() {
  const formRef = useRef<HTMLDivElement>(null);
  const keys = useLoaderData<{
    serviceId: string;
    templateId: string;
    userId: string;
  }>();

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="Process">
      <HalfBanner
        photo={processPhoto}
        photoAlt="process-banner"
        text={"What to expect when we work together"}
      />
      <ProcessTabLayout scrollToForm={scrollToForm} />
      <div ref={formRef}>
        <ContactForm keys={keys} />
      </div>
    </div>
  );
}
