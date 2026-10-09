const EXERCISE_INFO = {
  "Leg Extension": {focus:"Quadriceps, with emphasis on rectus femoris/vasti", cues:["Set the knee joint in line with the machine pivot.","Drive the pad up by extending the knee, not by kicking from the hip.","Squeeze the quads hard at the top, then lower under control."], specifics:"Primer only. Use a moderate load and smooth reps. Do not turn this into an all-out quad set before squats."},
  "Glute Bridge": {focus:"Glute max; hip-extension primer", cues:["Feet about hip width and close enough that shins are near vertical at lockout.","Posteriorly tilt the pelvis before lifting.","Drive through the whole foot and squeeze the glutes without hyperextending the low back."], specifics:"Bodyweight primer. The goal is glute activation and hip positioning, not loading."},
  "High Bar Back Squat": {focus:"Quads + glutes, with torso and adductors assisting", cues:["Bar high on the traps, brace 360° before every rep.","Let knees travel forward while keeping the whole foot planted.","Descend under control to your deepest repeatable position, then drive straight up."], specifics:"This is the Monday Performance Lift. Keep 1–2 RIR, use the same stance and depth weekly, and stop the set when bar path or bracing deteriorates."},
  "Romanian Deadlift": {focus:"Hamstrings + glutes in the lengthened position", cues:["Unlock the knees slightly and keep that knee angle nearly fixed.","Push the hips straight back while keeping the bar close to the thighs/shins.","Stop when the hamstrings are maximally stretched without losing spinal position."], specifics:"Do not chase the floor. Range of motion ends where hamstring tension is highest and your pelvis/spine remain controlled."},
  "Bulgarian Split Squat": {focus:"Quads + glutes, high stretch under unilateral load", cues:["Use a stance long enough to reach depth without the rear leg taking over.","Keep the front foot fully planted.","Lower the rear knee toward the floor and drive through the front leg."], specifics:"Use a slight forward torso angle for a balanced quad/glute stimulus. The rear leg is a kickstand, not a second working leg."},
  "Leg Press": {focus:"Quads + glutes; stable high-output leg work", cues:["Feet about shoulder width in the middle-to-lower portion of the platform.","Keep hips and low back pinned to the pad.","Lower until you reach deep knee flexion without the pelvis rolling under."], specifics:"AMP Money Set. Use a quad-biased stance, not an ultra-high/wide powerlifting stance. Final working set gets one 20–30% drop with no unnecessary delay."},
  "Seated Leg Curl": {focus:"Hamstrings, especially shortened-position knee flexion", cues:["Lock the hips down and keep the torso against the pad.","Pull the pad down by flexing the knees hard.","Control the return all the way into the stretch."], specifics:"Do not let the hips rise to manufacture reps. Keep continuous hamstring tension."},
  "Standing Calf Raise": {focus:"Gastrocnemius", cues:["Keep knees mostly straight but not locked.","Sink into a full controlled stretch at the bottom.","Rise as high as possible onto the ball of the foot and pause briefly."], specifics:"No bouncing out of the bottom. The stretched position is part of the rep."},
  "Cable Crunch": {focus:"Rectus abdominis", cues:["Set the cable so tension stays on the abs from top to bottom.","Keep the hips relatively fixed.","Curl the rib cage toward the pelvis rather than simply bowing at the hips."], specifics:"Think spinal flexion, not a kneeling hip hinge. Exhale as you crunch."},
  "Heavy Cable Crunch": {focus:"Rectus abdominis hypertrophy", cues:["Anchor hips and keep the pelvis relatively still.","Curl ribs toward pelvis; avoid simply hinging at the hips.","Exhale through the contraction, then return to a controlled stretch."], specifics:"3 × 8–12. Progress load when all sets reach 12 with controlled spinal flexion; 1–2 RIR."},
  "Hanging Leg Raise with Pelvic Curl": {focus:"Rectus abdominis with hip flexors assisting", cues:["Start from a stable hang without swinging.","Bring knees or legs up, then deliberately curl the pelvis toward the ribs.","Lower slowly without arching or swinging."], specifics:"3 × 10–15. The pelvic curl is the key; bend knees as needed to preserve it. Bodyweight-only logging."},
  "Reverse Crunch": {focus:"Rectus abdominis, emphasizing posterior pelvic tilt", cues:["Lie supine and bend hips/knees comfortably.","Roll pelvis off the floor toward the rib cage, rather than swinging legs.","Lower vertebra by vertebra with control."], specifics:"2 × 12–15. Bodyweight-only logging; reduce momentum before increasing reps."},
  "Machine Ab Crunch": {focus:"Loaded rectus abdominis hypertrophy", cues:["Adjust the machine to permit a full comfortable spinal curl.","Bring sternum toward pelvis without driving primarily through hips.","Control the return into the stretch."], specifics:"3 × 10–12. Progress resistance after clean top-range reps on all sets; 1–2 RIR."},
  "Cable Serratus Punch": {focus:"Serratus anterior, scapular protraction", cues:["Set a light cable around chest height and face away from the stack.","Punch forward and reach slightly farther by moving the shoulder blade around the ribs.","Keep ribs down and avoid twisting or shrugging."], specifics:"2 × 12–15 each side. Use controlled protraction, not heavy pressing. Log cable weight if useful."},
  "Ab Wheel": {focus:"Anterior core, anti-extension strength", cues:["Start with ribs down and glutes lightly squeezed.","Roll forward only as far as you can without the low back sagging.","Pull back by contracting the abs, not by throwing the hips backward."], specifics:"Bodyweight movement. Range of motion is earned by maintaining a neutral-to-slightly-flexed trunk."},
  "Push-Ups": {focus:"Chest + triceps + serratus; upper-body primer", cues:["Hands just outside shoulder width.","Keep ribs down and body in one straight line.","Lower the chest between the hands, then press while allowing the shoulder blades to move naturally."], specifics:"Bodyweight primer. Stay well short of failure so pressing performance is not reduced."},
  "Band Pull-Aparts": {focus:"Rear delts + mid traps/rhomboids", cues:["Hold the band at shoulder height with soft elbows.","Pull the hands apart by moving the shoulder blades, not by arching the back.","Finish with arms in line with the torso and return slowly."], specifics:"Light activation work. Use enough band tension to feel the upper back without turning it into a maximal set."},
  "Incline BB Bench": {focus:"Clavicular/upper pec + anterior delts + triceps", cues:["Use a low-to-moderate incline, roughly 20–30°.","Set the shoulder blades back/down and keep the rib cage stable.","Touch high on the chest with forearms near vertical, then press up and slightly back."], specifics:"AMP Performance Lift. Use a repeatable grip and bench angle every week. Keep 1–2 RIR; no ugly grinder reps."},
  "Incline DB Press": {focus:"Upper pec with strong loaded stretch", cues:["Use the same low incline as the barbell press or slightly higher if needed.","Lower the dumbbells to the outside of the upper chest with elbows about 45–60° from the torso.","Press up while keeping the pecs loaded rather than clanking the dumbbells together."], specifics:"Stretch Builder. Prioritize a deep controlled bottom position over maximum dumbbell weight."},
  "Weighted Chest Dip": {focus:"Lower/mid chest + triceps", cues:["Use a modest forward torso lean.","Let the elbows travel back naturally while the chest descends between the bars.","Drive the bars down and slightly inward as you rise."], specifics:"Chest-biased dip. Do not stay bolt upright like a triceps dip, and do not descend beyond a pain-free shoulder range."},
  "Machine Chest Press": {focus:"Pecs with stable high-effort pressing", cues:["Adjust the seat so handles line up around mid-to-upper chest.","Keep shoulder blades supported and chest tall.","Press through the pecs and stop just short of losing shoulder position at lockout."], specifics:"AMP Money Set. Use the machine setup that keeps the forearms stacked and pecs loaded. Final working set gets one 20–30% drop."},
  "High-to-Low Cable Fly": {focus:"Sternal/lower pec fibers; chest shortening", cues:["Set pulleys above shoulder height.","Maintain a soft elbow bend and sweep the arms down and inward.","Bring the hands toward the lower sternum/upper abdomen while squeezing the pecs."], specifics:"Exit pump. Use a controlled arc and continuous tension; this is not a cable press."},
  "Close-Grip Bench": {focus:"Triceps with chest assistance", cues:["Use a shoulder-width or slightly narrower grip, not hands touching.","Keep forearms vertical at the bottom.","Lower under control and press while keeping elbows in a natural 30–45° path."], specifics:"Builder. The goal is heavy triceps-biased pressing without beating up the wrists or elbows."},
  "OH Rope Extension": {focus:"Long head of triceps in a stretched position", cues:["Face away from the cable with elbows pointing forward/up.","Allow a deep elbow bend while keeping upper arms mostly fixed.","Extend fully by driving the rope forward without flaring the elbows."], specifics:"Keep the shoulder angle stable so the long head stays lengthened."},
  "Rope Pushdown": {focus:"Triceps, shortened-position finish", cues:["Pin upper arms near the torso.","Extend the elbows without rocking the shoulders.","Separate the rope slightly at the bottom and squeeze hard."], specifics:"Exit pump. Use smooth reps and keep tension on the triceps."},
  "Pallof Press": {focus:"Obliques + deep core; anti-rotation", cues:["Stand perpendicular to the cable with feet planted.","Brace before pressing the handle away from the chest.","Do not let the torso rotate toward the stack."], specifics:"Use enough load to challenge anti-rotation without turning it into a full-body lean."},
  "Straight-Arm Pulldown": {focus:"Lats; shoulder-extension primer", cues:["Hinge slightly with ribs down.","Keep elbows soft but nearly fixed.","Sweep the arms toward the thighs by driving the upper arms down and back."], specifics:"Primer. Feel the lats initiate the movement before the heavier pulling begins."},
  "Scapular Pull-Up": {focus:"Lower traps + lats; scapular depression", cues:["Hang with straight elbows.","Without bending the arms, pull the shoulder blades down away from the ears.","Pause briefly, then return to a full controlled hang."], specifics:"Bodyweight primer. This teaches the first motion of the weighted pull-up."},
  "Weighted Pull-Up": {focus:"Lats + teres major + biceps", cues:["Start each rep by depressing the shoulder blades.","Drive elbows down toward the ribs/hips.","Keep the torso controlled and avoid kicking or reaching with the chin."], specifics:"AMP Performance Lift. Use a neutral or comfortable overhand grip that allows full ROM. Keep 0–1 RIR."},
  "Wide Neutral Pulldown": {focus:"Lat width + teres major", cues:["Use a wide neutral-grip attachment, roughly just outside shoulder width per hand.","Set the chest tall with only a slight torso lean.","Depress the scapulae first, then pull elbows down and slightly outward toward the upper ribs."], specifics:"AMP Money Set. This is not a close-grip lat pulldown and not a row. Keep the forearms mostly vertical and avoid turning it into a big backward lean. Final working set gets one 20–30% drop."},
  "Single-Arm Cable Pulldown": {focus:"Lats, especially lengthened overhead position", cues:["Set up so the working lat gets a full overhead stretch.","Begin with scapular depression.","Drive the elbow down and in toward the same-side hip."], specifics:"Keep the torso mostly fixed. A small side bend at peak contraction is acceptable, but rotation should not create the rep."},
  "Chest-Supported Lat Row": {focus:"Lats with reduced low-back involvement", cues:["Use a neutral or semi-neutral grip.","Keep elbows tucked close to the torso.","Pull toward the hip/lower ribs rather than high on the chest."], specifics:"This is the lat-biased row on Width Day. Do not flare the elbows or squeeze hard into upper-back retraction; think shoulder extension and elbows to pockets."},
  "Plate Loaded Pullover": {focus:"Lats through shoulder extension", cues:["Keep ribs down and pelvis stable against the pad.","Allow the shoulders to flex into a controlled overhead stretch.","Drive the upper arms down in an arc without turning it into an elbow-extension movement."], specifics:"Use the machine path to load the lats through a large ROM. Keep the triceps from taking over."},
  "Cable Lat Prayer": {focus:"Lats in a long-to-short arc", cues:["Kneel or hinge with arms overhead and ribs tucked.","Keep elbows only slightly bent.","Pull the upper arms down toward the sides of the torso while crunching minimally."], specifics:"Exit pump in Phase 1. Think lat shoulder extension, not an ab crunch with a rope."},
  "Incline Curl": {focus:"Biceps long head in a stretched position", cues:["Set the bench so the upper arm hangs slightly behind the torso.","Keep the shoulder fixed as you curl.","Lower fully until the biceps are lengthened without letting the shoulder roll forward."], specifics:"Do not swing the elbows forward to finish reps. Own the bottom stretch."},
  "Hammer Curl": {focus:"Brachialis + brachioradialis + biceps", cues:["Use a neutral grip throughout.","Keep elbows near the sides.","Curl without swinging the shoulders or extending the wrists."], specifics:"Builder. A slight natural elbow travel is fine; torso momentum is not."},
  "Reverse EZ Curl": {focus:"Brachioradialis + forearm extensors", cues:["Use a pronated grip on the EZ bar.","Keep wrists neutral rather than letting them collapse.","Curl with elbows near the torso and lower slowly."], specifics:"Exit pump. Use a lighter load than a normal curl and keep the forearms doing the work."},
  "Hanging Leg Raise": {focus:"Lower rectus abdominis + hip flexors with posterior pelvic tilt", cues:["Start from a controlled hang without swinging.","Curl the pelvis up as the legs rise.","Lower slowly and reset before the next rep."], specifics:"Bodyweight core movement. The goal is pelvic curl, not merely lifting straight legs with the hip flexors."},
  "Cable Wood Chop": {focus:"Obliques + trunk rotation control", cues:["Set the cable around chest-to-shoulder height unless your station dictates otherwise.","Rotate through the torso while keeping hips controlled.","Move the rib cage over the pelvis rather than yanking with the arms."], specifics:"Use a controlled diagonal path and resist the cable on the return."},
  "Band Laterals": {focus:"Medial delts; shoulder warm-up", cues:["Stand on or anchor the band securely.","Lead with the elbows and keep hands slightly below them.","Raise in the scapular plane and stop before the traps dominate."], specifics:"Primer. Light, smooth reps only."},
  "Band External Rotation": {focus:"Rotator cuff, especially infraspinatus/teres minor", cues:["Keep the elbow pinned near the side at about 90°.","Rotate the forearm outward without moving the elbow away from the torso.","Use a slow return."], specifics:"Primer. Very light resistance; this is shoulder preparation, not an ego lift."},
  "Seated DB Press": {focus:"Anterior + medial delts, triceps", cues:["Set the bench near upright with the torso fully supported.","Start dumbbells around ear/shoulder level with forearms stacked.","Press up without excessive back arch or turning it into an incline press."], specifics:"AMP Performance Lift. Keep 1–2 RIR and use a repeatable seat angle."},
  "Machine Shoulder Press": {focus:"Anterior/medial delts with stable pressing", cues:["Adjust the seat so handles start near shoulder level.","Keep the back and head supported.","Press through the delts without shrugging at lockout."], specifics:"Builder. Use the machine path that feels natural at the shoulder and keeps forearms reasonably vertical."},
  "Behind-Body Cable Lateral": {focus:"Medial delt under lengthened tension", cues:["Set the cable low and stand slightly in front of it so the handle begins behind the hip.","Lead with the elbow in the scapular plane.","Raise until the delt is maximally shortened without shrugging."], specifics:"The cable should pull the arm slightly behind the body at the bottom. Do not turn it into a front raise."},
  "Machine Lateral Raise": {focus:"Medial delts", cues:["Line the machine pivot up with the shoulder as closely as possible.","Drive through the elbows, not the hands.","Stop the rep when traps begin to dominate."], specifics:"AMP Money Set. Use controlled reps and one 20–30% drop after the final working set."},
  "Rear Delt Fly": {focus:"Rear delts with mid-back assistance", cues:["Set handles so arms travel slightly behind the shoulder line.","Keep a soft elbow bend.","Sweep the upper arms out/back without violently pinching the shoulder blades."], specifics:"Rear-delt biased. Keep traps and rhomboids from turning it into a heavy reverse row."},
  "Face Pull": {focus:"Rear delts + external rotators + mid/lower traps", cues:["Set the rope around face height.","Pull toward the forehead/eyes while separating the rope.","Finish with elbows high enough to externally rotate without shrugging."], specifics:"Exit pump. Light-to-moderate load with clean shoulder motion."},
  "Weighted Dip": {focus:"Triceps with chest/anterior delt assistance", cues:["Use a more upright torso than the chest-biased dip.","Keep elbows tracking naturally behind you.","Drive to elbow extension without aggressively shrugging at the top."], specifics:"Triceps-biased weighted dip. Use only a pain-free depth."},
  "Incline OH DB Extension": {focus:"Long head of triceps in a stretched position", cues:["Use an incline bench to support the torso.","Keep upper arms angled overhead and mostly fixed.","Lower the dumbbell(s) into a deep elbow bend, then extend without letting elbows flare wildly."], specifics:"Prioritize the stretch and elbow motion over load."},
  "Single-Arm Pushdown": {focus:"Triceps; unilateral shortened-position work", cues:["Pin the upper arm to the side.","Extend fully and squeeze the triceps.","Control the return without letting the shoulder roll forward."], specifics:"Use a handle or cuff that lets the wrist stay comfortable. No torso twist."},
  "Side Plank": {focus:"Obliques + lateral core stability", cues:["Stack shoulders, hips, and feet/knees.","Drive the floor away with the supporting arm.","Keep the hips high and ribs stacked over the pelvis."], specifics:"Bodyweight hold. End the set when the pelvis starts sagging or rotating."},
  "Band Face Pull": {focus:"Rear delts + external rotators + scapular muscles", cues:["Anchor the band around face height.","Pull toward the forehead while separating the hands.","Finish with controlled external rotation and no shrug."], specifics:"Primer. Use light resistance and crisp reps."},
  "Pendlay Row": {focus:"Mid/upper back + lats; explosive concentric from dead stop", cues:["Set the torso near parallel to the floor and brace hard.","Start every rep from a dead stop on the floor.","Drive elbows back and pull toward the lower chest/upper abdomen without jerking the torso upright."], specifics:"AMP Performance Lift. Reset each rep. If it becomes a standing row, the set is over."},
  "Chest-Supported Row": {focus:"Mid-back thickness: rhomboids, mid traps, rear delts, lats", cues:["Support the chest firmly and use a medium neutral or semi-pronated grip.","Let the shoulder blades protract slightly at the stretch.","Pull toward the lower-to-mid chest with elbows about 30–60° from the torso and squeeze the shoulder blades together."], specifics:"AMP Money Set on Thickness Day. Unlike the lat row, this is intentionally upper/mid-back biased. Final working set gets one 20–30% drop."},
  "Single-Arm DB Row": {focus:"Lats + mid-back with unilateral stretch", cues:["Brace firmly on the bench/rack and keep the torso stable.","Let the shoulder blade reach slightly at the bottom.","Drive the elbow back toward the hip/lower ribs without rotating the torso open."], specifics:"Stretch Builder. Use a long controlled reach at the bottom while keeping the low back stable."},
  "Rack Pull": {focus:"Spinal erectors + traps + glutes; heavy posterior-chain overload", cues:["Set the pins around knee level or slightly below, consistently week to week.","Brace before breaking the bar from the pins.","Stand tall by extending the hips without leaning backward at lockout."], specifics:"Builder. Keep this controlled and submaximal; it is not a rack-pull 1RM contest."},
  "Seated Cable Row": {focus:"Mid-back thickness: rhomboids + mid traps, with lats assisting", cues:["Use a medium-width neutral grip, ideally a close/medium parallel handle rather than a wide pronated bar.","Sit tall with a small natural torso hinge and let the shoulder blades protract at the front without rounding the low back.","Pull the handle toward the lower sternum/upper abdomen with elbows about 30–45° from the torso, then squeeze the shoulder blades together."], specifics:"This is the Thickness Day cable row. Do NOT use an ultra-close elbows-to-hips lat-row style and do not use a wide elbows-flared upper-back row. Medium neutral grip, moderate elbow flare, pull to lower sternum/upper abs."},
  "Cobra Pull": {focus:"Upper back + rear delts + lower traps; scapular control", cues:["Set dual cables around upper-chest/shoulder height and take the opposite-side handles if using the crossed-cable version.","Pull the arms out and back in a wide arc while externally rotating slightly.","Finish with the chest tall and shoulder blades down/back, not shrugged."], specifics:"Exit pump. Use light weight, long ROM, and a smooth ‘open the chest’ motion. This should feel like upper-back/rear-delt work, not a heavy row."},
  "EZ Curl": {focus:"Biceps overall with wrist-friendly supinated grip", cues:["Use the angled portions of the bar that keep wrists comfortable.","Keep elbows near the sides.","Curl hard without leaning back, then lower under control."], specifics:"Builder. Heavy enough to progress, strict enough that the biceps still own the rep."},
  "Machine Preacher Curl": {focus:"Biceps, strong shortened-to-midrange loading with fixed upper arm", cues:["Set the seat so the armpits/upper arms sit firmly on the pad.","Keep shoulders down and upper arms fixed.","Curl without lifting the elbows off the pad and lower to a controlled stretch."], specifics:"Pump Builder. Do not hyperextend the elbow at the bottom."},
  "Cross-Body Hammer Curl": {focus:"Brachialis + brachioradialis", cues:["Keep a neutral grip.","Curl the dumbbell toward the opposite pec/shoulder.","Keep the torso still and lower slowly."], specifics:"Exit pump. Alternate arms or complete one side at a time, but keep execution strict."},
  "Weighted Decline Sit-Up": {focus:"Rectus abdominis with loaded trunk flexion", cues:["Hold the load securely at the chest.","Initiate by curling the rib cage toward the pelvis.","Control the descent rather than dropping back onto the bench."], specifics:"Weighted core movement, so the load field stays available. Use a decline that lets the abs move the torso without excessive hip-flexor dominance."}
};

