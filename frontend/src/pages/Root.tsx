import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/nav/NavBar";
import Footer from "../components/layout/footer/Footer";
import PageContainer from "../components/layout/PageContainer";
import ScrollToTop from "../components/common/ScrollToTop";
import Chatbot from "../components/layout/chatbot/Chatbot";
import { useEffect } from "react";
// import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  useEffect(() => {
    fetch("https://aquaclear-backend.onrender.com/api/health")
      .then((res) => {
        if (res.ok) {
          console.log("Backend responded — it’s awake!");
        } else {
          console.log("Backend responded, but not OK:", res.status);
        }
      })
      .catch((err) => console.error("Backend still sleeping:", err));
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <Breadcrumbs /> */}
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Chatbot />
      <Footer />
    </>
  );
}
