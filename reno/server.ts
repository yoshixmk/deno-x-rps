import { listenAndServe } from "https://deno.land/std@0.90.0/http/server.ts";

import {
  createRouter,
  createRouteMap,
  textResponse,
  NotFoundError,
} from "https://deno.land/x/reno@v1.3.11/reno/mod.ts";

function createErrorResponse(status: number, { message }: Error) {
  return textResponse(message, {}, status);
}

export const routes = createRouteMap([
  ["/", () => textResponse("Hello World!")],
]);

const notFound = (e: NotFoundError) => createErrorResponse(404, e);
const serverError = (e: Error) => createErrorResponse(500, e);

const mapToErrorResponse = (e: Error) =>
  e instanceof NotFoundError ? notFound(e) : serverError(e);

const router = createRouter(routes);

console.log("Listening for requests...");

await listenAndServe(
  ":8080",
  async (req) => {
    try {
      const res = await router(req);
      return req.respond(res);
    } catch (e) {
      return req.respond(mapToErrorResponse(e));
    }
  },
);
