import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Detail from "./screens/Detail";
import HomeAndOnBoard from "./screens/HomeAndOnBoard";

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
  { path: "/", key: "ROOT", exact: true, component: () => <HomeAndOnBoard /> },
  { path: "/detail", key: "DETAIL", exact: true, component: () => <Detail /> },
];

export default ROUTES;
