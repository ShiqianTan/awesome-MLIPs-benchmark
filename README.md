# Awesome MLIPs Benchmark

![Awesome](https://awesome.re/badge.svg)

> A curated, community-driven collection of benchmarks, datasets, evaluation frameworks, and studies for machine-learning interatomic potentials (MLIPs).

This repository tracks work that evaluates MLIPs beyond a single energy or force error: transferability, stability, dynamics, phonons, defects, interfaces, catalysis, molecular systems, experimental observables, efficiency, and uncertainty. The current bibliography contains **91 records** collected from the accompanying CSV file.

The scope is intentionally complementary to broad awesome lists such as [Best of Atomistic Machine Learning](https://github.com/JuDFTteam/best-of-atomistic-machine-learning): this list focuses on **benchmarking and evaluation** of MLIPs and foundation atomistic models.

## Contents

- [Benchmark suites and platforms](#benchmark-suites-and-platforms)
- [Universal and foundation MLIP evaluation](#universal-and-foundation-mlip-evaluation)
- [Application- and property-specific benchmarks](#application--and-property-specific-benchmarks)
- [Methodology, reliability, and best practices](#methodology-reliability-and-best-practices)
- [Broader atomistic ML benchmarks](#broader-atomistic-ml-benchmarks)
- [Data](#data)
- [Contributing](#contributing)

## Benchmark suites and platforms

| Resource | Year | Summary |
| --- | :---: | --- |
| [MLIP Arena](https://doi.org/10.48550/arXiv.2509.20630) | 2025 | Open benchmark platform aimed at fair and transparent MLIP comparison. |
| [LAMBench](https://doi.org/10.1038/s41524-025-01929-3) | 2026 | Benchmark for large atomistic models. |
| [Matbench](https://doi.org/10.1038/s41524-020-00406-3) | 2020 | Standardized materials-property prediction test set and reference workflow. |
| [JARVIS-Leaderboard](https://doi.org/10.1038/s41524-024-01259-w) | 2024 | Large-scale leaderboard for materials-design methods. |
| [MatSciML](https://doi.org/10.48550/arXiv.2309.05934) | 2023 | Broad multi-task benchmark for solid-state materials modeling. |
| [MS25](https://doi.org/10.1021/acs.jcim.5c01262) | 2025 | Materials-science-focused benchmark dataset for MLIPs. |
| [OMC-bench and AtomBit-OMC](https://doi.org/10.1038/s41524-026-02315-3) | 2026 | Task-aligned benchmarks for organic molecular crystals. |

## Universal and foundation MLIP evaluation

| Paper | Year | Focus |
| --- | :---: | --- |
| [Performance Assessment of Universal MLIPs](https://doi.org/10.1021/acsami.4c03815) | 2025 | Challenges and directions for materials' surfaces. |
| [Universal MLIPs are ready for phonons](https://doi.org/10.1038/s41524-025-01650-1) | 2025 | Harmonic phonon properties and dynamical behavior. |
| [Systematic assessment of various universal MLIPs](https://doi.org/10.1002/mgea.58) | 2024 | Cross-model assessment of universal potentials. |
| [Universal ML potentials under pressure](https://doi.org/10.1088/2515-7639/ae2ba8) | 2025 | Performance in high-pressure regimes. |
| [Benchmarking universal MLIPs on elemental systems](https://doi.org/10.1038/s41524-026-02251-2) | 2026 | Elemental-system transferability. |
| [Are MLIPs truly practical?](https://doi.org/10.48550/arXiv.2607.07647) | 2026 | Benchmark of 23 mainstream models. |
| [Dyna-Mat](https://doi.org/10.48550/arXiv.2607.03433) | 2026 | End-to-end evaluation in finite-temperature ensembles. |
| [UniFFBench](https://doi.org/10.1038/s43588-026-01019-4) | 2026 | Universal force fields evaluated against experimental measurements. |
| [FPBench](https://doi.org/10.48550/arXiv.2609.05714) | 2026 | Application-oriented error decomposition for foundation potentials. |

## Application- and property-specific benchmarks

### Molecular, chemical, and biological systems

- [Forces are not Enough](https://doi.org/10.48550/arXiv.2210.07237) — evaluates learned force fields using molecular-dynamics observables, not only force/energy errors (2023).
- [Benchmarking pretrained ML potentials for molecular simulations](https://doi.org/10.1021/acs.jctc.6c00130) — accuracy and efficiency across molecular simulation tasks (2026).
- [Benchmarking foundation potentials for molecular redox potentials](https://doi.org/10.1021/prechem.5c00258) — quantum-chemistry comparison for redox properties (2026).
- [Benchmark of ML potentials for biochemical proton transfer](https://doi.org/10.1021/acs.jctc.5c00690) — proton-transfer reaction benchmarks (2025).
- [Benchmarking UMA for gas-phase chemical kinetics](https://doi.org/10.1021/acs.jpca.6c01748) — reaction kinetics with a foundation interatomic potential (2026).
- [Wiggle150](https://doi.org/10.1021/acs.jctc.5c00015) — highly strained conformers for density functionals and neural potentials (2025).

### Materials, interfaces, and condensed matter

- [Benchmarking universal MLIPs on zeolite](https://doi.org/10.1021/acs.jpcc.5c06812) — structures, energies, and relative stability (2026).
- [MOFSimBench](https://doi.org/10.1038/s41524-025-01872-3) — universal MLIPs for metal-organic-framework molecular modeling (2025).
- [CatBench](https://doi.org/10.1016/j.xcrp.2025.102968) — adsorption energies for heterogeneous catalysis (2025).
- [Li–P–S electrolyte materials as a benchmark](https://doi.org/10.1021/acs.jctc.5c02006) — solid-electrolyte structures and properties (2026).
- [Hydrogen under pressure](https://arxiv.org/abs/2409.13390) — high-pressure hydrogen as an MLIP test system (2024).
- [Benchmarking MLIPs for metal/electrolyte interfaces](https://arxiv.org/abs/2602.22931) — charged Au/water interfaces (2026).
- [Benchmarking supported nanoparticles](https://doi.org/10.1038/s41524-026-02043-8) — energy accuracy versus structural exploration (2026).
- [Benchmarking solid-liquid interface robustness](https://doi.org/10.1038/s41524-026-02051-8) — per-atom uncertainty for interface simulations (2026).
- [Benchmarking mechanical-property prediction](https://doi.org/10.1038/s42004-026-02057-9) — molecular-dynamics evaluation across material classes (2026).

### Generative models and crystal stability

- [LeMat-GenBench](https://doi.org/10.48550/ARXIV.2512.04562) — unified evaluation framework for crystal generative models (2025).
- [PhononBench](https://doi.org/10.48550/arXiv.2512.21227) — phonon-based benchmark for dynamical stability in crystal generation (2025).
- [A framework to evaluate ML crystal-stability predictions](https://doi.org/10.1038/s42256-025-01055-1) — evaluation of stability predictions (2025).
- [Performance of universal ML potentials in crystal global optimization](https://doi.org/10.1088/2632-2153/ae94e1) — structure-search performance (2026).

## Methodology, reliability, and best practices

- [Performance and Cost Assessment of MLIPs](https://doi.org/10.1021/acs.jpca.9b08723) — accuracy, computational cost, and practical trade-offs (2020).
- [Machine-learning interatomic potentials from a user's perspective](https://doi.org/10.1088/1361-651X/adf56d) — accuracy, speed, data efficiency, extrapolation, and usability (2025).
- [Discrepancies and error evaluation metrics for MLIPs](https://doi.org/10.1038/s41524-023-01123-3) — pitfalls in comparing MLIP errors (2023).
- [Systematic softening in universal MLIPs](https://doi.org/10.1038/s41524-024-01500-6) — a systematic failure mode in universal potentials (2025).
- [Understanding and mitigating distribution shifts](https://doi.org/10.48550/arXiv.2503.08674) — robustness under out-of-distribution configurations (2025).
- [Energy & force regression is not enough](https://doi.org/10.48550/arXiv.2502.03660) — limits of conventional regression metrics for universal MLIPs (2025).
- [Multi-fidelity learning for interatomic potentials](https://doi.org/10.1088/2632-2153/ae040b) — combining low-level forces with high-level energies (2025).
- [Assessing MLIP uncertainty for solid-liquid interfaces](https://doi.org/10.1038/s41524-026-02051-8) — uncertainty as a robustness signal (2026).

## Broader atomistic ML benchmarks

These resources are not limited to MLIPs, but provide useful datasets, baselines, or evaluation patterns for atomistic machine learning:

- [DScribe](https://doi.org/10.1016/j.cpc.2019.106949) — descriptors for materials-science ML (2020).
- [JARVIS](https://doi.org/10.1038/s41524-020-00440-1) — integrated simulation repository for data-driven materials design (2020).
- [Structure-based OOD materials property prediction](https://doi.org/10.1038/s41524-024-01316-4) — benchmark study of structural distribution shift (2024).
- [ECD](https://openreview.net/forum?id=SBCMNc3Mq3) — enhanced-precision electronic charge-density prediction benchmark (2024).
- [Benchmarking Graphormer](https://doi.org/10.48550/arXiv.2203.04810) — large-scale molecular modeling datasets (2023).
- [A Hitchhiker's Guide to Geometric GNNs](https://doi.org/10.48550/arXiv.2312.07511) — benchmark-oriented guide to geometric neural networks for 3D atoms (2024).

## Data

The complete bibliography is available as [`data/mlips-benchmark.csv`](data/mlips-benchmark.csv). It is currently a Zotero-exported source table containing title, authors, year, abstract, DOI, URL, and metadata fields. The README is the human-curated index; the CSV is the machine-readable record.

When adding a record, prefer a DOI or stable preprint URL, use the publication year rather than the import date, and remove private/local attachment paths from public copies.

## Contributing

Suggestions and pull requests are welcome. A useful contribution should include:

1. a stable paper, benchmark, dataset, or evaluation resource;
2. a one-sentence description of what is being benchmarked;
3. a DOI, publisher page, arXiv page, or project URL; and
4. the relevant category and publication year.

Please keep entries neutral and avoid treating one benchmark score as a universal ranking of MLIP quality. See the upstream [Best of Atomistic Machine Learning](https://github.com/JuDFTteam/best-of-atomistic-machine-learning) repository for inspiration on maintaining an awesome list.

## License

The bibliographic compilation is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Individual papers and linked resources retain their own licenses and copyrights.
