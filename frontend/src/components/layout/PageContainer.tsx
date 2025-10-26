type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <main className="min-h-screen bg-base-200">{children}</main>;
}
