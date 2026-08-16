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
  { date: "2024.12", name: "International Conference on Intelligent Power and Systems", city: "Yichang", lat: 30.6919, lon: 111.2865 },
  { date: "2025.05", name: "Data Driven Control and Learning Systems Conference", city: "Wuxi", lat: 31.4912, lon: 120.3124 },
  { date: "2025.11", name: "Student Academic Annual Conference", city: "Wuhan", lat: 30.5928, lon: 114.3055 },
  { date: "2026.08", name: "21st IEEE Conference on Industrial Electronics and Applications (ICIEA 2026) - Best Paper Award in Energy and Environment", city: "Catania, Italy", lat: 37.5079, lon: 15.083 },
];

const placeCoordinates = {
  Kazakhstan: { lat: 48.0196, lon: 66.9237 },
  Singapore: { lat: 1.3521, lon: 103.8198 },
  "Taiyuan, China": { lat: 37.8706, lon: 112.5489 },
  "Wuxi, China": { lat: 31.4912, lon: 120.3124 },
  "Yichang, China": { lat: 30.6919, lon: 111.2865 },
  "Zhuhai, China": { lat: 22.2711, lon: 113.5767 },
  "Nanjing, China": { lat: 32.0603, lon: 118.7969 },
  "Beijing, China": { lat: 39.9042, lon: 116.4074 },
  "Suzhou, China": { lat: 31.2989, lon: 120.5853 },
  "Dalian, China": { lat: 38.914, lon: 121.6147 },
  "Chengdu, China": { lat: 30.5728, lon: 104.0668 },
  "Huangshi, China": { lat: 30.201, lon: 115.039 },
  "Tianjin, China": { lat: 39.3434, lon: 117.3616 },
  "Shiyan, China": { lat: 32.6292, lon: 110.798 },
  "Chongqing, China": { lat: 29.563, lon: 106.5516 },
  "Hefei, China": { lat: 31.8206, lon: 117.2272 },
};

