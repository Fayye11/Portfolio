let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener("click", ()=> {


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

document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1); // Remove o "#" da âncora
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const menu = document.querySelector('.menu-toggle')
  const menuItem = document.querySelector('.menu-section')
  const scrollink = document.querySelector('.grid-2')
  const body = document.body;
  function clickfunction() {
    menu.classList.toggle('on')
  }
  menu.addEventListener('click', clickfunction)

  scrollink.addEventListener('click', overflow)

  function overflow() {
    body.style.overflow = "none"
  }

  
