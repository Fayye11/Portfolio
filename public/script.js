const chk = document.getElementById('chk')

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark')
})

window.sr = ScrollReveal({ reset: true})
sr.reveal('.area-1', {
    durantion: 2000,
    rotate: {x: 80, y: 0, z: 0}
})
sr.reveal('.area-2', {
    durantion: 1000
})
sr.reveal('.area-3', {
    durantion: 2000,
    rotate: {x: 80, y: 0, z: 0}
})
sr.reveal('.area-4', {
    durantion: 1000
})


