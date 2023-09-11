import { HttpMethod } from "./types/HttpMethod";
import { RouteHandler } from "./types/RouteHandler";
import NotFound from "./exceptions/NotFound";
import serveStatic from "serve-static-bun";

interface Route {
    method: HttpMethod,
    path: string,
    handler: RouteHandler
}

const defaultResponse = new Response("Ok", {
    status: 200
});

let routes: Route[] = [];

function get(path: string, handler: RouteHandler) {
    const newRoute: Route = {
        method: "GET",
        path,
        handler
    }

    routes.push(newRoute);
}

function post(path: string, handler: RouteHandler) {
    const newRoute: Route = {
        method: "POST",
        path,
        handler
    }

    routes.push(newRoute);
}

export async function handleRequest(request: Request): Promise<Response> {
    const requestRoute = new URL(request.url).pathname.toLowerCase();
    const matchingRoute = routes.find((route) => route.path.toLowerCase() == requestRoute);

    if (!matchingRoute) {
        return (serveStatic("public")(request));
    }

    const handledRoute = await matchingRoute.handler(request);

    if (handledRoute instanceof Response) {
        return handledRoute;
    } else {
        return defaultResponse;
    }
}

const router = {
    get,
    post
}

export default router;
