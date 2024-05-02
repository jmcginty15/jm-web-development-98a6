import { PitchItemProps } from "./components/pitchItem";
import { ProcessItemProps } from "./components/processItem";

import consultation from "./assets/consultation.jpg";
import development from "./assets/development.jpg";
import revision from "./assets/revision.jpg";
import deployment from "./assets/deployment.jpg";
import support from "./assets/support.jpg";

import underConstruction from "./assets/underConstruction.jpg";
import growingResilience from "./assets/growing-resilience.png";
import mcgintyWedding from "./assets/mcginty-wedding.png";
import dptTherapy from "./assets/dpttherapy.jpg";
import jasonMcginty from "./assets/jason-mcginty.png";
import ironRadio from "./assets/ironradio.jpg";
import flexChess from "./assets/flexchess.jpg";
import solarSystemExplorer from "./assets/solar-system-explorer.jpg";

import growingResilienceFull from "./assets/growing-resilience-full.png";
import mcgintyWeddingFull from "./assets/mcginty-wedding-full.png";
import dptTherapyFull from "./assets/dpt-therapy-full.png";
import jasonMcgintyFull from "./assets/jason-mcginty-full.png";
import ironRadioFull from "./assets/iron-radio-full.png";
import flexChessFull from "./assets/flexchess-full.png";
import solarSystemExplorerFull from "./assets/solar-system-explorer-full.png";

export const ICON_SIZE = 80;

export const PERSONAL_URL = "http://jasonmcginty.net";

export const MAIN_URL = "https://jmwebdevelopment.net";
export const BASE_META_DESCRIPTION =
  "Web development, SEO, and online marketing services for small businesses.";

