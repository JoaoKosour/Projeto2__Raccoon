let expand = Array.from(document.querySelectorAll(".competencia__box"));

expand.forEach((node) => {
    node.addEventListener("click", (e) => {
        //se o elemento atual já esta ativo e é clicado "desativamos" ele.
        if (e.currentTarget.classList.contains("active"))
            e.currentTarget.classList.remove("active");
        //se o elemento atual nao esta ativo, desativa todos os outros elementos e ativa ele
        else {
            expand.forEach((node) => {
                node.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
        }
    });
});
