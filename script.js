const root = document.documentElement;
const canvas = document.querySelector("#grid-canvas");
const ctx = canvas.getContext("2d");
const state = {
  accent: localStorage.getItem("accent") || "#0ea5e9",
  theme: localStorage.getItem("theme") || "light",
  density: localStorage.getItem("density") || "balanced",
  motion: localStorage.getItem("motion") || "on",
  particles: [],
};

const publications = [
  {
    kind: "journal",
    role: "first-author",
    year: 2022,
    venue: "IEEE Transactions on Industrial Electronics, 2022",
    title: "Predefined-Time Secondary Control for DC Microgrid",
    link: "https://doi.org/10.1109/TIE.2021.3128899",
    citations: 49,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2023,
    venue: "IEEE Transactions on Industrial Electronics, 2023",
    title: "Distributed Predefined-Time Control for Hybrid AC/DC Microgrid",
    link: "https://doi.org/10.1109/TIE.2022.3225807",
    citations: 17,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2024,
    venue: "IEEE Transactions on Power Systems, 2024",
    title: "Distributed Predefined-Time Optimization and Control for Multi-Bus DC Microgrid",
    link: "https://doi.org/10.1109/TPWRS.2023.3349165",
    citations: 57,
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2024,
    venue: "Automatica, 2024",
    title: "Distributed Predefined-Time Optimal Economic Dispatch for Microgrids",
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
    link: "https://doi.org/10.1016/j.automatica.2025.112654",
  },
  {
    kind: "journal",
    role: "first-author",
    year: 2026,
    venue: "IEEE Transactions on Industry Applications, 2026",
    title: "From Single to Networked: Practical Predefined-Time Resilient Control of DC Microgrids under DoS and FDI Attacks",
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
    note: "Accepted",
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
    venue: "IEEE Power & Energy Society General Meeting, 2026",
    title: "Energy-Like Stability of Interconnected Grid-Forming Inverters with Potential-Sensitive Virtual Inertia",
    note: "Accepted",
  },
];

const honors = [
  {
    date: "2026.01",
    project: "HUST Innovation Research Institute Technology Innovation Project",
    award: "Technology Innovation Project Recognition",
  },
  {
    date: "2025.11",
    project: "Doctoral Study",
    award: "National Scholarship for Doctoral Students",
  },
  {
    date: "2025.11",
    project: "\"Huawei Cup\" Artificial Intelligence Innovation Competition",
    award: "Competition Award",
  },
  {
    date: "2025.11",
    project: "Artificial Intelligence Innovation Competition, Qingdao City Round",
    award: "Competition Award",
  },
  {
    date: "2025.11",
    project: "Dual-Carbon Innovation and Creativity Competition",
    award: "Competition Award",
  },
  {
    date: "2025.11",
    project: "Challenge Cup",
    award: "2025 Challenge Cup Recognition",
  },
  {
    date: "2025.09",
    project: "2024 Hubei Association for Science and Technology",
    award: "Excellent Science and Technology Paper",
  },
  {
    date: "2024.12",
    project: "Science and Technology Innovation Scholarship",
    award: "2024 Science and Technology Innovation Scholarship",
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
    date: "2024.09",
    project: "2024 IEEE/CAA Journal of Automatica Sinica Industrial Automation 5.0",
    award: "Certificate",
  },
  {
    date: "2024.08",
    project: "Huichuan Cup National Intelligent Automation Innovation Competition",
    award: "National Third Prize",
  },
  {
    date: "2023.12",
    project: "Zhixing Scholarship",
    award: "2024 Zhixing Scholarship",
  },
  {
    date: "2023.12",
    project: "Graduate Study",
    award: "Merit Graduate Student",
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
];

function applyState() {
  root.style.setProperty("--accent", state.accent);
  root.dataset.theme = state.theme;
  root.dataset.density = state.density;
  root.dataset.motion = state.motion;
  document.querySelector("#accent-picker").value = state.accent;

  document.querySelectorAll("[data-set-theme]").forEach((button) => {
    button.classList.toggle("active", button.dataset.setTheme === state.theme);
  });
  document.querySelectorAll("[data-set-density]").forEach((button) => {
    button.classList.toggle("active", button.dataset.setDensity === state.density);
  });
  document.querySelectorAll("[data-set-motion]").forEach((button) => {
    button.classList.toggle("active", button.dataset.setMotion === state.motion);
  });
}

function saveState() {
  localStorage.setItem("accent", state.accent);
  localStorage.setItem("theme", state.theme);
  localStorage.setItem("density", state.density);
  localStorage.setItem("motion", state.motion);
}

function renderPublications(activeFilter = "all") {
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
      const hidden =
        activeFilter !== "all" &&
        paper.kind !== activeFilter &&
        paper.role !== activeFilter;
      const tag = paper.link ? "a" : "article";
      const href = paper.link ? ` href="${paper.link}" target="_blank" rel="noreferrer"` : "";
      return `
        <${tag} class="paper${hidden ? " is-hidden" : ""}${paper.link ? "" : " no-link"}" data-kind="${paper.kind}" data-role="${paper.role}"${href}>
          <span>${paper.venue}</span>
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

function renderHonors() {
  const list = document.querySelector("#honors-list");
  if (!list) return;

  list.innerHTML = honors
    .map(
      (honor) => `
        <article class="honor-item">
          <span>${honor.date}</span>
          <h3>${honor.project}</h3>
          <p>${honor.award}</p>
        </article>
      `,
    )
    .join("");
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

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.max(34, Math.floor((window.innerWidth * window.innerHeight) / 28000));
  state.particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.42,
    vy: (Math.random() - 0.5) * 0.42,
  }));
}

function drawNetwork() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (state.motion === "off") return;

  const color = getComputedStyle(root).getPropertyValue("--accent").trim();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  state.particles.forEach((point) => {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
    if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;

    ctx.globalAlpha = 0.72;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = 0; i < state.particles.length; i += 1) {
    for (let j = i + 1; j < state.particles.length; j += 1) {
      const a = state.particles[i];
      const b = state.particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 132) {
        ctx.globalAlpha = (1 - distance / 132) * 0.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawNetwork);
}

document.querySelector("#accent-picker").addEventListener("input", (event) => {
  state.accent = event.target.value;
  applyState();
  saveState();
});

document.querySelectorAll("[data-set-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    state.theme = button.dataset.setTheme;
    applyState();
    saveState();
  });
});

document.querySelectorAll("[data-set-density]").forEach((button) => {
  button.addEventListener("click", () => {
    state.density = button.dataset.setDensity;
    applyState();
    saveState();
  });
});

document.querySelectorAll("[data-set-motion]").forEach((button) => {
  button.addEventListener("click", () => {
    state.motion = button.dataset.setMotion;
    applyState();
    saveState();
    if (state.motion === "on") requestAnimationFrame(drawNetwork);
  });
});

document.querySelectorAll(".topic").forEach((topic) => {
  topic.addEventListener("click", () => {
    document.querySelectorAll(".topic").forEach((item) => item.classList.remove("active"));
    topic.classList.add("active");
  });
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const kind = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    renderPublications(kind);
  });
});

document.querySelector(".customizer-toggle").addEventListener("click", () => {
  const customizer = document.querySelector(".customizer");
  customizer.classList.toggle("is-collapsed");
  const expanded = !customizer.classList.contains("is-collapsed");
  document.querySelector(".customizer-toggle").setAttribute("aria-expanded", String(expanded));
});

window.addEventListener("resize", resizeCanvas);

renderPublications();
renderHonors();
renderConferences();
applyState();
resizeCanvas();
requestAnimationFrame(drawNetwork);
