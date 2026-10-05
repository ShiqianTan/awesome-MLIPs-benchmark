# MLIP Architecture Gallery

Matbench Discovery 活跃模型架构图库。直接打开 [`index.html`](index.html) 即可浏览；无需构建步骤或外部 JavaScript 依赖。

## 内容

- 53 个活跃模型条目：42 个具有默认 CPS 分数的模型，11 个缺少完整 CPS 指标的活跃模型。
- 31 张根据对应论文内容由 OpenAI image_gen 生成的架构示意图。相同论文或架构的不同模型变体共用一张图。
- 模型索引提供 arXiv 论文链接；Prophet 使用[非 arXiv 技术报告](https://www.kairosmaterials.com/papers/Prophet.pdf)。没有对应模型架构论文的条目保留在表中并标明原因。

资料依据 [Matbench Discovery 注册表](https://github.com/janosh/matbench-discovery) 提交 `e3d7966144e9653fb28c17c66a74dbc5686ff063`（2026-10-03 快照）。榜单网站在采集环境返回 HTTP 403，名次根据官方注册表与网站默认 CPS 公式重建，**不是实时排名**。图像的模块与信息流是论文内容概括，细节请以论文为准。版式参考 [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/)。

逐条来源和复用关系见 [`SOURCES.md`](SOURCES.md)。原始 PDF 与 arXiv API 响应保留在源工作目录；本图库只纳入图片和论文在线链接，以免在 Git 仓库中重复提交数百 MB 的 PDF。

## 图库预览

|  |  |
|---|---|
| [![Prophet 架构](assets/01_Prophet-OAME-MBD.png)](assets/01_Prophet-OAME-MBD.png)<br>**Prophet** · 等变网络 | [![EquiformerV3 架构](assets/03_EquiformerV3-DeNS-OAM.png)](assets/03_EquiformerV3-DeNS-OAM.png)<br>**EquiformerV3 + DeNS** · Transformer |
| [![Allegro 架构](assets/17_Allegro-OAM-MP-L.png)](assets/17_Allegro-OAM-MP-L.png)<br>**Allegro** · 等变网络 | [![MACE 架构](assets/22_MACE-MP-MPA.png)](assets/22_MACE-MP-MPA.png)<br>**MACE** · 等变网络 |
| [![CHGNet 架构](assets/42_CHGNet.png)](assets/42_CHGNet.png)<br>**CHGNet** · 图网络 | [![ALIGNN 架构](assets/unranked_ALIGNN.png)](assets/unranked_ALIGNN.png)<br>**ALIGNN** · 图网络 |

[打开完整架构图库与模型索引 →](index.html)

## 文件

- `index.html` — 页面结构。
- `styles.css` — 响应式排版。
- `gallery.js` — 检索、分类、模型表与图片预览。
- `data.js` — 模型、论文和图片元数据。
- `SOURCES.md` — 53 个模型的论文、图像与跳过原因。
- `assets/` — 最终采用的 31 张 PNG 架构图。

用 `/` 快捷键聚焦搜索框。分类和搜索同时作用于架构图与模型表。点击图片可放大并打开原始 PNG。
