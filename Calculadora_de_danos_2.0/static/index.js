
const dragons = document.querySelectorAll(".dragon");
const fantasmas = document.querySelectorAll(".fantasma");
const ataques = document.querySelectorAll(".ataque")
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
            
        }else{
            this.classList.remove('selecionado2');
        }

    })
}

function progress(){
    
   if((escolha != 0) && (escolha2 != 0)){ 
        if ((escolha == 'Lugia') && (escolha2 == 'Gastly')){                 
            vida_Gastly = vida_Gastly - Math.floor(Math.random() * 51);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://archive-media-1.nyafuu.org/vp/image/1486/31/1486318311062.gif';            
            document.getElementById('vida_4').value = vida_Gastly;
            alert(vida_Gastly)
            if (vida_Gastly < 0){
                document.getElementById('pokemon_4').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
         
        }
        if ((escolha == 'Lugia') && (escolha2 == 'Gengar')){                 
            vida_Gengar = vida_Gengar - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://archive-media-1.nyafuu.org/vp/image/1486/31/1486318311062.gif';
            document.getElementById("vida_5").value = vida_Gengar;            
            if (vida_Gengar < 0){
                document.getElementById('pokemon_5').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }

        }
        if ((escolha == 'Lugia') && (escolha2 == 'Haunter')){                 
            vida_Haunter = vida_Haunter - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://archive-media-1.nyafuu.org/vp/image/1486/31/1486318311062.gif';
            document.getElementById("vida_6").value = vida_Haunter;
            if (vida_Haunter < 0){
                document.getElementById('pokemon_6').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
           
        
        }
        if ((escolha == 'Dragonite') && (escolha2 == 'Gastly')){                 
            vida_Gastly = vida_Gastly - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://cdn2.scratch.mit.edu/get_image/gallery/3725473_170x100.png';
            document.getElementById("vida_4").value = vida_Gastly;
            if (vida_Gastly < 0){
                document.getElementById('pokemon_4').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
          
        
        }
        if ((escolha == 'Dragonite') && (escolha2 == 'Gengar')){                 
            vida_Gengar = vida_Gengar - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://cdn2.scratch.mit.edu/get_image/gallery/3725473_170x100.png';
            document.getElementById("vida_5").value = vida_Gengar;
            if (vida_Gengar < 0){
                document.getElementById('pokemon_5').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }

            

        }
        if ((escolha == 'Dragonite') && (escolha2 == 'Haunter')){                 
            vida_Haunter = vida_Haunter - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://cdn2.scratch.mit.edu/get_image/gallery/3725473_170x100.png';
            document.getElementById("vida_6").value = vida_Haunter;
            if (vida_Haunter < 0){
                document.getElementById('pokemon_6').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
           
        
        }
        if ((escolha == 'Mega Charizard X') && (escolha2 == 'Gastly')){                 
            vida_Gastly = vida_Gastly - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://2.bp.blogspot.com/-c_rp3918PN0/V9x2oGZ3XxI/AAAAAAAAi4Q/HeyxFEDcV4wYLINy-3kgEXi41SUeAm8VQCEw/s1600/Fire%2BBlast%2Bgif.gif';
            document.getElementById("vida_4").value = vida_Gastly;
            if (vida_Gastly < 0){
                document.getElementById('pokemon_4').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
        
        }
        if ((escolha == 'Mega Charizard X') && (escolha2 == 'Gengar')){                 
            vida_Gengar = vida_Gengar - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://2.bp.blogspot.com/-c_rp3918PN0/V9x2oGZ3XxI/AAAAAAAAi4Q/HeyxFEDcV4wYLINy-3kgEXi41SUeAm8VQCEw/s1600/Fire%2BBlast%2Bgif.gif';
            document.getElementById("vida_5").value = vida_Gengar;
            if (vida_Gengar < 0){
                document.getElementById('pokemon_5').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }

            

        }
        if ((escolha == 'Mega Charizard X') && (escolha2 == 'Haunter')){                 
            vida_Haunter = vida_Haunter - Math.floor(Math.random() * 20);
            document.getElementById("open_href").click();
            document.getElementById("ataque").src = 'https://2.bp.blogspot.com/-c_rp3918PN0/V9x2oGZ3XxI/AAAAAAAAi4Q/HeyxFEDcV4wYLINy-3kgEXi41SUeAm8VQCEw/s1600/Fire%2BBlast%2Bgif.gif';
            document.getElementById("vida_6").value = vida_Haunter;
            if (vida_Haunter < 0){
                document.getElementById('pokemon_6').src = 'https://i.pinimg.com/originals/43/e7/48/43e748bd92a5eb5813af7e0926adcaa4.gif'; 
            }
            if (vida_Haunter > 0){

            }
                
        }


    }else{
        alert('Escolha dois pokemons!!!')
}
}


function reiniciar(){
    document.getElementById("pokemon_4").src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81addb39-73dc-4884-a438-2a00426bd521/d493rv8-20dab60f-6ada-401f-99bd-f3068f4983fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxYWRkYjM5LTczZGMtNDg4NC1hNDM4LTJhMDA0MjZiZDUyMVwvZDQ5M3J2OC0yMGRhYjYwZi02YWRhLTQwMWYtOTliZC1mMzA2OGY0OTgzZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEVme08XnSokCF7fup7qEru-jZbaDa9YzjB1DPe8nL8';
    document.getElementById("vida_4").value = 100;
    document.getElementById("pokemon_5").src =  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb1e1cc4-5814-4eb3-9536-6e06df6d6065/d9ik7wx-c5855354-707e-429d-9c1c-90cd57cc2c16.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMWUxY2M0LTU4MTQtNGViMy05NTM2LTZlMDZkZjZkNjA2NVwvZDlpazd3eC1jNTg1NTM1NC03MDdlLTQyOWQtOWMxYy05MGNkNTdjYzJjMTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9f0B699bvU1LWxseuM6luPmY2s4I5rEJaifbRx6ERrk';
    document.getElementById("vida_5").value = 100;
    document.getElementById("pokemon_6").src = 'https://qph.fs.quoracdn.net/main-qimg-e4c386c979ceb16e2b5a06f7217de945';
    document.getElementById("vida_6").value = 100;
    vida_Gastly = 100;
    vida_Gengar = 100;
    vida_Haunter = 100;

}