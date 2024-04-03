$(document).ready( function() {
    const LISTA=listaLetrehoz()
    $("main").html(htmlLetrehoz(LISTA))
    leFelKapcsol(LISTA)
});

function htmlLetrehoz(LISTA){
    
    let txt = `<h1>Light On játék</h1>
    <div class='gombok'>`
    for (let index = 0; index < LISTA.length; index++) {
        
        if(LISTA[index] === 0){
            txt += `<div class='lekapcsolt' id='${index}'>${LISTA[index]}</div>`
        }
        if(LISTA[index] === 1){
            txt += `<div  class='felkapcsolt' id='${index}'>${LISTA[index]}</div>`
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




function leFelKapcsol(LISTA){
    const ELEM = $(".gombok")
    console.log(LISTA)
    ELEM.on("click", function(event){
        let id = event.target.id
        console.log(LISTA[id])
        if(LISTA[id] === 0){
            LISTA[id] = 1;
        }else{
            LISTA[id] = 0
        }
        

        console.log(id)
        $("main").html(htmlLetrehoz(LISTA))
        leFelKapcsol(LISTA)
    })
    

}




