const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const publications = [
  {
    kind: "journal",
    role: "first-author",
    year: 2022,
    venue: "IEEE Transactions on Industrial Electronics, 2022",
    title: "Predefined-Time Secondary Control for DC Microgrid",
    selected: true,
    link: "https://doi.org/10.1109/TIE.2021.3128899",
    citations: 49,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2023,
    venue: "IEEE Transactions on Industrial Electronics, 2023",
    title: "Distributed Predefined-Time Control for Hybrid AC/DC Microgrid",
    selected: true,
    link: "https://doi.org/10.1109/TIE.2022.3225807",
    citations: 17,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2024,
    venue: "IEEE Transactions on Power Systems, 2024",
    title: "Distributed Predefined-Time Optimization and Control for Multi-Bus DC Microgrid",
    selected: true,
    link: "https://doi.org/10.1109/TPWRS.2023.3349165",
    citations: 57,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2024,
    venue: "Automatica, 2024",
    title: "Distributed Predefined-Time Optimal Economic Dispatch for Microgrids",
    selected: true,
    link: "https://doi.org/10.1016/j.automatica.2024.111870",
    citations: 15,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2025,
    venue: "IEEE/CAA Journal of Automatica Sinica, 2025",
    title: "Distributed Load-sharing and Loss Optimization within Voltage Safety Constraints for Meshed DC Microgrid",
    link: "https://doi.org/10.1109/JAS.2025.125345",
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2026,
    venue: "Automatica, 2026",
    title: "Optimal Phase Angle Control for Interconnected AC Microgrids",
    selected: true,
    link: "https://doi.org/10.1016/j.automatica.2025.112654",
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2026,
    venue: "IEEE Transactions on Industry Applications, 2026",
    title: "From Single to Networked: Practical Predefined-Time Resilient Control of DC Microgrids under DoS and FDI Attacks",
    selected: true,
    link: "https://doi.org/10.1109/TIA.2025.3619026",
    citations: 2,
  },
  {
    kind: "journal",
    role: "co-author",
    year: 2025,
    venue: "IEEE Transactions on Industrial Electronics, 2025",
    title: "Distributed Power Sharing Control for Islanded AC Microgrids With Quantized State",
    link: "https://doi.org/10.1109/TIE.2025.3579083",
    citations: 1,
  },
  {
    kind: "journal",
    role: "corresponding-author",
    year: 2026,
    venue: "IEEE Transactions on Smart Grid, 2026",
    title: "FT-ESO Based Fixed-Time Secondary Control for DC Microgrids with Unknown External Disturbances",
    link: "https://ieeexplore.ieee.org/document/11534902/",
  },
  {
    kind: "conference",
    role: "first-author",
    year: 2023,
    venue: "49th Annual Conference of the IEEE Industrial Electronics Society, 2023",
    title: "Distributed Predefined-Time Secondary Control for AC Microgrid",
    link: "https://scholar.google.com/scholar?q=Distributed+Predefined-Time+Secondary+Control+for+AC+Microgrid",
  },
  {
    kind: "conference",
    role: "first-author",
    year: 2024,
    venue: "14th Asian Control Conference, 2024",
    title: "Optimal Voltage Scheduling under Safety Constraints for Multi-bus DC Microgrid",
    link: "https://scholar.google.com/scholar?q=Optimal+Voltage+Scheduling+under+Safety+Constraints+for+Multi-bus+DC+Microgrid",
  },
  {
    kind: "conference",
    role: "corresponding-author",
    year: 2024,
    venue: "IEEE Asia-Pacific Power and Energy Engineering Conference, 2024",
    title: "Distributed Event-Triggered Coordinated Voltage-Constrained and Current-Sharing Control for Islanded DC Microgrids",
    link: "https://doi.org/10.1109/APPEEC61255.2024.10922379",
  },
  {
    kind: "conference",
    role: "co-author",
    year: 2022,
    venue: "Chinese Control Conference, 2022",
    title: "Slow State Based Consensus for Two Time-Scale Agent Networks under Directed Graphs",
    link: "https://scholar.google.com/scholar?q=Slow+State+Based+Consensus+for+Two+Time-Scale+Agent+Networks+under+Directed+Graphs",
  },
  {
    kind: "conference",
    role: "co-author",
    year: 2025,
    venue: "Youth Academic Annual Conference of Chinese Association of Automation, 2025",
    title: "Distributed Event-Triggered Control for Hybrid AC/DC Microgrids with Quantized State",
    link: "https://scholar.google.com/scholar?q=Distributed+Event-Triggered+Control+for+Hybrid+AC%2FDC+Microgrids+with+Quantized+State",
  },
  {
    kind: "conference",
    role: "first-author",
    year: 2026,
    venue: "21st IEEE Conference on Industrial Electronics and Applications (ICIEA 2026)",
    title: "Multi-Scale Laplacian-Guided Decision Transformer for Hybrid Energy Storage Dispatch in Renewable-Rich Distribution Networks",
    note: "Best Paper Award in Energy and Environment",
  },
  {
    kind: "conference",
    role: "first-author",
    year: 2026,
    venue: "IEEE Power & Energy Society General Meeting, 2026",
    title: "Energy-Like Stability of Interconnected Grid-Forming Inverters with Potential-Sensitive Virtual Inertia",
    note: "Accepted",
  },
];

