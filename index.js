$(document).ready( function() {
    $("main").html(htmlLetrehoz(listaLetrehoz()))
});

function htmlLetrehoz(LISTA){
    
    let txt = `<h1>Light On játék</h1>
    <div class='gombok'>`
    for (let index = 0; index < LISTA.length; index++) {
        
        if(LISTA[index] === 0){
            txt += `<div class='lekapcsolt'>${LISTA[index]}</div>`
        }
        if(LISTA[index] === 1){
            txt += `<div class='felkapcsolt'>${LISTA[index]}</div>`
        }
    }
    txt += `</div>`
    return txt
}

function listaLetrehoz(){
    const LISTA = []
    
    for (let index = 0; index < 9; index++) {
        let random = Math.floor(Math.random()*2)
        LISTA.push(random)
        
    }
    console.log(LISTA)
    return LISTA
}
<<<<<<< HEAD


function felkapcsol(){
    
}


function esemenyLetrehoz(LISTA){
    const LEKAPCSOLMEGFOG = $(".lekapcsolt")
    
}
=======
>>>>>>> e060d76f4c082a0ef552da6b8f8ef883fc8ba46e
