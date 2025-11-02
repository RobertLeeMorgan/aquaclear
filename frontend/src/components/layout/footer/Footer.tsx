import SEOLink  from "../../ui/SeoLink";
import { footerMenus } from "./footerMenus";
import BusinessCard from "../../sections/BusinessCard";

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content px-8 py-6 md:py-10">
      <aside className="order-5 md:order-1 md:ml-4 m-auto">
        <BusinessCard/>
      </aside>

      <nav className="order-2 md:order-2">
        <h6 className="footer-title">Services</h6>
        {footerMenus.services.map((item) => (
          <SEOLink key={item.path} to={item.path} className="link link-hover">
            {item.label}
          </SEOLink>
        ))}
      </nav>

      <nav className="order-3 md:order-3">
        <h6 className="footer-title">Company</h6>
        {footerMenus.company.map((item) => (
          <SEOLink key={item.path} to={item.path} className="link link-hover">
            {item.label}
          </SEOLink>
        ))}
      </nav>

      <nav className="order-4 md:order-4">
        <h6 className="footer-title">Legal</h6>
        {footerMenus.legal.map((item) => (
          <SEOLink key={item.path} to={item.path} className="link link-hover">
            {item.label}
          </SEOLink>
        ))}
      </nav>
    </footer>
  );
}
