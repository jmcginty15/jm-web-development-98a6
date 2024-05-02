import IconSwitch from "~/assets/iconSwitch";
import Parser from "html-react-parser";
import { useState } from "react";

export interface ProcessItemProps {
  title: string;
  description: string[];
  photo: string;
  photoAlt: string;
  advanceItem?: Function;
  next?: boolean;
  photoRef?: any;
}

export default function ProcessItem({
  photo,
  photoAlt,
  description,
  advanceItem,
  next,
  photoRef,
}: ProcessItemProps) {
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
    <div className="ProcessItem">
      <div
        className="ProcessItem-icon-container"
        style={{ backgroundImage: `url(${photo})` }}
        ref={photoRef}
      >
        <span className="background-image" role="img" aria-label={photoAlt} />
      </div>
      <div className="ProcessItem-text">
        {description?.map((paragraph, index) => (
          <p key={index}>{Parser(paragraph)}</p>
        ))}
        <div className="ProcessItem-button-container">
          <button className="ProcessItem-button" onClick={() => advanceItem!()}>
            {next ? "Next" : "Get started now!"}
          </button>
        </div>
      </div>
    </div>
  );
}
