deno run  --allow-net ./servest/server.ts

---

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬────────┬────────┬────────┬────────┬───────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev     │ Max     │
├─────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼─────────┤
│ Latency │ 172 ms │ 304 ms │ 652 ms │ 746 ms │ 339.45 ms │ 131.41 ms │ 1084 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴───────────┴─────────┘
┌───────────┬────────┬────────┬────────┬────────┬─────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg     │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼─────────┼─────────┼────────┤
│ Req/Sec   │ 1292   │ 1292   │ 2903   │ 4231   │ 2928.68 │ 710.87  │ 1292   │
├───────────┼────────┼────────┼────────┼────────┼─────────┼─────────┼────────┤
│ Bytes/Sec │ 146 kB │ 146 kB │ 328 kB │ 478 kB │ 331 kB  │ 80.3 kB │ 146 kB │
└───────────┴────────┴────────┴────────┴────────┴─────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

117k requests in 40.09s, 13.2 MB read

## The default log level is not silent

```bash
...
I[2021-03-22T08:21:28.370Z] servest:router 200 GET /
...
```

Insert this:
> setLevel(Loglevel.ERROR);

Performance has improved a little.

Running 40s test @ http://localhost:8080
100 connections with 10 pipelining factor

┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 125 ms │ 138 ms │ 204 ms │ 243 ms │ 144.38 ms │ 23.94 ms │ 625 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 5323   │ 5323   │ 7099   │ 7547   │ 6894.3 │ 620.98  │ 5321   │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 602 kB │ 602 kB │ 802 kB │ 853 kB │ 779 kB │ 70.2 kB │ 601 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

276k requests in 40.05s, 31.2 MB read