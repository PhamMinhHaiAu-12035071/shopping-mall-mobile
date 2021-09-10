import { Route, Switch } from "react-router-dom";
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
            render={(props: any) => <route.component {...props} routes={route.routes} />}
        />
    );
}
/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }: any) {
    return (
        <Switch>
            {routes.map((route: any, i: any) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}
const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
];

export default ROUTES;