interface PageHeaderProps {
  title: string;
  subtitle?: React.ReactNode | string;
  caption?: string;
  align?: "center" | "left";
}

export default function PageHeader({
  title,
  subtitle,
  caption,
  align = "center",
}: PageHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`flex flex-col ${alignment} space-y-6`}>
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      {subtitle && (
        <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl">{subtitle}</p>
      )}
      {caption && <p className="text-base text-base-content/80">{caption}</p>}
    </header>
  );
}
