interface RotatorProps {
  emojis: string[];
}

export default function Rotator({ emojis }: RotatorProps) {
  // emojis must be an array of 5 emoji characters,
  // if you want more or less emojis you have to adjust the animation accordingly
  return (
    <div className="Rotator">
      <span className="Rotator-emoji">{emojis.join(" ")}</span>
    </div>
  );
}
