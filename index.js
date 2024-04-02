$(document).ready( function() {
    $("main").html(htmlLetrehoz(listaLetrehoz()))
    esemenyLetrehoz()
});

function htmlLetrehoz(LISTA){
    
    let txt = `<h1>Light On játék</h1>
    <div class='gombok'>`
    for (let index = 0; index < LISTA.length; index++) {
        
        if(LISTA[index] === 0){
            txt += `<div class='lekapcsolt' id='${index}'>${LISTA[index]}</div>`
        }
        if(LISTA[index] === 1){
            txt += `<div class='felkapcsolt'  id='${index}'>${LISTA[index]}</div>`
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


function lekapcsol(){
    const FELKAPCSLISTA = []
    const FELKAPCSOLMEGFOG = $(".felkapcsolt")
    FELKAPCSOLMEGFOG.on("click", function(event){
        
        let id = event.target.id
        FELKAPCSLISTA.push(id)
        console.log(id)
        console.log(FELKAPCSLISTA)
    })
    return FELKAPCSLISTA
}



function felkapcsol(){
    const LEKAPCSOLMEGFOG = $(".lekapcsolt")
    const LEKAPCSLISTA = []
    LEKAPCSOLMEGFOG.on("click", function(event){
        
        let id = event.target.id
        LEKAPCSLISTA.push(id)
        const LISTAELEM = LEKAPCSLISTA[index]
        LISTAELEM.addClass(".felkapcsolt")
        console.log(id)
        console.log(LEKAPCSLISTA)
        
    })
}




function esemenyLetrehoz(LISTA){
    felkapcsol()
    lekapcsol()
    
}
