import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiUser2Fill,
  RiTerminalFill,
  RiQuillPenFill,
  RiMailFill,
  RiFlowChart,
  RiCodeSSlashFill,
} from "react-icons/ri";

interface IconProps {
  iconName: string;
}

export default function Icon({ iconName }: IconProps) {
  switch (iconName) {
    case "linkedin":
      return <RiLinkedinBoxFill id="linkedin" />;
    case "github":
      return <RiGithubFill id="github" />;
    case "user-tie":
      return <RiUser2Fill id="about" />;
    case "terminal":
      return <RiTerminalFill id="projects" />;
    case "feather-alt":
      return <RiQuillPenFill id="blog" />;
    case "envelope":
      return <RiMailFill id="contact" />;
    case "flowchart":
      return <RiFlowChart id="process" />;
    case "code":
      return <RiCodeSSlashFill id="portfolio" />;
    default:
      return <div />;
  }
}
