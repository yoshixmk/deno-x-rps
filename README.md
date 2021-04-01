# Deno X RPS
Measure request per sec for deno third party's http servers.

## Prepare
- [autocannon](https://github.com/mcollina/autocannon)
```bash
$ npm i autocannon -g
```

- [Deno](https://deno.land/#installation) ^v1.8.2

## Benchmarks

CPU: Intel(R) Core(TM) i5-8279U CPU @ 2.40GHz

```bash
$ autocannon -c 100 -d 40 -p 10 localhost:8080
```

This is a synthetic, hello world benchmark that aims to evaluate the framework overhead. The overhead that each framework has on your application depends on your application, you should always benchmark if performance matters to you.

## Http servers

*name, star, forks, description*

- oakserver/oak	3046	156	A middleware framework for Deno's net server 🐿️ 🦕
  - 1028k requests in 40.04s, 94.6 MB read
- drashland/deno-drash	799	23	A REST microframework for Deno's HTTP server with zero 3rd party dependencies.
  - 1195k requests in 40.04s, 90.8 MB read
- keroxp/servest	689	38	🌾A progressive http server for Deno🌾
  - 276k requests in 40.05s, 31.2 MB read
- alosaur/alosaur	561	39	Alosaur - Deno web framework with many decorators
  - 1231k requests in 40.06s, 112 MB read
-	zhmushan/abc	514	45	A better Deno framework to create web application.
  - 433k requests in 40.05s, 40.2 MB read
- asos-craigmorten/opine	507	25	Fast, minimalist web framework for Deno ported from ExpressJS.
  - 253k requests in 40.07s, 38.7 MB read
- sholladay/pogo	341	28	Server framework for Deno
  - 424k requests in 40.05s, 38.6 MB read
- mandarineorg/mandarinets	161	8	Mandarine.TS is a typescript, decorator-driven framework that allows you to create server-side applications. Mandarine.TS provides a range of built-in solutions such as Dependency Injection, Components, ORM and more. Under its umbrella, Mandarine.TS has 4 modules: Core, Data, Security and MVC, these modules will offer you the requirements to build a Mandarine-powered application.
  - 413k requests in 40.05s, 37.6 MB read
- l2ig/aqua	121	4	A minimal and fast 🏃 web framework for Deno
  - 1223k requests in 40.04s, 111 MB read
- reno-router/reno	96	3	A thin, testable routing library designed to sit on top of Deno's standard HTTP module
  - 459k requests in 40.05s, 35.3 MB read
- xanny-projects/dragon	60	9	⚡Fast , simple expressive web framework for deno 🦕.
  - 1448k requests in 40.04s, 140 MB read

Other...Contenalize

- fastroapp/fastro	84	3	Fast and simple deno web application framework

Sorry...to be  

- yisar/deku	43	4	⛄️ No-bundle Dev Server for ES modules with deno.
- alosaur/angular_deno	40	1	Angular Deno - Experimental Angular renderer in server with Deno
- 	momentumframework/momentum	28	0	Momentum is an open-source framework for building server-side Deno applications in TypeScript. It provides the paradigms and design patterns to guide developers to create robust, scalable, and enterprise-grade applications.
- zhmushan/dev_server	18	2	Feel free to import TypeScript files in the script tag!
-	Jack-Works/async-call-rpc	12	0	A lightweight JSON RPC client & server
- Vertrical/tino	7	0	Tiny and functional HTTP server for Deno with local JSON REST API for rapid prototyping.
- lindsaykwardell/http-wrapper	6	2	Simple Server/Router wrapper around Deno's HTTP module
- guilhermewebdev/arbitrium	5	0	Arbitrium is a web micro-framework for Deno. It's designed to create a MVC controllers, making available an async web server and a router, to make get started a powerful applications.
- Tyrenn/mousse	5	0	A Deno web server framework : Let the Deno play with bubbles ! ☁️🦕☁️
- JWebCoder/mith	5	0	A middleware framework for Deno's http/s server.
- Denoot/denoot	4	2	Web server for Deno. Easily route HTTP requests with Denoot http-server.
- functionalland/functional-http-server	4	0	A simple HTTP server inspired by Express and in tune with Functional Programming principles in JavaScript for Deno.
- toddself/take-five	4	0	JSON REST server
-	tnario/deno-hyper-http	3	0	Enhanced and lightweight Deno HTTP web server.
- artur-borys/lapis	1	0	A Deno express-like HTTP server
-	jamesliu96/railgun	0	0	deno web server framework

...Archived  
- fauzan121002/denovel	128	16	A Deno Framework For Web Artisan - Inspired by Laravel

...Not worked with latest Deno version
- Caesar2011/denotrain	89	13	Web framework for Deno with often-used functions included
- fen-land/deno-fen	74	3	a simple web framework for deno
- aaronwlee/attain	66	3	Deno API middleware Server

## Inspired Projects and Posts
- https://github.com/xanny-projects/dragon#benchmarks
- https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69
