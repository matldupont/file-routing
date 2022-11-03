import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./PageRoutes.css";

const PRESERVED: Record<string, any> = import.meta.glob(
  "/src/pages/(_app|404).tsx"
);
const preserved: { _app?: React.ReactNode; 404?: React.ReactNode } =
  Object.keys(PRESERVED).reduce((preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
    return { ...preserved, [key]: React.lazy(PRESERVED[file]) };
  }, {});

const ROUTES: Record<string, any> = import.meta.glob(
  "/src/pages/**/[a-z[]*.tsx"
);

console.log("ROUTES", ROUTES);

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1"); // dynamic filenames

  // return { path, component: ROUTES[route].default };
  return { path, component: React.lazy(ROUTES[route]) };
});

console.log("routes", routes);

const PageRoutes = () => {
  const App: any = preserved?.["_app"] || React.Fragment;
  const NotFound: any = preserved?.["404"] || React.Fragment;

  return (
    <App>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            {routes.map(({ path, component: Component = React.Fragment }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={NotFound} />
          </Route>
        </Routes>
      </React.Suspense>
    </App>
  );
};

export { PageRoutes };
