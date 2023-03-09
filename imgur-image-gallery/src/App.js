import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Service from "./components/Api/Service";
import Static from "./components/Api/Static";
import Error from "./components/route/Error";
import Root from "./components/route/Root";

function App() {
  const routePath = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/static",
          element: <Static />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routePath}></RouterProvider>
    </div>
  );
}

export default App;
