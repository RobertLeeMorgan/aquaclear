import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/nav/NavBar";
import Footer from "../components/layout/footer/Footer";
import PageContainer from "../components/layout/PageContainer";
// import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      {/* <Breadcrumbs /> */}
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
}
