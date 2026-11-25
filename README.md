# One Line, One Laugh

[![One Line, One Laugh](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![Rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/yannyonn94/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![Reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/yannyonn94/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

## The concept

**A New Year's resolution treated as an expired product warranty.** The entry
is written as an expiry NOTICE — a fresh document format, not a stock
one-liner template — with five specific, verifiable details packed into a
single breath: the year 2019, 2,885 days of delay, the eternal excuse
"starting Monday", and a triple refusal (no refund, no extension, no
six-pack). The turn lands because a resolution is suddenly governed by the
same small print as a toaster warranty. 131 characters, inside the 1–140 gate.

## The entry (verbatim)

> NOTICE: your 2019 New Year's resolution expired today after 2,885 days of 'starting Monday' — no refund, no extension, no six-pack.

## Why this line wins the pairwise judge

The judge weighs the laugh first, then the turn, the tightness, the freshness
and the clarity — in that order. This entry is built for that order:

1. **Laugh:** the resolution-as-warranty premise is funny on its own, before
   any punchline is even reached.
2. **Turn:** "expired today" reframes seven years of procrastination as a
   lapsed warranty, and the triple refusal closes it like small print.
3. **Tightness:** 131 of the 140 allowed characters, every word earning its
   place — no filler, no second setup.
4. **Freshness:** an expiry NOTICE, not a "nobody:" template or a
   smart-fridge / AI-agent gag the judge has seen a hundred times.
5. **Clarity:** it reads whole on the first pass, out loud, in one breath.

## How it works

`main.ts` is a deterministic, offline program: it writes exactly that one line
to `/output/entry.txt` and nothing else. It self-checks the sealed gate first
(1–140 characters, not only white space) and fails loudly instead of emitting
an entry the gate would refuse. No network, no randomness, no input — two runs
produce byte-identical output.

## Files

- `main.ts` — the entry program (entrypoint)
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## Run

```sh
node main.ts   # writes /output/entry.txt (Node 22.18+)
```
