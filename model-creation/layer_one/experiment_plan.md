# Layer One — Experiment Plan
**Control Model:** CNN (3×3 kernel, 32→64→128 filters, 100k games, Adam lr=0.001, batch 512, dropout 0.3, 10 epochs)
**Control ELO:** ~900

---

## Data Variations
| # | Experiment | Variable Changed |
|---|---|---|
| 1 | Less Data | 50k games |
| 2 | More Data | 200k games |
| 3 | Max Data | 400k games |

## Model Size Variations
| # | Experiment | Variable Changed |
|---|---|---|
| 4 | Wide | Filters: 64→128→256 |
| 5 | Narrow | Filters: 16→32→64 |
| 6 | Deep | 5 conv layers |
| 7 | Shallow | 1 conv layer |

## Optimizers
| # | Experiment | Variable Changed |
|---|---|---|
| 8 | SGD | SGD optimizer |
| 9 | AdamW | AdamW optimizer |

## Kernel Variations
| # | Experiment | Variable Changed |
|---|---|---|
| 10 | Medium Kernel | 5×5 kernel |
| 11 | Full Board Kernel | 8×8 kernel |

## Parsed Training
| # | Experiment | Variable Changed |
|---|---|---|
| 12 | Structured Order | Train on openings → middlegame → endgame |

## Specialist Models
| # | Experiment | Variable Changed |
|---|---|---|
| 13 | Openings Only | Trained on moves 1-10 |
| 14 | Middlegame Only | Trained on moves 10-30 |
| 15 | Endgame Only | Trained on moves 30+ |
| 16 | Combined Specialists | Switch between 13/14/15 during game |

## Board History (Memory)
| # | Experiment | Variable Changed |
|---|---|---|
| 17 | Short Memory | 1 previous position (24 planes) |
| 18 | Medium Memory | 2 previous positions (36 planes) |
| 19 | Full Memory | 5 previous positions (72 planes) |

## Search
| # | Experiment | Variable Changed |
|---|---|---|
| 20 | 2-Ply Search | Minimax 2-ply, CNN as eval function |
| 21 | 4-Ply Search | Minimax 4-ply, CNN as eval function |

---

## Final Model
**Layer One Final** — Combine the best findings from all experiments into one optimized CNN model.
