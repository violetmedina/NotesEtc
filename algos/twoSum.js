const nums = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47]
const target = 164

//use the result of the sum to look for what number is needed and put them both in an object

function twoNumberSum(array, targetSum) {
    let rem = new Set();
    for(let arr of array){
        let res = targetSum - arr
        if(rem.has(res)){
            // console.log([arr, res]);
            // break;
            return [arr, res]
        }
        rem.add(arr)
    }
    return [];
}

twoNumberSum(nums, target)



// function twoNumberSum(array, targetSum) {
//     let min = 0;
//     let max = array.length-1
//     let res = [];
//     console.log("max", max)
//     for (let i = min; i < max; i++) {
//         console.log("i", i)
//         for (let j = max; j > i; j--) {
//             console.log("j", j)
//             res = array[i] + array[j]
//             if (res == targetSum) {
//                 res = [array[i], array[j]]
//                 console.log("RETURN", res);
//                 return res;
//             } else {
//                 res = [];
//                 console.log("else", res);
//             }
//         }
//     }
//     // return res;
// }

