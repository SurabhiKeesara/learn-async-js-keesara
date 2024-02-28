function sumOfARow(arr, rowIdx) {
    return new Promise((res, rej) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let rows = []
                for (let i = 0; i < arr.length; i++) {
                    let hasNeg = false;
                    for (let j = 0; j < arr[i].length; j++) {
                        if(arr[i][j] < 0) {
                            hasNeg = true;
                        }
                    }
                    if (hasNeg) {
                        rows.push(arr[i])
                    }
                }
                res(rows);
            }, 0);
        }
    })
}

const array2D = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, -9]
];

rowArrayPromises = [];

for (let x = 0; x < array2D.length; x++) {
    rowArrayPromises.push(sumOfARow(array2D, x));
}

Promise.any(rowArrayPromises)
.then((rowArray) => {
    console.log(`Row = ${rowArray}`)
})
.catch((err) => console.log(`${err}`))