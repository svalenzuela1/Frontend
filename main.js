

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
}

//main app logic
getGames()

//show image names
const showGames = (games) => {
    console.log(games)
    games.forEach(game => {
        console.log(game)
        const $content = $('<div>').html(`
        <h1>${game.name}</h1>
        <h3>${game.description}</h3>
        <img src=${game.imageURL}>
        <h5> ${game.price}</h6>
    `)
       // $(content).css("background-color","purple")
        $('body').append($content)
})}

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
 

