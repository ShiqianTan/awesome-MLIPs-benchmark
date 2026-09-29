# Normalized benchmark database schema

`data/mlips-benchmark-normalized.csv` is the canonical query-friendly index. The original Zotero export can remain as a bibliographic source table.

| Field | Meaning |
|---|---|
| `Record_ID` | Stable local ID: `E###` existing, `N###` newly curated |
| `Original_Zotero_Key` | Zotero key from the current CSV when available |
| `Title`, `Year`, `DOI`, `URL` | Bibliographic identity and stable source |
| `Resource_Type` | Benchmark study, suite/platform, dataset, methodology, supporting model/dataset, etc. |
| `Scope_Tier` | `Core` for direct benchmark resources; `Supporting` for enabling datasets/methods/model-validation papers |
| `Primary_Category` | Main scientific benchmark axis |
| `System_Class` | Physical/chemical system under test |
| `Benchmark_Tasks` | What the benchmark actually asks the model to do |
| `Models_Evaluated` | Models explicitly compared when curated |
| `Key_Metrics` | Main reported evaluation quantities |
| `Reference_Baseline` | DFT, quantum chemistry, experiment, or other reference |
| `Code_URL`, `Data_URL` | Reproducibility resources when verified |
| `Peer_Reviewed` | `Yes`, `No`, or `Unknown` |
| `Open_Source` | Whether verified code/data is linked in this index |
| `Source_Status` | Existing bibliography vs new web-verified sweep |
| `Curation_Confidence` | `A` manually web-verified; `B` normalized from existing bibliography |
| `Last_Verified` | Metadata verification date |
| `In_Current_CSV` | Whether the entry came from the original 91-record export |
| `README_Priority` | Suggested prominence in the human-curated README |
| `Notes` | Curation notes and important scope details |

## Recommended machine-readable taxonomy

Primary categories are intentionally application-oriented rather than architecture-oriented: dynamics, phonons/thermal, surfaces/interfaces/catalysis, batteries/transport, defects/disorder, mechanics, molecules/reactions, porous/molecular crystals, crystal search/generation, experimental observables, downstream electronic properties, methodology/UQ/efficiency, benchmark platforms, and foundation dataset ecosystems.
