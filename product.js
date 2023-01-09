var cart= document.querySelectorAll('.shopping')

var products=[
    {
        name: 'Faux Jacket',
        tag: 'women1',
        price: 70,
        inCart: 0
    },
    {
        name: 'Silk Jumpsuit',
        tag: 'women2',
        price: 125,
        inCart: 0
    },
    {
        name: 'Silk shirt and pajama set',
        tag: 'women3',
        price: 250,
        inCart: 0
    },
    {
        name: 'Woollen Trench Coat',
        tag: 'women4',
        price: 200,
        inCart: 0
    },
    {
        name: 'Patterned Dress',
        tag: 'women5',
        price: 50,
        inCart: 0
    },
    {
        name: 'Zebra Print Sweatshirt',
        tag: 'women6',
        price: 55,
        inCart: 0
    }
];



for(let i=0; i< cart.length; i++){
    cart[i].addEventListener('click', () => {quantity(products[i]);total(products[i]);})
    
}

function onLoad(){
    var cartNum= localStorage.getItem('quantity');
    if(cartNum){
        document.querySelector('.cart').textContent = cartNum;
    }
}

function quantity(product){
    var cartNum= localStorage.getItem('quantity');
    cartNum= parseInt(cartNum);
    if(cartNum){
        localStorage.setItem('quantity', cartNum+1);
        document.querySelector('.cart').textContent = cartNum + 1;
    }
    else {
        localStorage.setItem('quantity', 1);
        document.querySelector('.cart').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems= localStorage.getItem('productInCart');
    cartItems= JSON.parse(cartItems);

    if(cartItems!=null){
        if(cartItems[product.name] == undefined){
            cartItems={
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    }
    else{
        product.inCart=1;

        cartItems= {
            [product.name] : product
        }
    }
    

    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function total(product){
    let cost= localStorage.getItem('totalcost')
    

    if(cost != null){
        cost= parseInt(cost);
        localStorage.setItem('totalcost', cost + product.price);
    }
    else{
        localStorage.setItem('totalcost', product.price);
    }
    
}

function displayCart(){
    let cartItems= localStorage.getItem('productInCart');   
    cartItems= JSON.parse(cartItems);
    let container= document.querySelector(".productsContainer");
    if(cartItems && container){
        container.innerHTML= '';
        Object.values(cartItems).map(item =>{
            container.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src= "Assets/${item.tag}.jpg"><br>
            <span>${item.name}</span><br>
            <span>$${item.price}</span><br>
            <span>${item.inCart}</span>
            </div>
            `
        })
    }
}

onLoad();
displayCart();