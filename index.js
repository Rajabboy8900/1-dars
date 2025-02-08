// 1-masala

// function closetPair(arr, R){
// let closetPair = []
// let minDiff = Infinity
// for (let i = 0; i < arr.length - 1; i++) {
// let sum = arr[i]+ arr[i+1]
// let diff = Math.abs(R - sum)

// if (diff < minDiff) {
//    minDiff = diff 
//    closetPair = [arr[i], arr[i+1]]
// }
// }
// return closetPair
// }
// console.log(closetPair([8, 43, 11, 45, 9, 28, 54], 35));

// 2-masala

// function increaseEvenByFirst(arr){
// let firstEven = arr.find(num=>  num % 2=== 0)
// return arr.map(num=> (num% 2===0 ? num + firstEven : num))
// }
// console.log(increaseEvenByFirst([2, 33, 4, 6, 7, 8, 9, 87, 10]));

// 3-masala

//  function increaseUnevenByLast(arr){
// let lastUneven = [...arr].reverse().find(num=> num % 2 !== 0)
// return arr.map(num=> (num % 2 !==0 ? num + lastUneven : num))
// }
// console.log(increaseUnevenByLast([2, 53, 2, 21, 9, 44, 3]));

// 4-masala

// function almashtr(arr){
//    let min = Math.min(...arr)
//    let max = Math.max(...arr)
//    return arr.map(num=> (num === min ? max : num === max ? min : num))
// }
// console.log(almashtr([12, 3, 12, 34, 91, 90]));

// 5-masala

// function nolgaAylantr(arr){
//    let minIndex = arr.indexOf(Math.min(...arr))
// let maxIndex = arr.indexOf(Math.max(...arr))
// let [start, end] = minIndex< maxIndex ? [minIndex, maxIndex] : [maxIndex, minIndex]

// return arr.map((num, i) => (i > start && i < end ? 0 : num))

// }
// console.log(nolgaAylantr([2, 54, 5, 7, 7, 9, 12, 1, 34, 11]));

// 6-masala

// function reverseOrder(arr){
//    let minIndex = arr.indexOf(Math.min(...arr))
// let maxIndex = arr.indexOf(Math.max(...arr))
// let [start, end] = minIndex< maxIndex ? [minIndex, maxIndex] : [maxIndex, minIndex]

// return[
// ...arr.slice(0, start + 1),
// ...arr.slice(start+ 1, end).reverse(),
// ...arr.slice(end)

// ]

// }
// console.log(reverseOrder([2, 54, 5, 7, 7, 9, 12, 1, 34, 11]));

// 7-masala

// function deleteItem(arr, k){

// return arr.filter((_, index)=> index !== k)
// }
// console.log(deleteItem([19, 20, 21, 23, 45, 6, 3], 0));

// 8-masala

//  function deleteAdjectItem(arr){
// return arr.filter((num, index)=> num !== arr[index+ 1])

//  }
// console.log(deleteAdjectItem([1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10]));

// 9-masala

// function deleteLessThanThree(arr){
// let count = arr.reduce((acc, num)=> {
//    acc[num] = (acc[num] || 0) + 1;
//    return acc
// }, {});

// return arr.filter(num => count[num] >= 3)
// }
// console.log(deleteLessThanThree([1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4]));

// 10-masala
//  function addPairsOfItem(arr){
// return arr.reduce((sum, num, index) => num % 2===0 ? sum + index : sum, 0)
// }
// console.log(addPairsOfItem([10, 15, 20, 25, 30]))
   



