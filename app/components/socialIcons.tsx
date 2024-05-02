import Icon from "./icon";

interface SocialIconsProps {
  icons: {
    link: string;
    name: string;
    prefix: string;
  }[];
}

export default function SocialIcons({ icons }: SocialIconsProps) {
  const socialIcons = icons.map(({ link, name }) => {
    return (
      <a
        href={link}
        key={link}
        target="_blank"
        rel="noopener"
        aria-label={`social link to ${link}`}
      >
        <Icon iconName={name} />
      </a>
    );
  });

  return (
    <div className="SocialIcons-container">
      <div className="SocialIcons">{socialIcons}</div>
    </div>
  );
}
