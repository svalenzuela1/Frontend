

//const {productModel, cartModel} = require("../backend-api/models/schemas.js")


//const $gameImages = $('<div>').addClass('gameImages')
const URL = 'https://project2-backend-api.herokuapp.com'
fetch( URL + '/')
.then(response => response.json())
.then(data => {
    console.log(data)
})




//functions
const getGames = async () => {
    const response = await fetch('http://localhost:3000/')
    const {product, cart} = await response.json()
    console.log(product, cart)
    showGames(product)
    showCart(cart)
}

//main app logic
getGames()

//PUT THIS BACK IN CONTENT IF ALL ELSE FAILS
//<h3>${game.description}</h3>
// <img src=${game.imageURL}>
//</img>/ <h5> ${game.price}</h5>


//show image names
const showGames = (games) => {
    console.log(games)
    games.forEach(game => {
        console.log(game)
        const $gameHeader = $('<div>').html(`
        <h1>${game.name}</h1>`).addClass('gameHeader')
       // $(content).css("background-color","purple")
        $('body').append($gameHeader)
        
        const $gameDescription = $('<div>').html(`
        <h3>${game.description}</h3>`).addClass('gameDescription')
        $('body').append($gameDescription)

        const $gameImage = $('<div>').html(`
        <img src=${game.imageURL}>`).addClass('gameImage')
        $('body').append($gameImage)

        const $gamePrice = $('<div>').html(`
        <h5>${game.price}</h5>`).addClass('gamePrice')
        $('body').append($gamePrice)

        const $addToCart = $('<div>').html(`
        <button>Add To Cart<button>`).addClass('addToCart')
        $('body').append($addToCart)
})}

const showCart = (items) => {
    console.log(items) 
    items.forEach(item => {
        console.log(item)

        const $firstItem = $('<div>').html(`
        <h1>${item.orderSummary}</h1>`)
        $('body').append($firstItem)
    })
}

//CSS for $content
//$(content).css("display","flex")
//$(content).css("text-align","center")


//HAMBURGER MENU
const $burger = $(".burger")
const $link = $(".link")
let show = false;

const showMenu = (event) => {
    if (show) {
        $link.each(function(index){
            $(this).css("display","none")
        })
        show = false
    } else {
        $link.each(function(index){
            $(this).css("display","block")
        })
        show = true
    }
}

$burger.on("click", showMenu)
//Hamburger menu code ends here
 

