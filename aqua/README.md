deno run -r --allow-net ./aqua/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬───────┬───────┬───────┬───────┬─────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼─────────┼─────────┼────────┤
│ Latency │ 28 ms │ 31 ms │ 42 ms │ 54 ms │ 32.2 ms │ 6.15 ms │ 259 ms │
└─────────┴───────┴───────┴───────┴───────┴─────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 23743   │ 23743   │ 30719  │ 33311   │ 30584.6 │ 2176.97 │ 23741   │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.16 MB │ 2.16 MB │ 2.8 MB │ 3.03 MB │ 2.78 MB │ 198 kB  │ 2.16 MB │
└───────────┴─────────┴─────────┴────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1223k requests in 40.04s, 111 MB read

---

## An error was displayed after the verification was completed

```bash
error: Uncaught (in promise) BrokenPipe: Broken pipe (os error 32)
    at handleError (deno:core/core.js:186:12)
    at binOpParseResult (deno:core/core.js:299:32)
    at asyncHandle (deno:core/core.js:223:40)
    at Array.asyncHandlers.<computed> (deno:core/core.js:238:9)
    at handleAsyncMsgFromRust (deno:core/core.js:207:32)
```
