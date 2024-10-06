import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./about";

export const router = createBrowserRouter([{path: '/', element: <App />},{path: '/about', element: <AboutPage />}])