const BODYWEIGHT_ONLY = new Set(["Glute Bridge","Ab Wheel","Hanging Leg Raise with Pelvic Curl","Reverse Crunch","Push-Ups","Band Pull-Aparts","Scapular Pull-Up","Hanging Leg Raise","Band Laterals","Band External Rotation","Side Plank","Band Face Pull"]);

function ex(name,sets,reps,rest,role,note="") { return {name,sets,reps,rest,role,note,bodyweight:BODYWEIGHT_ONLY.has(name),info:EXERCISE_INFO[name]||null}; }

const PHASE2_TECHNIQUES = {
  "Seated Leg Curl": {title:"Rest-Pause", text:"Final set only: reach the planned endpoint with clean reps, rest 15–20 seconds, then perform additional controlled reps. Stop when technique breaks down."},
  "High-to-Low Cable Fly": {title:"Long-Length Partials", text:"Final set only: after full-range reps are exhausted, perform controlled partial reps in the stretched half of the range."},
  "Cable Lat Prayer": {title:"Slow Negatives", text:"Final set only: use a deliberate 3–4 second eccentric on the final reps while maintaining lat tension and torso position."},
  "Rear Delt Fly": {title:"Peak Holds", text:"Final set only: hold the shortened position for 1–2 seconds on each rep. Keep traps quiet."},
  "Machine Preacher Curl": {title:"1½ Reps", text:"Final set only: full curl, lower halfway, curl back to the top, then lower fully. That sequence is one rep."}
};

