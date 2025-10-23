import { Link } from "react-router-dom";
import aquaclearLogo from "../assets/logos/aquaclear.png";

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <div className="order-5 md:order-1 flex items-center justify-center lg:justify-start h-full w-full">
        <aside className="flex flex-col items-center justify-center text-center md:items-start gap-4 ">
          <img
            src={aquaclearLogo}
            alt="Aquaclear Water Management"
            className="w-40 h-auto object-contain justify-self-center"
          />
          <p>
            Aquaclear Water Management
            <br />© 2023 All Rights Reserved
          </p>
        </aside>
      </div>
      <nav className="order-2 md:order-2">
        <h6 className="footer-title">Services</h6>
        <Link to="/services/weed-cutting" className="link link-hover">
          Weed Cutting
        </Link>
        <Link to="/services/reed-bed-control" className="link link-hover">
          Reed Bed Control
        </Link>
        <Link to="/services/silt-pumping" className="link link-hover">
          Silt Pumping
        </Link>
        <Link to="/services/flotsam-removal" className="link link-hover">
          Flotsam Removal
        </Link>
        <Link to="/services/excavation-ditching" className="link link-hover">
          Excavation & Ditching
        </Link>
        <Link to="/services/tree-work" className="link link-hover">
          Tree Work
        </Link>
      </nav>
      <nav className="order-3 md:order-3">
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/clients" className="link link-hover">
          Clients
        </Link>
        <Link to="/truxor" className="link link-hover">
          Truxor
        </Link>
      </nav>
      <nav className="order-4 md:order-4">
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/privacy" className="link link-hover">
          Privacy policy
        </Link>
      </nav>
    </footer>
  );
}
