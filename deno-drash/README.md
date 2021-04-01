deno run -r --allow-net ./deno-drash/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 30 ms │ 32 ms │ 40 ms │ 53 ms │ 32.96 ms │ 4.79 ms │ 259 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 24639   │ 24639   │ 30383   │ 31407   │ 29884   │ 1682.82 │ 24634   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.87 MB │ 1.87 MB │ 2.31 MB │ 2.39 MB │ 2.27 MB │ 128 kB  │ 1.87 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1195k requests in 40.04s, 90.8 MB read

## An error was displayed after the verification was completed

```bash
error: Uncaught (in promise) BrokenPipe: Broken pipe (os error 32)
    at handleError (deno:core/core.js:186:12)
    at binOpParseResult (deno:core/core.js:299:32)
    at asyncHandle (deno:core/core.js:223:40)
    at Array.asyncHandlers.<computed> (deno:core/core.js:238:9)
    at handleAsyncMsgFromRust (deno:core/core.js:207:32)
```
