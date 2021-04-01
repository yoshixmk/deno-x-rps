import { MandarineCore, Controller, GET } from "https://deno.land/x/mandarinets@v2.3.2/mod.ts";

@Controller()
export class MyController {

    @GET('/')
    public httpHandler() {
        return "Hello World!";
    }

}

new MandarineCore().MVC().run();