const selectedWorks = {
  dispatch: {
    index: "01",
    label: "Economic Dispatch",
    papers: [
      {
        venue: "Automatica, 2024",
        title: "Distributed Predefined-Time Optimal Economic Dispatch for Microgrids",
      },
    ],
    points: [
      "Designs a smooth reconstruction penalty function with continuous and piecewise-linear differential behavior to handle generation power constraints.",
      "Builds a distributed predefined-time economic dispatch strategy using a time-based function so cost minimization, power balance, transmission loss, and generation limits can be addressed within a user-specified settling time.",
    ],
  },
  cooperative: {
    index: "02",
    label: "Cooperative Control",
    papers: [
      {
        venue: "IEEE Transactions on Industrial Electronics, 2023",
        title: "Distributed Predefined-Time Control for Hybrid AC/DC Microgrid",
      },
      {
        venue: "IEEE Transactions on Industrial Electronics, 2022",
        title: "Predefined-Time Secondary Control for DC Microgrid",
      },
    ],
    points: [
      "Develops predefined-time controllers for AC/DC bus voltage and frequency restoration with global power sharing under unknown load power.",
      "Uses class-K functions, unified error definitions, and predefined-time observers to reduce reliance on direct load measurements while keeping convergence time tunable and overshoot small.",
    ],
  },
  flow: {
    index: "03",
    label: "Power Flow Optimization",
    papers: [
      {
        venue: "IEEE Transactions on Power Systems, 2024",
        title: "Distributed Predefined-Time Optimization and Control for Multi-Bus DC Microgrid",
      },
      {
        venue: "Automatica, 2026",
        title: "Optimal Phase Angle Control for Interconnected AC Microgrids",
      },
    ],
    points: [
      "Formulates phase-angle-based and penalty-scalarized multi-objective indices to capture trade-offs among power sharing, transmission loss, and voltage safety.",
      "Combines distributed predefined-time optimization with consensus-based observers so networked AC/DC microgrids can implement global optimal decisions with local information.",
    ],
  },
  resilience: {
    index: "04",
    label: "Resilient Control",
    papers: [
      {
        venue: "IEEE Transactions on Industry Applications, 2026",
        title: "From Single to Networked: Practical Predefined-Time Resilient Control of DC Microgrids under DoS and FDI Attacks",
      },
    ],
    points: [
      "Proposes practical predefined-time resilient control for voltage regulation and current sharing under denial-of-service and false-data-injection attacks.",
      "Introduces switching adaptive compensation for unbounded FDI attacks and analyzes how attacks and control parameters affect regulation error and convergence time in both single and networked microgrids.",
    ],
  },
};

