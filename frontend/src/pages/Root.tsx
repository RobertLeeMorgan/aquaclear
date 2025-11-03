import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/nav/NavBar";
import Footer from "../components/layout/footer/Footer";
import PageContainer from "../components/layout/PageContainer";
import ScrollToTop from "../components/common/ScrollToTop";
import { lazy, Suspense } from "react";

const Chatbot = lazy(() => import("../components/layout/chatbot/Chatbot"));

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <Footer />
    </>
  );
}
