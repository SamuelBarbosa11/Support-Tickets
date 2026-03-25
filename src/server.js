import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

http.createServer(listener).listen(3333);

async function listener(request, response) {
	await jsonHandler(request, response);
	routeHandler(request, response);
}
