'use strict'

/*Variables*/
const datos = document.getElementById('datos');
let offset = 1;
let limit = 898;



const pokemons = async() => {
    for(let i = offset; i <= offset + limit; i++){
        await pokemon(i)
    }
}


const pokemon = async(id) => {
    const url = await fetch('https://pokeapi.co/api/v2/pokemon/'+id.toString())
    const pokemon = await url.json()
    cardsPokemon(pokemon)
    console.log(pokemon)
}

const cardsPokemon = (pokemon) => {
    const {sprites, id, name, types} = pokemon
    const divCard = document.createElement('div')
    divCard.classList.add('col-lg-2')
    divCard.classList.add('col-md-3')
    divCard.classList.add('col-sm-4')
    divCard.classList.add('col-xs-4')
    divCard.classList.add('cards1')

    const pokeInfo = `
        <div class="cardF">
            <div class="col-xs-6">
                <img src="${sprites.front_default}" alt="${name}" class="img-pokemon" >
            </div>  
            <div class="col-xs-6 p-3"> 
                <p class="color-gray" style="margin-bottom:5px;">#${id.toString().padStart(3, 0)}</p>
                <h4 class="pokename">${name}</h4>
                <button class="btn btn-primary btn-sm pokename">${types.map(typeInfo => typeInfo.type.name).join(' | ')}</button>
            </div>
        </div>
    `;
    
    
    divCard.innerHTML = pokeInfo
    datos.appendChild(divCard)
    


}

pokemons()



