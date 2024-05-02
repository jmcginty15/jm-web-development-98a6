import PitchItem from "./pitchItem";
import { pitchItems } from "~/config";

interface PitchProps {
  refProp: any;
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
