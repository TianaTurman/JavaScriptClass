function numberDoubler(num) {
    while(num < 100){
        num *= 2
    }
    return num
}

function stringRepeater(str) {
    let newStr = '';
    while(newStr.length < 10){
        newStr += str
    }
    return newStr;
}
// console.log(stringRepeater('TianaTurman'))

function makeDivisible(x, y) {
    while(x % y !== 0 ){
        x++ 
    }
    return x
}
console.log(makeDivisible(10,3))

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};