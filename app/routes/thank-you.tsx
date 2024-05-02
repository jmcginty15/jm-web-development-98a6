import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import handshake from "../assets/handshake.jpg";
import stylesThankYou from "../thank-you.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesThankYou },
];

export default function Route() {
  return (
    <div className="ThankYou" style={{ backgroundImage: `url(${handshake})` }}>
      <div className="ThankYou-overlay">
        <div className="ThankYou-content">
          <h1 className="ThankYou-title">Thank you!</h1>
          <h3 className="ThankYou-subtitle">
            I've received your request and will be in touch.
          </h3>
          <h3 className="ThankYou-subtitle">
            I look forward to doing business with you!
          </h3>
          <Link className="ThankYou-link" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
