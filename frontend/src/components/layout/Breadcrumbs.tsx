import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={path}>
              {isLast ? (
                segment.charAt(0).toUpperCase() + segment.slice(1)
              ) : (
                <Link to={path}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}