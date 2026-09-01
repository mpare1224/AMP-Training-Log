const PROGRAM = {
  phase: "Phase 1",
  weeks: "Weeks 1–4",
  principles: [
    "Perfect technique and establish baseline loads.",
    "Performance lifts: finish working sets with 1–2 reps in reserve.",
    "Builders: generally ~1 rep in reserve with clean technique.",
    "Only the designated Money Set receives an advanced intensity technique.",
    "Track every working set. Beat the logbook with reps, load, or better execution.",
    "If technique breaks down, the set is over. Productive fatigue beats random exhaustion."
  ],
  days: [
    { id:"mon", weekday:1, short:"MON", name:"Lower Body", focus:"Legs + Core", coaching:"Squat quality dictates the session. The Leg Press Money Set is the only place to chase true fatigue.", exercises:[
      ex("Leg Extension",2,"20",45,"Primer"), ex("Glute Bridge",2,"15",30,"Primer"),
      ex("High Bar Back Squat",4,"6–8",165,"Performance Lift","1–2 RIR. Treat every rep like a competition for perfect execution."),
      ex("Romanian Deadlift",4,"8–10",120,"Builder","~1 RIR. Hips back; own the stretch without losing spinal position."),
      ex("Bulgarian Split Squat",3,"10",90,"Stretch Builder","Controlled depth. Let the target leg do the work."),
      ex("Leg Press",3,"12",90,"Money Set","Final working set: single drop set. Reduce load 20–30% and continue with controlled reps."),
      ex("Seated Leg Curl",3,"12–15",60,"Pump Builder"), ex("Standing Calf Raise",4,"10–12",60,"Accessory","Pause in the stretched position; full plantar flexion."),
      ex("Cable Crunch",3,"12–15",45,"Core"), ex("Ab Wheel",3,"8–12",45,"Core")
    ]},
    { id:"tue", weekday:2, short:"TUE", name:"Chest + Triceps", focus:"Upper Chest + Triceps + Core", coaching:"Upper chest and long-head triceps are prioritized because they provide the greatest visual return.", exercises:[
      ex("Push-Ups",2,"15–20",30,"Primer"), ex("Band Pull-Aparts",2,"20",30,"Primer"),
      ex("Incline BB Bench",4,"6–8",165,"Performance Lift","1–2 RIR. Stable setup, controlled descent, repeatable touch point."),
      ex("Incline DB Press",3,"8–10",90,"Stretch Builder"), ex("Weighted Chest Dip",3,"8–10",90,"Builder"),
      ex("Machine Chest Press",3,"10–12",75,"Money Set","Final working set: single drop set. Reduce load 20–30% and continue with controlled reps."),
      ex("High-to-Low Cable Fly",2,"15–20",45,"Exit Pump"), ex("Close-Grip Bench",3,"6–8",120,"Builder"),
      ex("OH Rope Extension",3,"10–12",60,"Stretch Builder"), ex("Rope Pushdown",2,"15",45,"Exit Pump"),
      ex("Cable Crunch",3,"12–15",45,"Core"), ex("Pallof Press",3,"12/side",30,"Core")
    ]},
    { id:"wed", weekday:3, short:"WED", name:"Back Width + Biceps", focus:"Lats + Biceps + Core", coaching:"Think ‘elbows to pockets.’ Every pull begins by depressing the shoulder blade. The Money Set belongs on the pulldown, not the pull-up.", exercises:[
      ex("Straight-Arm Pulldown",2,"20",30,"Primer"), ex("Scapular Pull-Up",2,"10",30,"Primer"),
      ex("Weighted Pull-Up",4,"6–8",165,"Performance Lift","1–2 RIR. Initiate with scapular depression before bending the elbows."),
      ex("Wide Neutral Pulldown",3,"8–10",90,"Money Set","Final working set: single drop set. Reduce load 20–30% and continue with controlled reps."),
      ex("Single-Arm Cable Pulldown",3,"10–12",60,"Stretch Builder","Drive elbow toward hip; keep torso position honest."),
      ex("Chest-Supported Lat Row",3,"10–12",75,"Pump Builder"), ex("Plate Loaded Pullover",2,"12–15",60,"Pump Builder"),
      ex("Cable Lat Prayer",3,"15–20",45,"Exit Pump"), ex("Incline Curl",3,"8–10",60,"Stretch Builder"),
      ex("Hammer Curl",3,"10–12",60,"Builder"), ex("Reverse EZ Curl",2,"12–15",45,"Exit Pump"),
      ex("Hanging Leg Raise",3,"10–12",45,"Core"), ex("Cable Wood Chop",3,"12/side",30,"Core")
    ]},
    { id:"fri", weekday:5, short:"FRI", name:"Shoulders + Triceps", focus:"Delts + Triceps + Core", coaching:"Lead every lateral raise with the elbow, not the hand. If your traps dominate, the weight is too heavy.", exercises:[
      ex("Band Laterals",2,"25",30,"Primer"), ex("Band External Rotation",2,"15",30,"Primer"),
      ex("Seated DB Press",4,"6–8",165,"Performance Lift","1–2 RIR. Do not turn the final reps into a standing incline press."),
      ex("Machine Shoulder Press",3,"8–10",90,"Builder"), ex("Behind-Body Cable Lateral",3,"12–15",60,"Stretch Builder"),
      ex("Machine Lateral Raise",3,"12–15",60,"Money Set","Final working set: single drop set. Reduce load 20–30% and continue with controlled reps."),
      ex("Rear Delt Fly",4,"12–15",60,"Pump Builder"), ex("Face Pull",3,"15–20",45,"Exit Pump"),
      ex("Weighted Dip",3,"8–10",90,"Builder"), ex("Incline OH DB Extension",3,"10–12",60,"Stretch Builder"),
      ex("Single-Arm Pushdown",2,"15",45,"Exit Pump"), ex("Cable Crunch",3,"12–15",45,"Core"), ex("Side Plank",3,"45 sec",30,"Core")
    ]},
    { id:"sat", weekday:6, short:"SAT", name:"Back Thickness + Biceps", focus:"Upper/Mid Back + Biceps + Core", coaching:"Every Pendlay row starts from a dead stop. Build thickness by squeezing the shoulder blades together, not by jerking the weight.", exercises:[
      ex("Rear Delt Fly",2,"20",30,"Primer"), ex("Band Face Pull",2,"20",30,"Primer"),
      ex("Pendlay Row",4,"6–8",165,"Performance Lift","1–2 RIR. Reset from a dead stop. No heaving."),
      ex("Chest-Supported Row",3,"8–10",90,"Money Set","Final working set: single drop set. Reduce load 20–30% and continue with controlled reps."),
      ex("Single-Arm DB Row",3,"10–12",75,"Stretch Builder"), ex("Rack Pull",3,"6–8",150,"Builder"),
      ex("Seated Cable Row",3,"12",75,"Pump Builder"), ex("Cobra Pull",3,"15–20",45,"Exit Pump"),
      ex("EZ Curl",3,"6–8",90,"Builder"), ex("Incline Curl",3,"8–10",60,"Stretch Builder"),
      ex("Machine Preacher Curl",3,"10–12",60,"Pump Builder"), ex("Cross-Body Hammer Curl",2,"15",45,"Exit Pump"),
      ex("Ab Wheel",3,"10–12",45,"Core"), ex("Weighted Decline Sit-Up",3,"15",45,"Core")
    ]}
  ]
};

