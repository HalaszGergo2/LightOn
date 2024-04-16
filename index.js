import { htmlLetrehoz, leFelKapcsol, osszLekapcsolt, ujJatek, listaLetrehoz } from "./fuggvenyek.js";
const LISTA=listaLetrehoz()
    $("main").html(htmlLetrehoz(LISTA))
    leFelKapcsol(LISTA);
    osszLekapcsolt(LISTA);
    ujJatek()