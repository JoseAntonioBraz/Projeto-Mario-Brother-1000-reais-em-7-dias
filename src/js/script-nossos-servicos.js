const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarFaleConosco(){
    form.style.left = "56.4%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function mostrarForm(){
    form.style.left = "56.4%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}