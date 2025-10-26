export default function TruxorContact() {
    return (
        <section className="mt-8 bg-base-200 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Truxor UK Contact
          </h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.truxoruk.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              www.truxoruk.co.uk
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@truxoruk.co.uk" className="link link-primary">
              info@truxoruk.co.uk
            </a>
          </p>
          <p>
            <strong>Telephone:</strong>{" "}
            <a href="tel:07775672567" className="link link-primary">
              07775 672567
            </a>
          </p>
        </section>
    )
}