const nums = [2,7,11,15]
const target = 17


for (let i = 0; i < nums.length; i++) {
    let sum = nums[i] + nums[i-1];
    if (sum === target){
        console.log(i, i-1)
    }
    // console.log(sum)
}