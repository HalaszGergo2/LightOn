$("load", function () {
    $("body").html(htmlLetrehoz())
    
});

function htmlLetrehoz(LISTA){
    listaLetrehoz()
    let txt = `<h1>Light On játék</h1>
    <div class='gombok'>`
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<div class='gomb'></div>`
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


function felkapcsol(){
    
}


function esemenyLetrehoz(LISTA){
    const LEKAPCSOLMEGFOG = $(".lekapcsolt")
    
}