const honors = [
  {
    date: "2026.08",
    project: "21st IEEE Conference on Industrial Electronics and Applications (ICIEA 2026)",
    award: "Best Paper Award in Energy and Environment",
    title: "Multi-Scale Laplacian-Guided Decision Transformer for Hybrid Energy Storage Dispatch in Renewable-Rich Distribution Networks.",
  },
  {
    date: "2025.11",
    project: "Doctoral Study",
    award: "National Scholarship for Doctoral Students",
  },
  {
    date: "2025.10",
    project: "\"Huawei Cup\" Artificial Intelligence Innovation Competition",
    award: "Second Prize",
    title: "AI-model-driven safety warning and health monitoring system for new-energy vehicle power batteries.",
  },
  {
    date: "2025.11",
    project: "Dual-Carbon Innovation and Creativity Competition",
    award: "Third Prize",
    title: "Carbon-intelligent interconnection: EV energy-storage multi-scale coordinated optimization and intelligent regulation system for low-carbon power systems.",
  },
  {
    date: "2025.09",
    project: "2024 Hubei Association for Science and Technology",
    award: "Excellent Science and Technology Paper",
  },
  {
    date: "2024.11",
    project: "Advances in Engineering",
    award: "Key Scientific Article",
  },
  {
    date: "2024.10",
    project: "20th National Conference on Complex Networks",
    award: "Best Student Paper",
  },
  {
    date: "2024.08",
    project: "Huichuan Cup National Intelligent Automation Innovation Competition",
    award: "National Third Prize",
    title: "Hybrid microgrid based on predefined-time distributed optimization and control.",
  },
  {
    date: "2022.12",
    project: "Master's Study",
    award: "National Scholarship for Master's Students",
  },
  {
    date: "2022.08",
    project: "34th China Control and Decision Conference",
    award: "Most Popular Academic Work Award",
  },
  {
    date: "Patent",
    project: "Authorized invention patent portfolio",
    award: "Five Chinese invention patents, including ZL202110837323.6.",
  },
];

const conferences = [
  ["2021.05", "Chinese Control and Decision Conference", "Kunming"],
  ["2021.07", "Chinese Control Conference", "Shanghai"],
  ["2021.11", "China Automation Congress", "Kunming"],
  ["2022.06", "Chinese Control Conference", "Hefei"],
  ["2022.08", "Chinese Control and Decision Conference", "Hefei"],
  ["2022.10", "Science China Information Sciences Frontier Academic Salon", "Beijing"],
  ["2023.05", "China Systems Science Conference", "Chongqing"],
  ["2023.06", "Virtual International Conference on Artificial Intelligence / CIPOSUNI 2023", "Virtual / Universidad Nacional de Ingenieria, Peru"],
  ["2023.07", "Chinese Control Conference", "Tianjin"],
  ["2023.10", "Annual Conference of the IEEE Industrial Electronics Society", "Singapore"],
  ["2024.07", "Asian Control Conference", "Dalian"],
  ["2024.09", "IEEE/CAA Journal of Automatica Sinica Conference", "Beijing"],
  ["2024.10", "National Conference on Complex Networks", "Nanjing"],
  ["2024.11", "IEEE Active Disturbance Rejection Control Workshop", "Zhuhai"],
  ["2024.12", "International Conference on Intelligent Power and Systems", "Yichang"],
  ["2025.05", "Data Driven Control and Learning Systems Conference", "Wuxi"],
  ["2025.11", "Student Academic Annual Conference", "Wuhan"],
  ["2026.08", "21st IEEE Conference on Industrial Electronics and Applications (ICIEA 2026) - Best Paper Award in Energy and Environment", "Catania, Italy"],
];

