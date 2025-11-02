import SEOLink from "../../ui/SEOLink";
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
      <div onClick={() => setOpen(!open)}>{label}</div>
      {open && (
        <ul className="absolute left-0 mt-2 bg-base-100 border border-base-300 rounded-box shadow-lg p-2 z-50 w-56">
          {links.map((link) => (
            <li key={link.to}>
              <SEOLink to={link.to}>{link.label}</SEOLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
