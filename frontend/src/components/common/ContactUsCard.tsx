import { Link } from "react-router-dom";

interface ContactProps {
  title: string;
  text: string;
  url?: string;
  linkto?: string;
  extension?: string;
  treeWork?: boolean;
  silting?: boolean;
}

export default function ContactUsCard({
  linkto,
  url,
  title,
  text,
  extension,
  silting,
  treeWork,
}: ContactProps) {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300 text-center p-8 space-y-4">
      <h3 className="text-2xl font-semibold text-primary">
        Need Help with {title}?
      </h3>
      {treeWork && (
        <div className="max-w-3xl mx-auto text-center space-y-2 pt-4">
          <p className="text-base text-base-content/80 leading-relaxed">
            Our experienced teams are fully certified for chainsaw and
            water-based operations. Whether clearing large fallen trees or
            managing overgrowth along the banks, we approach every project with
            precision and care for the ecosystem.
          </p>
        </div>
      )}
      <div className="text-base-content/80 max-w-2xl mx-auto leading-relaxed">
        <p className="text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          {text}
          {linkto && url && (
            <Link
              to={url}
              className="text-primary font-semibold hover:underline"
            >
              {" "}
              {linkto}{" "}
            </Link>
          )}
          {extension && extension}.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Link to="/contact" className="btn btn-primary mt-2">
          Contact Us
        </Link>
        {silting && <button className="btn btn-outline mt-2">Download Brochure (PDF)</button>}
      </div>
    </div>
  );
}
