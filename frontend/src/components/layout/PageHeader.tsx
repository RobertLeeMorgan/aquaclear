import { Helmet } from "react-helmet-async";

interface PageHeaderProps {
  title: string;
  subtitle?: React.ReactNode | string;
  caption?: string;
  align?: "center" | "left";
  description?: string;
}

export default function PageHeader({
  title,
  subtitle,
  caption,
  align = "center",
  description,
}: PageHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const metaDescription =
    typeof subtitle === "string"
      ? subtitle.slice(0, 160)
      : description || caption || "";

  return (
    <>
      <Helmet>
        <title>{`${title} | Aquaclear Water Management`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <header className={`flex flex-col ${alignment} space-y-6`}>
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        {subtitle && (
          <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
        {caption && (
          <p className="text-base text-base-content/80">{caption}</p>
        )}
      </header>
    </>
  );
}
