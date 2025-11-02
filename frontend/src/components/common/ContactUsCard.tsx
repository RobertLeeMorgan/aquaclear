import SEOLink from "../ui/SEOLink";

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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/truxor.pdf";
    link.download = "truxor.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 text-center py-8 px-4 sm:px-8 space-y-4">
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
            <SEOLink
              to={url}
              className="text-primary font-semibold hover:underline"
            >
              {" "}
              {linkto}{" "}
            </SEOLink>
          )}
          {extension && extension}.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <SEOLink to="/contact" className="btn btn-primary mt-2">
          Contact Us
        </SEOLink>
        {silting && (
          <button className="btn btn-outline mt-2" onClick={handleDownload}>
            Download Brochure (PDF)
          </button>
        )}
      </div>
    </div>
  );
}
