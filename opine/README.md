deno run -r --allow-net ./opine/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 145 ms │ 152 ms │ 201 ms │ 226 ms │ 157.62 ms │ 21.66 ms │ 836 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬─────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%   │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼─────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 5135   │ 5135   │ 6331   │ 6775    │ 6318.6 │ 392.31  │ 5134   │
├───────────┼────────┼────────┼────────┼─────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 786 kB │ 786 kB │ 969 kB │ 1.04 MB │ 967 kB │ 60.1 kB │ 786 kB │
└───────────┴────────┴────────┴────────┴─────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

253k requests in 40.07s, 38.7 MB read

## error: path = Deno.cwd();
added `--allow-read`, but I think it is desirable to have only `--allow-net`.


## An error was displayed after the verification was completed

```bash
error: Uncaught (in promise) BrokenPipe: Broken pipe (os error 32)
    at handleError (deno:core/core.js:186:12)
    at binOpParseResult (deno:core/core.js:299:32)
    at asyncHandle (deno:core/core.js:223:40)
    at Array.asyncHandlers.<computed> (deno:core/core.js:238:9)
    at handleAsyncMsgFromRust (deno:core/core.js:207:32)
```
