/// Sum zero Problems ?
//  checking sum zero Problem 1
//[-5,-4,-3,-2,0,2,4,6,8] --> input
// output -- [-4,4]
 

function getSumPairZero(array) {
    for(let number of array) {
        console.log("outer loop") 
        for(let j=1 ;j <array.length; j++) {
            console.log("inner loop") 
            if(number + array[j] ===0) {
                return [number,array[j]]
            }
        }


        console.log(number)
    }
}

const result=getSumPairZero([-5,-4,-3,-2,0,2,4,6,8] );
 console.log(result)

 // o(n^2) quadratic the complexity
 