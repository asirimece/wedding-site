// src/components/PhotoSection.jsx
export function PhotoSection({ image, alt, height = "break" }) {
  return (
    <div className={`photo photo--${height}`}>
      <img className="photoImg" src={image} alt={alt} loading="lazy" />
    </div>
  );
}
