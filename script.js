function getProducts(){

    return [
        {name:"Car", gender:"male"},
        {name:"Doll", gender:"female"}, 
        {name:"Water Gun", gender:"male"}, 
        {name:"Plastic Teapot", gender:"female"}
    ];
}
var loaded = false;

function loadProducts(){
    if(!loaded){
        var productList = document.getElementById("product-list");
        var products = getProducts();
    
        products.forEach(function(product){
    
            var li = document.createElement("li");// <li></li>
            li.innerHTML = product.name;// <li>Poduct Name</li>
            li.classList.add("product");// <li class="product">Poduct Name</li>
    
            if(product.gender === "male"){
                li.classList.add("boy-product"); // <li class="product boy-product">Poduct Name</li>
            } else if (product.gender === "female"){
                li.classList.add("girl-product");// <li class="product girl-product">Poduct Name</li>
            }
    
            productList.appendChild(li);// <ul> .... <li class="product boy-product">Poduct Name</li> </ul>
    
        });
        loaded = true;
    }

}

document.getElementById("load-button").onclick = loadProducts;