export const pitchItems: PitchItemProps[] = [
  {
    title: "Personal Touch",
    description:
      "I'm a one-man shop, which means you deal directly with me, the developer, throughout the entire development process. There's no need to go through layers of sales people, project managers, and designers. I'll work personally with you every step of the way to make sure I understand your expectations and implement them to your satisfaction.",
    iconName: "THUMBS_UP",
    route: "personal-touch",
    longDescription: [
      "I'm a one-man shop, which means you deal directly with me, the developer, throughout the entire process. There's no need to go through layers of sales people, project managers, and designers. I'll work personally with you every step of the way to make sure I understand your expectations and implement them to your satisfaction.",
      "I'll start by getting some basic information about your business: name, industry, logos, photos, and any other branding materials you may have. Then I'll ask if you have any of your own design ideas, or examples of other businesses in your industry with elements to their sites that you like or dislike. This will help me come up with an initial design, completely custom and tailored to your specific needs.",
      "Once the initial design is complete, I'll deploy it to a staging URL for you to look at and give feedback on. I'll make revisions based on your feedback until you're satisfied; there's no limit to the number of revisions we can make. Once you're satisfied with the design, I'll deploy the final version to your chosen domain.",
    ],
  },
  {
    title: "Fully Custom Solutions",
    description:
      "Craft your message exactly how you want it. No chopping up or bending your material to fit someone else's pre-built template. I design your site around your material, not the other way around. All of my designs are built with responsiveness in mind and will work well and look great on any device: desktop, laptop, smartphone, or tablet.",
    iconName: "DRAFTING_TOOLS",
    route: "fully-custom-solutions",
    longDescription: [
      "Craft your message exactly how you want it. No chopping up or bending your material to fit someone else's pre-built template. I design your site around your material, not the other way around. All of my designs are built with responsiveness in mind and will work well and look great on any device: desktop, laptop, smartphone, or tablet.",
      `With everyone glued to their phones these days, it is no longer optional that a good website should look good on mobile devices. <a className="PitchItemFull-link" href="https://capitalcounselor.com/what-percentage-of-internet-traffic-is-mobile/" target="_blank" rel="noreferrer">According to some estimates</a>, over half of all web traffic now comes from mobile devices, meaning responsive web design is absolutely essential. I'll create a custom design tailored to your business that satisfies this need.`,
    ],
  },
  {
    title: "Balanced Design Philosophy",
    description:
      "As a small business, your website needs to align with customer expectations for your industry to ensure that your potential customers can easily understand what your business is and the products or services you offer. It also needs to stand out and be unique enough to set you apart from your competition. I strive to balance these competing priorities, with an emphasis on meeting customer expectations for the look, feel, and user experience of your site.",
    iconName: "SCALES",
    route: "balanced-design-philosophy",
    longDescription: [
      "As a small business, your website needs to align with customer expectations for your industry to ensure that your potential customers can easily understand what your business is and the products or services you offer. It also needs to stand out and be unique enough to set you apart from your competition. I strive to balance these competing priorities, with an emphasis on meeting customer expectations for the look, feel, and user experience of your site.",
      "Some designers focus overly much on creating something unique. While some degree of uniqueness can help your business stand out from the competition, keep in mind that the primary goal of your site is to clearly and effectively communicate your message to potential customers. If the look and feel of your site falls too far outside what customers typically expect of businesses in your industry, it becomes harder for them to understand at a glance what your business is offering. This is why I prioritize alignment with industry standards, throwing in unique touches where appropriate.",
    ],
  },
  {
    title: "Flexibility and Design Control",
    description:
      "Take as much or as little control over the design and development process as you want. Tell me nothing but your business name and industry and let me run with it, give me fully fleshed out mockups of your site to work from, or anything in between. Either way, my goal is to satisfy your vision.",
    iconName: "DEVELOPER",
    route: "flexibility-and-design-control",
    longDescription: [
      "Take as much or as little control over the design and development process as you want. Tell me nothing but your business name and industry and let me run with it, give me fully fleshed out mockups of your site to work from, or anything in between.",
      "My goal is to satisfy you, the customer. If you already have a very concrete vision of what you want your site to look like, I'm happy to simply implement that for you. On the other hand, I can come up with my own ideas and design your site completely myself. Every step of the way, the choice is yours as to how much involvement you want.",
      "Branding materials are the same way. You can provide me with your own photos, logos, color scheme, etc., or you can have me create these things. Some clients have me find royalty-free stock photos to use on their sites, or I can organize professional photos to be taken of your business, property, or products. It all depends on what you want and what fits your budget.",
    ],
  },
  {
    title: "Fast Service, Quick Turnaround",
    description:
      "You need a developer who responds promptly and gets your added features done quickly, especially when working with time sensitive content. Since there are no layers of management between you and me, I'm only a text, email, or phone call away.",
    iconName: "RACECAR",
    route: "fast-service-quick-turnaround",
    longDescription: [
      "You need a developer who responds promptly and gets your added features done quickly, especially when working with time sensitive content. Since there are no layers of management between you and me, I'm only a text, email, or phone call away.",
      "Depending on the complexity of your site, you can typically expect the initial design and development process to take around 2-3 weeks. This can become longer if your site has more complexity or you want to make a lot of revisions, or it can become shorter if you already have a solid idea of what you want your site to look like.",
      "After that, time for changes depends on scope. Simple updates such as changing a photo or piece of text can usually be done the same day you ask. Adding or redesigning a whole page could take in the ballpark of a week. Whatever features you need, I will always strive to meet your deadlines.",
    ],
  },
  {
    title: "Ongoing Support",
    description:
      "I offer options for ongoing support with hosting, maintenance, and additional features once initial development is complete. Change your logo? Have new photos to post? Want to run a limited time promotion? Let me handle all the technical details of adding or updating content, while you focus on serving your customers.",
    iconName: "PHONE",
    route: "ongoing-support",
    longDescription: [
      "I offer options for ongoing support with hosting, maintenance, and additional features once initial development is complete. Let me handle all the technical details of adding or updating content, while you focus on serving your customers.",
      "Every website has ongoing costs for server resources associated with hosting. I offer a monthly subscription that not only covers this cost, but also includes minor updates such as changing a logo, adding new photos, or highlighting a limited time promotion. This is optional but highly recommended, especially if you know you will have plenty of updates to make in the future.",
    ],
  },
];

export const processItems: ProcessItemProps[] = [
  {
    title: "Consultation",
    description: [
      "Together, we'll dive into your business, goals, and target audience, gathering vital information to shape the design and functionality of your website. Understanding your unique needs is the first step towards creating a site that truly represents your brand.",
      "To make the most of our time together, think a bit beforehand about your vision for your site. If you already have branding materials such as photos, logos, or color schemes, you can give those to me at this point, although you can also send them at any point in the process before Deployment.",
      "My initial consultations are always free and come with no obligation. We can conduct our consultation by phone or video chat, or even in person if you're in the Tulsa area.",
    ],
    photo: consultation,
    photoAlt: "consultation",
  },
  {
    title: "Development",
    description: [
      "With your vision in mind, I'll craft an initial design for your website, bringing creativity and expertise to deliver an engaging user experience. This stage involves transforming ideas into a tangible digital presence, ensuring your website reflects your brand identity.",
      "At the end of this stage, I will deploy the initial design to a staging URL where you will be able to view it and give feedback. Then we'll move on to the third stage, Revision.",
    ],
    photo: development,
    photoAlt: "development",
  },
  {
    title: "Revision",
    description: [
      "Your feedback is essential. I value your input and will work closely with you to make revisions and refinements, ensuring the design, content, and functionality align with your expectations. This collaborative approach guarantees a website that captures your vision.",
      "There is no rush to the revision process. We can spend as much time as we need to ensure the design meets your expectations and reflects your vision for your brand.",
    ],
    photo: revision,
    photoAlt: "revision",
  },
  {
    title: "Deployment",
    description: [
      "It's time to showcase your website to the world! I'll handle the technical aspects of launching your site, ensuring a seamless transition to your chosen domain. With meticulous attention to detail, I'll make sure everything is in place for a successful go-live.",
      "If you already own a domain name, during this stage I'll ask you for the information and access I'll need to point it to your site. If you don't already own a domain you can have me purchase one for you; in this case I recommend that you come up with 2-3 options in case your first choice is already taken or prohibitively expensive to buy.",
    ],
    photo: deployment,
    photoAlt: "deployment",
  },
  {
    title: "Support",
    description: [
      "Building a website is just the beginning of our partnership. I offer ongoing support and maintenance, to include hosting and minor updates, with my subscription service. With regular updates, security measures, and dependable assistance, I'll ensure your site remains in peak condition, allowing you to focus on your business while I handle the technical aspects.",
      "My subscription is completely optional, but I do highly recommend it, especially if you know up front that you will need to make regular content updates to your site. I can handle all the technical details of your updates for a flat monthly fee.",
      "If you choose not to sign up for my subscription, I will hand the hosting account over for you to take care of. Even in this case you're not alone! I'll still be available to answer questions or make updates for an additional fee based on time.",
    ],
    photo: support,
    photoAlt: "support",
  },
];

