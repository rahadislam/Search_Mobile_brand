const scarchPhone=()=>{
    const searchFild=document.getElementById('input-fild');
    const searchValue=searchFild.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    .then(res=>res.json())
    .then(data=>showProduct(data))
    searchFild.value='';
}

const showProduct=products=>{
    console.log(products);
    for(let product of products.data){
        console.log(product);
        const showallProduct=document.getElementById('showAllproduct');
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="py-8 bg-slate-50 rounded-2xl drop-shadow-lg">
        <img class="w-60 mx-auto" src="${product.image}" alt="">
        <div class="text-center">
        <h1 class="font-bold py-2">Name:${product.phone_name}</h1>
        <span class="block py-2">Brand:${product.brand}</span>
        <button class="bg-sky-900 text-white rounded-lg py-3 px-4">Details</button>
        </div>
    </div>`;
    showallProduct.appendChild(div);

    }
}