const atlasMoments = [
  {
    kind: "academic",
    kindLabel: "Academic Exchange",
    date: "2026.06",
    place: "Kazakhstan",
    title: "Research Presentation and Academic Exchange",
    description: "Presenting ongoing work on adaptive resilient control for DC microgrids during an international academic exchange.",
    image: "assets/atlas/kazakhstan.jpg",
    thumb: "assets/atlas/thumbs/kazakhstan.jpg",
    alt: "Yu Zhang presenting research on resilient DC microgrid control in Kazakhstan",
    objectPosition: "42% center",
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2026.03",
    place: "Singapore",
    title: "A New Chapter at NTU",
    description: "Beginning a visiting research period at Nanyang Technological University and discovering a new academic community in Singapore.",
    image: "assets/atlas/ntu.jpg",
    thumb: "assets/atlas/thumbs/ntu.jpg",
    alt: "Yu Zhang outside Nanyang Technological University in Singapore",
    objectPosition: "38% center",
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2025.06",
    place: "Taiyuan, China",
    title: "Time with Friends",
    description: "A relaxed evening with friends between research trips and deadlines.",
    image: "assets/atlas/taiyuan.jpg",
    thumb: "assets/atlas/thumbs/taiyuan.jpg",
    alt: "Yu Zhang taking a group selfie with friends in Taiyuan",
    objectPosition: "center",
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2025.05",
    place: "Wuxi, China",
    title: "Data Driven Control and Learning Systems Conference",
    description: "Attending the 14th Data Driven Control and Learning Systems Conference and exchanging ideas on learning-enabled control.",
    image: "assets/atlas/wuxi.jpg",
    thumb: "assets/atlas/thumbs/wuxi.jpg",
    alt: "Yu Zhang at the 2025 Data Driven Control and Learning Systems Conference in Wuxi",
    objectPosition: "40% center",
    conferenceIndex: 15,
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2024.12",
    place: "Yichang, China",
    title: "International Conference on Intelligent Power and Systems",
    description: "Meeting researchers at ICIPS 2024 and sharing perspectives on intelligent energy systems.",
    image: "assets/atlas/yichang.jpg",
    thumb: "assets/atlas/thumbs/yichang.jpg",
    alt: "Yu Zhang with researchers at ICIPS 2024 in Yichang",
    objectPosition: "center",
    conferenceIndex: 14,
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2024.11",
    place: "Zhuhai, China",
    title: "IEEE Workshop on Active Disturbance Rejection Control",
    description: "Attending the 16th IEEE Workshop on Active Disturbance Rejection Control in Zhuhai.",
    image: "assets/atlas/zhuhai.jpg",
    thumb: "assets/atlas/thumbs/zhuhai.jpg",
    alt: "Yu Zhang at the IEEE Workshop on Active Disturbance Rejection Control in Zhuhai",
    objectPosition: "center",
    conferenceIndex: 13,
  },
  {
    kind: "academic",
    kindLabel: "Conference · Award",
    date: "2024.10",
    place: "Nanjing, China",
    title: "National Conference on Complex Networks",
    description: "Receiving the Best Student Paper award at the 20th National Conference on Complex Networks.",
    image: "assets/atlas/nanjing.jpg",
    thumb: "assets/atlas/thumbs/nanjing.jpg",
    alt: "Yu Zhang receiving a Best Student Paper award in Nanjing",
    objectPosition: "55% center",
    conferenceIndex: 12,
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2024.09",
    place: "Beijing, China",
    title: "IEEE/CAA Journal of Automatica Sinica Conference",
    description: "Presenting multi-objective voltage optimization research for DC microgrids in Beijing.",
    image: "assets/atlas/beijing.jpg",
    thumb: "assets/atlas/thumbs/beijing.jpg",
    alt: "Yu Zhang presenting DC microgrid optimization research in Beijing",
    objectPosition: "38% center",
    conferenceIndex: 11,
  },
  {
    kind: "academic",
    kindLabel: "Innovation Competition",
    date: "2024.08",
    place: "Suzhou, China",
    title: "Huichuan Cup Innovation Competition",
    description: "Demonstrating a hybrid microgrid project based on predefined-time distributed optimization and control.",
    image: "assets/atlas/suzhou.jpg",
    thumb: "assets/atlas/thumbs/suzhou.jpg",
    alt: "Yu Zhang demonstrating a control project at the Huichuan Cup competition in Suzhou",
    objectPosition: "73% center",
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2024.07",
    place: "Dalian, China",
    title: "Asian Control Conference",
    description: "Presenting optimal voltage scheduling research for multi-bus DC microgrids at ASCC 2024.",
    image: "assets/atlas/dalian.jpg",
    thumb: "assets/atlas/thumbs/dalian.jpg",
    alt: "Yu Zhang presenting at the 2024 Asian Control Conference in Dalian",
    objectPosition: "68% center",
    conferenceIndex: 10,
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2024.06",
    place: "Chengdu, China",
    title: "Basketball with Friends",
    description: "A game, a team, and an afternoon away from the lab.",
    image: "assets/atlas/chengdu.jpg",
    thumb: "assets/atlas/thumbs/chengdu.jpg",
    alt: "Yu Zhang with friends after playing basketball in Chengdu",
    objectPosition: "center",
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2024.05",
    place: "Huangshi, China",
    title: "Cycling Day",
    description: "Finding focus and momentum on two wheels outside the city.",
    image: "assets/atlas/huangshi.jpg",
    thumb: "assets/atlas/thumbs/huangshi.jpg",
    alt: "Portrait of Yu Zhang wearing cycling gear in Huangshi",
    objectPosition: "center",
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2023.10",
    place: "Singapore",
    title: "Annual Conference of the IEEE Industrial Electronics Society",
    description: "Attending IECON 2023 and connecting microgrid control research with the industrial electronics community.",
    image: "assets/atlas/singapore.jpg",
    thumb: "assets/atlas/thumbs/singapore.jpg",
    alt: "Yu Zhang at IECON 2023 in Singapore",
    objectPosition: "38% center",
    conferenceIndex: 9,
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2023.07",
    place: "Tianjin, China",
    title: "Chinese Control Conference",
    description: "Attending the 42nd Chinese Control Conference with colleagues and collaborators.",
    image: "assets/atlas/tianjin.jpg",
    thumb: "assets/atlas/thumbs/tianjin.jpg",
    alt: "Yu Zhang with colleagues at the 42nd Chinese Control Conference in Tianjin",
    objectPosition: "67% center",
    conferenceIndex: 8,
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2023.05",
    place: "Shiyan, China",
    title: "Wudang Mountain",
    description: "A misty visit to Wudang Mountain with mentors and friends.",
    image: "assets/atlas/shiyan.jpg",
    thumb: "assets/atlas/thumbs/shiyan.jpg",
    alt: "Yu Zhang with companions at Wudang Mountain in Shiyan",
    objectPosition: "60% center",
  },
  {
    kind: "academic",
    kindLabel: "Conference",
    date: "2023.05",
    place: "Chongqing, China",
    title: "China Systems Science Conference",
    description: "Presenting stability analysis for DC microgrids at the China Systems Science Conference.",
    image: "assets/atlas/chongqing.jpg",
    thumb: "assets/atlas/thumbs/chongqing.jpg",
    alt: "Yu Zhang presenting DC microgrid research in Chongqing",
    objectPosition: "34% center",
    conferenceIndex: 6,
  },
  {
    kind: "academic",
    kindLabel: "Conference · Award",
    date: "2022.08",
    place: "Hefei, China",
    title: "Chinese Control and Decision Conference",
    description: "Receiving the Most Popular Academic Work Award at the 34th Chinese Control and Decision Conference.",
    image: "assets/atlas/hefei.jpg",
    thumb: "assets/atlas/thumbs/hefei.jpg",
    alt: "Yu Zhang receiving an award at the Chinese Control and Decision Conference in Hefei",
    objectPosition: "48% center",
    conferenceIndex: 4,
  },
  {
    kind: "life",
    kindLabel: "Life",
    date: "2022",
    place: "China",
    title: "City Walk, Camera in Hand",
    description: "Looking closer at the city and keeping curiosity active beyond research.",
    image: "assets/life-city-camera.jpg",
    thumb: "assets/atlas/thumbs/city-walk.jpg",
    alt: "Yu Zhang on a city walk with a camera",
    objectPosition: "62% center",
  },
];

