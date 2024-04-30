import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Models from "./Pages/Models";
import Faq from "./Pages/FaqDownload";
import PageNotFound from "./Pages/PageNotFound";

import Order from "./components/Order";
import GlobalStyles from "./styles/GlobalStyles";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
// import "../src/dist/styles.css";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/models",
          element: <Models />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer style={{}} />
    </>
  );
}

export default App;
