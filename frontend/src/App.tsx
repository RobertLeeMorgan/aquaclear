import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter,
  RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Truxor from "./pages/Truxor";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Clients from "./pages/Clients";
import WeedReedCutting from "./pages/gallery/WeedReedCutting";
import Silting from "./pages/gallery/Silting";
import ExcavationDitching from "./pages/gallery/ExcavationDitching";
import FlotsamRemoval from "./pages/services/FlotsamRemoval";
import ReedBedControl from "./pages/services/ReedBedControl";
import SiltPumping from "./pages/services/SiltPumping";
import TreeWork from "./pages/services/TreeWork";
import WeedCutting from "./pages/services/WeedCutting";
import Excavation from "./pages/services/Excavation";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    index: true, // Hero outside of RootLayout
    element: <Hero />, 
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "truxor", element: <Truxor /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "clients", element: <Clients /> },
    ],
  },
  {
  path: "gallery",
  element: <RootLayout />,
  errorElement: <Error />,
  children: [
    { path: "weed-reed-cutting", element: <WeedReedCutting /> },
    { path: "silting", element: <Silting /> },
    { path: "excavation-ditching", element: <ExcavationDitching /> },
  ],
},
{
  path: "services",
  element: <RootLayout />,
  errorElement: <Error />,
  children: [
    { path: "flotsam-removal", element: <FlotsamRemoval /> },
    { path: "reed-bed-control", element: <ReedBedControl /> },
    { path: "silt-pumping", element: <SiltPumping /> },
    { path: "tree-work", element: <TreeWork /> },
    { path: "weed-cutting", element: <WeedCutting /> },
    { path: "excavation-ditching", element: <Excavation /> },
  ],
}

]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