const PROGRAM = {
  phase: "Phase 2",
  weeks: "Weeks 5–8",
  principles: [
    "Increase stimulus without increasing chaos. Three-day abdominal specialization replaces previous core finishers.",
    "Performance lifts: 0–1 RIR. Heavy compounds do not go to technical failure.",
    "Stretch Builders: full ROM, ½–1 second pause in the lengthened position, and a 2–3 second eccentric.",
    "Money Sets: final working set receives a double drop set; reduce load about 20–30% at each drop.",
    "One additional advanced intensity technique is prescribed per workout, separate from the Money Set.",
    "Beat the logbook weekly. Add load only after reaching the top of the rep range with clean execution."
  ],
  days: [
    { id:"mon", weekday:1, short:"MON", name:"Lower Body", focus:"Legs + Core", coaching:"Squat quality dictates the session. The Leg Press Money Set is the only place to chase true fatigue.", exercises:[
      ex("Leg Extension",2,"20",45,"Primer"), ex("Glute Bridge",2,"15",30,"Primer"),
      ex("High Bar Back Squat",4,"6–8",165,"Performance Lift","0–1 RIR. Treat every rep like a competition for perfect execution."),
      ex("Romanian Deadlift",4,"8–10",120,"Builder","~1 RIR. Hips back; own the stretch without losing spinal position."),
      ex("Bulgarian Split Squat",3,"10",90,"Stretch Builder","Controlled depth. Let the target leg do the work."),
      ex("Leg Press",3,"12",90,"Money Set","Final working set: DOUBLE DROP. Reduce load ~20–30% and continue with controlled reps, then reduce another ~20–30% and continue again."),
      ex("Seated Leg Curl",3,"12–15",60,"Pump Builder"), ex("Standing Calf Raise",4,"10–12",60,"Accessory","Pause in the stretched position; full plantar flexion."),
      ex("Heavy Cable Crunch",3,"8–12",75,"Core"), ex("Ab Wheel",2,"8–12",75,"Core")
    ]},
    { id:"tue", weekday:2, short:"TUE", name:"Chest + Triceps", focus:"Upper Chest + Triceps", coaching:"Upper chest and long-head triceps are prioritized because they provide the greatest visual return.", exercises:[
      ex("Push-Ups",2,"15–20",30,"Primer"), ex("Band Pull-Aparts",2,"20",30,"Primer"),
      ex("Incline BB Bench",4,"6–8",165,"Performance Lift","0–1 RIR. Stable setup, controlled descent, repeatable touch point."),
      ex("Incline DB Press",3,"8–10",90,"Stretch Builder"), ex("Weighted Chest Dip",3,"8–10",90,"Builder"),
      ex("Machine Chest Press",3,"10–12",75,"Money Set","Final working set: DOUBLE DROP. Reduce load ~20–30% and continue with controlled reps, then reduce another ~20–30% and continue again."),
      ex("High-to-Low Cable Fly",2,"15–20",45,"Exit Pump"), ex("Close-Grip Bench",3,"6–8",120,"Builder"),
      ex("OH Rope Extension",3,"10–12",60,"Stretch Builder"), ex("Rope Pushdown",2,"15",45,"Exit Pump")
    ]},
    { id:"wed", weekday:3, short:"WED", name:"Back Width + Biceps", focus:"Lats + Biceps + Core", coaching:"Think ‘elbows to pockets.’ Every pull begins by depressing the shoulder blade. The Money Set belongs on the pulldown, not the pull-up.", exercises:[
      ex("Straight-Arm Pulldown",2,"20",30,"Primer"), ex("Scapular Pull-Up",2,"10",30,"Primer"),
      ex("Weighted Pull-Up",4,"6–8",165,"Performance Lift","0–1 RIR. Initiate with scapular depression before bending the elbows."),
      ex("Wide Neutral Pulldown",3,"8–10",90,"Money Set","Final working set: DOUBLE DROP. Reduce load ~20–30% and continue with controlled reps, then reduce another ~20–30% and continue again."),
      ex("Single-Arm Cable Pulldown",3,"10–12",60,"Stretch Builder","Drive elbow toward hip; keep torso position honest."),
      ex("Chest-Supported Lat Row",3,"10–12",75,"Pump Builder"), ex("Plate Loaded Pullover",2,"12–15",60,"Pump Builder"),
      ex("Cable Lat Prayer",3,"15–20",45,"Exit Pump"), ex("Incline Curl",3,"8–10",60,"Stretch Builder"),
      ex("Hammer Curl",3,"10–12",60,"Builder"), ex("Reverse EZ Curl",2,"12–15",45,"Exit Pump"),
      ex("Hanging Leg Raise with Pelvic Curl",3,"10–15",60,"Core"), ex("Reverse Crunch",2,"12–15",60,"Core")
    ]},
    { id:"fri", weekday:5, short:"FRI", name:"Shoulders + Triceps", focus:"Delts + Triceps + Core", coaching:"Lead every lateral raise with the elbow, not the hand. If your traps dominate, the weight is too heavy.", exercises:[
      ex("Band Laterals",2,"25",30,"Primer"), ex("Band External Rotation",2,"15",30,"Primer"),
      ex("Seated DB Press",4,"6–8",165,"Performance Lift","0–1 RIR. Do not turn the final reps into a standing incline press."),
      ex("Machine Shoulder Press",3,"8–10",90,"Builder"), ex("Behind-Body Cable Lateral",3,"12–15",60,"Stretch Builder"),
      ex("Machine Lateral Raise",3,"12–15",60,"Money Set","Final working set: DOUBLE DROP. Reduce load ~20–30% and continue with controlled reps, then reduce another ~20–30% and continue again."),
      ex("Rear Delt Fly",4,"12–15",60,"Pump Builder"), ex("Face Pull",3,"15–20",45,"Exit Pump"),
      ex("Weighted Dip",3,"8–10",90,"Builder"), ex("Incline OH DB Extension",3,"10–12",60,"Stretch Builder"),
      ex("Single-Arm Pushdown",2,"15",45,"Exit Pump"), ex("Machine Ab Crunch",3,"10–12",90,"Core"), ex("Cable Serratus Punch",2,"12–15/side",60,"Core"), ex("Pallof Press",2,"12/side",45,"Core")
    ]},
    { id:"sat", weekday:6, short:"SAT", name:"Back Thickness + Biceps", focus:"Upper/Mid Back + Biceps", coaching:"Every Pendlay row starts from a dead stop. Build thickness by squeezing the shoulder blades together, not by jerking the weight.", exercises:[
      ex("Rear Delt Fly",2,"20",30,"Primer"), ex("Band Face Pull",2,"20",30,"Primer"),
      ex("Pendlay Row",4,"6–8",165,"Performance Lift","0–1 RIR. Reset from a dead stop. No heaving."),
      ex("Chest-Supported Row",3,"8–10",90,"Money Set","Final working set: DOUBLE DROP. Reduce load ~20–30% and continue with controlled reps, then reduce another ~20–30% and continue again."),
      ex("Single-Arm DB Row",3,"10–12",75,"Stretch Builder"), ex("Rack Pull",3,"6–8",150,"Builder"),
      ex("Seated Cable Row",3,"12",75,"Pump Builder"), ex("Cobra Pull",3,"15–20",45,"Exit Pump"),
      ex("EZ Curl",3,"6–8",90,"Builder"), ex("Incline Curl",3,"8–10",60,"Stretch Builder"),
      ex("Machine Preacher Curl",3,"10–12",60,"Pump Builder"), ex("Cross-Body Hammer Curl",2,"15",45,"Exit Pump")
    ]}
  ]
};


