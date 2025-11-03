import { useRouteError } from "react-router-dom";
import NavBar from "../components/layout/nav/NavBar";

export default function Error() {
  const error = useRouteError() as {
    status?: number;
    data?: string;
    message?: string;
    statusText?: string;
  };

  return (
    <>
      <NavBar />
      <section
        className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 sm:px-8 text-center"
        style={{
          backgroundImage: `url(/images/hero-background.webp)`,
        }}
      >
        <div className="max-w-lg bg-base-100 shadow-xl rounded-2xl p-10 border border-base-300">
          <h1 className="text-5xl font-bold text-error mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-base-content/80 mb-6">
            We’re sorry — an unexpected error occurred while loading this page.
          </p>

          <div className="bg-error/10 border border-error rounded-lg p-4 text-left text-error-content">
            {error.status && (
              <p className="font-semibold">
                Status: <span className="text-error">{error.status}</span>
              </p>
            )}
            {error.statusText && <p>{error.statusText}</p>}
            {error.data && <p className="mt-2">{error.data}</p>}
            {error.message && <p className="mt-2">{error.message}</p>}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/home" className="btn btn-outline" aria-label="Home">
              Back to Home
            </a>
          </div>
          <p className="mt-10 text-sm text-base-content/60">
            If the issue persists, please contact support or try again later.
          </p>
        </div>
      </section>
    </>
  );
}
