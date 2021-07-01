/// Sum zero Problems ?
//  checking sum zero Problem 1
//[-5,-4,-3,-2,0,2,4,6,8] --> input
// output -- [-4,4]
 

// function getSumPairZero(array) {
//     for( let number of array) {
//         console.log(number)

//         for(j=1; j< array.length ; j++) {
//             if(number + array[j] === 0) {
//                 return[number,array[j]]
//             }
//         }
//     }
// }


// const result =getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])

// console.log(result)
 // o(n^2) quadratic the complexity


 // Optimized Solutions for sumpairZero

 function FindPair(array) {
     let left = 0;
     let right = array.length-1 ;
      while(right > left) {
          sum = array[left] + array[right];
          if ( array[left] + array[right] === 0 ) {
              return [ array[right], array[left] ]
          } else if(sum > 0) {
              right--;
          }
          else {
              left++;
          }
      }

 }

 const result =FindPair([-5,-4,-3,-2,0,2,4,6,8])

console.log(result)