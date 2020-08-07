
const URL = 'http://localhost:3000' //'https://project2-backend-api.herokuapp.com'

fetch( URL + '/')
.then(response => response.json())
.then(data => {
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



//show image names
const showGames = (games) => {
   
    games.forEach(game => {
        console.log(game)
        const $gameHeader = $('<div>').html(`
        <h1>${game.name}</h1>`).addClass('gameHeader')
       
        $('.games').append($gameHeader)
        
        const $gameDescription = $('<div>').html(`
        <h3><i>${game.description}</i></h3>`).addClass('gameDescription')
        $('.games').append($gameDescription)

        const $gameImage = $('<div>').html(`
        <img src=${game.imageURL}>`).addClass('gameImage')
        $('.games').append($gameImage)

        const $gamePrice = $('<div>').html(`
        <h5>${game.price}</h5>`).addClass('gamePrice')
        $('.games').append($gamePrice)

        const $addToCart = $('<div>').addClass('centerButton')
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


showCart(response.product)
}


///////


const showCart = (items) => {
    
    $('#requestCart').empty() 
    items.forEach(item => {
       
           
           //heading for cart
    const $itemHeading = $('<h1>').html(`
    <h1>Added To Cart</h1>`).addClass('itemHeading')
    $('#requestCart').append($itemHeading)
    $($itemHeading).css("text-align","center")
    $($itemHeading).css("color","azure")
    


        //cart items below
        const $itemName = $('<div>').html(`
        <h1>${item.name}</h1>`).addClass('itemName')
        $($itemName).css("display","flex")
        $($itemName).css("justify-content","center")
        $($itemName).css("text-align","center")

        const $itemDescription = $('<div>').html(`
        <h1><i>${item.description}</i></h1>`).addClass('itemDescription')
        $($itemDescription).css("display","flex")
        $($itemDescription).css("justify-content","center")
        $($itemDescription).css("text-align","center")

        const $itemImage = $('<div>').html(`
        <img src=${item.imageURL}>`).addClass('itemImage')
        $($itemImage).css("display","flex")
        $($itemImage).css("justify-content","center")

        const $itemPrice = $('<div>').html(`
        <h3>${item.price}</h3>`).addClass('itemPrice')
        $($itemPrice).css("display","flex")
        $($itemPrice).css("justify-content","center")
        $($itemPrice).css("font-size","25px")
        
        $('#requestCart').append($itemName)
        $('#requestCart').append($itemDescription)
        $('#requestCart').append($itemImage)
        $('#requestCart').append($itemPrice)
    })
}



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


