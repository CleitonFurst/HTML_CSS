var cont = 0

function borda(lugia) {

    if (cont == 0) {
        document.getElementById(lugia).style.border = "5px solid";
        cont = cont + 1
    } else {
        document.getElementById(lugia).style.border = "none";
        cont = 0
    }


}

var cont2 = 0

function borda_gengar(gengar) {

    if (cont2 == 0) {
        document.getElementById(gengar).style.border = "5px solid";
        cont2 = cont2 + 1
    } else {
        document.getElementById(gengar).style.border = "none";
        cont2 = 0
    }
    if (cont == 1) {
        document.getElementById(gengar).style.color = "red";
    } else {
        document.getElementById(gengar).style.color = "blue";

    }


}

var cont3 = 0

function borda_dragonite(dragonite) {
    if (cont3 == 0) {
        document.getElementById(dragonite).style.border = "5px solid";
        cont3 = cont3 + 1
    } else {
        document.getElementById(dragonite).style.border = "none";
        cont3 = 0
    }

}

var vida = 100

function progress() {
    if (cont == 1 && cont2 == 1) {

        vida = vida - 10
        document.getElementById("progress_gengar").value = vida;
    }

}

function modal_fechar() {


    
        document.getElementById("open_href1").click();
 

    //document.getElementById("openModal2").style.opacity = "0";




}