# EndoComparer

**Comparative Surgical Video Question Answering with Pseudo-Siamese Visual Adaptation and Perceive-then-Compare Reasoning**

Shi Li, Lalith Sharan, Joël L. Lavanchy, Kun Yuan, Lorenzo Arboit, Nabani Banik, Elif Yazici, Maria Vannucci,
Vinkle Srivastav, Pietro Mascagni, Nicolas Padoy

[Project page](https://camma-public.github.io/endocomparer/) · Paper (soon) · Dataset (soon) · Models (soon)

Surgical assessment is comparative, but vision-language models see one video at a time. This repository holds

- **EndoDiffVQA**, a benchmark of 10,939 two-video, four-option questions over laparoscopic cholecystectomy and
  Roux-en-Y gastric bypass (Anatomy, Tool, Action, Skill), scored with hierarchical **Detect / Specify / Strict** metrics;
- **EndoComparer**, a VLM that keeps the two videos apart in the visual encoder (Pseudo-Siamese Visual LoRA) and in the
  reasoning (Perceive-then-Compare chain of thought).

## Status

| Component | Status |
|---|---|
| EndoDiffVQA data | to be released |
| Evaluation harness and metrics (`endodiffvqa/`) | to be released |
| EndoComparer model, training and inference (`endocomparer/`) | to be released |
| Checkpoints | to be released |

## Repository layout

```
.
├── docs/            # project page, served by GitHub Pages from main:/docs (static HTML, no build step)
├── endodiffvqa/     # benchmark: release loader, Detect / Specify / Strict metrics, swap control
├── endocomparer/    # model: Pseudo-Siamese Visual LoRA, Perceive-then-Compare targets, training, inference
├── configs/         # training / evaluation configs
├── scripts/         # entry points (train, evaluate, score)
└── README.md
```

Each code directory carries a `README.md` describing what will land there.

## Citation

To be added.

## License

To be added before the code release.

## Acknowledgements

EndoDiffVQA is built on [CholecT50](https://github.com/CAMMA-public/cholect50),
[MultiBypass140](https://github.com/CAMMA-public/MultiBypass140) and CholeScore. EndoComparer builds on Qwen3.5-9B.
