function sumOfARow(arr, rowIdx) {
    return new Promise((res, rej) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log('resolving ... ');
                res(sum);
            }, 0);
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rowSumPromises = [];

for (let x = 0; x < array2D.length; x++) {
    rowSumPromises.push(sumOfARow(array2D, x));
}

Promise.all(rowSumPromises)
.then((rowSums) => {
    let sum = 0;
    rowSums.forEach((rowSum) => {
        sum += rowSum
    });
    console.log(`Sum = ${sum}`)
})
.catch((err) => console.log(`${err}`))