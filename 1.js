function counter() {
  let arr = [2, 12, 76, 2, 1, 98, 7];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i]  === 0) {
    zeroCount++;
  }
  if (arr[i] % 2 == 0) {
    evenCount++;
  }
  if (arr[i] % 2 != 0) {
    oddCount++;
  } 
}
 console.log(zeroCount, evenCount, oddCount)
}
counter();