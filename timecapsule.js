// Criar partículas animadas
for (let i = 0; i < 30; i++) {
  let particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = Math.random() * window.innerHeight + "px";
  particle.style.animationDuration = (5 + Math.random() * 10) + "s";
  particle.style.animationDelay = (Math.random() * 5) + "s";
}

// Contador regressivo até 06/10/2030
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
