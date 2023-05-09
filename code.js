var solution = function(firstArray, secondArray) {
  
    const finalArray = firstArray.reduce(function(preVal, currVal, i) {
        return Math.abs(firstArray[i] - secondArray[i]).toFixed(2)**2/3;
    });

    return finalArray
  }

  console.log(solution([1,2,3],[4,5,6]))