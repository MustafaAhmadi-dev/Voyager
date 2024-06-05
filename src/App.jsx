import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CarsList from "./features/cars/CarsList";
import Models, { loader as carLoader } from "./Pages/Models";
import Faq from "./Pages/FaqDownload";
import PageNotFound from "./Pages/PageNotFound";

import Order from "./Pages/Order";
import { ColorModeProvider } from "./contexts/colorModeContext";

import GlobalStyles from "./styles/GlobalStyles";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

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
          path: "/cars",
          element: <CarsList />,
        },
        {
          path: "/models",
          element: <Models />,
          loader: carLoader,
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
      <QueryClientProvider client={queryClient}>
        <ColorModeProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
          <ToastContainer style={{ zIndex: 999 }} />
        </ColorModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
