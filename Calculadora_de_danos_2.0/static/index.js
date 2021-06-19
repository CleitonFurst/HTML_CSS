
const dragons = document.querySelectorAll(".dragon");
const fantasmas = document.querySelectorAll(".fantasma");
let vida_Gastly = 100;
let vida_Gengar = 100;
let vida_Haunter = 100;

let escolha = 0;
let escolha2 = 0;


for (const dragon of dragons) {
    dragon.addEventListener('click', function () {
        if (document.getElementsByClassName('selecionado').length < 1) {
            this.classList.add('selecionado');
            escolha = this.getAttribute('data-nome');
            //vida = this.getAttribute('data-vida');
          
        } else {
            this.classList.remove('selecionado');
        }

    })

}
for (const fantasma of fantasmas){
    fantasma.addEventListener('click', function (){
        if(document.getElementsByClassName('selecionado2').length < 1){
            this.classList.add('selecionado2');//adiciona aclasse para a tag
            escolha2 = this.getAttribute('data-nome');
            //vida = this.getAttribute('data-vida')
            alert(escolha2)
        }else{
            this.classList.remove('selecionado2');
        }

    })
}
function progress(){
    alert(escolha)
    alert(escolha2)
    
    if ((escolha == 'Lugia') && (escolha2 == 'Gastly')){                 
        vida_Gastly = vida_Gastly - 10
        document.getElementById("vida_4").value = vida_Gastly;
        alert(vida_Gastly)
    
    }
    if ((escolha == 'Lugia') && (escolha2 == 'Gengar')){                 
        vida_Gengar = vida_Gengar - 10
        document.getElementById("vida_5").value = vida_Gengar;
        alert(vida_Gengar)

    }
    if ((escolha == 'Lugia') && (escolha2 == 'Haunter')){                 
        vida_Haunter = vida_Haunter - 10
        document.getElementById("vida_6").value = vida_Haunter;
        alert(vida_Haunter)
    
    }
    if ((escolha == 'Dragonite') && (escolha2 == 'Gastly')){                 
        vida_Gastly = vida_Gastly - 10
        document.getElementById("vida_4").value = vida_Gastly;
        alert(vida_Gastly)
    
    }
    if ((escolha == 'Dragonite') && (escolha2 == 'Gengar')){                 
        vida_Gengar = vida_Gengar - 10
        document.getElementById("vida_5").value = vida_Gengar;
        alert(vida_Gengar)

    }
    if ((escolha == 'Dragonite') && (escolha2 == 'Haunter')){                 
        vida_Haunter = vida_Haunter - 10
        document.getElementById("vida_6").value = vida_Haunter;
        alert(vida)
    
    }
    if ((escolha == 'Mega Charizard X') && (escolha2 == 'Gastly')){                 
        vida_Gastly = vida_Gastly - 10
        document.getElementById("vida_4").value = vida_Gastly;
        alert(vida_Gastly)
    
    }
    if ((escolha == 'Mega Charizard X') && (escolha2 == 'Gengar')){                 
        vida_Gengar = vida_Gengar - 10
        document.getElementById("vida_5").value = vida_Gengar;
        alert(vida_Gengar)

    }
    if ((escolha == 'Mega Charizard X') && (escolha2 == 'Haunter')){                 
        vida_Haunter = vida_Haunter - 10
        document.getElementById("vida_6").value = vida_Haunter;
        alert(vida_Haunter)
    
    }


}


