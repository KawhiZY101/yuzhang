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
  ["2024.12", "International Conference on Intelligent Power Systems", "Yichang"],
  ["2025.05", "Data Driven Control and Learning Systems Conference", "Wuxi"],
  ["2025.11", "Student Academic Annual Conference", "Wuhan"],
  ["2026.08", "21st IEEE Conference on Industrial Electronics and Applications (ICIEA 2026) - Best Paper Award in Energy and Environment", "Catania, Italy"],
];

let honorsExpanded = false;

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

function renderConferences() {
  const list = document.querySelector("#conference-list");
  if (!list) return;

  list.innerHTML = conferences
    .slice()
    .reverse()
    .map(
      ([date, name, place], reverseIndex) => `
        <li data-conference-index="${conferences.length - 1 - reverseIndex}">
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
    item.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("conference-select", {
          detail: Number(item.dataset.conferenceIndex),
        }),
      );
      list.querySelectorAll("li").forEach((entry) => entry.classList.remove("active"));
      item.classList.add("active");
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

document.querySelector(".honors-toggle")?.addEventListener("click", () => {
  honorsExpanded = !honorsExpanded;
  renderHonors();
});

renderPublications();
renderSelectedWork();
renderHonors();
renderConferences();

const revealTargets = document.querySelectorAll(
  ".section-heading, .timeline-list > li, .visual-story > *, .topic, .selected-work-panel, .working-list article, .skill-tags, .life-gallery > *, .project-grid article, .honors-list, .globe-layout, .contact > *",
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
