const cardPokemons = document.querySelectorAll(".card_pokemons");/*manipulkmkkkkk  ;+
  ar elementos da classe */

var pok1 = 0
var pok2 = 0
var pok3 = 0
var pok4 = 0
var pok5 = 0
var pok6 = 0
for (const cardPokemon of cardPokemons) {// igual ao for feito no html usando python
    // para cada card dentro do grupo 
    cardPokemon.addEventListener('click', function () {

        const nomePokemon = this.getAttribute('data-nome');
        if (!this.classList.contains('selecionado')) {
            this.classList.add('selecionado');//Controlando o que esta selecionado 

            pokmons = nomePokemon

            if (pokmons == 'Lugia') {
                pok1 = 1
            }
            if (pokmons == 'Gastly')
                pok2 = 1

        } else {
            this.classList.remove('selecionado');
            const pokemonsSelecionados = document.querySelectorAll('.selecionado');//puxar o nome do card que foi clkicado e trazer quandos cards ainda estão selecionados 
            if (pokemonsSelecionados.length >= 1) {
                pokemonSelecionado.innerHTML = `VOcê desmarcor o pokemon <b>${nomePokemon}</b>. Restantes:<b>${pokemonsSelecionados.length}</b>`;

            } else {
                pokemonSelecionado.innerHTML = 'Selecione um Pokemon';
            }


        }





    })//indica para o javascript o que vai acontecer quandoi clicar na imagem 

}

var vida = 100

function progress() {
    if (pok1 == 1) {

        vida = vida - 10
        document.getElementById("progress_gengar").value = vida;
    }

}