if (canvas && stage) {
  const context = canvas.getContext("2d");

  if (!context) {
    stage.classList.add("is-static");
  } else {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const TAU = Math.PI * 2;
    const hub = { lat: 30.5928, lon: 114.3055 };
    const atlasStage = stage.closest(".atlas-stage") || stage;
    const status = document.createElement("div");
    status.className = "globe-info";
    stage.append(status);

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let radius = 0;
    let pixelRatio = 1;
    let rotation = degreesToRadians(-104);
    let tilt = degreesToRadians(13);
    let targetRotation = rotation;
    let targetTilt = tilt;
    let targeting = false;
    let dragging = false;
    let moved = false;
    let previousX = 0;
    let previousY = 0;
    let pulseStartedAt = performance.now();
    let autoRotateAfter = performance.now() + 3000;
    let activeLocation = resolveMoment(window.__atlasActiveMoment) || {
      ...stops.at(-1),
      title: stops.at(-1).name,
      place: stops.at(-1).city,
      conferenceIndex: stops.length - 1,
    };
    let hitTargets = [];
    let stars = [];

    showStatus(activeLocation);
    locate(activeLocation, false);

    function resolveMoment(moment) {
      if (!moment) return null;
      if (Number.isInteger(moment.conferenceIndex) && stops[moment.conferenceIndex]) {
        return { ...moment, lat: stops[moment.conferenceIndex].lat, lon: stops[moment.conferenceIndex].lon };
      }
      const coordinates = placeCoordinates[moment.place];
      return coordinates ? { ...moment, ...coordinates } : { ...moment, lat: null, lon: null };
    }

    function locate(location, animate = true) {
      activeLocation = location;
      pulseStartedAt = performance.now();
      autoRotateAfter = performance.now() + 4500;
      showStatus(location);
      if (!Number.isFinite(location.lat) || !Number.isFinite(location.lon)) return;

      targetRotation = -degreesToRadians(location.lon);
      targetTilt = clamp(degreesToRadians(location.lat) * 0.56, -0.62, 0.62);
      targeting = animate && !reducedMotion.matches;
      if (!targeting) {
        rotation = targetRotation;
        tilt = targetTilt;
      }
      atlasStage.classList.remove("is-locating");
      void atlasStage.offsetWidth;
      atlasStage.classList.add("is-locating");
      window.setTimeout(() => atlasStage.classList.remove("is-locating"), 760);
    }

    function selectConference(index, animate = true) {
      const stop = stops[index];
      if (!stop) return;
      locate({ ...stop, title: stop.name, place: stop.city, conferenceIndex: index }, animate);
    }

    function showStatus(location) {
      const title = location.title || location.name || "Conference Atlas";
      const place = location.place || location.city || "Global research trajectory";
      status.innerHTML = `<strong>${title}</strong><span>${location.date || ""} · ${place}</span>`;
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      centerX = width * (width < 720 ? 0.64 : 0.56);
      centerY = height * (width < 720 ? 0.48 : 0.42);
      radius = Math.min(width * (width < 720 ? 0.38 : 0.34), height * 0.38, 315);
      stars = Array.from({ length: Math.round(width / 9) }, (_, index) => ({
        x: ((index * 83) % 997) / 997 * width,
        y: ((index * 47 + 19) % 991) / 991 * height,
        size: 0.45 + ((index * 29) % 7) * 0.13,
        alpha: 0.1 + ((index * 17) % 5) * 0.045,
      }));
    }

    function projectVector(vector, scale = 1) {
      const cosRotation = Math.cos(rotation);
      const sinRotation = Math.sin(rotation);
      const rotatedX = vector.x * cosRotation + vector.z * sinRotation;
      const rotatedZ = -vector.x * sinRotation + vector.z * cosRotation;
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);
      const rotatedY = vector.y * cosTilt - rotatedZ * sinTilt;
      const depth = vector.y * sinTilt + rotatedZ * cosTilt;
      return {
        x: centerX + rotatedX * radius * scale,
        y: centerY - rotatedY * radius * scale,
        depth,
        visible: depth > -0.015,
      };
    }

    function projectCoordinates(lat, lon, scale = 1) {
      return projectVector(toVector(lat, lon), scale);
    }

    function drawStars() {
      stars.forEach((star) => {
        context.beginPath();
        context.fillStyle = `rgba(148, 199, 255, ${star.alpha})`;
        context.arc(star.x, star.y, star.size, 0, TAU);
        context.fill();
      });
    }

    function drawOrbit(time) {
      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.2);
      context.beginPath();
      context.strokeStyle = "rgba(100, 210, 255, 0.18)";
      context.lineWidth = 1;
      context.ellipse(0, 0, radius * 1.25, radius * 0.36, 0, 0, TAU);
      context.stroke();

      const progress = reducedMotion.matches ? 0.18 : (time * 0.000055) % 1;
      const angle = progress * TAU;
      context.beginPath();
      context.fillStyle = "rgba(100, 210, 255, 0.9)";
      context.shadowBlur = 18;
      context.shadowColor = "rgba(100, 210, 255, 0.9)";
      context.arc(Math.cos(angle) * radius * 1.25, Math.sin(angle) * radius * 0.36, 2.3, 0, TAU);
      context.fill();
      context.restore();
    }

    function drawSphere(time) {
      context.save();
      context.shadowBlur = 70;
      context.shadowColor = "rgba(0, 113, 227, 0.34)";
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, TAU);
      context.fillStyle = "#07111d";
      context.fill();
      context.restore();

      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, TAU);
      context.clip();

      const sphereGradient = context.createRadialGradient(
        centerX - radius * 0.38,
        centerY - radius * 0.42,
        radius * 0.06,
        centerX,
        centerY,
        radius * 1.12,
      );
      sphereGradient.addColorStop(0, "#275a89");
      sphereGradient.addColorStop(0.32, "#123556");
      sphereGradient.addColorStop(0.72, "#071827");
      sphereGradient.addColorStop(1, "#02060b");
      context.fillStyle = sphereGradient;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

      drawGraticule();
      drawRoutes(time);
      context.restore();

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, TAU);
      context.strokeStyle = "rgba(126, 220, 255, 0.4)";
      context.lineWidth = 1.2;
      context.shadowBlur = 20;
      context.shadowColor = "rgba(100, 210, 255, 0.52)";
      context.stroke();
      context.shadowBlur = 0;

      drawMarkers(time);
    }

    function drawGraticule() {
      context.lineWidth = 0.75;
      context.strokeStyle = "rgba(151, 210, 255, 0.16)";

      for (let lat = -60; lat <= 60; lat += 30) {
        const points = [];
        for (let lon = -180; lon <= 180; lon += 4) points.push(projectCoordinates(lat, lon));
        strokeVisiblePoints(points);
      }

      for (let lon = -180; lon < 180; lon += 30) {
        const points = [];
        for (let lat = -88; lat <= 88; lat += 4) points.push(projectCoordinates(lat, lon));
        strokeVisiblePoints(points);
      }
    }

    function strokeVisiblePoints(points) {
      context.beginPath();
      let drawing = false;
      points.forEach((point) => {
        if (!point.visible) {
          drawing = false;
          return;
        }
        if (!drawing) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
        drawing = true;
      });
      context.stroke();
    }

    function drawRoutes(time) {
      stops.forEach((stop, index) => {
        const selected = index === activeLocation.conferenceIndex;
        drawGreatCircle(hub, stop, selected ? "rgba(100, 210, 255, 0.88)" : "rgba(84, 156, 230, 0.11)", selected ? 1.8 : 0.7, selected, time);
      });

      if (!Number.isInteger(activeLocation.conferenceIndex) && Number.isFinite(activeLocation.lat) && Number.isFinite(activeLocation.lon)) {
        drawGreatCircle(hub, activeLocation, "rgba(255, 190, 78, 0.9)", 1.8, true, time);
      }
    }

    function drawGreatCircle(from, to, color, lineWidth, animated, time) {
      const start = toVector(from.lat, from.lon);
      const end = toVector(to.lat, to.lon);
      const dot = clamp(start.x * end.x + start.y * end.y + start.z * end.z, -1, 1);
      const omega = Math.acos(dot);
      if (omega < 0.0001) return;
      const sinOmega = Math.sin(omega) || 1;
      const points = [];

      for (let step = 0; step <= 48; step += 1) {
        const progress = step / 48;
        const startWeight = Math.sin((1 - progress) * omega) / sinOmega;
        const endWeight = Math.sin(progress * omega) / sinOmega;
        const vector = normalizeVector({
          x: start.x * startWeight + end.x * endWeight,
          y: start.y * startWeight + end.y * endWeight,
          z: start.z * startWeight + end.z * endWeight,
        });
        points.push(projectVector(vector));
      }

      context.save();
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      if (animated && !reducedMotion.matches) {
        context.setLineDash([7, 9]);
        context.lineDashOffset = -time * 0.018;
      }
      strokeVisiblePoints(points);
      context.restore();
    }

    function drawMarkers(time) {
      hitTargets = [];
      stops.forEach((stop, index) => {
        const point = projectCoordinates(stop.lat, stop.lon, 1.008);
        if (!point.visible) return;
        const selected = index === activeLocation.conferenceIndex;
        drawPoint(point, selected, time, selected ? "#64d2ff" : "rgba(128, 190, 255, 0.72)");
        hitTargets.push({ ...point, index });
      });

      if (!Number.isInteger(activeLocation.conferenceIndex) && Number.isFinite(activeLocation.lat) && Number.isFinite(activeLocation.lon)) {
        const point = projectCoordinates(activeLocation.lat, activeLocation.lon, 1.01);
        if (point.visible) drawPoint(point, true, time, "#ffbe4e");
      }
    }

    function drawPoint(point, selected, time, color) {
      const elapsed = Math.max(0, time - pulseStartedAt);
      const pulse = reducedMotion.matches ? 0 : (Math.sin(elapsed * 0.01) + 1) * 0.5;
      if (selected) {
        context.beginPath();
        context.strokeStyle = color;
        context.globalAlpha = 0.58 - pulse * 0.22;
        context.lineWidth = 1;
        context.arc(point.x, point.y, 10 + pulse * 7, 0, TAU);
        context.stroke();
        context.globalAlpha = 1;
      }
      context.beginPath();
      context.fillStyle = color;
      context.shadowBlur = selected ? 22 : 8;
      context.shadowColor = color;
      context.arc(point.x, point.y, selected ? 4.6 : 2.4, 0, TAU);
      context.fill();
      context.shadowBlur = 0;
    }

    function updateMotion(time) {
      if (targeting) {
        rotation = approachAngle(rotation, targetRotation, 0.075);
        tilt += (targetTilt - tilt) * 0.075;
        if (Math.abs(angleDifference(rotation, targetRotation)) < 0.002 && Math.abs(targetTilt - tilt) < 0.002) targeting = false;
      } else if (!dragging && !reducedMotion.matches && time > autoRotateAfter) {
        rotation += 0.00042;
      }
    }

    function render(time = 0) {
      updateMotion(time);
      context.clearRect(0, 0, width, height);
      drawStars();
      drawOrbit(time);
      drawSphere(time);
      stage.classList.add("has-canvas");
      window.requestAnimationFrame(render);
    }

    function pointerPosition(event) {
      const rect = canvas.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    function hitAt(event) {
      const point = pointerPosition(event);
      return hitTargets.find((target) => Math.hypot(point.x - target.x, point.y - target.y) <= 14);
    }

    canvas.addEventListener("pointerdown", (event) => {
      dragging = true;
      moved = false;
      previousX = event.clientX;
      previousY = event.clientY;
      targeting = false;
      autoRotateAfter = Number.POSITIVE_INFINITY;
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!dragging) {
        canvas.style.cursor = hitAt(event) ? "pointer" : "grab";
        return;
      }
      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      moved = moved || Math.abs(deltaX) + Math.abs(deltaY) > 3;
      rotation += deltaX * 0.006;
      tilt = clamp(tilt + deltaY * 0.004, -0.78, 0.78);
      previousX = event.clientX;
      previousY = event.clientY;
    });

    canvas.addEventListener("pointerup", (event) => {
      dragging = false;
      autoRotateAfter = performance.now() + 3200;
      canvas.style.cursor = "grab";
      if (!moved) {
        const hit = hitAt(event);
        if (hit) {
          selectConference(hit.index);
          window.dispatchEvent(new CustomEvent("conference-marker-select", { detail: hit.index }));
        }
      }
    });

    canvas.addEventListener("pointercancel", () => {
      dragging = false;
      canvas.style.cursor = "grab";
    });

    window.addEventListener("conference-select", (event) => selectConference(Number(event.detail)));
    window.addEventListener("atlas-moment-select", (event) => {
      const moment = resolveMoment(event.detail);
      if (moment) locate(moment);
    });

    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stage);
    else window.addEventListener("resize", resize);

    resize();
    render();
  }
}

function toVector(lat, lon) {
  const latitude = degreesToRadians(lat);
  const longitude = degreesToRadians(lon);
  const cosLatitude = Math.cos(latitude);
  return {
    x: cosLatitude * Math.sin(longitude),
    y: Math.sin(latitude),
    z: cosLatitude * Math.cos(longitude),
  };
}

function normalizeVector(vector) {
  const length = Math.hypot(vector.x, vector.y, vector.z) || 1;
  return { x: vector.x / length, y: vector.y / length, z: vector.z / length };
}

function degreesToRadians(value) {
  return value * Math.PI / 180;
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function angleDifference(from, to) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function approachAngle(from, to, amount) {
  return from + angleDifference(from, to) * amount;
}
