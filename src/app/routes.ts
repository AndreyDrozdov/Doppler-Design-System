import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Insights } from "./pages/Insights";
import { DataSources } from "./pages/DataSources";
import { Settings } from "./pages/Settings";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ComponentLibrary } from "./pages/ComponentLibrary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "analytics", Component: Analytics },
      { path: "insights", Component: Insights },
      { path: "sources", Component: DataSources },
      { path: "settings", Component: Settings },
      { path: "components", Component: ComponentLibrary },
    ],
  },
]);
