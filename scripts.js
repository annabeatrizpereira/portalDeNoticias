function aplicarReticencias() {
  const elementos = document.querySelectorAll(".t")

  let limite;

  if (window.innerWidth < 768) {
    // Tablet
    limite = 80;
  }

  elementos.forEach((elemento) => {
    const textoCompleto = elemento.dataset.full || elemento.textContent;

    const textoFinal =
      textoCompleto.length > limite
        ? textoCompleto.substring(0, limite).trim() + "..."
        : textoCompleto;

    elemento.textContent = textoFinal;
  });
}
// Chama ao carregar
aplicarReticencias();

// Opcional: atualiza ao redimensionar a janela
window.addEventListener("resize", aplicarReticencias);
