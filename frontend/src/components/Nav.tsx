import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement>(null);
  const galleryRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        galleryRef.current &&
        !galleryRef.current.contains(event.target as Node)
      ) {
        setGalleryOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/home">Aquaclear</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Services Parent */}
            <li ref={servicesRef}>
              <a onClick={() => setServicesOpen(!servicesOpen)}>Services</a>
              {servicesOpen && (
                <ul className="p-2 z-50">
                  <li>
                    <Link to="/services/weed-cutting">Weed & Reed Cutting</Link>
                  </li>
                  <li>
                    <Link to="/services/reed-bed-control">
                      Reed Bed Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/silt-pumping">Silt Pumping</Link>
                  </li>
                  <li>
                    <Link to="/services/flotsam-removal">Flotsam Removal</Link>
                  </li>
                  <li>
                    <Link to="/services/excavation-ditching">
                      Excavation & Ditching
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/tree-work">Tree Work</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Gallery Parent */}
            <li ref={galleryRef}>
              <a onClick={() => setGalleryOpen(!galleryOpen)}>Gallery</a>
              {galleryOpen && (
                <ul className="p-2 w-48 z-50">
                  <li>
                    <Link to="/gallery/weed-reed-cutting">
                      Weed & Reed Cutting
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/silting">Silting</Link>
                  </li>
                  <li>
                    <Link to="/gallery/excavation-ditching">
                      Excavation & Ditching
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/truxor">Truxor</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost text-xl">
          Aquaclear
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Services Parent */}
          <li ref={servicesRef}>
            <details open={servicesOpen}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
              >
                Services
              </summary>
              <ul className="p-2 w-48 z-50">
                <li>
                  <Link to="/services/weed-cutting">Weed & Reed Cutting</Link>
                </li>
                <li>
                  <Link to="/services/reed-bed-control">Reed Bed Control</Link>
                </li>
                <li>
                  <Link to="/services/silt-pumping">Silt Pumping</Link>
                </li>
                <li>
                  <Link to="/services/flotsam-removal">Flotsam Removal</Link>
                </li>
                <li>
                  <Link to="/services/excavation-ditching">
                    Excavation & Ditching
                  </Link>
                </li>
                <li>
                  <Link to="/services/tree-work">Tree Work</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* Gallery Parent */}
          <li ref={galleryRef}>
            <details open={galleryOpen}>
              <summary
                onClick={(e) => {
                  e.preventDefault(); // prevent native toggle
                  setGalleryOpen(!galleryOpen);
                }}
              >
                Gallery
              </summary>
              <ul className="p-2 w-48 z-50">
                <li>
                  <Link to="/gallery/weed-reed-cutting">
                    Weed & Reed Cutting
                  </Link>
                </li>
                <li>
                  <Link to="/gallery/silting">Silting</Link>
                </li>
                <li>
                  <Link to="/gallery/excavation-ditching">
                    Excavation & Ditching
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/truxor">Truxor</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <select
          className="select select-bordered select-sm"
          onChange={(e) => {
            document.documentElement.setAttribute("data-theme", e.target.value);
            localStorage.setItem("theme", e.target.value); // persist choice
          }}
          defaultValue={localStorage.getItem("theme") || "light"}
        >
          {[
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
          ].map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
