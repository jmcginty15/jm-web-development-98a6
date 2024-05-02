import { Link } from "@remix-run/react";
import Icon from "./icon";
import IndexNumber from "./indexNumber";

interface FooterNavProps {
  menuLinks: {
    name: string;
    link: string;
    icon: string;
  }[];
}

// Note: The NavigationBar component should only be used for up to 5 menu links
export default function FooterNav({ menuLinks }: FooterNavProps) {
  return (
    <nav className="FooterNav">
      {menuLinks.map((link, index) => (
        <Link
          className="FooterNav-Link"
          key={link.name}
          to={link.link}
          // activeClassName="active"
        >
          <Icon iconName={link.icon} />
          <div>
            <IndexNumber indexNumber={index + 1} />
            {link.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
