import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function DesktopMenu({ label, links }: { label: string; links: { to: string; label: string }[] }) {
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
    <li ref={ref}>
      <details open={open}>
        <summary
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          {label}
        </summary>
        <ul className="p-2 w-48 z-50">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}