document.addEventListener('DOMContentLoaded', () => {

let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let ListProductHTML = document.querySelector('.listproduct');
let ListCartHTML = document.querySelector('.listcart');
let iconCartSpan = document.querySelector('.icon-cart span');
 // Declare Listproduct variable
let listproducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Add html product on screen
const addDataToHTML = () => {
    ListProductHTML.innerHTML = '';
    if (Listproduct.length > 0) {
        Listproduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <img src="${product.image}">
            <h2>
                ${product.title}
            </h2>
            <div class="price">$${product.Price}</div>
            <button class="addcart">
               Add To cart
            </button>`;
            ListProductHTML.appendChild(newProduct);
        })
    }
}
ListProductHTML.addEventListener('click',(event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
});

    const addToCart = (product_id) => {
        let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
        if (carts.length <= 0) { //empty card
            carts = [
                {
                    product_id: product_id,
                    quantity: 1
                }
            ]
        } else if (positionThisProductInCart < 0) {
            carts.push({
                product_id: product_id,
                quantity: 1
            });
        } else { carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity  + 1; }
      addCartToHTML();

    }
    const addCartToHTML = ()  => {
        ListCartHTML.innerHTML = '';
        if (carts.length > 0) {
            carts.forEach(cart => {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                let positionProduct = listproducts.findIndex((value) => value.id == cart.product_id);
                let info = listproducts[positionProduct];
                newCart.innerHTML = `
                <div class="image">
                 <img src="${info.image}" alt="">
             </div>
               <div class="name">
                   ${info.name}
               </div>
               <div class="totalePrice">
                   $${info.Price}
               </div>
               <div class="quantity">
                   <span class="minimum"> - </span>
                   <span> ${cart.quantity}</span>
                   <span class="plus"> + </span>
               </div>`;
                ListCartHTML.appendChild(newCart);
            })
        }
    }
const initApp = () => {
    // get data from json
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            Listproduct = data;
            addDataToHTML();
        });

    
    };
        initApp();

});
