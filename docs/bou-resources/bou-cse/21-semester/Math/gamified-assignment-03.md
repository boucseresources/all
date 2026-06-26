<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BOU MAT2131 Gamified Progress Tracker</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root { color-scheme: dark; }
    html { scroll-behavior: smooth; }
    body {
      background:
        radial-gradient(circle at 20% 10%, rgba(34, 197, 94, .18), transparent 32rem),
        radial-gradient(circle at 80% 0%, rgba(59, 130, 246, .18), transparent 30rem),
        linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%);
    }
    .glass { background: rgba(15, 23, 42, .72); backdrop-filter: blur(16px); border: 1px solid rgba(148, 163, 184, .18); }
    .soft-glass { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); }
    .quest-card { transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease, opacity .18s ease; }
    .quest-card:hover { transform: translateY(-2px); box-shadow: 0 18px 35px rgba(0,0,0,.28); }
    .quest-card.done { opacity: .82; }
    .quest-card.done .quest-text { text-decoration: line-through; color: #94a3b8; }
    .shine { position: relative; overflow: hidden; }
    .shine::after {
      content: ""; position: absolute; inset: -40% -80%; transform: rotate(20deg) translateX(-120%);
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent);
      animation: shine 5s ease-in-out infinite;
    }
    @keyframes shine { 0%, 72% { transform: rotate(20deg) translateX(-120%); } 100% { transform: rotate(20deg) translateX(120%); } }
    .pop { animation: pop .38s ease-out; }
    @keyframes pop { 0% { transform: scale(.92); opacity: .4; } 70% { transform: scale(1.04); opacity: 1; } 100% { transform: scale(1); } }
    .float-up { animation: floatUp .9s ease-out forwards; }
    @keyframes floatUp { 0% { opacity: 0; transform: translateY(10px) scale(.95); } 20% { opacity: 1; } 100% { opacity: 0; transform: translateY(-32px) scale(1.05); } }
    .confetti-piece { position: fixed; top: -10px; width: 9px; height: 14px; border-radius: 2px; z-index: 9999; animation: fall 1.2s linear forwards; }
    @keyframes fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }
    .boss-fill { background: linear-gradient(90deg, #22c55e, #84cc16, #eab308); }
    .xp-fill { background: linear-gradient(90deg, #38bdf8, #22c55e, #facc15); }
    .coin-spin { animation: coinSpin 2.4s linear infinite; transform-style: preserve-3d; }
    @keyframes coinSpin { to { transform: rotateY(360deg); } }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: #111827 !important; }
      .glass, .soft-glass, .quest-card { background: white !important; color: #111827 !important; border-color: #e5e7eb !important; box-shadow: none !important; }
      .text-slate-300, .text-slate-400, .text-slate-500 { color: #334155 !important; }
    }
  </style>
</head>
<body class="min-h-screen text-slate-100">
  <div id="toast" class="pointer-events-none fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-2xl"></div>

  <div class="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
    <header class="glass shine rounded-[2rem] p-5 shadow-2xl sm:p-7">
      <div class="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-center">
        <div class="relative z-10">
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black uppercase tracking-[.24em] text-emerald-300 ring-1 ring-emerald-300/20">BOU Assignment-03</span>
            <span class="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-black uppercase tracking-[.24em] text-sky-300 ring-1 ring-sky-300/20">MAT2131</span>
          </div>
          <h1 class="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Coordinate Geometry Quest</h1>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">Every math is a quest. Finish problems, earn XP, defeat chapter bosses, unlock badges, and complete the assignment like a game.</p>

          <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div class="soft-glass rounded-2xl p-4">
              <p class="text-xs font-bold text-slate-400">Hero Level</p>
              <p class="mt-1 text-3xl font-black" id="levelText">Lv. 1</p>
              <p class="text-xs text-emerald-300" id="rankText">Rookie Solver</p>
            </div>
            <div class="soft-glass rounded-2xl p-4">
              <p class="text-xs font-bold text-slate-400">XP</p>
              <p class="mt-1 text-3xl font-black"><span id="xpText">0</span></p>
              <p class="text-xs text-slate-400"><span id="xpNextText">100</span> XP to next level</p>
            </div>
            <div class="soft-glass rounded-2xl p-4">
              <p class="text-xs font-bold text-slate-400">Math Coins</p>
              <p class="mt-1 flex items-center gap-2 text-3xl font-black"><span class="coin-spin inline-block">🟡</span><span id="coinText">0</span></p>
              <p class="text-xs text-slate-400">earned from quests</p>
            </div>
            <div class="soft-glass rounded-2xl p-4">
              <p class="text-xs font-bold text-slate-400">Study Streak</p>
              <p class="mt-1 text-3xl font-black">🔥 <span id="streakText">0</span></p>
              <p class="text-xs text-slate-400">completion days</p>
            </div>
          </div>
        </div>

        <div class="relative z-10 rounded-[1.7rem] bg-black/25 p-5 ring-1 ring-white/10">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-sm font-black text-slate-300">Assignment Completion</p>
              <p class="text-5xl font-black text-white" id="percentText">0%</p>
            </div>
            <div class="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-400/25 to-sky-400/25 text-5xl ring-1 ring-white/10" id="moodIcon">🧭</div>
          </div>
          <div class="mt-4 h-4 overflow-hidden rounded-full bg-slate-800 ring-1 ring-white/10">
            <div class="xp-fill h-full rounded-full transition-all duration-500" id="overallBar" style="width:0%"></div>
          </div>
          <div class="mt-3 flex justify-between text-xs font-bold text-slate-400">
            <span><span id="doneText">0</span> quests done</span>
            <span><span id="remainingText">0</span> left</span>
          </div>
          <div class="mt-5 rounded-2xl bg-amber-400/10 p-4 ring-1 ring-amber-300/20">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-sm font-black text-amber-200">Daily Quest</p>
                <p class="text-xs text-amber-100/80">Finish 3 problems today to keep momentum.</p>
              </div>
              <div class="rounded-full bg-amber-300/20 px-3 py-1 text-sm font-black text-amber-100" id="dailyQuestText">0/3</div>
            </div>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div class="h-full rounded-full bg-amber-300 transition-all" id="dailyQuestBar" style="width:0%"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="no-print sticky top-0 z-30 -mx-4 mt-4 border-y border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-3 xl:grid-cols-[1fr_auto] xl:items-center">
        <div class="grid gap-3 md:grid-cols-[1fr_180px_220px_190px]">
          <label class="relative block">
            <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
            <input id="searchInput" type="search" placeholder="Search quest, equation, topic..." class="w-full rounded-2xl border border-white/10 bg-white/10 py-3 pl-9 pr-4 text-sm text-white outline-none ring-emerald-400 placeholder:text-slate-500 focus:ring-2" />
          </label>
          <select id="filterSelect" class="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-emerald-400 focus:ring-2">
            <option value="all">All quests</option>
            <option value="pending">Unfinished</option>
            <option value="done">Completed</option>
            <option value="revision">Need revision</option>
          </select>
          <select id="sectionSelect" class="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-emerald-400 focus:ring-2">
            <option value="all">All boss chapters</option>
          </select>
          <select id="sortSelect" class="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-emerald-400 focus:ring-2">
            <option value="default">Sort: Assignment order</option>
            <option value="xp">Sort: Highest XP</option>
            <option value="pending">Sort: Pending first</option>
          </select>
        </div>
        <div class="flex flex-wrap gap-2">
          <button id="focusBtn" class="rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-black text-white shadow hover:bg-indigo-400">Start Focus</button>
          <button id="exportBtn" class="rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-black text-slate-950 shadow hover:bg-emerald-400">Export</button>
          <label class="cursor-pointer rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/10 hover:bg-white/15">
            Import
            <input id="importInput" type="file" accept="application/json" class="hidden" />
          </label>
          <button id="resetBtn" class="rounded-2xl bg-red-500/15 px-4 py-3 text-sm font-black text-red-200 ring-1 ring-red-300/20 hover:bg-red-500/25">Reset</button>
        </div>
      </div>
    </section>

    <main class="mt-6 grid gap-6 lg:grid-cols-[330px_1fr]">
      <aside class="no-print h-max space-y-5 lg:sticky lg:top-28">
        <section class="glass rounded-[2rem] p-5 shadow-xl">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-xl font-black">Boss Chapters</h2>
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300">4 bosses</span>
          </div>
          <div id="bossList" class="mt-4 space-y-3"></div>
        </section>

        <section class="glass rounded-[2rem] p-5 shadow-xl">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-xl font-black">Badges</h2>
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300" id="badgeCountText">0/0</span>
          </div>
          <div id="badgeGrid" class="mt-4 grid grid-cols-2 gap-3"></div>
        </section>

        <section class="glass rounded-[2rem] p-5 shadow-xl">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-xl font-black">Focus Timer</h2>
            <span class="rounded-full bg-indigo-400/15 px-3 py-1 text-xs font-black text-indigo-200">Pomodoro</span>
          </div>
          <div class="mt-4 rounded-3xl bg-black/25 p-5 text-center ring-1 ring-white/10">
            <div class="text-5xl font-black tabular-nums" id="timerText">25:00</div>
            <p class="mt-2 text-xs text-slate-400">Use this for one hard math.</p>
            <div class="mt-4 flex justify-center gap-2">
              <button id="timerStartBtn" class="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-black text-white hover:bg-indigo-400">Start</button>
              <button id="timerResetBtn" class="rounded-xl bg-white/10 px-4 py-2 text-sm font-black text-white hover:bg-white/15">Reset</button>
            </div>
          </div>
        </section>
      </aside>

      <section>
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-2xl font-black">Quest Board</h2>
            <p class="text-sm text-slate-400">Click a quest when solved. Hard ones can be marked for revision.</p>
          </div>
          <div class="no-print flex flex-wrap gap-2">
            <button id="randomQuestBtn" class="rounded-xl bg-fuchsia-500/20 px-4 py-2 text-sm font-black text-fuchsia-100 ring-1 ring-fuchsia-300/25 hover:bg-fuchsia-500/30">Pick random quest</button>
            <button id="markVisibleDoneBtn" class="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-black text-slate-950 hover:bg-emerald-400">Finish visible</button>
            <button id="markVisiblePendingBtn" class="rounded-xl bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/10 hover:bg-white/15">Undo visible</button>
          </div>
        </div>
        <div id="taskList" class="space-y-6"></div>
        <div id="emptyState" class="hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
          <div class="text-5xl">🔎</div>
          <h3 class="mt-3 text-xl font-black">No quest found</h3>
          <p class="mt-2 text-slate-400">Try another search or filter.</p>
        </div>
      </section>
    </main>
  </div>

  <template id="taskTemplate">
    <article class="quest-card rounded-[1.7rem] border border-white/10 bg-white/[.065] p-4 shadow-lg sm:p-5" data-card>
      <div class="flex gap-4">
        <button class="complete-btn mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-800 text-xl ring-1 ring-white/10 transition hover:scale-105" type="button" title="Complete quest">⚔️</button>
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="task-ref rounded-full bg-sky-400/15 px-2.5 py-1 text-xs font-black text-sky-200 ring-1 ring-sky-300/20"></span>
              <span class="task-topic rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-black text-emerald-200 ring-1 ring-emerald-300/20"></span>
              <span class="task-difficulty rounded-full px-2.5 py-1 text-xs font-black ring-1"></span>
            </div>
            <div class="flex items-center gap-2">
              <span class="task-xp rounded-full bg-amber-300/15 px-3 py-1 text-xs font-black text-amber-100 ring-1 ring-amber-300/25"></span>
              <span class="task-time hidden rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300 ring-1 ring-white/10"></span>
            </div>
          </div>

          <div class="quest-text mt-3 text-[15px] leading-7 text-slate-100"></div>

          <div class="mt-4 flex flex-wrap items-center gap-2 no-print">
            <button class="revise-btn rounded-xl bg-white/10 px-3 py-2 text-xs font-black text-slate-200 ring-1 ring-white/10 hover:bg-white/15" type="button">☆ Need revision</button>
            <button class="note-toggle rounded-xl bg-white/10 px-3 py-2 text-xs font-black text-slate-200 ring-1 ring-white/10 hover:bg-white/15" type="button">📝 Notes</button>
            <span class="xp-pop pointer-events-none absolute hidden rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950 shadow-xl">+XP</span>
          </div>

          <div class="note-box mt-3 hidden no-print">
            <textarea class="task-note min-h-24 w-full rounded-2xl border border-white/10 bg-black/25 p-3 text-sm text-white outline-none ring-emerald-400 placeholder:text-slate-500 focus:ring-2" placeholder="Write a hint, formula, mistake, or revision reminder..."></textarea>
          </div>
        </div>
      </div>
    </article>
  </template>

  <script>
const sections = [
      { id: 'q1', title: '1. Coordinate basics + transformation' },
      { id: 'q2', title: '2. Pair of straight lines' },
      { id: 'q3', title: '3. Conics + sphere' },
      { id: 'q4', title: '4. Plane + shortest distance' }
    ];

    const tasks = [
      { id: 'q1-i', section: 'q1', ref: '1(i)', topic: 'Coordinates', text: 'Find the relation between Cartesian coordinates and Polar coordinates.' },
      { id: 'q1-ii', section: 'q1', ref: '1(ii)', topic: 'Area', text: 'Find the area of pentagon whose vertices are (-5, -2), (-2, 5), (2, 7), (5, 1), (2, -4).' },
      { id: 'q1-iii', section: 'q1', ref: '1(iii)', topic: 'Collinearity', text: 'For what value of k are the points (2, 3), (-4, -6) and (k, 12) collinear?' },
      { id: 'q1-iv', section: 'q1', ref: '1(iv)', topic: 'Lines', text: 'Find the equation of two lines passing through (-5, 6), one parallel and one perpendicular to 7x - 8y = 9.' },
      { id: 'q1-v', section: 'q1', ref: '1(v)', topic: 'Angle bisector', text: 'Determine the equation of the bisector of the angle between the lines 3x - 4y + 12 = 0 and 12x + 5y - 3 = 0.' },
      { id: 'q1-vi', section: 'q1', ref: '1(vi)', topic: 'Triangle area', text: 'Find the area of the triangle formed by the lines 2x + y - 3 = 0, 3x + 2y - 1 = 0 and 2x + 3y + 4 = 0.' },
      { id: 'q1-vii', section: 'q1', ref: '1(vii)', topic: 'Triangle area', text: 'Show that the area of the triangle formed by the straight lines y - 2x = 0, y - 3x = 0 and y = 5x + 4 is 4/3.' },
      { id: 'q1-viii', section: 'q1', ref: '1(viii)', topic: 'Transformation', text: 'Discuss about change of origin (Transformation of axes).' },
      { id: 'q1-ix', section: 'q1', ref: '1(ix)', topic: 'Transformation', text: 'Remove the first degree terms from the equation 3x² + 4y² - 12x + 4y + 13 = 0.' },
      { id: 'q1-x', section: 'q1', ref: '1(x)', topic: 'Parallel axes', text: 'By transforming to parallel axes through a properly chosen point (h, k), prove that 12x² - 10xy + 2y² + 11x - 5y + 2 = 0 can be reduced to one containing only the terms of the second degree.' },
      { id: 'q1-xi', section: 'q1', ref: '1(xi)', topic: 'Parallel axes', text: 'By transforming to parallel axes through a properly chosen point (h, k), prove that 2x² + y² - xy - 5x - 4y + 11 = 0 can be reduced to one containing only the terms of the second degree.' },

      { id: 'q2-i', section: 'q2', ref: '2(i)', topic: 'Homogeneous equation', text: 'Prove that a homogeneous equation of second degree ax² + 2hxy + by² = 0 always represents a pair of straight lines, real or imaginary, through the origin.' },
      { id: 'q2-ii', section: 'q2', ref: '2(ii)', topic: 'Angle bisectors', text: 'Show that the necessary condition of bisectors of the angles between the lines represented by ax² + 2hxy + by² = 0 is (x² - y²)/(a - b) = xy/h.' },
      { id: 'q2-iii', section: 'q2', ref: '2(iii)', topic: 'Pair of lines', text: 'Find the condition that the general equation of the second degree ax² + 2hxy + by² + 2gx + 2fy + c = 0 may represent a pair of straight lines.' },
      { id: 'q2-iv', section: 'q2', ref: '2(iv)', topic: 'Pair of lines', text: 'Prove that x² + 6xy + 9y² + 4x + 12y - 5 = 0 represents a pair of straight lines.' },
      { id: 'q2-v', section: 'q2', ref: '2(v)', topic: 'Angle', text: 'Find the angle between the lines represented by ax² + 2hxy + by² = 0.' },
      { id: 'q2-vi', section: 'q2', ref: '2(vi)', topic: 'Angle bisectors', text: 'If the pair of straight lines x² - 2axy - y² = 0 and x² - 2bxy - y² = 0 be such that each pair bisects the angle between the other pair, prove that ab = -1.' },
      { id: 'q2-vii', section: 'q2', ref: '2(vii)', topic: 'Fourth degree lines', text: 'Prove that the two lines represented by ax⁴ + bx³y + cx²y² + dxy³ + ay⁴ = 0 will bisect angles between the other two, if c + 6a = 0 and b + d = 0.' },
      { id: 'q2-viii', section: 'q2', ref: '2(viii)', topic: 'Equidistant lines', text: 'Prove that the straight lines represented by ax² + 2hxy + by² + 2gx + 2fy + c = 0 will be equidistant from the origin, if f⁴ - g⁴ = c(bf² - ag²).' },
      { id: 'q2-ix', section: 'q2', ref: '2(ix)', topic: 'Perpendicular lines', text: 'The axes being rectangular, find the equation to the pair of straight lines meeting at the origin which are perpendicular to the pair given by ax² + 2hxy + by² = 0.' },

      { id: 'q3-i', section: 'q3', ref: '3(i)', topic: 'Right angle', text: 'Show that the lines joining the origin to the points of intersection of 7x² + 8xy - 7y² + 6x - 12y = 0 and 2x + y - 1 = 0 are at right angles.' },
      { id: 'q3-ii-a', section: 'q3', ref: '3(ii-a)', topic: 'Pair of lines', text: 'For what value of k may kx² + 4xy + y² - 4x - 2y - 3 = 0 represent a pair of straight lines?' },
      { id: 'q3-ii-b', section: 'q3', ref: '3(ii-b)', topic: 'Pair of lines', text: 'For what value of k may 6x² - 7xy + 16x - 3y² - 2y + k = 0 represent a pair of straight lines?' },
      { id: 'q3-iii', section: 'q3', ref: '3(iii)', topic: 'Conic standard form', text: 'Reduce 8x² + 4xy + 5y² - 24x - 24y = 0 to its standard form and identify the conic.' },
      { id: 'q3-iv-a', section: 'q3', ref: '3(iv-a)', topic: 'Conic nature', text: 'Test the nature of the conic 3x² - 8xy - 3y² + 10x - 13y + 8 = 0.' },
      { id: 'q3-iv-b', section: 'q3', ref: '3(iv-b)', topic: 'Conic nature', text: 'Test the nature of the conic x² + 2xy + y² + 2x - 1 = 0.' },
      { id: 'q3-iv-c', section: 'q3', ref: '3(iv-c)', topic: 'Conic nature', text: 'Test the nature of the conic 9x² - 24xy - 16y² - 18x - 101y + 19 = 0.' },
      { id: 'q3-iv-d', section: 'q3', ref: '3(iv-d)', topic: 'Conic nature', text: 'Test the nature of the conic 4x² + 9y² - 8x + 36y - 31 = 0.' },
      { id: 'q3-v', section: 'q3', ref: '3(v)', topic: 'Sphere', text: 'Find the equation of sphere through the points (0,0,0), (0,1,-1), (-1,2,0) and (1,2,3).' },
      { id: 'q3-vi', section: 'q3', ref: '3(vi)', topic: 'Sphere', text: 'Find the equation of sphere through the points (0,0,0), (1,-1,0), (2,0,2) and (0,1,2).' },

      { id: 'q4-i', section: 'q4', ref: '4(i)', topic: 'Plane theory', text: 'Discuss about the plane and standard forms of the equation of a plane: Intercept form and Normal form.' },
      { id: 'q4-ii', section: 'q4', ref: '4(ii)', topic: 'Plane intercept', text: 'A plane meets the coordinate axes in A, B, C such that the centroid of triangle ABC is the point (a,b,c). Show that the equation of the plane is x/a + y/b + z/c = 3.' },
      { id: 'q4-iii', section: 'q4', ref: '4(iii)', topic: 'Parallel plane', text: 'Find the equation of the plane which is parallel to 4x - 4y + 7z - 3 = 0 and distance 4 units from the point (3, 1, -2).' },
      { id: 'q4-iv', section: 'q4', ref: '4(iv)', topic: 'Parallel plane', text: 'Find the equation of the plane which is parallel to 2x - 3y - 6z - 14 = 0 and distance 5 units from the origin.' },
      { id: 'q4-v', section: 'q4', ref: '4(v)', topic: 'Plane equation', text: 'Find the equation of the plane through the points (1, -2, 2) and (-3, 1, 2) and perpendicular to plane 2x + y - z + 6 = 0.' },
      { id: 'q4-vi', section: 'q4', ref: '4(vi)', topic: 'Plane equation', text: 'Find the equation of the plane through the points (2,2,1) and (9,3,6) and perpendicular to plane 2x + 6y + 6z = 9.' },
      { id: 'q4-vii', section: 'q4', ref: '4(vii)', topic: 'Distance from plane', text: 'Find the distance of the points (2,0,1) and (3,-3,2) from the plane x - 2y + z = 0 and find whether the two points lie on the same side or opposite sides of the plane.' },
      { id: 'q4-viii', section: 'q4', ref: '4(viii)', topic: 'Shortest distance', text: 'Find the length of the shortest distance between the lines (x - 1)/2 = (y - 2)/3 = (z - 3)/4 and (x - 2)/3 = (y - 3)/4 = (z - 4)/5. State whether the lines are coplanar or not.' },
      { id: 'q4-ix', section: 'q4', ref: '4(ix)', topic: 'Shortest distance', text: 'Find the length of the shortest distance between the lines (x - 1)/4 = (y - 2)/3 = (z - 1)/-5 and (x + 1)/2 = (y - 3)/3 = (z - 4)/-4.' },
      { id: 'q4-x', section: 'q4', ref: '4(x)', topic: 'Shortest distance', text: 'Find the length and equation of shortest distance (SD) between the lines (x - 3)/3 = (y - 8)/-1 = (z - 3)/1 and (x + 3)/-3 = (y + 7)/2 = (z - 6)/4.' },
      { id: 'q4-xi', section: 'q4', ref: '4(xi)', topic: 'Shortest distance', text: 'Find the shortest distance between the lines through the points P(6, 2, 2) and Q(-4, 0, -1) in the directions (1, -2, 2) and (3, -2, -2) respectively.' }
    ];

    const LEGACY_KEY = 'bou-mat2131-assignment-03-progress-v1';
    const GAME_KEY = 'bou-mat2131-assignment-03-game-v1';
    const DAILY_TARGET = 3;
    const LEVEL_SIZE = 100;

    const bossEmoji = { q1: '🧭', q2: '⚔️', q3: '🌀', q4: '🛸' };
    const bossNames = { q1: 'Coordinate Goblin', q2: 'Line Pair Dragon', q3: 'Conic Cyclops', q4: 'Plane Phantom' };

    const difficultyRules = [
      { test: t => /prove|show|discuss/i.test(t.text), name: 'Theory', xp: 12, cls: 'bg-violet-400/15 text-violet-100 ring-violet-300/25' },
      { test: t => /shortest distance|standard form|condition|sphere|conic/i.test(t.text + ' ' + t.topic), name: 'Hard', xp: 18, cls: 'bg-red-400/15 text-red-100 ring-red-300/25' },
      { test: t => /area|angle|plane|parallel|bisector/i.test(t.text + ' ' + t.topic), name: 'Medium', xp: 14, cls: 'bg-amber-400/15 text-amber-100 ring-amber-300/25' },
      { test: () => true, name: 'Quick', xp: 10, cls: 'bg-emerald-400/15 text-emerald-100 ring-emerald-300/25' }
    ];

    tasks.forEach((task, index) => {
      const rule = difficultyRules.find(r => r.test(task));
      task.order = index;
      task.difficulty = rule.name;
      task.xp = rule.xp;
      task.difficultyClass = rule.cls;
    });

    const achievements = [
      { id: 'first', icon: '🎯', title: 'First Hit', desc: 'Complete 1 quest', unlocked: s => s.done >= 1 },
      { id: 'five', icon: '🧩', title: 'Warm Up', desc: 'Complete 5 quests', unlocked: s => s.done >= 5 },
      { id: 'ten', icon: '🚀', title: 'Momentum', desc: 'Complete 10 quests', unlocked: s => s.done >= 10 },
      { id: 'quarter', icon: '🌙', title: '25% Clear', desc: 'Reach 25%', unlocked: s => s.percent >= 25 },
      { id: 'half', icon: '🔥', title: 'Half Warrior', desc: 'Reach 50%', unlocked: s => s.percent >= 50 },
      { id: 'daily', icon: '☀️', title: 'Daily Hero', desc: '3 quests today', unlocked: s => s.todayDone >= DAILY_TARGET },
      { id: 'notes', icon: '📘', title: 'Revision Mind', desc: 'Add 5 notes', unlocked: s => s.notes >= 5 },
      { id: 'boss1', icon: '🏆', title: 'Boss Slayer I', desc: 'Clear one chapter', unlocked: s => s.clearedSections >= 1 },
      { id: 'boss4', icon: '👑', title: 'Final Slayer', desc: 'Clear all chapters', unlocked: s => s.clearedSections === sections.length },
      { id: 'perfect', icon: '💎', title: 'Assignment Legend', desc: 'Complete 100%', unlocked: s => s.percent === 100 }
    ];

    let state = loadState();
    let timer = { seconds: 25 * 60, running: false, interval: null };

    const els = {
      search: document.getElementById('searchInput'),
      filter: document.getElementById('filterSelect'),
      section: document.getElementById('sectionSelect'),
      sort: document.getElementById('sortSelect'),
      taskList: document.getElementById('taskList'),
      emptyState: document.getElementById('emptyState'),
      toast: document.getElementById('toast')
    };

    function loadState() {
      const base = { tasks: {}, focusSessions: 0 };
      try {
        const game = JSON.parse(localStorage.getItem(GAME_KEY));
        if (game && typeof game === 'object') return { ...base, ...game, tasks: game.tasks || {} };
      } catch (e) {}
      try {
        const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY));
        if (legacy && legacy.tasks) return { ...base, tasks: legacy.tasks };
      } catch (e) {}
      return base;
    }

    function saveState() {
      localStorage.setItem(GAME_KEY, JSON.stringify(state));
      localStorage.setItem(LEGACY_KEY, JSON.stringify({ tasks: state.tasks }));
    }

    function getTaskState(id) {
      if (!state.tasks[id]) state.tasks[id] = { done: false, note: '', completedAt: '', revise: false };
      if (typeof state.tasks[id].revise === 'undefined') state.tasks[id].revise = false;
      return state.tasks[id];
    }

    function todayKey(date = new Date()) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    function dayDiff(a, b) {
      const one = new Date(a + 'T00:00:00');
      const two = new Date(b + 'T00:00:00');
      return Math.round((two - one) / 86400000);
    }

    function computeStats() {
      const doneTasks = tasks.filter(t => getTaskState(t.id).done);
      const notes = tasks.filter(t => (getTaskState(t.id).note || '').trim()).length;
      const sectionStats = sections.map(section => {
        const secTasks = tasks.filter(t => t.section === section.id);
        const secDone = secTasks.filter(t => getTaskState(t.id).done).length;
        return { section, total: secTasks.length, done: secDone, percent: secTasks.length ? Math.round(secDone / secTasks.length * 100) : 0 };
      });
      const clearedSections = sectionStats.filter(s => s.done === s.total).length;
      const percent = tasks.length ? Math.round(doneTasks.length / tasks.length * 100) : 0;
      const rawDates = doneTasks.map(t => getTaskState(t.id).completedAt).filter(Boolean).map(v => todayKey(new Date(v)));
      const uniqueDates = [...new Set(rawDates)].sort();
      const today = todayKey();
      const todayDone = rawDates.filter(d => d === today).length;
      let streak = 0;
      if (uniqueDates.length) {
        let pointer = uniqueDates.includes(today) ? today : uniqueDates[uniqueDates.length - 1];
        streak = 1;
        for (let i = uniqueDates.indexOf(pointer) - 1; i >= 0; i--) {
          const previous = uniqueDates[i];
          if (dayDiff(previous, pointer) === 1) { streak++; pointer = previous; }
          else break;
        }
      }
      const achievementUnlocked = achievements.filter(a => a.unlocked({ done: doneTasks.length, percent, notes, todayDone, clearedSections })).length;
      const questXP = doneTasks.reduce((sum, t) => sum + t.xp, 0);
      const bossXP = clearedSections * 50;
      const badgeXP = achievementUnlocked * 15;
      const noteXP = notes * 2;
      const totalXP = questXP + bossXP + badgeXP + noteXP;
      const level = Math.floor(totalXP / LEVEL_SIZE) + 1;
      const xpIntoLevel = totalXP % LEVEL_SIZE;
      const xpToNext = LEVEL_SIZE - xpIntoLevel;
      const coins = doneTasks.length * 5 + achievementUnlocked * 10 + clearedSections * 25;
      return { total: tasks.length, done: doneTasks.length, remaining: tasks.length - doneTasks.length, percent, notes, sectionStats, clearedSections, achievementUnlocked, totalXP, level, xpIntoLevel, xpToNext, coins, streak, todayDone };
    }

    function rankFor(level, percent) {
      if (percent === 100) return 'Assignment Legend';
      if (level >= 8) return 'Plane Master';
      if (level >= 6) return 'Conic Slayer';
      if (level >= 4) return 'Vector Knight';
      if (level >= 2) return 'Coordinate Cadet';
      return 'Rookie Solver';
    }

    function cleanText(html) {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
    }

    function setupOptions() {
      sections.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.title;
        els.section.appendChild(opt);
      });
    }

    function visibleTasks() {
      const query = els.search.value.trim().toLowerCase();
      const filter = els.filter.value;
      const section = els.section.value;
      let current = tasks.filter(task => {
        const ts = getTaskState(task.id);
        const hay = `${task.ref} ${task.topic} ${task.difficulty} ${cleanText(task.text)}`.toLowerCase();
        const matchesSearch = !query || hay.includes(query);
        const matchesFilter = filter === 'all'
          || (filter === 'done' && ts.done)
          || (filter === 'pending' && !ts.done)
          || (filter === 'revision' && ts.revise);
        const matchesSection = section === 'all' || task.section === section;
        return matchesSearch && matchesFilter && matchesSection;
      });
      if (els.sort.value === 'xp') current.sort((a, b) => b.xp - a.xp || a.order - b.order);
      if (els.sort.value === 'pending') current.sort((a, b) => Number(getTaskState(a.id).done) - Number(getTaskState(b.id).done) || a.order - b.order);
      return current;
    }

    function render() {
      const stats = computeStats();
      renderHeader(stats);
      renderBosses(stats);
      renderBadges(stats);
      renderTasks();
    }

    function renderHeader(stats) {
      document.getElementById('levelText').textContent = `Lv. ${stats.level}`;
      document.getElementById('rankText').textContent = rankFor(stats.level, stats.percent);
      document.getElementById('xpText').textContent = stats.totalXP;
      document.getElementById('xpNextText').textContent = stats.xpToNext;
      document.getElementById('coinText').textContent = stats.coins;
      document.getElementById('streakText').textContent = stats.streak;
      document.getElementById('percentText').textContent = `${stats.percent}%`;
      document.getElementById('doneText').textContent = stats.done;
      document.getElementById('remainingText').textContent = stats.remaining;
      document.getElementById('overallBar').style.width = `${stats.percent}%`;
      const mood = stats.percent === 100 ? '👑' : stats.percent >= 75 ? '🔥' : stats.percent >= 50 ? '⚔️' : stats.percent >= 25 ? '🚀' : '🧭';
      document.getElementById('moodIcon').textContent = mood;
      document.getElementById('dailyQuestText').textContent = `${Math.min(stats.todayDone, DAILY_TARGET)}/${DAILY_TARGET}`;
      document.getElementById('dailyQuestBar').style.width = `${Math.min(stats.todayDone / DAILY_TARGET * 100, 100)}%`;
    }

    function renderBosses(stats) {
      const bossList = document.getElementById('bossList');
      bossList.innerHTML = '';
      stats.sectionStats.forEach(item => {
        const alive = item.total - item.done;
        const defeated = item.done === item.total;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `w-full rounded-3xl p-4 text-left ring-1 transition ${defeated ? 'bg-emerald-400/15 ring-emerald-300/30' : 'bg-white/5 ring-white/10 hover:bg-white/10'}`;
        button.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-black/25 text-2xl ring-1 ring-white/10">${bossEmoji[item.section.id]}</div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <p class="text-sm font-black text-white">${bossNames[item.section.id]}</p>
                <p class="text-xs font-black ${defeated ? 'text-emerald-200' : 'text-amber-200'}">${defeated ? 'DEFEATED' : alive + ' HP'}</p>
              </div>
              <p class="mt-1 text-xs text-slate-400">${item.section.title}</p>
              <div class="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800">
                <div class="boss-fill h-full rounded-full transition-all" style="width:${item.percent}%"></div>
              </div>
              <p class="mt-2 text-xs font-bold text-slate-400">${item.done}/${item.total} quests • ${item.percent}%</p>
            </div>
          </div>`;
        button.addEventListener('click', () => {
          els.section.value = item.section.id;
          render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        bossList.appendChild(button);
      });
    }

    function renderBadges(stats) {
      const grid = document.getElementById('badgeGrid');
      grid.innerHTML = '';
      const context = { done: stats.done, percent: stats.percent, notes: stats.notes, todayDone: stats.todayDone, clearedSections: stats.clearedSections };
      const unlockedCount = achievements.filter(a => a.unlocked(context)).length;
      document.getElementById('badgeCountText').textContent = `${unlockedCount}/${achievements.length}`;
      achievements.forEach(a => {
        const unlocked = a.unlocked(context);
        const card = document.createElement('div');
        card.className = `rounded-2xl p-3 text-center ring-1 ${unlocked ? 'bg-amber-300/15 ring-amber-300/25' : 'bg-white/5 ring-white/10 opacity-55'}`;
        card.innerHTML = `
          <div class="text-3xl ${unlocked ? '' : 'grayscale'}">${unlocked ? a.icon : '🔒'}</div>
          <p class="mt-2 text-xs font-black text-white">${a.title}</p>
          <p class="mt-1 text-[11px] leading-4 text-slate-400">${a.desc}</p>`;
        grid.appendChild(card);
      });
    }

    function renderTasks() {
      els.taskList.innerHTML = '';
      const current = visibleTasks();
      els.emptyState.classList.toggle('hidden', current.length !== 0);
      const grouped = sections.map(section => ({ section, tasks: current.filter(task => task.section === section.id) })).filter(group => group.tasks.length);
      grouped.forEach(group => {
        const sectionWrap = document.createElement('div');
        sectionWrap.className = 'rounded-[2rem] bg-black/20 p-3 ring-1 ring-white/10 sm:p-4';
        const done = group.tasks.filter(t => getTaskState(t.id).done).length;
        sectionWrap.innerHTML = `
          <div class="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <div class="flex items-center gap-2">
              <span class="text-2xl">${bossEmoji[group.section.id]}</span>
              <h3 class="text-lg font-black text-white">${group.section.title}</h3>
            </div>
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300 ring-1 ring-white/10">${done}/${group.tasks.length} visible cleared</span>
          </div>`;
        const list = document.createElement('div');
        list.className = 'space-y-3';
        group.tasks.forEach(task => list.appendChild(taskElement(task)));
        sectionWrap.appendChild(list);
        els.taskList.appendChild(sectionWrap);
      });
    }

    function taskElement(task) {
      const node = document.getElementById('taskTemplate').content.firstElementChild.cloneNode(true);
      const ts = getTaskState(task.id);
      const completeBtn = node.querySelector('.complete-btn');
      const reviseBtn = node.querySelector('.revise-btn');
      const noteBtn = node.querySelector('.note-toggle');
      const noteBox = node.querySelector('.note-box');
      const note = node.querySelector('.task-note');
      const time = node.querySelector('.task-time');
      node.dataset.id = task.id;
      node.classList.toggle('done', !!ts.done);
      node.classList.toggle('border-emerald-300/40', !!ts.done);
      node.querySelector('.task-ref').textContent = task.ref;
      node.querySelector('.task-topic').textContent = task.topic;
      const difficulty = node.querySelector('.task-difficulty');
      difficulty.textContent = task.difficulty;
      difficulty.className = `task-difficulty rounded-full px-2.5 py-1 text-xs font-black ring-1 ${task.difficultyClass}`;
      node.querySelector('.task-xp').textContent = `+${task.xp} XP`;
      node.querySelector('.quest-text').textContent = task.text;
      completeBtn.textContent = ts.done ? '✅' : '⚔️';
      completeBtn.className = `complete-btn mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl ring-1 ring-white/10 transition hover:scale-105 ${ts.done ? 'bg-emerald-400/20' : 'bg-slate-800'}`;
      reviseBtn.textContent = ts.revise ? '★ Revision marked' : '☆ Need revision';
      reviseBtn.className = `revise-btn rounded-xl px-3 py-2 text-xs font-black ring-1 ${ts.revise ? 'bg-amber-300/20 text-amber-100 ring-amber-300/25' : 'bg-white/10 text-slate-200 ring-white/10 hover:bg-white/15'}`;
      note.value = ts.note || '';
      if (ts.note) noteBox.classList.remove('hidden');
      if (ts.done && ts.completedAt) {
        time.textContent = `Cleared ${new Date(ts.completedAt).toLocaleDateString()}`;
        time.classList.remove('hidden');
      }

      completeBtn.addEventListener('click', () => toggleDone(task, node));
      reviseBtn.addEventListener('click', () => {
        const item = getTaskState(task.id);
        item.revise = !item.revise;
        saveState();
        render();
      });
      noteBtn.addEventListener('click', () => noteBox.classList.toggle('hidden'));
      note.addEventListener('input', () => {
        getTaskState(task.id).note = note.value;
        saveState();
        renderHeader(computeStats());
        renderBadges(computeStats());
      });
      return node;
    }

    function toggleDone(task, node) {
      const item = getTaskState(task.id);
      const wasDone = item.done;
      item.done = !item.done;
      item.completedAt = item.done ? new Date().toISOString() : '';
      saveState();
      if (!wasDone && item.done) {
        showToast(`Quest cleared! +${task.xp} XP`);
        xpPopup(node, task.xp);
        confetti();
      } else {
        showToast('Quest moved back to unfinished');
      }
      render();
    }

    function xpPopup(node, xp) {
      const pop = node.querySelector('.xp-pop');
      if (!pop) return;
      pop.textContent = `+${xp} XP`;
      pop.classList.remove('hidden');
      pop.classList.add('float-up');
      setTimeout(() => { pop.classList.add('hidden'); pop.classList.remove('float-up'); }, 950);
    }

    function showToast(message) {
      els.toast.textContent = message;
      els.toast.classList.remove('hidden');
      els.toast.classList.add('pop');
      setTimeout(() => { els.toast.classList.add('hidden'); els.toast.classList.remove('pop'); }, 1400);
    }

    function confetti() {
      const colors = ['#22c55e', '#38bdf8', '#facc15', '#f472b6', '#a78bfa'];
      for (let i = 0; i < 28; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * .2 + 's';
        piece.style.transform = `rotate(${Math.random() * 180}deg)`;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 1500);
      }
    }

    function markVisible(done) {
      visibleTasks().forEach(task => {
        const item = getTaskState(task.id);
        item.done = done;
        item.completedAt = done ? (item.completedAt || new Date().toISOString()) : '';
      });
      saveState();
      if (done) { showToast('Visible quests cleared!'); confetti(); }
      else showToast('Visible quests undone');
      render();
    }

    function pickRandomQuest() {
      const pool = visibleTasks().filter(t => !getTaskState(t.id).done);
      if (!pool.length) { showToast('No unfinished quest in this filter'); return; }
      const task = pool[Math.floor(Math.random() * pool.length)];
      els.search.value = task.ref;
      els.filter.value = 'all';
      render();
      setTimeout(() => {
        const card = document.querySelector(`[data-id="${task.id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('pop');
          setTimeout(() => card.classList.remove('pop'), 800);
        }
      }, 80);
      showToast(`Random quest picked: ${task.ref}`);
    }

    function exportBackup() {
      const backup = { title: 'BOU MAT2131 Gamified Progress Backup', exportedAt: new Date().toISOString(), state };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'bou-mat2131-gamified-progress-backup.json';
      a.click();
      URL.revokeObjectURL(url);
    }

    function importBackup(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          const imported = data.state || data;
          if (!imported.tasks) throw new Error('Invalid backup');
          state = { ...state, ...imported, tasks: imported.tasks };
          saveState();
          render();
          showToast('Progress imported');
        } catch (e) {
          alert('Could not import this file. Please select a valid JSON backup.');
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function resetAll() {
      if (!confirm('Reset all progress, notes, badges and game score?')) return;
      state = { tasks: {}, focusSessions: 0 };
      saveState();
      showToast('Progress reset');
      render();
    }

    function updateTimerDisplay() {
      const m = Math.floor(timer.seconds / 60).toString().padStart(2, '0');
      const s = (timer.seconds % 60).toString().padStart(2, '0');
      document.getElementById('timerText').textContent = `${m}:${s}`;
      document.getElementById('timerStartBtn').textContent = timer.running ? 'Pause' : 'Start';
    }

    function toggleTimer() {
      if (timer.running) {
        clearInterval(timer.interval);
        timer.running = false;
        updateTimerDisplay();
        return;
      }
      timer.running = true;
      timer.interval = setInterval(() => {
        timer.seconds--;
        if (timer.seconds <= 0) {
          clearInterval(timer.interval);
          timer.running = false;
          timer.seconds = 25 * 60;
          state.focusSessions = (state.focusSessions || 0) + 1;
          saveState();
          showToast('Focus session complete. Now clear one quest!');
          confetti();
        }
        updateTimerDisplay();
      }, 1000);
      updateTimerDisplay();
    }

    function resetTimer() {
      clearInterval(timer.interval);
      timer = { seconds: 25 * 60, running: false, interval: null };
      updateTimerDisplay();
    }

    document.getElementById('markVisibleDoneBtn').addEventListener('click', () => markVisible(true));
    document.getElementById('markVisiblePendingBtn').addEventListener('click', () => markVisible(false));
    document.getElementById('randomQuestBtn').addEventListener('click', pickRandomQuest);
    document.getElementById('exportBtn').addEventListener('click', exportBackup);
    document.getElementById('importInput').addEventListener('change', importBackup);
    document.getElementById('resetBtn').addEventListener('click', resetAll);
    document.getElementById('focusBtn').addEventListener('click', () => {
      document.getElementById('timerText').scrollIntoView({ behavior: 'smooth', block: 'center' });
      toggleTimer();
    });
    document.getElementById('timerStartBtn').addEventListener('click', toggleTimer);
    document.getElementById('timerResetBtn').addEventListener('click', resetTimer);
    [els.search, els.filter, els.section, els.sort].forEach(el => el.addEventListener('input', render));

    setupOptions();
    updateTimerDisplay();
    render();
  </script>
</body>
</html>
