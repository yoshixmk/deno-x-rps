import {
  Application,
  HttpRequest,
  HttpResponse,
  RequestMethod,
} from "https://deno.land/x/dragon@v1.1.5/lib/mod.ts";

async function main(args: string[]): Promise<void> {
  const app = new Application();

  const r = app.routes({ maxRoutes: 1 });

  r.Path("/").withMethods(RequestMethod.GET).handleFunc(
    async function (Request: HttpRequest, ResponseWriter: HttpResponse) {
      ResponseWriter.withBody("Hello Dragon").end();
    },
  );

  app.listenAndServe({ port: 8080 });
}

await main(Deno.args);
