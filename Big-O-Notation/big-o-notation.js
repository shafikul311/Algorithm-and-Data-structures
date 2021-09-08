// find missing number
// Assume an array of non - negative integers.A second array is formed by shuffling the elements of the first array and deleting a random element.Given these two arrays, find which element is missing in the second array.Do this in linear time with constant memory use.

// Example input / output


const findMissingNumber = (arr1, arr2) => {
    let result = arr1[0];
    for (let i = 1; i < arr1.length; i++) {
      result ^= arr1[i];
    }
  
    for (let j = 0; j < arr2.length; j++) {
      result ^= arr2[j];
    }
  
    return result;
  };
  
  // console.log(findMissingNumber([8, 3, 5, 1], [1, 5, 3])); // = 8
  
  // console.log(findMissingNumber([1, 1, 1, 1], [1, 1, 1])); // = 1
  
  // console.log(findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9])); // = 8
  
  
  // myMin
  // Given a list of integers find the smallest number in the list.
  
  // list = [0, 3, 5, 4, -5, 10, 1, 90]
  // my_min(list) # => -5
  
  // Phase I
  // First, write a function that compares each element to every other element of the list.Return the element if all other elements in the array are larger.
  
  // What is the time complexity for this function?
  // O(n^2) - for every element of the input, you need to compare it to every
  // other element in the input
  // const myMin = (list) => {
  //   for (let i = 0; i < list.length; i++) {
  //     let smallest = true;
  //     for (let j = 0; j < list.length; j++) {
  //       if (list[j] < list[i]) smallest = false;
  //     }
  //     if (smallest) return list[i];
  //   }
  // };
  
  // Phase II
  // Now, rewrite the function to iterate through the list just once while keeping track of the minimum.
  
  // What is the time complexity ?
  // O(n) - by keeping a pointer to smallest, you only need to iterate through
  // the input once and comparing each element to the pointer
  const myMin = (list) => {
    let smallest = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] < smallest) smallest = list[i];
    }
    return smallest;
  };
  
  // console.log(myMin([0, 3, 5, 4, -5, 10, 1, 90]));
  
  // Largest Contiguous Sub - sum
  // You have an array of integers and you want to find the largest contiguous(together in sequence) sub - sum.Find the sums of all contiguous sub - arrays and return the max.
  
  // list = [2, 3, -6, 7, -6, 7]
  // largest_contiguous_subsum(list) # => 8(from[7, -6, 7])
  
  // Phase I
  // Write a function that iterates through the array and finds all sub - arrays using nested loops.First make an array to hold all sub - arrays.Then find the sums of each sub - array and return the max.
  
  // Discuss the time complexity of this solution.
  // O(n^2) - nested loops - for each element in the input, you need to create an // array every time with everyone other element
  // const largestContiguousSubSum = (list) => {
  //   let highestSum = list[0];
  //   for (let i = 0; i < list.length; i++) {
  //     let currSum = list[i];
  //     for (let j = i + 1; j < list.length; j++) {
  //       currSum += list[j];
  //       if (currSum > highestSum) highestSum = currSum;
  //     }
  //   }
  //   return highestSum;
  // };
  
  // console.log(largestContiguousSubSum([2, 3, -6, 7, -6, 7]));
  
  // Phase II
  // Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum.
  // O(n) - operations increases as list size increases
  // only need to loop through the input list once and process for each element
  const largestContiguousSubSum = (list) => {
    let highestSum = list[0];
    let currSum = 0;
    for (let i = 0; i < list.length; i++) {
      currSum += list[i];
      if (currSum > highestSum) highestSum = currSum;
      if (currSum < 0) currSum = 0;
    }
    return highestSum;
  };
  
  // console.log(largestContiguousSubSum([2, 3, -6, 7, -6, 7]));
  // console.log(largestContiguousSubSum([-4, -1, -3, -2]));
  // console.log(largestContiguousSubSum([0, 0]));
  
  // is_shuffle ?
  //   Given three strings, return whether the third is an interleaving of the first two.Interleaving means it only contains characters from the other two, no more no less, and preserves their character ordering. "abdecf" is an interleaving of "abc" and "def".Note that the first two strings needn't be in alphabetical order like these.
  
  // You may assume that the first two strings do not contain any characters in common.
  
  //   Next, relax the assumption that the first two strings contain no overlap.Analyze the time - complexity of your solution.You may wish to view this problem recursively.
  
  // Phase I
  // O(n) - technically O(n) - n/2 which reduces to O(n)
  // this algorithm iterates through str1 and str2 in separate loops and compares
  // each character to see if it matches with the character at the specific
  // position in str3. If str3 is equal in length to the total of str1 and str2
  // length, then worst case is that the each character of str1 and str2 will be
  // checked. If this is the case, str3 will be half of the total input size
  // const isShuffle = (str1, str2, str3) => {
  //   let totalLength = str1.length + str2.length;
  //   if (str3.length > totalLength || str3.length < totalLength) return false;
  
  //   for (let i = 0; i < str1.length; i++) {
  //     if (str1[i] !== str3[i]) return false;
  //   }
  //   for (let j = 0; j < str2.length; j++) {
  //     if (str2[j] !== str3[j + str1.length]) return false;
  //   }
  //   return true;
  // };
  
  // console.log(isShuffle('abd', 'ecf', 'abdecf')); // => true)
  
  // Phase II
  function isShuffle(str1, str2, str3) {
    if (str3.length === 0) {
      return str1.length === 0 && str2.length === 0;
    }
  
    if (str1[0] === str3[0]) {
      if (isShuffle(str1.slice(1, str1.length), str2, str3.slice(1, str1.length))) {
        return true;
      }
    }
  
    if (str2[0] === str3[0]) {
      if (isShuffle(str1, str2.slice(1, str1.length), str3.slice(1, str1.length))) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(isShuffle('XXY', 'XXZ', 'XXYXXZ')); // => true)