let honorsExpanded = false;
let activeAtlasFilter = "all";
let activeAtlasMomentIndex = 0;

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-navigation");
const desktopNavigation = window.matchMedia("(min-width: 901px)");

function setMobileNavigation(open) {
  if (!navToggle || !primaryNav) return;
  primaryNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

navToggle?.addEventListener("click", () => {
  setMobileNavigation(navToggle.getAttribute("aria-expanded") !== "true");
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMobileNavigation(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileNavigation(false);
});

document.addEventListener("click", (event) => {
  if (!primaryNav?.classList.contains("is-open")) return;
  if (primaryNav.contains(event.target) || navToggle?.contains(event.target)) return;
  setMobileNavigation(false);
});

const handleDesktopNavigation = (event) => {
  if (event.matches) setMobileNavigation(false);
};

if (typeof desktopNavigation.addEventListener === "function") {
  desktopNavigation.addEventListener("change", handleDesktopNavigation);
} else {
  desktopNavigation.addListener(handleDesktopNavigation);
}

function paperId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderPublications(activeFilter = "highlight") {
  const list = document.querySelector("#paper-list");
  if (!list) return;
  const roleOrder = {
    "first-author": 0,
    "corresponding-author": 1,
    "co-author": 2,
  };

  list.innerHTML = publications
    .slice()
    .sort((a, b) => (roleOrder[a.role] - roleOrder[b.role]) || (b.year - a.year))
    .map((paper) => {
      const isHighlight = paper.selected || paper.note?.includes("Best Paper Award");
      const hidden = activeFilter === "highlight"
        ? !isHighlight
        : activeFilter !== "all" && paper.kind !== activeFilter;
      const tag = paper.link ? "a" : "article";
      const href = paper.link ? ` href="${paper.link}" target="_blank" rel="noreferrer"` : "";
      return `
        <${tag} id="paper-${paperId(paper.title)}" class="paper${hidden ? " is-hidden" : ""}${paper.link ? "" : " no-link"}" data-kind="${paper.kind}" data-role="${paper.role}"${href}>
          <div class="paper-venue">
            <span>${paper.venue}</span>
            ${paper.selected ? "<em>Selected Publication</em>" : ""}
          </div>
          <h3>${paper.title}</h3>
          <div class="paper-meta">
            <em>${paper.kind === "journal" ? "Journal" : "Conference"}</em>
            <em>${paper.role === "first-author" ? "First author" : paper.role === "corresponding-author" ? "Corresponding author" : "Co-author"}</em>
            ${paper.note && !paper.note.match(/^[JC]\\d+/) && paper.note !== "Completed" ? `<em>${paper.note}</em>` : ""}
            ${typeof paper.citations === "number" ? `<em>${paper.citations} OpenAlex citations</em>` : ""}
          </div>
        </${tag}>
      `;
    })
    .join("");
}

function renderSelectedWork(topic = "dispatch") {
  const panel = document.querySelector("#selected-work-panel");
  const work = selectedWorks[topic];
  if (!panel || !work) return;

  panel.classList.remove("is-switching");
  void panel.offsetWidth;
  panel.classList.add("is-switching");
  panel.innerHTML = `
    <span>${work.index} Representative works</span>
    <h3>${work.label}</h3>
    <div class="selected-paper-stack">
      ${work.papers
        .map(
          (paper) => `
            <article class="selected-paper-link" role="button" tabindex="0" data-paper-id="${paperId(paper.title)}" aria-label="Jump to ${paper.title} in publication list">
              <strong>${paper.venue}</strong>
              <p>${paper.title}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    <ul>
      ${work.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;
}

function activateAllPublications() {
  const allFilter = document.querySelector('.filter[data-filter="all"]');
  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  if (allFilter) allFilter.classList.add("active");
  renderPublications("all");
}

function jumpToPublication(id) {
  activateAllPublications();
  const paper = document.querySelector(`#paper-${CSS.escape(id)}`);
  if (!paper) return;
  document.querySelectorAll(".paper.is-targeted").forEach((item) => item.classList.remove("is-targeted"));
  paper.classList.add("is-targeted");
  paper.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => paper.classList.remove("is-targeted"), 2200);
}

function renderHonors() {
  const list = document.querySelector("#honors-list");
  if (!list) return;

  list.innerHTML = (honorsExpanded ? honors : honors.slice(0, 5))
    .map(
      (honor) => `
        <article class="honor-item">
          <span>${honor.date}</span>
          <div>
            <h3>${honor.project}</h3>
            ${honor.title ? `<p class="honor-topic">${honor.title}</p>` : ""}
          </div>
          <p>${honor.award}</p>
        </article>
      `,
    )
    .join("");

  const toggle = document.querySelector(".honors-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(honorsExpanded));
    toggle.innerHTML = honorsExpanded
      ? 'Show less <span aria-hidden="true">↑</span>'
      : 'View all recognition <span aria-hidden="true">↓</span>';
  }
}

function renderAtlasMoments(filter = activeAtlasFilter) {
  const rail = document.querySelector("#atlas-photo-rail");
  if (!rail) return;

  activeAtlasFilter = filter;
  rail.innerHTML = atlasMoments
    .map(
      (moment, index) => `
        <button
          class="atlas-card${filter !== "all" && moment.kind !== filter ? " is-hidden" : ""}"
          type="button"
          data-atlas-index="${index}"
          aria-label="Open ${moment.title}, ${moment.date}, ${moment.place}"
        >
          <img src="${moment.thumb}" alt="" loading="lazy" decoding="async" style="object-position: ${moment.objectPosition}" />
          <span class="atlas-card-copy">
            <small>${moment.date} · ${moment.place}</small>
            <strong>${moment.title}</strong>
          </span>
        </button>
      `,
    )
    .join("");

  rail.querySelectorAll(".atlas-card:not(.is-hidden)").forEach((card) => {
    const index = Number(card.dataset.atlasIndex);
    card.addEventListener("pointerenter", () => highlightAtlasMoment(index, false));
    card.addEventListener("focus", () => highlightAtlasMoment(index, false));
    card.addEventListener("click", () => openAtlasMoment(index));
  });

  const visibleIndices = atlasMoments
    .map((moment, index) => (filter === "all" || moment.kind === filter ? index : -1))
    .filter((index) => index >= 0);
  if (!visibleIndices.includes(activeAtlasMomentIndex)) activeAtlasMomentIndex = visibleIndices[0] ?? 0;
  updateAtlasFocus(activeAtlasMomentIndex);
}

function updateAtlasFocus(index) {
  const moment = atlasMoments[index];
  const focusCard = document.querySelector("#atlas-focus-card");
  if (!moment || !focusCard) return;

  activeAtlasMomentIndex = index;
  focusCard.dataset.atlasIndex = String(index);
  focusCard.setAttribute("aria-label", `Open ${moment.title}, ${moment.date}, ${moment.place}`);
  focusCard.classList.remove("is-switching");
  void focusCard.offsetWidth;
  focusCard.classList.add("is-switching");

  const image = document.querySelector("#atlas-focus-image");
  image.src = moment.thumb;
  image.style.objectPosition = moment.objectPosition;
  document.querySelector("#atlas-focus-meta").textContent = `${moment.date} · ${moment.place}`;
  document.querySelector("#atlas-focus-title").textContent = moment.title;
  document.querySelector("#atlas-focus-kind").textContent = `${moment.kindLabel} · View story ↗`;

  window.__atlasActiveMoment = { ...moment, atlasIndex: index };
  window.dispatchEvent(new CustomEvent("atlas-moment-select", { detail: window.__atlasActiveMoment }));
}

function setAtlasFilter(filter) {
  document.querySelectorAll(".atlas-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.atlasFilter === filter);
  });
  renderAtlasMoments(filter);
}

function highlightAtlasMoment(index, scroll = true) {
  const rail = document.querySelector("#atlas-photo-rail");
  if (!rail) return;

  let card = rail.querySelector(`[data-atlas-index="${index}"]`);
  if (!card || card.classList.contains("is-hidden")) {
    setAtlasFilter("all");
    card = rail.querySelector(`[data-atlas-index="${index}"]`);
  }

  rail.querySelectorAll(".atlas-card").forEach((item) => item.classList.remove("is-active"));
  card?.classList.add("is-active");
  updateAtlasFocus(index);
  if (scroll) card?.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "nearest", inline: "center" });
}

