import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

const canvas = document.querySelector("#conference-globe");
const stage = document.querySelector(".globe-stage");

const stops = [
  { date: "2021.05", name: "Chinese Control and Decision Conference", city: "Kunming", lat: 25.0389, lon: 102.7183 },
  { date: "2021.07", name: "Chinese Control Conference", city: "Shanghai", lat: 31.2304, lon: 121.4737 },
  { date: "2021.11", name: "China Automation Congress", city: "Kunming", lat: 25.0389, lon: 102.7183 },
  { date: "2022.06", name: "Chinese Control Conference", city: "Hefei", lat: 31.8206, lon: 117.2272 },
  { date: "2022.08", name: "Chinese Control and Decision Conference", city: "Hefei", lat: 31.8206, lon: 117.2272 },
  { date: "2022.10", name: "Science China Information Sciences Frontier Academic Salon", city: "Beijing", lat: 39.9042, lon: 116.4074 },
  { date: "2023.05", name: "China Systems Science Conference", city: "Chongqing", lat: 29.563, lon: 106.5516 },
  { date: "2023.06", name: "Virtual International Conference on Artificial Intelligence / CIPOSUNI 2023", city: "Virtual / Universidad Nacional de Ingenieria, Peru", lat: -12.024, lon: -77.049 },
  { date: "2023.07", name: "Chinese Control Conference", city: "Tianjin", lat: 39.3434, lon: 117.3616 },
  { date: "2023.10", name: "Annual Conference of the IEEE Industrial Electronics Society", city: "Singapore", lat: 1.3521, lon: 103.8198 },
  { date: "2024.07", name: "Asian Control Conference", city: "Dalian", lat: 38.914, lon: 121.6147 },
  { date: "2024.09", name: "IEEE/CAA Journal of Automatica Sinica Conference", city: "Beijing", lat: 39.9042, lon: 116.4074 },
  { date: "2024.10", name: "National Conference on Complex Networks", city: "Nanjing", lat: 32.0603, lon: 118.7969 },
  { date: "2024.11", name: "IEEE Active Disturbance Rejection Control Workshop", city: "Zhuhai", lat: 22.2711, lon: 113.5767 },
  { date: "2024.12", name: "International Conference on Intelligent Power Systems", city: "Yichang", lat: 30.6919, lon: 111.2865 },
  { date: "2025.05", name: "Data Driven Control and Learning Systems Conference", city: "Wuxi", lat: 31.4912, lon: 120.3124 },
  { date: "2025.11", name: "Student Academic Annual Conference", city: "Wuhan", lat: 30.5928, lon: 114.3055 },
];

if (canvas && stage) {
  const prefersStatic = window.matchMedia("(max-width: 720px), (prefers-reduced-motion: reduce)").matches;
  if (prefersStatic) {
    stage.classList.add("is-static");
  } else {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 6.5);

  const globe = new THREE.Group();
  globe.rotation.x = -0.28;
  globe.rotation.y = 1.35;
  scene.add(globe);

  const radius = 1.72;
  const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2dd4bf";

  const texture = new THREE.TextureLoader().load("assets/earth.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 72, 72),
    new THREE.MeshPhongMaterial({
      map: texture,
      color: 0xdff7ff,
      emissive: 0x061516,
      shininess: 38,
      transparent: true,
      opacity: 0.96,
    }),
  );
  globe.add(sphere);

  globe.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.012, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      }),
    ),
  );

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.08, 48, 48),
    new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.12,
    }),
  );
  globe.add(atmosphere);

  const light = new THREE.DirectionalLight(0xffffff, 2.2);
  light.position.set(2.2, 2.8, 4);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x9bdad3, 0.75));

  const hub = latLonToVector(30.5928, 114.3055, radius + 0.02);
  const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x2dd4bf });
  const hubMaterial = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

  const markers = [];
  const info = document.createElement("div");
  info.className = "globe-info";
  info.innerHTML = `<strong>${stops.at(-1).name}</strong><span>${stops.at(-1).date} · ${stops.at(-1).city}</span>`;
  stage.append(info);

  stops.forEach((stop, index) => {
    const point = latLonToVector(stop.lat, stop.lon, radius + 0.045);
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(index === stops.length - 1 ? 0.055 : 0.038, 18, 18),
      index === stops.length - 1 ? hubMaterial : pointMaterial,
    );
    marker.position.copy(point);
    marker.userData = stop;
    markers.push(marker);
    globe.add(marker);

    const arc = makeArc(hub, point, radius + 0.52 + (index % 4) * 0.08);
    globe.add(
      new THREE.Line(
        arc,
        new THREE.LineBasicMaterial({
          color: index === stops.length - 1 ? 0xf59e0b : 0x2dd4bf,
          transparent: true,
          opacity: index === stops.length - 1 ? 0.7 : 0.28,
        }),
      ),
    );
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  canvas.addEventListener("pointermove", (event) => {
    updatePointer(event);
    const hit = raycaster.intersectObjects(markers)[0];
    canvas.style.cursor = hit ? "pointer" : dragging ? "grabbing" : "grab";
    if (hit) showStop(hit.object.userData);
  });

  canvas.addEventListener("click", (event) => {
    updatePointer(event);
    const hit = raycaster.intersectObjects(markers)[0];
    if (hit) {
      showStop(hit.object.userData);
      pulseMarker(hit.object);
    }
  });

  window.addEventListener("conference-select", (event) => {
    const marker = markers[event.detail];
    if (!marker) return;
    showStop(marker.userData);
    pulseMarker(marker);
    const target = marker.position.clone().normalize();
    globe.rotation.y = Math.atan2(target.x, target.z);
  });

  const starGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < 360; i += 1) {
    starPositions.push((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 8);
  }
  starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
  scene.add(
    new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0x7ddbd4, size: 0.012, transparent: true, opacity: 0.65 }),
    ),
  );

  let dragging = false;
  let previousX = 0;
  let previousY = 0;

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    globe.rotation.y += (event.clientX - previousX) * 0.006;
    globe.rotation.x += (event.clientY - previousY) * 0.004;
    globe.rotation.x = Math.max(-1.1, Math.min(0.8, globe.rotation.x));
    previousX = event.clientX;
    previousY = event.clientY;
  });

  canvas.addEventListener("pointerup", () => {
    dragging = false;
  });

  function resize() {
    const rect = stage.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function updatePointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
  }

  function showStop(stop) {
    info.innerHTML = `<strong>${stop.name}</strong><span>${stop.date} · ${stop.city}</span>`;
  }

  function pulseMarker(marker) {
    marker.scale.setScalar(1.9);
    setTimeout(() => marker.scale.setScalar(1), 220);
  }

  function animate() {
    const color = new THREE.Color(accent());
    pointMaterial.color.copy(color);
    atmosphere.material.color.copy(color);

    if (document.documentElement.dataset.motion !== "off" && !dragging) {
      globe.rotation.y += 0.0022;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  animate();
  }
}

function latLonToVector(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function makeArc(start, end, altitude) {
  const mid = start.clone().add(end).normalize().multiplyScalar(altitude);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return new THREE.BufferGeometry().setFromPoints(curve.getPoints(44));
}