function ex(name,sets,reps,rest,role,note="") { return {name,sets,reps,rest,role,note}; }
const $ = s => document.querySelector(s);
const main = $('#main');
let state = JSON.parse(localStorage.getItem('ampState') || '{}');
state.workouts ||= {}; state.checkins ||= []; state.settings ||= {week:1};
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
function render(view=currentView){currentView=view;document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); if(view==='today')renderToday(); if(view==='program')renderProgram(); if(view==='history')renderHistory(); if(view==='progress')renderProgress(); if(view==='guide')renderGuide();}
function renderToday(){ const d=selectedDay || todayDay(); if(!d){main.innerHTML=`<section class="hero"><div class="eyebrow">RECOVERY DAY</div><h2>No Phase 1 lifting today.</h2><p class="muted">Thursday and Sunday are recovery days. Apparently muscle has the audacity to grow while you are not lifting.</p><button class="btn" onclick="render('program')">Open Program</button></section>`;return;} renderWorkout(d); }
function renderWorkout(day){ const k=keyFor(day); state.workouts[k] ||= {dayId:day.id,date:new Date().toISOString().slice(0,10),exercises:{}}; const w=state.workouts[k];
  const completed=Object.values(w.exercises).flatMap(e=>e.sets||[]).filter(s=>s.done).length; const total=day.exercises.reduce((n,e)=>n+e.sets,0);
  main.innerHTML=`<section class="hero"><div class="eyebrow">${day.short} • WEEK ${state.settings.week}</div><h2>${day.name}</h2><div class="muted">${day.focus}</div><div class="hero-grid"><div class="metric"><strong>${completed}/${total}</strong><small>sets logged</small></div><div class="metric"><strong>${day.exercises.length}</strong><small>exercises</small></div><div class="metric"><strong>${Math.round(completed/Math.max(total,1)*100)}%</strong><small>complete</small></div></div><p class="muted" style="margin-top:14px">${escapeHtml(day.coaching)}</p></section>
  <div class="section-title"><h2>Workout</h2><button class="mini-btn" onclick="showInfo('Phase 1 Rules',guideRules())">Phase rules</button></div>${day.exercises.map((e,i)=>exerciseCard(day,e,i,k,w)).join('')}
  <section class="card"><h3>Finish session</h3><label class="field">Session notes<textarea id="sessionNotes" placeholder="Performance, pain, substitutions, anything worth remembering...">${escapeHtml(w.notes||'')}</textarea></label><div class="footer-actions"><button class="btn" onclick="completeWorkout('${day.id}')">Complete Workout</button><button class="ghost danger" onclick="clearToday('${day.id}')">Clear</button></div></section>`;
}
function exerciseCard(day,e,i,k,w){ w.exercises[e.name] ||= {sets:Array.from({length:e.sets},()=>({weight:'',reps:'',done:false})),notes:''}; const ew=w.exercises[e.name]; while(ew.sets.length<e.sets)ew.sets.push({weight:'',reps:'',done:false}); const prev=latestExerciseHistory(e.name,k); const prevText=prev?.sets?.filter(s=>s.weight||s.reps).map((s,j)=>`S${j+1}: ${s.weight||'—'} × ${s.reps||'—'}`).join(' • ') || 'No previous entry';
 return `<section class="card exercise"><div class="exercise-head"><div><div class="exercise-name">${escapeHtml(e.name)}</div><div class="chips"><span class="chip ${e.role==='Money Set'?'money':''} ${e.role==='Performance Lift'?'performance':''}">${e.role}</span><span class="chip">${e.sets} × ${e.reps}</span><span class="chip">Rest ${fmtRest(e.rest)}</span></div></div><button class="mini-btn" onclick="showExerciseInfo('${day.id}',${i})">Notes</button></div><div class="exercise-body"><div class="previous">Previous: ${escapeHtml(prevText)}</div>${ew.sets.map((s,si)=>`<div class="set-grid"><div class="set-label">SET ${si+1}</div><input inputmode="decimal" placeholder="lb" value="${escapeHtml(s.weight)}" oninput="setField('${day.id}','${escJs(e.name)}',${si},'weight',this.value)"><input inputmode="numeric" placeholder="reps" value="${escapeHtml(s.reps)}" oninput="setField('${day.id}','${escJs(e.name)}',${si},'reps',this.value)"><button class="check ${s.done?'done':''}" onclick="toggleSet('${day.id}','${escJs(e.name)}',${si},${e.rest},this)">${s.done?'✓':'○'}</button></div>`).join('')}<textarea class="note" placeholder="Exercise notes" oninput="setExerciseNotes('${day.id}','${escJs(e.name)}',this.value)">${escapeHtml(ew.notes||'')}</textarea><div class="rest-row"><span class="muted">Target: ${e.reps} • ${fmtRest(e.rest)} rest</span><button class="mini-btn" onclick="startTimer(${e.rest},this)">Start rest</button></div></div></section>`; }
