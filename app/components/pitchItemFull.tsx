import { PitchItemProps } from "./pitchItem";
import IconSwitch from "~/assets/iconSwitch";
import Parser from "html-react-parser";
import { useState } from "react";

export default function PitchItemFull({
  iconName,
  longDescription,
}: PitchItemProps) {
  const [scaleSet, setScaleSet] = useState(false);
  const [scale, setScale] = useState(2);

  const resizeIcon = () => {
    if (window.innerWidth >= 1170) {
      if (scale !== 3) setScale(3);
    } else if (window.innerWidth >= 960) {
      if (scale !== 2) setScale(2);
    } else if (window.innerWidth >= 768) {
      if (scale !== 3) setScale(3);
    } else if (window.innerWidth <= 300) {
      if (scale !== 1) setScale(1);
    } else if (scale !== 2) setScale(2);
  };

  if (!scaleSet && typeof window !== "undefined") {
    setTimeout(() => {
      resizeIcon();
      setScaleSet(true);
    }, 1);
  }
  if (typeof window !== "undefined")
    window.addEventListener("resize", resizeIcon);

  return (
    <div className="PitchItemFull">
      <div className="PitchItemFull-icon-container">
        <IconSwitch iconName={iconName} scale={scale} />
      </div>
      <div className="PitchItemFull-text">
        {longDescription?.map((paragraph, index) => (
          <p key={index}>{Parser(paragraph)}</p>
        ))}
      </div>
    </div>
  );
}
