// Nomor 1
function isAritmeticProgression(numarray) {


    if(numarray[0] == null || isNaN(numarray[0]) || !Array.isArray(numarray) || numarray.length < 2){
        return "Invalid Input";
    }

    let angkaBanding = numarray[1] - numarray[0]

    for (let index = 1; index < (numarray.length - 1); index++) {
        if((numarray[index + 1] - numarray[index]) !== angkaBanding){
            return false;
        }
    }

    return true;
}

numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(isAritmeticProgression(numarray));

numarray = [2, 4, 6, 8, 10]

console.log(isAritmeticProgression(numarray));

// Nomor 2

function threeStepAB(param) {
    let expression1 = /a...b/gi
    let expression2 = /b...a/gi

    // console.log(expression1.test(param));
    // console.log(expression2.test(param));

    if(expression1.test(param) || expression2.test(param)){
        return true
    }

    return false

}

console.log(threeStepAB("You are boring"));
console.log(threeStepAB("Barbarian"));

// Nomor 3

function sumArray(numArray, num){
    let i = 0;
    let tempatReturn = [];

    for (let index1 = 0; index1 < numArray.length; index1++) {
        for (let index2 = index1 + 1; index2 < numArray.length; index2++) {
            if(numArray[index1] + numArray[index2] === num ){
                tempatReturn.push( [] );
                tempatReturn[i].push(numArray[index1]);
                tempatReturn[i].push(numArray[index2]);
                i += 1;
                break;
            }
            
        }        
    }

    return tempatReturn;
}

console.log(sumArray([2, 1, 4, 3], 5));

// Nomor 4

function maxSubarraySum(arr) {
    let maxEnding = arr[0];
    let maxNow = arr[0];
    let start = 0;
    let end = 0;
    let currentStart = 0;

    for (let index1 = 1; index1 < arr.length; index1++) {
        if (arr[index1] > maxEnding + arr[index1]) {
            maxEnding = arr[index1];
            currentStart = index1;
        } else {
            maxEnding += arr[index1];
        }

        if (maxEnding > maxNow) {
            maxNow = maxEnding;
            start = currentStart;
            end = index1;
        }
    }

    return [arr.slice(start, end + 1), maxNow];
}

// Contoh penggunaan
const a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubarraySum(a));
