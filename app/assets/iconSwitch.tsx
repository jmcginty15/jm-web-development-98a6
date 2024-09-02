import Developer from "./developer";
import DraftingTools from "./draftingTools";
import Phone from "./phone";
import Racecar from "./racecar";
import Scales from "./scales";
import ThumbsUp from "./thumbsUp";

export default function IconSwitch({
  iconName,
  scale = 1,
}: {
  iconName:
    | "DEVELOPER"
    | "SCALES"
    | "DRAFTING_TOOLS"
    | "RACECAR"
    | "PHONE"
    | "THUMBS_UP";
  scale?: number;
}) {
  switch (iconName) {
    case "DEVELOPER":
      return <Developer scale={scale} />;
    case "SCALES":
      return <Scales scale={scale} />;
    case "DRAFTING_TOOLS":
      return <DraftingTools scale={scale} />;
    case "RACECAR":
      return <Racecar scale={scale} />;
    case "PHONE":
      return <Phone scale={scale} />;
    case "THUMBS_UP":
      return <ThumbsUp scale={scale} />;
  }
}
