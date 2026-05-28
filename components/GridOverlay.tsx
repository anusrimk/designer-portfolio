export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid-col" />
      ))}
    </div>
  );
}
