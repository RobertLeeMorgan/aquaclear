import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function BusinessCard() {
  return (
    <section className="max-w-2xl">
      <h2 className="text-xl font-bold mb-2 text-primary">Aquaclear Water Management</h2>
      <p className="text-sm text-gray-600 mb-1">Cardiff, UK</p>
      <p className="text-sm text-gray-600 mb-1">
        Office: 01446 730886 | Mobile: 07814 741491
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Email: info@aquaclearwatermanagement.com
      </p>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.facebook.com/people/Aquaclear-Water-Management/100068576013925"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square btn-sm"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.x.com/aquaclearwm"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-square btn-sm"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
