# configs (to be released)

- `endocomparer_qwen35_9b.yaml` — the paper configuration: LM LoRA rank 32, α 64, dropout 0.05; slot adapters on the
  27 vision blocks and the merger; AdamW 1e-4, cosine, 3 % warm-up, effective batch 16, one epoch.
- `eval_default.yaml` — the shared evaluation protocol: 16 / 64 frames, ≤ 784 × 448 px, greedy decoding.
