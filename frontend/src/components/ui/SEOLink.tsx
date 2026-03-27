import { Link } from "react-router-dom";

interface SEOLinkProps {
  to: string;
  className?: string;
  label?: string;
  children: React.ReactNode;
}

export default function SEOLink({
  to,
  className,
  label,
  children,
}: SEOLinkProps) {
  return (
    <Link
      {...({ href: to } as any)}
      to={to}
      aria-label={label || String(children)}
      className={`${className} transition-all hover:scale-[1.02] hover:shadow-sm duration-200`}
    >
      {children}
    </Link>
  );
}