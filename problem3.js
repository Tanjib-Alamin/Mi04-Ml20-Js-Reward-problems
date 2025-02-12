let price = "$249";

let chars = price.split("")

let sum = 0;
for (let i = 0; i < chars.length; i++){
    const element = chars[i];
    if (!isNaN(element) && element != " ") {
        sum = sum + parseInt(element);
    }
}

console.log(sum);