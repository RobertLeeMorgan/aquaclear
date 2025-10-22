import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center space-y-8">
      
      {/* Business Info */}
      <div className="card w-full max-w-2xl bg-base-100 shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">Aquaclear Water Management</h1>
        <p className="text-sm text-gray-600 mb-1">Cardiff, UK</p>
        <p className="text-sm text-gray-600 mb-1">Office: 01446 730886 | Mobile: 07814 741491</p>
        <p className="text-sm text-gray-600 mb-2">Email: info@aquaclearwatermanagement.com</p>
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
      </div>

      {/* Contact Form */}
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <form className="space-y-4">
            
            {/* Full Name */}
            <div className="form-control">
              <label htmlFor="fullName" className="label">
                <span className="label-text font-semibold">Full Name *</span>
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                placeholder="John Smith"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* E-mail */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold">E-mail *</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Tel */}
            <div className="form-control">
              <label htmlFor="tel" className="label">
                <span className="label-text font-semibold">Tel *</span>
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="01234 567890"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Postcode */}
            <div className="form-control">
              <label htmlFor="postcode" className="label">
                <span className="label-text font-semibold">
                  Postcode of site (or nearest known) *
                </span>
              </label>
              <input
                id="postcode"
                name="postcode"
                type="text"
                placeholder="e.g. SW1A 1AA"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Source */}
            <div className="form-control">
              <label htmlFor="source" className="label">
                <span className="label-text font-semibold">How did you find us?</span>
              </label>
              <select
                id="source"
                name="source"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  (Please Select)
                </option>
                <option value="Google">Google</option>
                <option value="Social media">Social media</option>
                <option value="Truxor main site">Truxor main site</option>
                <option value="FADS Directory">FADS Directory</option>
                <option value="Flood Expo">Flood Expo</option>
                <option value="Word of mouth">Word of mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text font-semibold">Message *</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered h-32 w-full"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
