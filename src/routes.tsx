import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Detail from "./screens/Detail";
import SearchProduct from "./screens/SearchProduct";
import OnBoard from "./screens/OnBoard";
import Home from "./screens/Home";

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props: any) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }: any) {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {routes.map((route: any, i: any) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </AnimatePresence>
  );
}

const ROUTES = [
  { path: "/", key: "GUIDE", exact: true, component: () => <OnBoard /> },
  { path: "/home", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/detail", key: "DETAIL", exact: true, component: () => <Detail /> },
  {
    path: "/search",
    key: "SEARCH",
    exact: true,
    component: () => <SearchProduct />,
  },
];

export default ROUTES;
