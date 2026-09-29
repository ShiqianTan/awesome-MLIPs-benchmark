# Contributing to Awesome MLIPs Benchmark

Thank you for helping improve this collection.

## What should be added?

Good candidates include:

- reusable benchmark suites or live leaderboards;
- cross-model MLIP/uMLIP benchmark studies;
- application-specific benchmarks with explicit physical observables;
- benchmark datasets designed to probe transferability, OOD behavior, dynamics, or failure modes;
- methodology papers that introduce reusable evaluation metrics or protocols.

A model paper should not be added solely because it reports a benchmark table. It is a better fit when the evaluation itself is reusable, broad, or scientifically diagnostic.

## Required information

Please provide:

- **Title**
- **Year**
- **Stable link**: DOI preferred; otherwise publisher/arXiv/project URL
- **Category**
- **System class**: e.g. bulk, surface, interface, molecule, MOF, zeolite, electrolyte, alloy
- **Benchmark task**: e.g. energies/forces, relaxation, MD, phonons, diffusion, adsorption, defect energy
- **Main metrics**
- **Code URL**, if available
- **Data URL**, if available
- **Peer-reviewed?** yes/no/preprint

## Suggested categories

- Benchmark suites and platforms
- General/foundation-MLIP evaluation
- Dynamics and finite temperature
- Phonons/thermal/spectroscopy
- Surfaces/interfaces/catalysis
- Batteries/diffusion/ion transport
- Defects/disorder/extreme conditions
- Mechanical/elastic properties
- Molecules/reactions/kinetics
- MOFs/zeolites/molecular crystals
- Crystal search/generative evaluation
- Methodology/reliability/UQ/efficiency
- Broader atomistic-ML benchmarks

## Quality checks

Before submitting, please check:

1. The entry is not already present under a preprint/published version.
2. The publication year refers to the paper/preprint, not the date it was added to Zotero.
3. The DOI or URL resolves correctly.
4. The description states **what was evaluated**, not which model was "best".
5. Claims about code/data availability point to the official repository or archive.
6. If both a peer-reviewed paper and an earlier arXiv version exist, prefer the peer-reviewed DOI while optionally retaining the arXiv link.

## Style

Use one concise sentence per README entry. Prefer concrete benchmark dimensions such as:

> Evaluates migration barriers, diffusivity, and finite-temperature structural correlations in alkali-ion cathodes and solid electrolytes.

Avoid vague summaries such as:

> A comprehensive and excellent benchmark of many state-of-the-art models.
