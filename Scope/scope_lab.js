//global scope
var globalVar = "Global variable";
let globalLet = "Global but scoped with Let";
const globalConst = "Global constant";

{
    //Block Scope
    var blockVar = "Block-scoped variable";
    let blockLet = "Block-scoped let";
    const blockConst = "Block=scoped constant";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
    var functionVar="Block-scoped variable";
    let functionLet="Block-scoped let";
    const functionConst="Block-scoped constant";
}
show();
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);