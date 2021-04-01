deno run -r --allow-net --allow-env ./pogo/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 88 ms │ 93 ms │ 118 ms │ 147 ms │ 96.21 ms │ 13.99 ms │ 564 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 7907   │ 7907   │ 10559  │ 10911  │ 10334.21 │ 668.45  │ 7904   │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 719 kB │ 719 kB │ 961 kB │ 993 kB │ 940 kB   │ 60.8 kB │ 719 kB │
└───────────┴────────┴────────┴────────┴────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

413k requests in 40.05s, 37.6 MB read

## error: logDuringTesting: Deno.env.get("LOG_DURING_TESTING")
added `--allow-env`, but I think it is desirable to have only `--allow-net`.

## An error was displayed after the verification was completed

```bash
error: Uncaught (in promise) BrokenPipe: Broken pipe (os error 32)
    at handleError (deno:core/core.js:186:12)
    at binOpParseResult (deno:core/core.js:299:32)
    at asyncHandle (deno:core/core.js:223:40)
    at Array.asyncHandlers.<computed> (deno:core/core.js:238:9)
    at handleAsyncMsgFromRust (deno:core/core.js:207:32)
```
