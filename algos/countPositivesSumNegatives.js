let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// should return [10, -65]

function countPositivesSumNegatives(input) {
    let res = [0, 0]
    for (let num of input) {
        if (num > 0) {
            res[0]++;
        }
        else if (num < 0)
            res[1] += num;
    }
    console.log(res)
    return res;
}

countPositivesSumNegatives(testData)