const $ = s => document.querySelector(s);
const main = $('#main');
let state = JSON.parse(localStorage.getItem('ampState') || '{}');
state.workouts ||= {}; state.checkins ||= []; state.settings ||= {week:5};
if(![5,6,7,8].includes(Number(state.settings.week))) state.settings.week=5;
let currentView='today', selectedDay=null, timerInterval=null, installPrompt=null, audioCtx=null;
const REST_KEY='ampRestTimer';
function save(){ localStorage.setItem('ampState',JSON.stringify(state)); }
function todayDay(){ const wd=new Date().getDay(); return PROGRAM.days.find(d=>d.weekday===wd) || null; }
function keyFor(day,date=new Date()){ return `${date.toISOString().slice(0,10)}_${day.id}`; }
function latestExerciseHistory(name,beforeKey){
  const entries=Object.entries(state.workouts).filter(([k,w])=>k!==beforeKey && w.completedAt && w.exercises?.[name]).sort((a,b)=>new Date(b[1].completedAt)-new Date(a[1].completedAt));
  return entries[0]?.[1]?.exercises?.[name] || null;
}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function escJs(s=''){return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'")}
function render(view=currentView){currentView=view;document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); if(view==='today')renderToday(); if(view==='program')renderProgram(); if(view==='history')renderHistory(); if(view==='progress')renderProgress(); if(view==='guide')renderGuide();}
function renderToday(){ const d=selectedDay || todayDay(); if(!d){main.innerHTML=`<section class="hero"><div class="eyebrow">RECOVERY DAY</div><h2>No Phase 2 lifting today.</h2><p class="muted">Thursday and Sunday are recovery days. Apparently muscle has the audacity to grow while you are not lifting.</p><button class="btn" onclick="render('program')">Open Program</button></section>`;return;} renderWorkout(d); }
function renderWorkout(day){ const k=keyFor(day); state.workouts[k] ||= {dayId:day.id,date:new Date().toISOString().slice(0,10),exercises:{}}; const w=state.workouts[k];
  const completed=Object.values(w.exercises).flatMap(e=>e.sets||[]).filter(s=>s.done).length; const total=day.exercises.reduce((n,e)=>n+e.sets,0);
  main.innerHTML=`<section class="hero"><div class="eyebrow">${day.short} • WEEK ${state.settings.week}</div><h2>${day.name}</h2><div class="muted">${day.focus}</div><div class="hero-grid"><div class="metric"><strong>${completed}/${total}</strong><small>sets logged</small></div><div class="metric"><strong>${day.exercises.length}</strong><small>exercises</small></div><div class="metric"><strong>${Math.round(completed/Math.max(total,1)*100)}%</strong><small>complete</small></div></div><p class="muted" style="margin-top:14px">${escapeHtml(day.coaching)}</p></section>
  <div class="section-title"><h2>Workout</h2><button class="mini-btn" onclick="showInfo('Phase 2 Rules',guideRules())">Phase rules</button></div>${day.exercises.map((e,i)=>exerciseCard(day,e,i,k,w)).join('')}
  <section class="card"><h3>Finish session</h3><label class="field">Session notes<textarea id="sessionNotes" placeholder="Performance, pain, substitutions, anything worth remembering...">${escapeHtml(w.notes||'')}</textarea></label><div class="footer-actions"><button class="btn" onclick="completeWorkout('${day.id}')">Complete Workout</button><button class="ghost danger" onclick="clearToday('${day.id}')">Clear</button></div></section>`;
}
function techniqueAlerts(e){
  const a=[];
  if(e.role==='Money Set') a.push({title:'FINAL SET • DOUBLE DROP',detail:'After the final working set: two ~20–30% drops, minimal delay.'});
  if(e.role==='Stretch Builder') a.push({title:'ALL SETS • STRETCH TEMPO',detail:'Pause ½–1 sec in stretch; lower over 2–3 sec.'});
  if(PHASE2_TECHNIQUES[e.name]) a.push({title:'FINAL SET • '+PHASE2_TECHNIQUES[e.name].title.toUpperCase(),detail:PHASE2_TECHNIQUES[e.name].text});
  return a;
}
function exerciseCard(day,e,i,k,w){
  w.exercises[e.name] ||= {sets:Array.from({length:e.sets},()=>({weight:'',reps:'',done:false})),notes:''};
  const ew=w.exercises[e.name];
  if(!Array.isArray(ew.sets)) ew.sets=[];
  while(ew.sets.length<e.sets) ew.sets.push({weight:'',reps:'',done:false});
  ew.sets=ew.sets.slice(0,e.sets).map(set=>({weight:set?.weight??'',reps:set?.reps??'',done:Boolean(set?.done)}));
  if(e.role==='Money Set'){ ew.drop ||= {weight:'',reps:'',done:false}; ew.drop2 ||= {weight:'',reps:'',done:false}; }
  const prev=latestExerciseHistory(e.name,k);
  const prevSets=prev?.sets?.filter(x=>x.weight||x.reps).map((x,j)=>`S${j+1}: ${e.bodyweight?'':(x.weight||'—')+' × '}${x.reps||'—'}`).join(' • ');
  const prevDrop=e.role==='Money Set' && prev?.drop && (prev.drop.weight||prev.drop.reps) ? ` • D1: ${prev.drop.weight||'—'} × ${prev.drop.reps||'—'}${prev?.drop2&&(prev.drop2.weight||prev.drop2.reps)?` • D2: ${prev.drop2.weight||'—'} × ${prev.drop2.reps||'—'}`:''}` : '';
  const prevText=(prevSets||'No previous entry')+prevDrop;
  const setRows=ew.sets.map((x,si)=>{
    const weightInput=e.bodyweight?'':`<input inputmode="decimal" placeholder="lb" value="${escapeHtml(x.weight)}" oninput="setField('${day.id}','${escJs(e.name)}',${si},'weight',this.value)">`;
    return `<div class="set-grid ${e.bodyweight?'bodyweight-set':''}"><div class="set-label">SET ${si+1}</div>${weightInput}<input inputmode="numeric" placeholder="${e.reps.includes('sec')?'sec':'reps'}" value="${escapeHtml(x.reps)}" oninput="setField('${day.id}','${escJs(e.name)}',${si},'reps',this.value)"><button class="check ${x.done?'done':''}" onclick="toggleSet('${day.id}','${escJs(e.name)}',${si},${e.rest},this)">${x.done?'✓':'○'}</button></div>`;
  }).join('');
  const dropRow=e.role==='Money Set'?`<div class="drop-box"><div class="drop-title"><span>DOUBLE DROP SET</span><small>Reduce ~20–30% each drop • minimal delay</small></div><div class="set-grid drop-grid"><div class="set-label">DROP 1</div><input inputmode="decimal" placeholder="lb" value="${escapeHtml(ew.drop?.weight||'')}" oninput="setDropField('${day.id}','${escJs(e.name)}','drop','weight',this.value)"><input inputmode="numeric" placeholder="reps" value="${escapeHtml(ew.drop?.reps||'')}" oninput="setDropField('${day.id}','${escJs(e.name)}','drop','reps',this.value)"><button class="check ${ew.drop?.done?'done':''}" onclick="toggleDrop('${day.id}','${escJs(e.name)}','drop',this)">${ew.drop?.done?'✓':'○'}</button></div><div class="set-grid drop-grid"><div class="set-label">DROP 2</div><input inputmode="decimal" placeholder="lb" value="${escapeHtml(ew.drop2?.weight||'')}" oninput="setDropField('${day.id}','${escJs(e.name)}','drop2','weight',this.value)"><input inputmode="numeric" placeholder="reps" value="${escapeHtml(ew.drop2?.reps||'')}" oninput="setDropField('${day.id}','${escJs(e.name)}','drop2','reps',this.value)"><button class="check ${ew.drop2?.done?'done':''}" onclick="toggleDrop('${day.id}','${escJs(e.name)}','drop2',this)">${ew.drop2?.done?'✓':'○'}</button></div></div>`:'';
  const alerts=techniqueAlerts(e);
  const alertHtml=alerts.length?`<div class="technique-alerts">${alerts.map(a=>`<div class="technique-alert"><strong>⚠ ${escapeHtml(a.title)}</strong><span>${escapeHtml(a.detail)}</span></div>`).join('')}<button class="technique-link" onclick="showExerciseInfo('${day.id}',${i})">Read full exercise guide ↗</button></div>`:'';
  return `<section class="card exercise ${alerts.length?'exercise-modified':''}"><div class="exercise-head"><div><div class="exercise-name">${escapeHtml(e.name)}</div><div class="chips"><span class="chip ${e.role==='Money Set'?'money':''} ${e.role==='Performance Lift'?'performance':''}">${e.role}</span><span class="chip">${e.sets} × ${e.reps}</span><span class="chip">Rest ${fmtRest(e.rest)}</span>${alerts.length?`<span class="chip technique">⚠ Modified</span>`:''}</div></div><button class="mini-btn" onclick="showExerciseInfo('${day.id}',${i})">Exercise Guide</button></div>${alertHtml}<div class="exercise-body"><div class="previous">Previous: ${escapeHtml(prevText)}</div>${setRows}${dropRow}<textarea class="note" placeholder="Exercise notes" oninput="setExerciseNotes('${day.id}','${escJs(e.name)}',this.value)">${escapeHtml(ew.notes||'')}</textarea><div class="rest-row"><span class="muted">Target: ${e.reps} • ${fmtRest(e.rest)} rest</span><button class="mini-btn" onclick="startTimer(${e.rest},this)">Start rest</button></div></div></section>`;
}
function fmtRest(sec){ if(sec>=60){const m=Math.floor(sec/60),s=sec%60; return s?`${m}:${String(s).padStart(2,'0')}`:`${m} min`}return `${sec}s`; }
function getTodayWorkout(dayId){const day=PROGRAM.days.find(d=>d.id===dayId);const k=keyFor(day);state.workouts[k] ||= {dayId,date:new Date().toISOString().slice(0,10),exercises:{}};return [day,k,state.workouts[k]]}
window.setField=(dayId,name,si,field,val)=>{const [d,k,w]=getTodayWorkout(dayId);w.exercises[name] ||= {sets:Array.from({length:d.exercises.find(x=>x.name===name).sets},()=>({weight:'',reps:'',done:false})),notes:''};w.exercises[name].sets[si][field]=val;save();};
window.setDropField=(dayId,name,slot,field,val)=>{const [d,k,w]=getTodayWorkout(dayId);w.exercises[name] ||= {sets:[],notes:''};w.exercises[name][slot] ||= {weight:'',reps:'',done:false};w.exercises[name][slot][field]=val;save();};
window.toggleDrop=(dayId,name,slot,btn)=>{const [d,k,w]=getTodayWorkout(dayId);w.exercises[name][slot] ||= {weight:'',reps:'',done:false};w.exercises[name][slot].done=!w.exercises[name][slot].done;btn.classList.toggle('done',w.exercises[name][slot].done);btn.textContent=w.exercises[name][slot].done?'✓':'○';save();};
window.setExerciseNotes=(dayId,name,val)=>{const [d,k,w]=getTodayWorkout(dayId);w.exercises[name].notes=val;save();};
window.toggleSet=(dayId,name,si,rest,btn)=>{const [d,k,w]=getTodayWorkout(dayId);const s=w.exercises[name].sets[si];s.done=!s.done;btn.classList.toggle('done',s.done);btn.textContent=s.done?'✓':'○';save();if(s.done)startTimer(rest,btn);};

