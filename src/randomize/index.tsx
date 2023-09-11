import { renderToReadableStream } from "react-dom/server";
import RandomizeView from "./View";

export default async function randomize(request: Request) {
    // TODO
    const view = await renderToReadableStream(<RandomizeView />);

    return new Response(view, {
        headers: { "Content-Type": "text/html" }
    });
}
