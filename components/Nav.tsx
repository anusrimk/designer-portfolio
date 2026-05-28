export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <a href="#" className="nav-logo">
        <em>anusri</em>.k
      </a>
      <div className="nav-links">
        {["[Works]", "[About]", "[Contact]"].map((label, i) => (
          <a key={i} href={`#${label.replace(/[\[\]]/g, "").toLowerCase()}`} className="nav-link-item">
            <span>{label}</span>
            <span aria-hidden="true">{label}</span>
          </a>
        ))}
      </div>
      <div className="nav-status">
        <span className="nav-asterisk">✳</span> Open to work
      </div>
    </nav>
  );
}
