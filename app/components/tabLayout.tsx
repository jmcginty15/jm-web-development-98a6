/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from "react";

import { pitchItems } from "~/config";

import { PitchItemProps } from "./pitchItem";
import PitchItemFull from "./pitchItemFull";

interface TabLayoutProps {
  refProp: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  goToItem?: PitchItemProps | null;
}

export default function TabLayout({ refProp, goToItem }: TabLayoutProps) {
  const [activeItem, setActiveItem] = useState<PitchItemProps>(
    goToItem || pitchItems[0],
  );

  return (
    <div className="TabLayout" ref={refProp}>
      <div className="TabLayout-tabs">
        {pitchItems.map((item, index) => (
          <div
            className={`TabLayout-button${
              index === 0 ? " TabLayout-button-left" : ""
            }${
              index === pitchItems.length - 1 ? " TabLayout-button-right" : ""
            }`}
            id={`${
              activeItem.title === item.title
                ? "TabLayout-button-active"
                : `TabLayout-button-${index}`
            }`}
            key={item.title}
            onClick={() => setActiveItem(item)}
            onKeyDown={() => setActiveItem(item)}
          >
            <span className="TabLayout-button-inner">{item.title}</span>
          </div>
        ))}
      </div>
      <PitchItemFull
        iconName={activeItem.iconName}
        longDescription={activeItem.longDescription}
      />
    </div>
  );
}
