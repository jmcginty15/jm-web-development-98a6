import { Link } from "@remix-run/react";
import wife from "../assets/wife2.jpg";

export default function Bio() {
  return (
    <div className="Bio">
      <img className="Bio-image" src={wife} alt="addie-and-jason" />
      <div className="Bio-content">
        <h2 className="Bio-title">Hi, I'm Jason!</h2>
        <p className="Bio-text">
          I've been working as web developer since 2020, doing a little bit of
          everything: frontend, backend, full stack; working for companies and
          taking on clients as a freelancer. I started JM Web Development{" "}
          <small>LLC</small> in 2023 with the goal of putting my skills to use
          for small businesses both in the Tulsa area and around the country.
        </p>
        <p className="Bio-text">
          My software education started during college, where I earned a BS in
          Systems Engineering from the US Naval Academy. From the foundation of
          coding skills I built there, I returned to the software world several
          years later by completing the{" "}
          <a
            className="Bio-link"
            href="https://www.springboard.com/"
            target="_blank"
            rel="noreferrer"
          >
            Springboard
          </a>{" "}
          Software Engineering program. I work mainly in{" "}
          <a
            className="Bio-link"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            className="Bio-link"
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
          >
            Node.js
          </a>{" "}
          but have dabbled in a few other things as well. Click below to learn
          more about that.
        </p>
        <p className="Bio-text">
          I live in rural Oklahoma with my wife Addie and daughter Katharin,
          along with our dog George.
        </p>
        <Link className="Bio-button" to="/about?ref=bio">
          Learn more
        </Link>
      </div>
    </div>
  );
}
