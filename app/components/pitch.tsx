import { pitchItems } from "~/config";

import PitchItem from "./pitchItem";

interface PitchProps {
  refProp: React.RefObject<HTMLDivElement>;
}

export default function Pitch({ refProp }: PitchProps) {
  return (
    <div className="Pitch" ref={refProp}>
      {pitchItems.map((item) => (
        <PitchItem
          key={item.title}
          title={item.title}
          description={item.description}
          iconName={item.iconName}
          route={item.route}
        />
      ))}
    </div>
  );
}
