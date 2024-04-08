$(document).ready( function() {
    const LISTA=listaLetrehoz()
    $("main").html(htmlLetrehoz(LISTA))
    leFelKapcsol(LISTA);
    osszLekapcsolt(LISTA);
    ujJatek()
});

export function htmlLetrehoz(LISTA){
    
    let txt = `
    <h1>Light On játék</h1>
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
    txt += `<div>
        <p>Kapcsold le az összes lámpát! (Mind legyen sárga) </p>
        <p>Lekapcsolt lámpák száma:</p>
        <b id="lekapcsoltakSzama"></b>
        <button> Új Játék </button>
    </div>`
    return txt
}

export function listaLetrehoz(){
    const LISTA = []
    
    for (let index = 0; index < 9; index++) {
        let random = Math.floor(Math.random()*2)
        LISTA.push(random)
    }
    console.log(LISTA)
    return LISTA
}




export function leFelKapcsol(LISTA){
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
        osszLekapcsolt(LISTA)
    })
    

}

export function osszLekapcsolt(LISTA){
    let lekapcsoltak = 0

    for (let index = 0; index < LISTA.length; index++) {
        if (LISTA[index] == 0) {
          lekapcsoltak += 1
        }
        
      }
      
      if (lekapcsoltak === LISTA.length) {
        window.alert("Hurrá, meghosszabítottad a Föld életét!")
      } 
      
      
        const LEKAPCSOLTAKSZAMA = $("#lekapcsoltakSzama")
        LEKAPCSOLTAKSZAMA.html(lekapcsoltak)
        ujJatek()

}

export function ujJatek(LISTA){
    const GOMBMEGFOG = $("button")
    GOMBMEGFOG.on("click", function(){
        const LISTA=listaLetrehoz()
        $("main").html(htmlLetrehoz(LISTA))
        leFelKapcsol(LISTA)
        osszLekapcsolt(LISTA)
        ujJatek(LISTA)
    })
}


