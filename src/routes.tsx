import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import OnBoard from "./screens/OnBoard";
import SplashScreen from "./screens/SplashScreen";

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
  return (
    <AnimatePresence>
      <Switch>
        {routes.map((route: any, i: any) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </AnimatePresence>
  );
}

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <OnBoard /> },
  { path: "/home", key: "HOME", exact: true, component: () => <Home /> },
  { path: "/detail", key: "DETAIL", exact: true, component: () => <Detail /> },
];

export default ROUTES;
