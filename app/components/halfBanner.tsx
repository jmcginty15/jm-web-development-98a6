export default function HalfBanner({
  photo,
  photoAlt,
  text,
}: {
  photo: string;
  photoAlt: string;
  text: string;
}) {
  return (
    <div className="HalfBanner" style={{ backgroundImage: `url(${photo})` }}>
      <span className="background-image" role="img" aria-label={photoAlt} />
      <div className="HalfBanner-overlay">
        <div className="HalfBanner-content">
          <div className="HalfBanner-title-container">
            <h1 className="HalfBanner-title">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
