// //10-masala
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function matrixSum(){
//     return arr.flat().reduce((sum,num)=>sum+num,0);
// };
// let res = matrixSum(arr);
// console.log(res)

// //9-masala
// // {1: 1, 2: 2, 3: 1, 4: 3, 5: 1}
// let arr=[1, 2, 2, 3, 4, 4, 4, 5];
// function countOccurrences(){
//     let num = {};
//     for(val of arr){
//         if(num[val]+=1){
//         }else{
//             num[val]=1;
//         }
//     }
//     return num;
// };
// let result = countOccurrences(arr)
// console.log(result)

// //4-masala
// let arr = [2,4,1];
// let number = 7;
// function sumArr(){
//     let summ = arr.reduce((sum,num) => sum+num,0);
//     if(summ !== number){
//         return false;
//     }
//     return true;
// }
// let res = sumArr(arr,number);
// console.log(res);


//2-masala
// let arr = [1, 2, 3, 4, 5]
// let num = 2;
// function rotateArray(arr, num) {
//     let slice1 = arr.slice(0, num);
//     let slice2 = arr.slice(num);
//     return slice2.concat(slice1);
// };
// console.log(rotateArray(arr, num))

//6-masala
// let arr = [1, 2, 1, 3, 1, 2, 1];
// function mostFrequentElement() {
//     let nums = {}
//     for (let num of arr) {
//         nums[num] = (nums[num] || 0) + 1;
//     }

//     let maxcount = 0;
//     let takror;
//     for (let num in nums) {
//         if (nums[num] > maxcount) {
//             maxcount = nums[num];
//             takror = num;
//         }
//     }
//     return takror;
// }
// console.log(mostFrequentElement(arr));

//