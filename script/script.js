const expand = Array.from(document.querySelectorAll(".competencia__box"));
const modal = document.getElementsByClassName("modal")[0];
const btn = Array.from(document.querySelectorAll(".button-interesse"));
const span = document.getElementById("close");

expand.forEach((e) => {
    e.addEventListener("click", (e) => {
        //se o elemento atual já esta ativo e é clicado "desativamos" ele.
        if (e.currentTarget.classList.contains("active"))
            e.currentTarget.classList.remove("active");
        //se o elemento atual nao esta ativo, desativa todos os outros elementos e ativa ele
        else {
            expand.forEach((e) => e.classList.remove("active"));
            e.currentTarget.classList.add("active");
        }
    });
});

btn.forEach((e) =>
    e.addEventListener("click", () => (modal.style.display = "flex"))
);

span.onclick = () => (modal.style.display = "none");

window.onclick = (event) => {
    if (event.target.classList.contains("modal")) {
        modal.style.display = "none";
    }
};
