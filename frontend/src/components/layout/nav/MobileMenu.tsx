import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function MobileMenu({ label, links }: { label: string; links: { to: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <li ref={ref} className="relative">
      <a onClick={() => setOpen(!open)}>{label}</a>
      {open && (
        <ul className="absolute left-0 mt-2 bg-base-100 border border-base-300 rounded-box shadow-lg p-2 z-50 w-56">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
