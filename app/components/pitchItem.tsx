import { useNavigate } from "@remix-run/react";
import IconSwitch from "~/assets/iconSwitch";

export interface PitchItemProps {
  title?: string;
  description?: string;
  iconName:
    | "DEVELOPER"
    | "SCALES"
    | "DRAFTING_TOOLS"
    | "RACECAR"
    | "PHONE"
    | "THUMBS_UP";
  route?: string;
  longDescription?: string[];
}

export default function PitchItem({
  title,
  description,
  iconName,
  route,
}: PitchItemProps) {
  const navigate = useNavigate();

  return (
    <div className="PitchItem" onClick={() => navigate(`/about?item=${route}`)}>
      <div className="PitchItem-icon">
        <IconSwitch iconName={iconName} />
      </div>
      <h2 className="PitchItem-title">{title}</h2>
      <p className="PitchItem-text">{description}</p>
    </div>
  );
}