export interface PortfolioItemType {
  title: string;
  url?: string;
  description: string;
  photo: string;
  detailPhoto: string;
  id: string;
}

export const portfolioItems: PortfolioItemType[] = [
  {
    title: "Your Site Here",
    description: "Your site could be next. Get started now.",
    photo: underConstruction,
    detailPhoto: "",
    id: "your-site-here",
  },
  {
    title: "Growing Resilience Permaculture",
    url: "https://growingresilience.co/",
    description:
      "Responsive business web site for Growing Resilience Permaculture, LLC, a permaculture design and garden consultation business based in Eastern Washington. Deployed with Azure Cloud Services. Parses RSS feed from Libsyn to serve podcast episode data.",
    photo: growingResilience,
    detailPhoto: growingResilienceFull,
    id: "growing-resilience-permaculture",
  },
  {
    title: "McGinty Wedding",
    url: "http://mcgintywedding.com/",
    description: `Responsive single-page React site I built for my wedding! I got married on February 5, 2023. Uses Google Sheets to keep track of RSVPs via the <a href="https://sheet.best/" target="_blank" rel="noreferrer">Sheet Best API</a>. Uses Google Maps React component to embed maps to relevant locations.`,
    photo: mcgintyWedding,
    detailPhoto: mcgintyWeddingFull,
    id: "mcginty-wedding",
  },
  {
    title: "DPT Therapy & Performance",
    url: "https://dpttherapy.com/",
    description:
      "Responsive business web site for DPT Therapy & Performance, PLLC, a physical therapy clinic based in Stephenville, Texas. Deployed with Azure Cloud Services. Uses Google Maps React component to embed map of clinic location.",
    photo: dptTherapy,
    detailPhoto: dptTherapyFull,
    id: "dpt-therapy-and-performance",
  },
  {
    title: "Jason McGinty",
    url: "http://jasonmcginty.net",
    description: `My personal web site and blog which I built years ago using a <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> template. Companion to this site, and the place where I post extra little projects and musings about literature.`,
    photo: jasonMcginty,
    detailPhoto: jasonMcgintyFull,
    id: "jason-mcginty",
  },
  {
    title: "IronRadio",
    url: "https://ironradio.org",
    description:
      "Podcast hosting site built for a local Topeka, Kansas gym owner and strength coach. Hosts and serves RSS feed and MP3 files for use by podcatchers. Deployed with Microsoft Azure Cloud Services.",
    photo: ironRadio,
    detailPhoto: ironRadioFull,
    id: "iron-radio",
  },
  {
    title: "FlexChess",
    url: "https://flexchess.surge.sh/",
    description: `Browser application built to allow users to create, run, and play in online chess tournaments on their own schedule. Uses the <a href="https://lichess.org/api" target="_blank" rel="noreferrer">Lichess.org API</a> to query player rating information and report game results.`,
    photo: flexChess,
    detailPhoto: flexChessFull,
    id: "flex-chess",
  },
  {
    title: "Solar System Explorer",
    url: "https://solar-system-simulator.herokuapp.com/",
    description: `Browser application built to realistically depict the motions of the planets and moons of our solar system. Queries <a href="https://ssd.jpl.nasa.gov/" target="_blank" rel="noreferrer">NASA's JPL Horizons database</a> for real positions and velocities of solar system bodies at a selected date and time, then uses Newtonian physics to simulate motions of the bodies in space.`,
    photo: solarSystemExplorer,
    detailPhoto: solarSystemExplorerFull,
    id: "solar-system-explorer",
  },
];
