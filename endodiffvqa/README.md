# endodiffvqa — benchmark package (to be released)

Planned contents:

- `release.py` — load the Hugging Face release (`train` / `val` / `test` parquet), resolve video paths, expose
  `data_source`, `template_id`, `category`, `attribute`, letter-keyed `options`, `answer_letter` and the swap answer.
- `metrics.py` — Detect (Same/Different macro-F1), Specify (exact accuracy on items both gold and predicted Different,
  with the < 20-items exclusion), Strict (exact-answer macro-F1 per question family), reported per source and as the
  4-source macro.
- `swap.py` — the swap control: re-order the two videos, map the gold answer through the swap map, score both orders
  and report the share of asymmetric items answered correctly in both.
- `prompts.py` — the shared evaluation prompt: question, four lettered options and instruction.
- `frames.py` — the shared frame protocol: 16 uniformly sampled frames per caption clip, 64 per skill clip, at most
  784 × 448 pixels.
