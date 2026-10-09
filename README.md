# AMP Phase 2 — v2.1

Phase 2 (Weeks 5–8) build based on the current v1.2.2 app.

Preserves the same `ampState` localStorage key, History, Progress, exercise guides, bodyweight-only logging, recent performance, rest timer, sound/vibration, and backup/import. Existing Phase 1 history remains intact.

## Phase 2 changes
- Same exercises and split.
- Performance lifts: 0–1 RIR.
- Stretch Builders: ½–1 sec lengthened pause + 2–3 sec eccentric.
- Money Sets: double drop set with separate Drop 1 and Drop 2 weight/reps.
- Monday: Seated Leg Curl rest-pause.
- Tuesday: High-to-Low Cable Fly long-length partials.
- Wednesday: Cable Lat Prayer slow negatives.
- Friday: Rear Delt Fly peak holds.
- Saturday: Machine Preacher Curl 1½ reps.
- Phase 2 cardio target: 4 × 25–30 min Zone 2/week.


## v2.1 spreadsheet export
History now includes **Export spreadsheet**. It creates a UTF-8 CSV that opens in Excel, Numbers, or Google Sheets. Each logged set is a row with date, phase, workout, exercise, set, weight, reps, technique, exercise notes, and session notes. Phase 2 Drop 1 and Drop 2 export as separate rows. JSON backup/import is unchanged and remains the restore format.


## v2.2 — Ab specialization and on-screen technique flags
- Monday: Heavy Cable Crunch 3×8–12; Ab Wheel 2×8–12.
- Wednesday: Hanging Leg Raise with Pelvic Curl 3×10–15; Reverse Crunch 2×12–15.
- Friday: Machine Ab Crunch 3×10–12; Cable Serratus Punch 2×12–15/side; Pallof Press 2×12/side.
- Tuesday and Saturday: remove old ab finishers. Historical records are NOT deleted.
- Amber highlighted exercise cards show specific Phase 2 modifications, including final-set techniques, Money Set double drops, and all-set Stretch Builder tempo. Full guide remains accessible.
- The `ampState` storage key, history, export/import, and rest timer remain unchanged. Back up existing data via the app before deploying.
- Upload ALL files in this ZIP to the repository root, replacing matching files, to refresh service-worker cache.
