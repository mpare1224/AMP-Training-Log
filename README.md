# AMP Phase 1 App

Static PWA for GitHub Pages.

## Upload to GitHub Pages
1. Create a public repository, for example `amp-training`.
2. Upload all files in this folder to the repository root.
3. In GitHub: Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
4. Open the GitHub Pages URL in Safari.
5. On iPhone: Share → Add to Home Screen.

## Data
Workout logs and check-ins are stored in the browser with localStorage. Use History → Export backup regularly. Import restores a JSON backup.

## Phase 1 behavior
- Weeks 1–4
- 5 lifting days: Mon/Tue/Wed/Fri/Sat
- Thu/Sun recovery
- Performance lifts stay 1–2 RIR
- Phase 1 Money Set uses one single drop set
- Widowmakers are included in the guide for reference but are not prescribed in Phase 1


## v1.2
- Dedicated drop-set weight/reps logging on all Phase 1 Money Sets.
- Detailed muscle focus, training cues, and AMP-specific setup for every exercise.
- Rep-only logging for bodyweight/band primer movements.


## v1.2.2
Cache-busting maintenance release. Keeps the same `ampState` localStorage key and does not reset workout data.


## v1.2.2 hotfix
- Restores the missing `escJs()` helper that prevented daily workout cards from rendering.
- Adds compatibility normalization for older/incomplete saved set data.
- Preserves the existing `ampState` localStorage key and workout history.