function showAtlasMomentForConference(conferenceIndex) {
  const momentIndex = atlasMoments.findIndex((moment) => moment.conferenceIndex === conferenceIndex);
  if (momentIndex >= 0) highlightAtlasMoment(momentIndex);
}

function openAtlasMoment(index) {
  const moment = atlasMoments[index];
  const lightbox = document.querySelector("#atlas-lightbox");
  if (!moment || !lightbox) return;

  const image = document.querySelector("#atlas-lightbox-image");
  image.src = moment.image;
  image.alt = moment.alt;
  document.querySelector("#atlas-lightbox-kind").textContent = moment.kindLabel;
  document.querySelector("#atlas-lightbox-date").textContent = moment.date;
  document.querySelector("#atlas-lightbox-place").textContent = moment.place;
  document.querySelector("#atlas-lightbox-title").textContent = moment.title;
  document.querySelector("#atlas-lightbox-description").textContent = moment.description;

  highlightAtlasMoment(index, false);
  if (Number.isInteger(moment.conferenceIndex)) {
    window.dispatchEvent(new CustomEvent("conference-select", { detail: moment.conferenceIndex }));
  }

  document.body.classList.add("atlas-dialog-open");
  lightbox.showModal();
}

function renderConferences() {
  const list = document.querySelector("#conference-list");
  if (!list) return;

  list.innerHTML = conferences
    .slice()
    .reverse()
    .map(
      ([date, name, place], reverseIndex) => `
        <li data-conference-index="${conferences.length - 1 - reverseIndex}" role="button" tabindex="0">
          <time>${date}</time>
          <div>
            <strong>${name}</strong>
            <span>${place}</span>
          </div>
        </li>
      `,
    )
    .join("");

  list.querySelectorAll("li").forEach((item) => {
    const selectConference = () => {
      const conferenceIndex = Number(item.dataset.conferenceIndex);
      window.dispatchEvent(
        new CustomEvent("conference-select", {
          detail: conferenceIndex,
        }),
      );
      showAtlasMomentForConference(conferenceIndex);
      list.querySelectorAll("li").forEach((entry) => entry.classList.remove("active"));
      item.classList.add("active");
    };

    item.addEventListener("click", selectConference);
    item.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectConference();
    });
  });
}

