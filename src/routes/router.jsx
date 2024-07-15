import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import PrivateRouter from "../middlewares/PrivateRouter";
import PublicRouter from "../middlewares/PublicRouter";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import AppShell from "@/components/app-shell";
import NotFound from "@/pages/NotFound";
import Success from "@/pages/payment/Success";
import Cancel from "@/pages/payment/Cancel";
import Subscription from "@/pages/subscription/Subscription";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRouter><AppShell /></PrivateRouter>,
        children: [
            {
                path: "",
                element: (
                    <Dashboard />
                ),
            },

            {
                path: "payment-report",
                element: <PrivateRouter><Subscription/></PrivateRouter>,
            },
            {
                path: "success",
                element: <PrivateRouter><Success /></PrivateRouter>,
            },
            {
                path: "cancel",
                element: <PrivateRouter><Cancel /> </PrivateRouter>,
            },

        ]
    },

    {
        path: "register",
        element: <PublicRouter><Register /></PublicRouter>,
    },
    {
        path: "login",
        element: <PublicRouter><Login /></PublicRouter>,
    },
    {
        path: 'not-found',
        element: <NotFound />,
    },

]);
