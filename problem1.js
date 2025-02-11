

let products = ['laptop', 'mobile', 'laptop', 'mobile', 'tablet', 'desktop', 'tablet', 'scenner'];


let uniqueProducts = [];
for (let i = 0; i < products.length; i++){
    const element = products[i];
    if (!uniqueProducts.includes(element)) {
        uniqueProducts.push(element);
    }
    

}
 console.log(uniqueProducts);