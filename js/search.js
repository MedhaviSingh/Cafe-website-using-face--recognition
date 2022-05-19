function search() {
    let input = document.getElementById('search-box').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
















// const search=() =>{
//     const searchbox = document.getElementById("search-box").value.toUpperCase();
//     const storeitems = document.getElementById("products")
//     const product = document.querySelectorAll(".swiper-slide box")
//     const pname = document.getElementsByClassName("productname")
//     console.log(pname)
//     for(var i=0; i<pname.length; i++){
//         let match = product[i].getElementsByTagName('pname')[0];
// 
//         if(match){
//            let textvalue = match.textContent || match.innerHTML
// 
//            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
//               product[i].getElementsByClassName.display = "pname"; 
//            }
//            else{
//             product[i].getElementsByClassName.display = "none"; 
//            }
//         }
//     }
// }