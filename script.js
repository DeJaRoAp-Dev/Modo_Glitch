const rutinaExtendida = [
  { hora: "09:00", tarea: "Pomodoro 1 — Análisis técnico (Solana, LTC)" },
  { hora: "09:25", tarea: "Descanso — Café + revisión rápida" },
  { hora: "09:30", tarea: "Pomodoro 2 — Indicadores en TradingView (FVG, EMA, MACD)" },
  { hora: "09:55", tarea: "Descanso — Ajustes estéticos NeuroScheduler" },
  { hora: "10:00", tarea: "Pomodoro 3 — Prompt engineering para automatización" },
  { hora: "10:25", tarea: "Descanso — Exploración glitch art / terminal" },
  { hora: "10:30", tarea: "Pomodoro 4 — Desarrollo UI interactiva" },
  { hora: "10:55", tarea: "Descanso — Estiramiento + sonido analógico" },
  { hora: "11:00", tarea: "Pomodoro 5 — Estudio certificado Web3 / Blockchain" },
  { hora: "11:25", tarea: "Descanso — Micro journaling + revisión de progreso" },
  { hora: "11:30", tarea: "Pomodoro 6 — Testing scripts + ajustes UX" },
  { hora: "11:55", tarea: "Preparación — Transición para bloque post-12:00" },
  { hora: "12:00", tarea: "Almuerzo" },
  { hora: "14:00", tarea: "Optimización NeuroScheduler" },
  { hora: "17:00", tarea: "Análisis técnico + Revisión general" }
];

const glitchKeywords = ["Explora", "Silencio", "Rompe", "Construye", "Juega", "Desconecta", "Escapa"];
const glitchEstilos = ["creativo", "educativo", "lúdico"];
const glitchChance = 0.2;

const rutinaLista = document.getElementById("rutinaLista");
const activateBtn = document.getElementById("activateBtn");
const resetBtn = document.getElementById("resetBtn");
const statsPanel = document.getElementById("stats");
const glitchSound = document.getElementById("glitchSound");
const musicBackground = document.getElementById("musicBackground");

const addBtn = document.getElementById("addBtn");
const newHoraInput = document.getElementById("newHora");
const newTareaInput = document.getElementById("newTarea");

function cargarRutina() {
  let data = localStorage.getItem("rutinaGlitch");
  return data ? JSON.parse(data) : rutinaExtendida;
}

function guardarRutina(rutina) {
  localStorage.setItem("rutinaGlitch", JSON.stringify(rutina));
}

function aplicarGlitch() {
  const rutina = cargarRutina();
  rutinaLista.innerHTML = "";
  let mutaciones = 0;

  rutina.forEach((bloque, index) => {
    const li = document.createElement("li");
    li.classList.add("editable");

    const input = document.createElement("input");
    input.value = `${bloque.hora} — ${bloque.tarea}`;
    input.addEventListener("change", () => {
      const nuevoTexto = input.value;
      const partes = nuevoTexto.split("—");
      rutina[index] = {
        hora: partes[0]?.trim() || "00:00",
        tarea: partes[1]?.trim() || "Tarea modificada"
      };
      guardarRutina(rutina);
      aplicarGlitch(); // refresh list to update
    });

    if (Math.random() < glitchChance) {
      const keyword = glitchKeywords[Math.floor(Math.random() * glitchKeywords.length)];
      const estilo = glitchEstilos[Math.floor(Math.random() * glitchEstilos.length)];
      input.value = `⚠️ ${keyword} (${estilo}) — interpretación libre`;
      li.classList.add("glitch");
      mutaciones++;
      glitchSound.play();
    }

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.style.marginLeft = "0.5rem";
    deleteBtn.style.padding = "0.2rem 0.5rem";
    deleteBtn.style.fontSize = "0.8rem";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => {
      rutina.splice(index, 1);
      guardarRutina(rutina);
      aplicarGlitch();
    });

    li.appendChild(input);
    li.appendChild(deleteBtn);
    rutinaLista.appendChild(li);
  });

  statsPanel.textContent = mutaciones;
}

activateBtn.addEventListener("click", () => {
  aplicarGlitch();
  musicBackground.play();
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("rutinaGlitch");
  aplicarGlitch();
});

addBtn.addEventListener("click", () => {
  const hora = newHoraInput.value;
  const tarea = newTareaInput.value.trim();
  if (!hora || !tarea) {
    alert("Por favor, ingresa hora y tarea válidas.");
    return;
  }
  const rutina = cargarRutina();
  rutina.push({ hora, tarea });
  guardarRutina(rutina);
  newHoraInput.value = "";
  newTareaInput.value = "";
  aplicarGlitch();
});

window.addEventListener("load", aplicarGlitch);
