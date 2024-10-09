import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeProvider } from "./context/ColorModeContext";
import { Toaster } from "react-hot-toast";
import { VoyagerProvider } from "./context/VoyagerContext";
import "react-datepicker/dist/react-datepicker.css";
// import { ReactQueryDevtools } from "react-query-devtools";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import FaqDownload from "./pages/FaqDownload";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import Bookings from "./pages/Bookings";
import ProtectedRoute from "./ui/ProtectedRoute";
import AuthenticatedLayout from "./pages/AuthenticatedLayout";
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import NewUsers from "./pages/Users";
import Order from "./pages/Order";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        {
          element: (
            <ProtectedRoute>
              <AuthenticatedLayout />
            </ProtectedRoute>
          ),
          errorElement: <NotFound />,
          children: [
            { path: "/bookings", element: <Bookings /> },
            { path: "/bookings/:bookingId", element: <Booking /> },
            { path: "/users", element: <NewUsers /> },
            { path: "/account", element: <Account /> },
          ],
        },
        { path: "/cars", element: <Cars /> },
        { path: "/about", element: <About /> },
        { path: "/faq", element: <FaqDownload /> },
        { path: "/login", element: <Login /> },
        { path: "/order/:orderId", element: <Order /> },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ColorModeProvider>
          <VoyagerProvider>

            <Toaster
              containerStyle={{ top: 50 }}
              toastOptions={{ position: "top-right", duration: 1200 }}
            />
            <RouterProvider router={router} />
          </VoyagerProvider>
        </ColorModeProvider>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
