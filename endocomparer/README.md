# endocomparer — model package (to be released)

Planned contents:

- `psvl/` — Pseudo-Siamese Visual LoRA: per-slot low-rank adapters on the vision transformer and merger linear layers
  of Qwen3.5-9B, token-level slot routing over the packed two-video sequence with a block-diagonal attention mask,
  slot-2 initialisation from slot 1.
- `ptc/` — Perceive-then-Compare targets: render per-video facts into perception statements, build the
  `Video 1: h1. Video 2: h2. (y)` response, parse the final letter at inference.
- `data/` — training dataset with order swap (probability ½, answer mapped through the swap map) and option shuffling.
- `train.py` — one-epoch LoRA fine-tuning (language-model LoRA + two slot adapters), response-only loss.
- `infer.py` — greedy decoding on the release test split, producing the results file scored by `endodiffvqa.metrics`.
