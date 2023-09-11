import { env } from "process";
import router, { handleRequest } from "./src/lib/router";
import randomize from "./src/randomize";

router.get("/", () => {
    return new Response("Welcome! Go to /randomize to get a random anime");
});

router.get("/sayHi", () => {
    return new Response("Hii");
});

router.get("/randomize", (request) => {
    //TODO
    return randomize(request);
});

router.get("/styles.css", (request) => {
    //TODO
})

Bun.serve({
    port: env.PORT,
    development: env.NODE_ENV != "prod",
    fetch(request) {
        return handleRequest(request);
    },
    error(request) {
        // TODO
    },
});
