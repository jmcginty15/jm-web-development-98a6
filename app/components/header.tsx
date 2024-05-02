import { Link } from "@remix-run/react";
import Logo from "../assets/logo";
import SocialIcons from "./socialIcons";
import { socialIconList } from "./config/socialIconList";
import IndexNumberedLinkName from "./indexNumber";

interface HeaderProps {
  menuLinks: {
    link: string;
    name: string;
  }[];
}

export default function Header({ menuLinks }: HeaderProps) {
  return (
    <header className="Header">
      <div className="Header-container">
        <Link className="Header-Link" title="logo" to="/">
          <Logo className="Header-Logo" />
        </Link>
        <nav className="Header-nav">
          {menuLinks.map((link, index: number) => (
            <Link
              className="Header-Link-nav"
              key={link.name}
              to={link.link}
              // activeClassName="active"
            >
              <IndexNumberedLinkName indexNumber={index + 1} />
              {link.name}
            </Link>
          ))}
        </nav>
        <SocialIcons icons={socialIconList} />
      </div>
    </header>
  );
}
