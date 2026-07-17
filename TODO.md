# Elden Ring Progression Tracker - TODO

## Remaining Tasks

### Background Image
- Generate a dark fantasy Erdtree background image (AI-generated)
- Wire it up in CSS once ready
- Prompt saved in Claude web conversation

### Data Accuracy Verification
- DLC item IDs (especially talismans, spirit ashes, ashes of war) were inferred from patterns, not all verified against real save data
- Loading a save with DLC items would reveal mismatches
- Base game IDs should be solid (sourced from Paramdex, Deskete, practice-tool)

### Bundle Size
- Currently 562KB JS
- Could be code-split with dynamic imports but not urgent

### Boss/Item Images
- Small avatar images next to each entry (bosses, items, etc.)
- Need to extract from own game files (can't use other repos due to licensing)
- Deferred until after core features are complete
