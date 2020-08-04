

//const {productModel, cartModel} = require("../backend-api/models/schemas.js")


const $gameImages = $('<div>').addClass('gameImages')
const URL = 'https://project2-backend-api.herokuapp.com'


fetch( URL + '/')
.then(response => response.json())
.then(data => {
    console.log(data)
})



//global variables 

//functions
const getGameImages = async () => {
    const response = await fetch('http://localhost:3000/')
    const {product, cart} = await response.json()
    console.log(product, cart)
    showGames(product)
}

//main app logic
getGameImages()

const showGames = (games) => {
    console.log(games)
    games.forEach(game => {
        console.log(game)
        const $ul = $('<ul>').html(`
        <h1>${game.name}</h1>
    `)

        $('body').append($ul)
})

}