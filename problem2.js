
const products = [
    {name:"laptop", category:"electronics"},
    {name:"T-shirt", category:"clothing"},
    {name:"Headphones", category:"electronics"},
    {name:"jeans", category:"clothing"},
]

let cateagorizedProduccts = {
    electronics: [],
    clothing:[]
}

for (let i = 0; i < products.length; i++){
    const SingleProduct = products[i];
    if (SingleProduct.category === 'electronics') {
        cateagorizedProduccts.electronics.push(SingleProduct.name);
        
    }
    else if (SingleProduct.category === 'clothing') {
        cateagorizedProduccts.clothing.push(SingleProduct.name);
    }
   
}
console.log(cateagorizedProduccts);