function unlockAudio(){
  try{
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
  }catch(e){}
}
function restSound(){
  try{
    unlockAudio();
    if(!audioCtx) return;
    const now=audioCtx.currentTime;
    [0,.22,.44].forEach((delay,i)=>{
      const osc=audioCtx.createOscillator();
      const gain=audioCtx.createGain();
      osc.type='sine';
      osc.frequency.value=i===2?1046:880;
      gain.gain.setValueAtTime(.0001,now+delay);
      gain.gain.exponentialRampToValueAtTime(.22,now+delay+.01);
      gain.gain.exponentialRampToValueAtTime(.0001,now+delay+.16);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(now+delay); osc.stop(now+delay+.18);
    });
  }catch(e){}
}
function getRestTimer(){
  try{return JSON.parse(localStorage.getItem(REST_KEY)||'null')}catch(e){return null}
}
function saveRestTimer(timer){
  if(timer) localStorage.setItem(REST_KEY,JSON.stringify(timer));
  else localStorage.removeItem(REST_KEY);
}
function ensureRestBanner(){
  let el=document.getElementById('restBanner');
  if(el) return el;
  el=document.createElement('div');
  el.id='restBanner';
  el.className='rest-banner hidden';
  el.innerHTML=`<div><small>REST TIMER</small><strong id="restBannerTime">0:00</strong></div><button class="mini-btn" onclick="cancelRestTimer()">Cancel</button>`;
  document.body.appendChild(el);
  return el;
}
function updateRestTimer(){
  const t=getRestTimer();
  const banner=ensureRestBanner();
  if(!t){banner.classList.add('hidden');clearInterval(timerInterval);timerInterval=null;return}
  const left=Math.max(0,Math.ceil((t.endAt-Date.now())/1000));
  banner.classList.remove('hidden');
  const timeEl=document.getElementById('restBannerTime');
  if(timeEl) timeEl.textContent=left>0?fmtRest(left):'REST DONE';
  if(left<=0){
    clearInterval(timerInterval); timerInterval=null;
    if(!t.notified){
      t.notified=true; saveRestTimer(t);
      restSound(); navigator.vibrate?.([180,80,180,80,260]);
      banner.classList.add('done');
      setTimeout(()=>banner.classList.remove('done'),1800);
    }
  }
}
function runRestTicker(){
  clearInterval(timerInterval);
  updateRestTimer();
  timerInterval=setInterval(updateRestTimer,250);
}
window.startTimer=(seconds,source)=>{
  unlockAudio();
  saveRestTimer({endAt:Date.now()+seconds*1000,seconds,notified:false});
  runRestTicker();
};
window.cancelRestTimer=()=>{saveRestTimer(null);updateRestTimer();};
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateRestTimer()});
window.addEventListener('focus',updateRestTimer);

