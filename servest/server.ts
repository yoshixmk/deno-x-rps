import { createApp, Loglevel, setLevel } from "https://deno.land/x/servest@v1.2.0/mod.ts";

const app = createApp();
setLevel(Loglevel.ERROR);
app.get("/", async (req) => {
  const body = await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html",
    }),
    body: "Hello World!",
  });;
});

app.listen({ port: 8080 });
