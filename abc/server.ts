import { Application } from "https://deno.land/x/abc@v1.3.0/mod.ts";

const app = new Application();

console.log("http://localhost:8080/");

app
  .get("/", (c) => {
    return "Hello, World!";
  })
  .start({ port: 8080 });