document.querySelectorAll(".topic").forEach((topic) => {
  topic.addEventListener("click", () => {
    document.querySelectorAll(".topic").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    topic.classList.add("active");
    topic.setAttribute("aria-pressed", "true");
    renderSelectedWork(topic.dataset.topic);
  });
  topic.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    topic.click();
  });
});

document.querySelector("#selected-work-panel")?.addEventListener("click", (event) => {
  const paper = event.target.closest(".selected-paper-link");
  if (!paper) return;
  jumpToPublication(paper.dataset.paperId);
});

document.querySelector("#selected-work-panel")?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const paper = event.target.closest(".selected-paper-link");
  if (!paper) return;
  event.preventDefault();
  jumpToPublication(paper.dataset.paperId);
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const kind = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    renderPublications(kind);
  });
});

document.querySelectorAll(".atlas-filter").forEach((filter) => {
  filter.addEventListener("click", () => setAtlasFilter(filter.dataset.atlasFilter));
});

document.querySelector("#atlas-focus-card")?.addEventListener("click", (event) => {
  openAtlasMoment(Number(event.currentTarget.dataset.atlasIndex));
});

const atlasLightbox = document.querySelector("#atlas-lightbox");

document.querySelector(".atlas-lightbox-close")?.addEventListener("click", () => atlasLightbox?.close());

atlasLightbox?.addEventListener("click", (event) => {
  if (event.target === atlasLightbox) atlasLightbox.close();
});

atlasLightbox?.addEventListener("close", () => {
  document.body.classList.remove("atlas-dialog-open");
  const image = document.querySelector("#atlas-lightbox-image");
  image.removeAttribute("src");
  image.alt = "";
});

window.addEventListener("conference-marker-select", (event) => {
  showAtlasMomentForConference(Number(event.detail));
});

document.querySelector(".honors-toggle")?.addEventListener("click", () => {
  honorsExpanded = !honorsExpanded;
  renderHonors();
});

renderPublications();
renderSelectedWork();
renderHonors();
renderAtlasMoments();
renderConferences();

const revealTargets = document.querySelectorAll(
  ".section-heading, .timeline-list > li, .visual-story > *, .topic, .selected-work-panel, .working-list article, .skill-tags, .project-grid article, .honors-list, .atlas-stage, .conference-timeline, .contact > *",
);

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
} else {
  document.documentElement.classList.add("reveal-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  revealTargets.forEach((item) => revealObserver.observe(item));
}
