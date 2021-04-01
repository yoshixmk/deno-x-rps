import Aqua from "https://deno.land/x/aqua@v1.1.0/mod.ts";

const app = new Aqua(8080);

app.get("/", (req) => {
    return "Hello World!";
});
