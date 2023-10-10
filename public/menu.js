let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener("click", ()=> {
    document.body.style.overflow = show ? "hidden" : "initial"


    menuSection.classList.toggle("on", show)
    show = !show;
})


const titulo = document.querySelector('.digitando')

function ativaLetra(elemento) {
    const arrText = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    arrText.forEach((letra, i)=> {
        setTimeout(()=> {
            elemento.innerHTML += letra;

        }, 75 + i)
    })
}
ativaLetra(titulo)


