//1)Bir ölçülü massivin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapın.
// let arr = [2,1,3,4,6]  
// let biggest = -Infinity ////arr[o] verdim sehv cixdi niye?? sonra infinitye deyisdim ele butun tasklarda da bu qaydada getdim
// let minimal = Infinity
// let sum  = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
//     if(arr[i] < minimal) {
//         minimal = arr[i]
//     }
    
// }
// for (let i = 0; i < arr.length; i++) {
//     if(biggest !==arr[i] && minimal !==arr[i] ){
//         sum+=arr[i]
//     }
// }
// console.log(sum);








//2) Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan proqram tərtib edin.

// let num = 3
// let count = 0
// const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     count++
//   }
// }

// console.log(count)


//taski sehv basa dusmusem biggestin nece defe tekrarlandigini yazmisdim ilk olaraq sonradan duzunu yazdim
// let arr = [3, 1, 4, 1, 5, 9,9,9,9,9,9,9,9, 2, 6, 5, 3, 5];
// let count = 0
// let biggest = arr [0]  //-Infinity burda da infinit verdim sehv cixdi basa dusmedim

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
//     else if (arr[i] === biggest) {
//         count++;
//     }
// }

// console.log( `${biggest} ${count}`);











//3) Bir ölçülü massivin birinci elementi ilə maksimum elementi arasındakı elementlərin cəmini tapan proqram tərtib edin.

// let arr = [1,5,3,2,7,2,4,3,2,6]

// let biggest = -Infinity //arr[0] , - infinity ve 0 hasnsi yazilmaldii
// let sum  = 0

// let biggestIndex = arr[0]


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i]
//         biggestIndex = i
//     }
// }
// for (let i = 1; i < biggestIndex; i++) {
//     sum += arr[i]
// }

// console.log(sum)










//4) Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.



//I=>4.)
// let arr =[123,7,53,99]

// let biggest = -Infinity
// let minimal = Infinity
// let eo = 0


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//         biggest = arr[i];
//     }
//     if(arr[i] < minimal) {
//         minimal = arr[i]
//     }
    
// }
// console.log((biggest+minimal)/2);



//II => 4.)
// let arr = [123, 7, 53, 99];

// let biggest = -Infinity;
// let minimal = Infinity;

// for (let num of arr) {
//     biggest = Math.max(biggest, num);
//     minimal = Math.min(minimal, num);
// }

// console.log((biggest + minimal) / 2);
