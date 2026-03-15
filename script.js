// trocar dia

function mostrarDia(dia) {

    document.querySelectorAll(".dia")
        .forEach(el => el.classList.remove("ativo"))

    document.getElementById(dia)
        .classList.add("ativo")

}

// marcar exercício

const exercicios = document.querySelectorAll(".exercicio")

exercicios.forEach(el => {

    let id = el.dataset.id

    if (localStorage.getItem(id) === "feito") {
        el.classList.add("feito")
    }

    el.addEventListener("click", () => {

        el.classList.toggle("feito")

        if (el.classList.contains("feito")) {
            localStorage.setItem(id, "feito")
        } else {
            localStorage.removeItem(id)
        }

    })

})
