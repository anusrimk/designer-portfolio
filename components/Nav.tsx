"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";

  return (
    <nav className="nav" id="nav">
      <a href={prefix === "/" ? "/" : "#"} className="nav-logo">
        <em>anusri</em>.k
      </a>
      <div className="nav-links">
        {["[Works]", "[About]", "[Contact]"].map((label, i) => (
          <a
            key={i}
            href={`${prefix}#${label.replace(/[\[\]]/g, "").toLowerCase()}`}
            className="nav-link-item"
          >
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
