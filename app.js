
document.body.classList.add("locked");
const splashScreen = document.getElementById("splashScreen");
const enterExperience = document.getElementById("enterExperience");

enterExperience.addEventListener("click", () => {
  splashScreen.classList.add("hidden");
  document.body.classList.remove("locked");
  setTimeout(() => splashScreen.remove(), 900);
});

// ============================================================
// CONFIGURACIÓN RÁPIDA
// 1) Reemplaza los dos enlaces del álbum.
// 2) Cambia los perfiles de ejemplo.
// 3) Sustituye assets/portada.jpg y las fotos de assets/perfiles.
// ============================================================

const CONFIG = {
  uploadUrl: "https://photos.app.goo.gl/nWN6MP5tb2mmQkvc6",
  galleryUrl: "https://photos.app.goo.gl/nWN6MP5tb2mmQkvc6",
  coupleName: "Dora & Luis",
  eventDate: "26.07.2026"
};

const PROFILES = [
  {
    name: "Jhonathan Vasquez",
    age: 27,
    gender: "hombre",
    table: "Mesa #5",
    occupation: "Técnico motorizado, peleador de Jiu-Jitsu (BJJ/MMA).",
    quote: "La hora es la hora, porque antes de la hora no es la hora y después de la hora tampoco es la hora.",
    interests: ["✈️ Viajar", "🥋 MMA", "🏔️ Deportes extremos", "🏍️ Motos", "⚽ Fútbol"],
    accent: "#6f715f",
    accent2: "#31352d",
    weddingMatch: "Si acepta una salida... probablemente termine siendo una aventura en moto. 🏍️",
    image: "assets/perfiles/jhonathan.jpg"
  },
  {
    name: "Félix Balmaceda",
    age: 35,
    gender: "hombre",
    table: "Mesa #14",
    occupation: "Supervisor de operaciones, tronchatodo y tu mariachi.",
    quote: "Tú tranquila, y yo nervioso, bebé.",
    interests: ["✈️ Viajar", "🎤 Cantar", "💃 Bailar"],
    accent: "#b99b7d",
    accent2: "#46382e",
    weddingMatch: "Advertencia: podría dedicarte una canción antes del postre. 🎤😂",
    image: "assets/perfiles/felix.jpg"
  },
  {
    name: "Jean Pierre Alfaro",
    age: 33,
    gender: "hombre",
    table: "Mesa #6",
    occupation: "Esclavo de la agroexportación.",
    quote: "Si vino a Ica y no tomó vino, entonces ¿para qué mrd vino? 🍷",
    interests: ["🏃 Runner", "✈️ Viajes", "🥾 Trekking", "💙 Alianza Lima"],
    accent: "#bd7a4f",
    accent2: "#6a3b28",
    weddingMatch: "Riesgo alto de terminar planeando un viaje... o una ruta del vino. 🍷",
    image: "assets/perfiles/jean_pierre.jpg"
  },
  {
    name: "Wilbert Echevarría",
    age: 31,
    gender: "hombre",
    table: "Mesa #16",
    occupation: "Serenazgo",
    quote: "¡Arre porque arre... o oigaa!",
    interests: ["⚽ El fútbol", "🎵 La música", "❤️ El arte de hacer el amor"],
    accent: "#273a5a",
    accent2: "#111a2b",
    weddingMatch: "Si escuchas un \"¡ARRE!\", ya encontraste al dueño del perfil. ⚽😂",
    image: "assets/perfiles/wilbert.jpg"
  },
  {
    name: "Rosario Vásquez",
    age: 30,
    gender: "mujer",
    table: "Mesa #6",
    occupation: "Enfermera",
    quote: "¡Sé feliz hoy! Aunque solo sea por joder a los envidiosos.",
    interests: ["📚 Leer", "💃 Bailar", "✈️ Viajar"],
    accent: "#8db7d5",
    accent2: "#4c6f86",
    weddingMatch: "Si logras sacarle una sonrisa, probablemente ya empezaste con el pie derecho. 💙",
    image: "assets/perfiles/rosario.jpg"
  },
  {
    name: "Pamela Montero",
    age: 33,
    ageText: "33 · Edad de Cristo",
    gender: "mujer",
    table: "Mesa #8",
    occupation: "Control de calidad (rubro pesquería).",
    quote: "En un mundo de cuerdos, el loco es el más feliz. 😋",
    interests: ["💼 Negocios", "🎌 Anime", "🍸 Tomar tragos", "🥳 Divertirse"],
    accent: "#9f314d",
    accent2: "#4a1827",
    weddingMatch: "Cuidado... podrías empezar hablando de anime y terminar brindando por un nuevo negocio. 🍻✨",
    image: "assets/perfiles/pamela.jpg"
  },
  {
    name: "Yumiko Yogui",
    age: 21,
    gender: "mujer",
    table: "Mesa #3",
    occupation: "Estudiante de Administración de Negocios Internacionales, bailarina de marinera norteña y emprendedora.",
    quote: "Mi carácter no es para princesos; es para saiyayines.",
    interests: ["💃 Bailar", "✈️ Viajar", "👗 Moda", "💄 Belleza"],
    accent: "#a8745f",
    accent2: "#4a3028",
    weddingMatch: "Si la invitas a bailar, probablemente ya tengas medio match asegurado. 💃✨",
    image: "assets/perfiles/yumiko.jpg"
  },
  {
    name: "Fiorella Poves",
    age: 36,
    gender: "mujer",
    table: "Mesa #14",
    occupation: "Ingeniera",
    quote: "Somos lo que somos.",
    interests: ["✈️ Viajar", "💃 Bailar caporal", "⭐ Star Wars"],
    accent: "#7a6756",
    accent2: "#3f332a",
    weddingMatch: "Si la conversación termina hablando de un viaje, caporal o Star Wars... vas por muy buen camino. ✈️✨",
    image: "assets/perfiles/fiorella.jpg"
  },
  {
    name: "Estefany Murga",
    age: 36,
    gender: "mujer",
    table: "Mesa #5",
    occupation: "Ingeniera electrónica",
    quote: "No busco impresionar; aun así, suele pasar. 😉",
    interests: ["👔 Vestir bien", "👩‍🍳 Cocinar", "🍷 Descubrir nuevos restaurantes con una buena conversación"],
    accent: "#b06b7b",
    accent2: "#4e2631",
    weddingMatch: "Si la invitas a comer, elige bien el restaurante... la conversación corre por cuenta de ambos. 🍷✨",
    image: "assets/perfiles/estefany.jpg"
  }
];

