import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <>
      <Nav />
      {/* <Breadcrumbs /> */}
      <Outlet />
      <Footer/>
    </>
  );
}
