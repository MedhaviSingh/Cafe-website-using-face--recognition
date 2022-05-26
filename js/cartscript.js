
var additemid = 0;
function addtocart(item){
    additemid += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartimg');
    selecteditem.setAttribute('id',additemid);
    var img = document.createElement('img');
    // console.log(item[0].children[0]);
    img.setAttribute('src',item[0].children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = item[0].children[1].innerText; 
    // console.log(item[0].children[2]);
    
    var price = document.createElement('div');
    price.innerText = item[0].children[2].innerText;
    
    
    var cartitems = document.getElementById('productname');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(price);
    var delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.setAttribute('onclick','del('+additemid+')');
    selecteditem.append(delbtn);
    cartitems.append(selecteditem);

};

function del(item){
    document.getElementById(item).remove();
}