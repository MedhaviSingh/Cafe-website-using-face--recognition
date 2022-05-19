let productsInCart = [];
const parentElement = document.querySelector('#buyItems');
const CartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');

const countthesumprice = function(){
    let sumprice = 0;
    productsInCart.forEach(product =>{
        sumprice+= product.price;
    });
    return sumprice;
}

const updateshoppingcartHTML = function(){
    if(productsInCart.lenght>0){
        let result = productsInCart.map(product =>{
            // return 
            // <li class="buyitem">
            //     <img src ="${product.image}"></img>
            //     <div>
            //         <h5>${product.name}</h5>
            //         <h5>${product.price}</h5>
            //         <div>
            //             <button class ="button-minus" data-id ='${product.id}'>-</button>
            //             <span class="countofproduct">${product.count}</span>
            //             <button class ="button-plus" data-id ='${product.id}'>+</button>
            //         </div>
            //     </div>
            // </li>
            let result = productsInCart.map(product => {
                return `
                    <li class="buyItem">
                        <img src="${product.image}">
                        <div>
                            <h5>${product.name}</h5>
                            <h6>$${product.price}</h6>
                            <div>
                                <button class="button-minus" data-id=${product.id}>-</button>
                                <span class="countOfProduct">${product.count}</span>
                                <button class="button-plus" data-id=${product.id}>+</button>
                            </div>
                        </div>
                    </li>`
            });
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.add('hidden');
        CartSumPrice.innerHTML = "$"+countthesumprice();
    }
    else{
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML ='<h4 class="empty">Your cart is empty</h4>';
        CartSumPrice.innerHTML ="";
    }
}

function updateproductincart(product){
    for(let i =0; i<productsInCart.lenght; i++){
        if(productsInCart[i].id ==product.id){
            productsInCart[i].count+=1;
            productsInCart[i].price = productsInCart[i].baseprice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}


products.forEach(product =>{
    product.addEventListener('click',(e)=>{
        if(e.target.classList.contains('addtocart')){
            const productID = e.target.dataset.productId;
            const productname = product.querySelector('.productname').innerHTML;
            const productprice = product.querySelector('.pricevalue').innerHTML; 
            const productimage = product.querySelector('img').src;
            let producttocart = {
                name: productname,
                image: productimage,
                id: productID,
                count: 1,
                price: +productprice,
                baseprice: +productprice 
            }
            updateproductincart(producttocart);
            updateshoppingcartHTML();

        }
    });
});

parentElement.addEventListener('click',(e)=>{
    const isplusbutton = e.target.classList.contains('button-plus');
    const isminbutton = e.target.classList.contains('button-minus');
    if(isplusbutton || isminbutton){
        for(let i=0; i<productsInCart.lenght; i++){
            if(productsInCart.id === e.target.dataset.id){
                if(isplusbutton){
                    productsInCart[i].count+=1;
                }
                else if(isminbutton){
                    productsInCart[i].count-=1;
                }
                productsInCart[i].price = productsInCart[i].baseprice * productsInCart[i].count;
            }
            if(productsInCart[i].count<=0){
                productsInCart.splice(i,1);
            }
        }
        updateshoppingcartHTML();
    }
});