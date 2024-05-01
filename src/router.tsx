import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignupPage from "./pages/signup-page/SignupPage";
import LandingPage from "./pages/landing-page/LandingPage";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <LandingPage />
        },
        {
            path: "/signup",
            element: <SignupPage />
        }
    ]
}]);

export default router;