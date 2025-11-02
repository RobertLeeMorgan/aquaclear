import SEOLink from "../../ui/SEOLink";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeSelector from "./ThemeSelector";
import { servicesLinks, galleryLinks } from "./menuData";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Mobile menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><SEOLink to="/home">Aquaclear</SEOLink></li>
            <li><SEOLink to="/about">About</SEOLink></li>
            <MobileMenu label="Services" links={servicesLinks} />
            <MobileMenu label="Gallery" links={galleryLinks} />
            <li><SEOLink to="/clients">Clients</SEOLink></li>
            <li><SEOLink to="/truxor">Truxor</SEOLink></li>
            <li><SEOLink to="/contact">Contact</SEOLink></li>
          </ul>
        </div>
        <SEOLink to="/home" className="btn btn-ghost text-primary text-xl">Aquaclear</SEOLink>
      </div>

      {/* Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><SEOLink to="/home">Home</SEOLink></li>
          <li><SEOLink to="/about">About</SEOLink></li>
          <DesktopMenu label="Services" links={servicesLinks} />
          <DesktopMenu label="Gallery" links={galleryLinks} />
          <li><SEOLink to="/clients">Clients</SEOLink></li>
          <li><SEOLink to="/truxor">Truxor</SEOLink></li>
          <li><SEOLink to="/contact">Contact</SEOLink></li>
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <ThemeSelector />
      </div>
    </div>
  );
}