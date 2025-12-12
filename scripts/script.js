// Exemplo simples: animação suave ao clicar no menu
document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        const id = a.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
});
