

//const {productModel, cartModel} = require("../backend-api/models/schemas.js")


//const $gameImages = $('<div>').addClass('gameImages')
const URL = 'http://localhost:3000'//'https://project2-backend-api.herokuapp.com'

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
    showCart(cart[1].product)
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
        $('.games').append($gameHeader)
        
        const $gameDescription = $('<div>').html(`
        <h3>${game.description}</h3>`).addClass('gameDescription')
        $('.games').append($gameDescription)

        const $gameImage = $('<div>').html(`
        <img src=${game.imageURL}>`).addClass('gameImage')
        $('.games').append($gameImage)

        const $gamePrice = $('<div>').html(`
        <h5>${game.price}</h5>`).addClass('gamePrice')
        $('.games').append($gamePrice)

        const $addToCart = $('<div>')
        .append($('<button>').text('Add To Cart').attr('id', game._id).on('click', addItemToCart).addClass('addToCart'))
        $('.games').append($addToCart)
})}

const createCart = async () => {
    const response = await fetch (URL + '/carts', {
        method: "post"
    }).then(res => res.json()) 
    console.log(response)
    $('button.cart').attr('id', response._id)
    return true 
}

const addItemToCart = async (event) => {

if(!$('button.cart').attr('id')){
   await createCart()
}



    console.log(event.target.id)

    const body = {
        productToAdd: event.target.id
}
const response = await fetch(URL + '/carts/' +  $('button.cart').attr('id'), {
    method: "put", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)

}).then(res => res.json())

console.log(response)
showCart(response.product)
}


///////
const showCart = (items) => {
    console.log(items)
    $('#requestCart').empty() 
    items.forEach(item => {
        console.log(item)

        const $firstItem = $('<div>').html(`
        <h1>${item.name}</h1>
        <h1>${item.description}</h1>`)
        $('#requestCart').append($firstItem)
    })
}


//TRYING TO TARGET ID 

//const catchProduct = async (response) => {
  //  const response = await fetch(URL + '/carts')
//}







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
 

