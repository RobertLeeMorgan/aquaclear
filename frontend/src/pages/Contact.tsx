export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      tel: (form.elements.namedItem("tel") as HTMLInputElement).value,
      postcode: (form.elements.namedItem("postcode") as HTMLInputElement).value,
      source: (form.elements.namedItem("source") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
    } else {
      alert("Failed to send message");
    }
  }

  return (
    <div className="py-16 flex flex-col items-center space-y-8 px-4 sm:px-8">
      {/* Contact Form */}
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100 ">
        <div className="card-body px-4 sm:px-8">
          <h2 className="text-4xl text-primary font-bold text-center mb-4">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                <span className="label-text font-semibold">
                  How did you find us?
                </span>
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