const profileCountLabel = document.getElementById("profileCountLabel");
if (profileCountLabel) profileCountLabel.textContent = `${PROFILES.length} personas disponibles`;

const views = document.querySelectorAll(".view");
document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

function showView(name){
  views.forEach(v => v.classList.remove("active"));
  document.getElementById(`view-${name}`).classList.add("active");
  window.scrollTo({top: document.querySelector("main").offsetTop - 10, behavior:"smooth"});
}

const uploadLink = document.getElementById("uploadLink");
const galleryLink = document.getElementById("galleryLink");
if (uploadLink) uploadLink.href = CONFIG.uploadUrl;
if (galleryLink) galleryLink.href = CONFIG.galleryUrl;

let activeFilter = "todos";
let filtered = [];
let currentIndex = 0;

const deck = document.getElementById("deck");
const emptyState = document.getElementById("emptyState");
const swipeActions = document.getElementById("swipeActions");

function resetDeck(){
  filtered = PROFILES.filter(p => activeFilter === "todos" || p.gender === activeFilter);
  currentIndex = 0;
  renderDeck();
}

function renderDeck(){
  deck.innerHTML = "";
  emptyState.style.display = "none";
  deck.style.display = "block";
  swipeActions.style.display = "flex";

  if(currentIndex >= filtered.length){
    deck.style.display = "none";
    swipeActions.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  const cards = filtered.slice(currentIndex, currentIndex + 3);
  cards.reverse().forEach((profile, i) => {
    const card = createCard(profile);
    const depth = cards.length - 1 - i;
    card.style.transform = `translateY(${depth*8}px) scale(${1-depth*0.025})`;
    card.style.zIndex = i + 1;
    deck.appendChild(card);
  });

  const top = deck.lastElementChild;
  attachSwipe(top);
}

function createCard(p){
  const el = document.createElement("article");
  el.className = "profile-card";
  el.setAttribute("data-name", p.name);
  el.innerHTML = `
    <div class="profile-main" style="--accent:${p.accent}; --accent2:${p.accent2}">
      <div class="profile-image" style="background-image:url('${p.image}')"></div>
      <div class="profile-gradient"></div>

      <div class="card-stamp stamp-like">ME GUSTA</div>
      <div class="card-stamp stamp-nope">SIGUIENTE</div>

      <div class="profile-overlay">
        <h3>${p.name}, ${p.ageText || p.age}</h3>
        <div class="profile-meta">${p.occupation} · ${p.table}</div>
        <div class="profile-badges">${p.interests.map(x => `<span class="badge">${x}</span>`).join("")}</div>
      </div>
    </div>

    <div class="profile-extra" style="--accent:${p.accent}; --accent2:${p.accent2}">
      <div class="extra-block">
        <div class="extra-label">💬 Su frase favorita:</div>
        <div class="extra-quote">“${p.quote}”</div>
      </div>

      <div class="extra-block wedding-box">
        <div class="extra-label">🤖 Wedding Match dice:</div>
        <div class="extra-text">${p.weddingMatch}</div>
      </div>
    </div>`;
  el.dataset.name = p.name;
  return el;
}

function attachSwipe(card){
  let startX = 0, currentX = 0, dragging = false;
  const onStart = e => {
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    card.style.transition = "none";
  };
  const onMove = e => {
    if(!dragging) return;
    currentX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    const rot = currentX / 18;
    card.style.transform = `translateX(${currentX}px) rotate(${rot}deg)`;
    card.querySelector(".stamp-like").style.opacity = Math.max(0, currentX/100);
    card.querySelector(".stamp-nope").style.opacity = Math.max(0, -currentX/100);
  };
  const onEnd = () => {
    if(!dragging) return;
    dragging = false;
    if(Math.abs(currentX) > 90) swipe(currentX > 0 ? "like" : "nope");
    else{
      card.style.transition = ".25s ease";
      card.style.transform = "translateX(0) rotate(0)";
      card.querySelectorAll(".card-stamp").forEach(x => x.style.opacity = 0);
    }
    currentX = 0;
  };
  card.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);
  card.addEventListener("touchstart", onStart, {passive:true});
  card.addEventListener("touchmove", onMove, {passive:true});
  card.addEventListener("touchend", onEnd);
}

