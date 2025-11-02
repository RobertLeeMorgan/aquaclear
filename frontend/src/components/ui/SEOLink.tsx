import { Link } from "react-router-dom";

interface SmartLinkProps {
  to: string;
  className?: string;
  label?: string;
  children: React.ReactNode;
}

export default function SmartLink({
  to,
  className,
  label,
  children,
}: SmartLinkProps) {
  return (
    <Link
      {...({ href: to } as any)}
      to={to}
      aria-label={label || String(children)}
      className={className}
    >
      {children}
    </Link>
  );
}