window.completeWorkout=(dayId)=>{const [d,k,w]=getTodayWorkout(dayId);w.notes=$('#sessionNotes')?.value||'';w.completedAt=new Date().toISOString();save();render('history');};
window.clearToday=(dayId)=>{if(!confirm('Clear today’s logged sets?'))return;const [d,k]=getTodayWorkout(dayId);delete state.workouts[k];save();render('today');};
function renderProgram(){main.innerHTML=`<section class="hero"><div class="eyebrow">PHASE 2 • WEEKS 5–8</div><h2>Program</h2><p class="muted">Five training days. Thursday and Sunday are recovery days.</p><label class="field">Current week<select onchange="state.settings.week=Number(this.value);save();render('program')">${[5,6,7,8].map(n=>`<option ${state.settings.week===n?'selected':''}>${n}</option>`).join('')}</select></label></section><div class="day-list">${PROGRAM.days.map(d=>`<button class="day-button" onclick="openDay('${d.id}')"><div><strong>${d.short} • ${d.name}</strong><small>${d.focus} • ${d.exercises.length} exercises</small></div><span>›</span></button>`).join('')}</div>`}
window.openDay=id=>{selectedDay=PROGRAM.days.find(d=>d.id===id);render('today')};
function renderHistory(){const arr=Object.entries(state.workouts).filter(([k,w])=>w.completedAt).sort((a,b)=>new Date(b[1].completedAt)-new Date(a[1].completedAt));main.innerHTML=`<section class="hero"><div class="eyebrow">LOGBOOK</div><h2>Workout History</h2><p class="muted">Your completed sessions live on this device unless you export them.</p><div class="footer-actions"><button class="ghost" onclick="exportData()">Export backup</button><button class="ghost" onclick="exportSpreadsheet()">Export spreadsheet</button><button class="ghost" onclick="importData()">Import backup</button></div></section>${arr.length?arr.map(([k,w])=>historyCard(k,w)).join(''):`<div class="empty">No completed workouts yet.</div>`}`}
function historyCard(k,w){const d=PROGRAM.days.find(x=>x.id===w.dayId);const setCount=Object.values(w.exercises||{}).flatMap(e=>e.sets||[]).filter(s=>s.done).length;return `<section class="card"><div class="eyebrow">${new Date(w.completedAt).toLocaleDateString()}</div><h3>${d?.name||w.dayId}</h3><div class="muted">${setCount} completed sets</div><button class="mini-btn" style="margin-top:10px" onclick="showHistory('${k}')">View details</button></section>`}
window.showHistory=k=>{const w=state.workouts[k];let html=`<p>${escapeHtml(w.notes||'No session notes.')}</p>`;for(const [name,e] of Object.entries(w.exercises||{})){const exDef=PROGRAM.days.flatMap(d=>d.exercises).find(x=>x.name===name);const lines=(e.sets||[]).filter(s=>s.weight||s.reps).map((s,i)=>`S${i+1}: ${exDef?.bodyweight?'':escapeHtml(s.weight||'—')+' × '}${escapeHtml(s.reps||'—')}${s.done?' ✓':''}`);if(e.drop&&(e.drop.weight||e.drop.reps))lines.push(`<b>DROP 1:</b> ${escapeHtml(e.drop.weight||'—')} × ${escapeHtml(e.drop.reps||'—')}${e.drop.done?' ✓':''}`);if(e.drop2&&(e.drop2.weight||e.drop2.reps))lines.push(`<b>DROP 2:</b> ${escapeHtml(e.drop2.weight||'—')} × ${escapeHtml(e.drop2.reps||'—')}${e.drop2.done?' ✓':''}`);html+=`<h4>${escapeHtml(name)}</h4><p>${lines.join('<br>')||'No sets logged'}</p>`}showInfo('Workout details',html)};
function renderProgress(){const c=state.checkins.at(-1)||{};main.innerHTML=`<section class="hero"><div class="eyebrow">2-MINUTE SUNDAY RITUAL</div><h2>Weekly Check-In</h2><p class="muted">Use trends, not one weird weigh-in, to decide whether anything changes.</p><p class="muted"><b>Phase 2 conditioning:</b> 4 × 25–30 min Zone 2 sessions/week.</p></section><section class="card"><div class="two-col"><label class="field">Average bodyweight (lb)<input id="ciWeight" inputmode="decimal" value="${c.weight||''}"></label><label class="field">Waist (in)<input id="ciWaist" inputmode="decimal" value="${c.waist||''}"></label><label class="field">Blood pressure<input id="ciBp" placeholder="120/80" value="${c.bp||''}"></label><label class="field">Resting HR<input id="ciHr" inputmode="numeric" value="${c.hr||''}"></label></div><h3>Recovery score</h3>${['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].map(x=>`<div class="score-grid"><span>${x}</span><input id="ci${x.replace(' ','')}" type="number" min="1" max="5" value="${c[x]||''}"></div>`).join('')}<label class="field">Notes<textarea id="ciNotes">${escapeHtml(c.notes||'')}</textarea></label><button class="btn" onclick="saveCheckin()">Save Check-In</button></section><section class="card"><h3>AMP decision rules</h3><div class="guide-item"><p><b>Weight + strength increasing:</b> keep the plan the same.</p></div><div class="guide-item"><p><b>Weight flat + strength flat:</b> review intake/recovery before changing training.</p></div><div class="guide-item"><p><b>Recovery score below 20/30:</b> reduce accessory volume and prioritize recovery.</p></div><div class="guide-item"><p><b>One bad workout:</b> noise. Several consistent weeks: trend.</p></div></section>${renderCheckinHistory()}`}
window.saveCheckin=()=>{const obj={date:new Date().toISOString(),weight:$('#ciWeight').value,waist:$('#ciWaist').value,bp:$('#ciBp').value,hr:$('#ciHr').value,notes:$('#ciNotes').value};['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].forEach(x=>obj[x]=Number($('#ci'+x.replace(' ','')).value||0));obj.total=['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].reduce((n,x)=>n+(obj[x]||0),0);state.checkins.push(obj);save();render('progress')};
function renderCheckinHistory(){if(!state.checkins.length)return '';return `<section class="card"><h3>Check-In History</h3><table class="table"><thead><tr><th>Date</th><th>Wt</th><th>Waist</th><th>Recovery</th></tr></thead><tbody>${[...state.checkins].reverse().map(c=>`<tr><td>${new Date(c.date).toLocaleDateString()}</td><td>${c.weight||'—'}</td><td>${c.waist||'—'}</td><td>${c.total||'—'}/30</td></tr>`).join('')}</tbody></table></section>`}
function renderGuide(){main.innerHTML=`<section class="hero"><div class="eyebrow">AMP REFERENCE</div><h2>Technique & Intensity Guide</h2><p class="muted">Phase 2 increases stimulus without increasing chaos. Same exercises, tighter execution, slightly more violence where it is actually useful.</p></section><section class="card">${guideRules()}</section><section class="card"><h3>Phase 2 advanced techniques</h3>${guideItem('Monday — Seated Leg Curl','Rest-pause on the final set: rest 15–20 seconds, then perform additional controlled reps.')}${guideItem('Tuesday — High-to-Low Cable Fly','Long-length partials on the final set after full-range reps are exhausted.')}${guideItem('Wednesday — Cable Lat Prayer','Slow 3–4 second negatives on the final reps of the final set.')}${guideItem('Friday — Rear Delt Fly','1–2 second peak holds on the final set.')}${guideItem('Saturday — Machine Preacher Curl','1½ reps on the final set: full curl, half-lower, curl again, then full lower.')}${guideItem('Money Set — Double Drop','Final working set receives two consecutive ~20–30% load reductions. Log both drops separately.')}${guideItem('Widowmaker','Not yet. Widowmakers remain a Phase 3 tool.')}</section><section class="card"><h3>Exercise roles</h3>${['Primer|Prepare joints and target tissue without creating fatigue.','Performance Lift|Primary measurable strength marker; Phase 2 target is 0–1 RIR.','Builder|Heavy hypertrophy work using stable, repeatable execution.','Stretch Builder|Full ROM plus a ½–1 second lengthened pause and 2–3 second eccentric.','Pump Builder|Stable volume that drives local fatigue without unnecessary systemic cost.','Money Set|Phase 2 uses a double drop set on the final working set.','Exit Pump|High-rep finisher.'].map(x=>{let[a,b]=x.split('|');return guideItem(a,b)}).join('')}</section>`}
function guideRules(){return `<h3>Phase 2 rules</h3>${PROGRAM.principles.map(p=>`<div class="guide-item"><p>${escapeHtml(p)}</p></div>`).join('')}`}
function guideItem(h,p){return `<div class="guide-item"><h4>${h}</h4><p>${p}</p></div>`}
window.showExerciseInfo=(dayId,index)=>{const d=PROGRAM.days.find(x=>x.id===dayId),e=d.exercises[index],info=e.info||{};let text=`<p><b>Role:</b> ${escapeHtml(e.role)}<br><b>Prescription:</b> ${e.sets} × ${escapeHtml(e.reps)}<br><b>Rest:</b> ${fmtRest(e.rest)}${e.bodyweight?'<br><b>Logging:</b> Bodyweight / reps only':''}</p>`;if(info.focus)text+=`<div class="guide-block"><h4>Muscle focus</h4><p>${escapeHtml(info.focus)}</p></div>`;if(info.cues?.length)text+=`<div class="guide-block"><h4>Training cues</h4><ul>${info.cues.map(c=>`<li>${escapeHtml(c)}</li>`).join('')}</ul></div>`;if(info.specifics)text+=`<div class="guide-block"><h4>AMP setup / specifics</h4><p>${escapeHtml(info.specifics)}</p></div>`;if(e.note)text+=`<div class="guide-block"><h4>Programming note</h4><p>${escapeHtml(e.note)}</p></div>`;if(e.role==='Stretch Builder')text+=`<div class="guide-block"><h4>Phase 2 Stretch Builder</h4><p>Use full ROM, pause ½–1 second in the lengthened position, and use a controlled 2–3 second eccentric.</p></div>`;if(PHASE2_TECHNIQUES[e.name])text+=`<div class="guide-block money-guide"><h4>Phase 2 technique — ${PHASE2_TECHNIQUES[e.name].title}</h4><p>${PHASE2_TECHNIQUES[e.name].text}</p></div>`;if(e.role==='Money Set')text+=`<div class="guide-block money-guide"><h4>Phase 2 Money Set</h4><p>After the final prescribed working set, reduce load about 20–30%, continue with controlled reps, reduce another ~20–30%, and continue again. Log DROP 1 and DROP 2 separately.</p></div>`;showInfo(e.name,text)};
window.showInfo=(title,body)=>{$('#dialogTitle').textContent=title;$('#dialogBody').innerHTML=body;$('#infoDialog').showModal()};

window.exportSpreadsheet=()=>{
  const rows=[["Date","Phase","Workout","Exercise","Set","Weight","Reps","Technique","Exercise Notes","Session Notes"]];
  const csvEsc=v=>`"${String(v??'').replace(/"/g,'""')}"`;
  const entries=Object.entries(state.workouts||{})
    .filter(([k,w])=>w.completedAt)
    .sort((a,b)=>new Date(a[1].completedAt)-new Date(b[1].completedAt));

  for(const [k,w] of entries){
    const day=PROGRAM.days.find(d=>d.id===w.dayId);
    const date=w.completedAt ? new Date(w.completedAt).toLocaleDateString() : (w.date||'');
    const workoutName=day?.name||w.dayId||'';
    for(const [exerciseName,ew] of Object.entries(w.exercises||{})){
      const pe=day?.exercises?.find(e=>e.name===exerciseName);
      const technique=PHASE2_TECHNIQUES?.[exerciseName]?.title || pe?.role || "Standard";
      (ew.sets||[]).forEach((s,i)=>{
        if(s.weight||s.reps||s.done){
          rows.push([date,"Phase 2",workoutName,exerciseName,`Set ${i+1}`,s.weight||"",s.reps||"",technique,ew.notes||"",w.notes||""]);
        }
      });
      if(ew.drop && (ew.drop.weight||ew.drop.reps||ew.drop.done))
        rows.push([date,"Phase 2",workoutName,exerciseName,"Drop 1",ew.drop.weight||"",ew.drop.reps||"","Money Set — Drop 1",ew.notes||"",w.notes||""]);
      if(ew.drop2 && (ew.drop2.weight||ew.drop2.reps||ew.drop2.done))
        rows.push([date,"Phase 2",workoutName,exerciseName,"Drop 2",ew.drop2.weight||"",ew.drop2.reps||"","Money Set — Drop 2",ew.notes||"",w.notes||""]);
    }
  }

  const csv=rows.map(r=>r.map(csvEsc).join(",")).join("\r\n");
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=`AMP-training-log-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
};

window.exportData=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`AMP-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};
window.importData=()=>{const i=document.createElement('input');i.type='file';i.accept='.json,application/json';i.onchange=()=>{const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);state.workouts||={};state.checkins||=[];state.settings||={week:5};if(![5,6,7,8].includes(Number(state.settings.week)))state.settings.week=5;save();render('history')}catch(e){alert('That file is not a valid AMP backup.')}};r.readAsText(i.files[0])};i.click()};

document.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',()=>{selectedDay=null;render(b.dataset.view)}));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('#installBtn').classList.remove('hidden')});
$('#installBtn').addEventListener('click',async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').classList.add('hidden')}});
ensureRestBanner();
if(getRestTimer()) runRestTicker();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
render('today');