function swipe(type){
  if(currentIndex >= filtered.length) return;
  const card = deck.lastElementChild;
  if(card){
    card.style.transition = ".35s ease";
    card.style.transform = `translateX(${type==="like"?650:-650}px) rotate(${type==="like"?25:-25}deg)`;
  }
  const p = filtered[currentIndex];
  setTimeout(() => {
    currentIndex++;
    renderDeck();
    if(type === "like") showLikeModal(p);
  }, 230);
}

function showLikeModal(p){
  openModal(`
    <div style="font-size:3rem">💘</div>
    <h3>¡Match potencial!</h3>
    <p><strong>Compatibilidad estimada: 87%</strong></p>
    <p><em>Basado en absolutamente nada... pero vale la pena intentarlo.</em></p>
    <p><strong>${p.name}</strong> estará en <strong>${p.table}</strong>.</p>
    <button class="primary" onclick="closeModal()">Lo buscaré en la fiesta</button>
  `);
}

function showInfo(){
  const p = filtered[currentIndex];
  if(!p) return;
  openModal(`
    <img class="modal-photo" src="${p.image}" alt="${p.name}">
    <h3>${p.name}, ${p.ageText || p.age}</h3>
    <p><strong>${p.occupation}</strong> · ${p.table}</p>
    <p>“${p.quote}”</p>
    <p>${p.interests.join(" · ")}</p>
  `);
}

function openModal(html){
  document.getElementById("modalContent").innerHTML = html;
  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.getElementById("modal").setAttribute("aria-hidden","true");
}
window.closeModal = closeModal;

document.getElementById("modalClose").onclick = closeModal;
document.getElementById("modal").addEventListener("click", e => {
  if(e.target.id === "modal") closeModal();
});
document.getElementById("likeBtn").onclick = () => swipe("like");
document.getElementById("nopeBtn").onclick = () => swipe("nope");
document.getElementById("infoBtn").onclick = showInfo;
document.getElementById("restartBtn").onclick = resetDeck;

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    resetDeck();
  });
});

resetDeck();

function openAlbumWithMessage(mode){
  const title = mode === "upload" ? "Abriendo el álbum..." : "Cargando los recuerdos...";
  const message = mode === "upload"
    ? "Gracias por ayudarnos a conservar esta noche."
    : "Prepárate para revivir los mejores momentos.";
  openModal(`
    <div style="font-size:3rem">📸</div>
    <h3>${title}</h3>
    <p>${message}</p>
  `);
  setTimeout(() => {
    window.open("https://photos.app.goo.gl/nWN6MP5tb2mmQkvc6", "_blank", "noopener");
    closeModal();
  }, 650);
}
window.openAlbumWithMessage = openAlbumWithMessage;
