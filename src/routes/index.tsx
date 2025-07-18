import App from "@/App"; // ✅ Import the actual component
import Tasks from "@/components/Pages/Tasks"; // ✅ Import the Tasks component
import Users from "@/components/Pages/User"; // ✅ Import the Users component
import { createBrowserRouter } from "react-router"; // Also correct this if needed

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
