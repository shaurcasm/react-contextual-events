import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Systems } from "../pages/Systems/Systems";
import { Services } from "../pages/Services/Services";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Services />
    },
    {
        path: "/systems",
        element: <Systems />
    },
    {
        path: "/services",
        element: <Services />
    }
])

export default function AppRouterProvider() {
    return <RouterProvider router={router} />
}