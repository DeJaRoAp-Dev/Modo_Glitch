# Modo_Glitch

# 🌀 Modo Glitch: Rutina Creativa con Caos Controlado

Una rutina diaria interactiva inspirada en Pomodoros, diseñada para balancear productividad, creatividad y sorpresa. *Modo Glitch* altera tareas aleatoriamente con frases detonadoras como "Explora" o "Silencio", mientras reproduce música de fondo y guarda tus cambios en el navegador.

---

## 🚀 Características

- ⏱️ Rutina preconfigurada 9:00–12:00 basada en trading, estudio y creatividad
- 🔁 Activador Glitch con mutaciones estéticas controladas
- 🎧 Música de fondo automática (editable)
- ✍️ Tareas y horarios totalmente editables desde la interfaz
- 💾 Persistencia local con `localStorage`
- 📊 Contador de mutaciones activas
- 💫 Diseño inspirado en glitch art y terminales interactivas

---

## 🧠 ¿Cómo se usa?

1. **Carga la app en Vercel** o abre el `index.html` localmente.
2. Tu rutina se muestra con bloques de horario y actividad.
3. Puedes **editar cualquier tarea o hora** directamente en el campo de texto.
4. Haz clic en **“Activar Glitch 🔧”** para mutar aleatoriamente algunas tareas.
5. Usa **“Restablecer Rutina”** si quieres volver a la rutina original.
6. La música de fondo se reproduce automáticamente. Puedes reemplazarla por tu propio archivo `.mp3`.

---

## 🎵 Cambiar música de fondo

1. Sube tu archivo como `fondo.mp3` en la raíz del proyecto.
2. En el código, reemplaza la línea del audio:

```html
<audio id="musicBackground" src="fondo.mp3" autoplay loop></audio>
