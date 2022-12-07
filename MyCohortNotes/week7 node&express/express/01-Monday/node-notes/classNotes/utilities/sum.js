

const sum = (arr) => {
    
    let sumArr = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0)

    return sumArr;
}


const multiply = (arr) => {
    
    let sumArr = arr.reduce((prev, curr)=>{
        return prev * curr;
    }, 1)
    
    return sumArr;
}

let math = {
    sum : sum,
    multiply : multiply
}

module.exports = math;