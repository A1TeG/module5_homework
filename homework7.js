let arr = [1, 'a', 4, 2, null, 4, 0, undefined];
let sumOdd = 0
let sumEven = 0
let sumNull = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      sumNull++;
    } else if (arr[i] % 2 === 1){
      sumOdd++;
    } else if (arr[i] % 2 === 0){
      sumEven++;
    }
  }
  console.log(`Чётные: ${sumEven + sumNull}, Нечётные: ${sumOdd}, Null: ${sumNull}`)