function escJs(s){return s.replace(/'/g,"\\'")}
function fmtRest(sec){ if(sec>=60){const m=Math.floor(sec/60),s=sec%60; return s?`${m}:${String(s).padStart(2,'0')}`:`${m} min`}return `${sec}s`; }
function getTodayWorkout(dayId){const day=PROGRAM.days.find(d=>d.id===dayId);const k=keyFor(day);state.workouts[k] ||= {dayId,date:new Date().toISOString().slice(0,10),exercises:{}};return [day,k,state.workouts[k]]}
window.setField=(dayId,name,si,field,val)=>{const [d,k,w]=getTodayWorkout(dayId);w.exercises[name] ||= {sets:Array.from({length:d.exercises.find(x=>x.name===name).sets},()=>({weight:'',reps:'',done:false})),notes:''};w.exercises[name].sets[si][field]=val;save();};
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
function renderProgram(){main.innerHTML=`<section class="hero"><div class="eyebrow">PHASE 1 • WEEKS 1–4</div><h2>Program</h2><p class="muted">Five training days. Thursday and Sunday are recovery days.</p><label class="field">Current week<select onchange="state.settings.week=Number(this.value);save();render('program')">${[1,2,3,4].map(n=>`<option ${state.settings.week===n?'selected':''}>${n}</option>`).join('')}</select></label></section><div class="day-list">${PROGRAM.days.map(d=>`<button class="day-button" onclick="openDay('${d.id}')"><div><strong>${d.short} • ${d.name}</strong><small>${d.focus} • ${d.exercises.length} exercises</small></div><span>›</span></button>`).join('')}</div>`}
window.openDay=id=>{selectedDay=PROGRAM.days.find(d=>d.id===id);render('today')};
function renderHistory(){const arr=Object.entries(state.workouts).filter(([k,w])=>w.completedAt).sort((a,b)=>new Date(b[1].completedAt)-new Date(a[1].completedAt));main.innerHTML=`<section class="hero"><div class="eyebrow">LOGBOOK</div><h2>Workout History</h2><p class="muted">Your completed sessions live on this device unless you export them.</p><div class="footer-actions"><button class="ghost" onclick="exportData()">Export backup</button><button class="ghost" onclick="importData()">Import backup</button></div></section>${arr.length?arr.map(([k,w])=>historyCard(k,w)).join(''):`<div class="empty">No completed workouts yet.</div>`}`}
function historyCard(k,w){const d=PROGRAM.days.find(x=>x.id===w.dayId);const setCount=Object.values(w.exercises||{}).flatMap(e=>e.sets||[]).filter(s=>s.done).length;return `<section class="card"><div class="eyebrow">${new Date(w.completedAt).toLocaleDateString()}</div><h3>${d?.name||w.dayId}</h3><div class="muted">${setCount} completed sets</div><button class="mini-btn" style="margin-top:10px" onclick="showHistory('${k}')">View details</button></section>`}
window.showHistory=k=>{const w=state.workouts[k];let html=`<p>${escapeHtml(w.notes||'No session notes.')}</p>`;for(const [name,e] of Object.entries(w.exercises||{})){html+=`<h4>${escapeHtml(name)}</h4><p>${e.sets.filter(s=>s.weight||s.reps).map((s,i)=>`S${i+1}: ${escapeHtml(s.weight||'—')} × ${escapeHtml(s.reps||'—')}${s.done?' ✓':''}`).join('<br>')||'No sets logged'}</p>`}showInfo('Workout details',html)};
function renderProgress(){const c=state.checkins.at(-1)||{};main.innerHTML=`<section class="hero"><div class="eyebrow">2-MINUTE SUNDAY RITUAL</div><h2>Weekly Check-In</h2><p class="muted">Use trends, not one weird weigh-in, to decide whether anything changes.</p></section><section class="card"><div class="two-col"><label class="field">Average bodyweight (lb)<input id="ciWeight" inputmode="decimal" value="${c.weight||''}"></label><label class="field">Waist (in)<input id="ciWaist" inputmode="decimal" value="${c.waist||''}"></label><label class="field">Blood pressure<input id="ciBp" placeholder="120/80" value="${c.bp||''}"></label><label class="field">Resting HR<input id="ciHr" inputmode="numeric" value="${c.hr||''}"></label></div><h3>Recovery score</h3>${['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].map(x=>`<div class="score-grid"><span>${x}</span><input id="ci${x.replace(' ','')}" type="number" min="1" max="5" value="${c[x]||''}"></div>`).join('')}<label class="field">Notes<textarea id="ciNotes">${escapeHtml(c.notes||'')}</textarea></label><button class="btn" onclick="saveCheckin()">Save Check-In</button></section><section class="card"><h3>AMP decision rules</h3><div class="guide-item"><p><b>Weight + strength increasing:</b> keep the plan the same.</p></div><div class="guide-item"><p><b>Weight flat + strength flat:</b> review intake/recovery before changing training.</p></div><div class="guide-item"><p><b>Recovery score below 20/30:</b> reduce accessory volume and prioritize recovery.</p></div><div class="guide-item"><p><b>One bad workout:</b> noise. Several consistent weeks: trend.</p></div></section>${renderCheckinHistory()}`}
window.saveCheckin=()=>{const obj={date:new Date().toISOString(),weight:$('#ciWeight').value,waist:$('#ciWaist').value,bp:$('#ciBp').value,hr:$('#ciHr').value,notes:$('#ciNotes').value};['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].forEach(x=>obj[x]=Number($('#ci'+x.replace(' ','')).value||0));obj.total=['Sleep','Energy','Pumps','Appetite','Motivation','Joint Comfort'].reduce((n,x)=>n+(obj[x]||0),0);state.checkins.push(obj);save();render('progress')};
function renderCheckinHistory(){if(!state.checkins.length)return '';return `<section class="card"><h3>Check-In History</h3><table class="table"><thead><tr><th>Date</th><th>Wt</th><th>Waist</th><th>Recovery</th></tr></thead><tbody>${[...state.checkins].reverse().map(c=>`<tr><td>${new Date(c.date).toLocaleDateString()}</td><td>${c.weight||'—'}</td><td>${c.waist||'—'}</td><td>${c.total||'—'}/30</td></tr>`).join('')}</tbody></table></section>`}
function renderGuide(){main.innerHTML=`<section class="hero"><div class="eyebrow">AMP REFERENCE</div><h2>Technique & Intensity Guide</h2><p class="muted">Phase 1 is deliberately restrained. You are building a logbook, not auditioning for a montage.</p></section><section class="card">${guideRules()}</section><section class="card"><h3>Intensity techniques</h3>${guideItem('Money Set','One designated exercise per workout receives the advanced intensity technique. In Phase 1, use a single drop set on the final working set of that exercise.')}${guideItem('Drop Set','After the prescribed set reaches technical failure or the planned endpoint, reduce load about 20–30% and immediately continue with controlled reps. One drop only in Phase 1.')}${guideItem('Rest-Pause','Extend a safe set with a short 15–20 second pause, then perform more controlled reps. This is a reference technique, not a default Phase 1 prescription.')}${guideItem('Long-Length Partials','After full-range reps are exhausted on an appropriate exercise, perform controlled partial reps in the stretched half of the range. Reference only for Phase 1 unless specifically prescribed.')}${guideItem('Failure','Primarily reserved for stable machine/cable/isolation work. Heavy compounds stop before technical failure.')}${guideItem('Widowmaker','Not a Phase 1 technique. In later AMP phases, a Widowmaker is a single extended high-effort set on a stable machine/cable exercise: reps to technical failure, rest 10–20 seconds without leaving the station, more reps to failure, and repeat once more only if prescribed. Only one Widowmaker per workout.')}</section><section class="card"><h3>Exercise roles</h3>${['Primer|Prepare joints and target tissue without creating fatigue.','Performance Lift|Primary measurable strength marker for the session.','Builder|Heavy hypertrophy work using stable, repeatable execution.','Stretch Builder|Emphasizes tension in the lengthened position.','Pump Builder|Stable volume that drives local fatigue without unnecessary systemic cost.','Money Set|The session’s designated intensity-technique exercise.','Exit Pump|High-rep finisher. Leave the muscle full, not your soul departing your body.'].map(x=>{let[a,b]=x.split('|');return guideItem(a,b)}).join('')}</section>`}
function guideRules(){return `<h3>Phase 1 rules</h3>${PROGRAM.principles.map(p=>`<div class="guide-item"><p>${escapeHtml(p)}</p></div>`).join('')}`}
function guideItem(h,p){return `<div class="guide-item"><h4>${h}</h4><p>${p}</p></div>`}
window.showExerciseInfo=(dayId,index)=>{const d=PROGRAM.days.find(x=>x.id===dayId),e=d.exercises[index];let text=`<p><b>Role:</b> ${e.role}<br><b>Prescription:</b> ${e.sets} × ${e.reps}<br><b>Rest:</b> ${fmtRest(e.rest)}</p>`;if(e.note)text+=`<p>${escapeHtml(e.note)}</p>`;if(e.role==='Money Set')text+=`<p><b>Phase 1 Money Set:</b> final working set receives one drop set. Reduce load 20–30% and continue with controlled reps.</p>`;showInfo(e.name,text)};
window.showInfo=(title,body)=>{$('#dialogTitle').textContent=title;$('#dialogBody').innerHTML=body;$('#infoDialog').showModal()};
window.exportData=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`AMP-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};
window.importData=()=>{const i=document.createElement('input');i.type='file';i.accept='.json,application/json';i.onchange=()=>{const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);state.workouts||={};state.checkins||=[];state.settings||={week:1};save();render('history')}catch(e){alert('That file is not a valid AMP backup.')}};r.readAsText(i.files[0])};i.click()};

document.querySelectorAll('.nav-btn').forEach(b=>b.addEventListener('click',()=>{selectedDay=null;render(b.dataset.view)}));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('#installBtn').classList.remove('hidden')});
$('#installBtn').addEventListener('click',async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').classList.add('hidden')}});
ensureRestBanner();
if(getRestTimer()) runRestTicker();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
render('today');
