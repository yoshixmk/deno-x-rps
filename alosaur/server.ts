import {
  App,
  Area,
  Controller,
  Get,
} from "https://deno.land/x/alosaur@v0.29.3/mod.ts";

@Controller() // or specific path @Controller("/home")
export class HomeController {
  @Get() // or specific path @Get("/hello")
  text() {
    return "Hello World!";
  }
}

// Declare module
@Area({
  controllers: [HomeController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen('0.0.0.0:8080');
