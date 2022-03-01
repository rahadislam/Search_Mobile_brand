
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
    if(products.status==false){
        document.getElementById('error').style.display='block';
    }
    else{
        document.getElementById('error').style.display='none';
    }
    const showallProduct=document.getElementById('showAllproduct');
    showallProduct.innerHTML='';
    for(let product of products.data){
       
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="py-8 bg-slate-50 rounded-2xl drop-shadow-lg">
        <img class="w-auto mx-auto" src="${product.image}" alt="">
        <div class="text-center">
        <h1 class="font-bold py-2">Name:${product.phone_name}</h1>
        <span class="block py-2">Brand:${product.brand}</span>
        <button onclick="showDetails('${product.slug}')" class="bg-sky-900 text-white rounded-lg py-3 px-4">Details</button>
        </div>
    </div>`;
    showallProduct.appendChild(div);

    }
}

const showDetails=details=>{
    
    const url=`https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>allDetails(data))

}

const allDetails=importDetails=>{

    console.log(importDetails.data);
    const imageShow=document.getElementById('imageShow');
    imageShow.innerHTML='';
    const img=document.createElement('img');
    img.src=`${importDetails.data.image}`;
    imageShow.appendChild(img);

    const infoshow=document.getElementById('infoshow');
        infoshow.innerHTML='';
        const div=document.createElement('div');
        div.innerHTML=`
        <h1 class="font-bold text-2xl text-center pt-4 pb-3">Details</h1>
        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">Name: </span><span class="font-medium">${importDetails.data.name}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">Sensors: </span><span class="font-medium">${importDetails.data.mainFeatures.sensors[2]}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">Storage: </span><span class="font-medium">${importDetails.data.mainFeatures.storage}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">DisplaySize: </span><span class="font-medium">${importDetails.data.mainFeatures.displaySize}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">Memory: </span><span class="font-medium">${importDetails.data.mainFeatures.memory}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">ChipSet: </span><span class="font-medium">${importDetails.data.mainFeatures.chipSet}</span></p>

        <p class="border border-indigo-600 pl-5 pr-3 pr-3 py-2"><span class="font-bold">Released: </span><span class="font-medium">${importDetails.data.releaseDate}</span></p>
    </div>`;
    infoshow.appendChild(div);
    
    
    
}