// -----------------------------
// Partículas de fundo (flutuantes)
// -----------------------------
for (let i = 0; i < 30; i++) {
  let particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = Math.random() * window.innerHeight + "px";
  particle.style.animationDuration = (5 + Math.random() * 10) + "s";
  particle.style.animationDelay = (Math.random() * 5) + "s";
}

// -----------------------------
// Contador regressivo até 06/10/2030
// -----------------------------
function atualizarContador() {
  const destino = new Date("October 6, 2030 00:00:00").getTime();
  const agora = new Date().getTime();
  const distancia = destino - agora;

  if (distancia < 0) {
    document.getElementById("contador").innerHTML = "A cápsula foi aberta!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// -----------------------------
// Envio do formulário com animação
// -----------------------------
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita envio normal

  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // limpa formulário
      mostrarAnimacaoCapsula();
    } else {
      alert('Erro ao enviar a mensagem.');
    }
  })
  .catch(() => alert('Erro ao enviar a mensagem.'));
});

// -----------------------------
// Função de animação da cápsula
// -----------------------------
function mostrarAnimacaoCapsula() {
  const capsula = document.querySelector('.capsula');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Mensagem central
  overlay.innerHTML = "Sua mensagem foi enviada com sucesso!";

  document.body.appendChild(overlay);

  // Criar partículas
  for (let i = 0; i < 70; i++) { // mais partículas
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // centraliza na cápsula
    particle.style.left = (capsula.offsetLeft + capsula.offsetWidth / 2) + "px";
    particle.style.top = (capsula.offsetTop + capsula.offsetHeight / 2) + "px";

    // movimentos aleatórios
    const tx = (Math.random() * 300 - 150) + "px";
    const ty = (Math.random() * 300 - 150) + "px";
    particle.style.setProperty('--tx', tx);
    particle.style.setProperty('--ty', ty);

    overlay.appendChild(particle);
  }

  // Remover overlay após 4 segundos
  setTimeout(() => {
    overlay.style.animation = "fadeOutOverlay 0.8s forwards";
    setTimeout(() => overlay.remove(), 800);
  }, 4000);
}
