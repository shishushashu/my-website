const immagini = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'
]

function randomizza() {

    const elemento = document.getElementById('foto')
    const unica = Math.floor(Math.random() * immagini.length)
    elemento.src = immagini[unica]
}

window.onload = randomizza;