deno run -r --allow-net ./dragon/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 25 ms │ 27 ms │ 32 ms │ 36 ms │ 27.14 ms │ 3.82 ms │ 259 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 30655   │ 30655   │ 36447   │ 37183   │ 36190.6 │ 1178.47 │ 30652   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.97 MB │ 2.97 MB │ 3.53 MB │ 3.61 MB │ 3.51 MB │ 114 kB  │ 2.97 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1448k requests in 40.04s, 140 MB read

## An error was displayed after the verification was completed

```bash
error: Uncaught (in promise) BrokenPipe: Broken pipe (os error 32)
    at handleError (deno:core/core.js:186:12)
    at binOpParseResult (deno:core/core.js:299:32)
    at asyncHandle (deno:core/core.js:223:40)
    at Array.asyncHandlers.<computed> (deno:core/core.js:238:9)
    at handleAsyncMsgFromRust (deno:core/core.js:207:32)
```
