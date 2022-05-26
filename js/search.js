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
