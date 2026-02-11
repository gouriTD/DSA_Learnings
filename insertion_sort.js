function insertionSort(input_arr) {
    if (!Array.isArray(input_arr)) {
        return "wrong input";
    }

  /**
   * Steps for insertion sort.
   * 1) Lets assume that the first element is sorted and it forms the sorted zone.
   * 2) Start from 2nd element.
   * 3) This next/starting 2nd element becomes the reference element.
   * 4) Compare the reference element with all other elements ahead of it.
   * 5) If there is an element which is greater than the reference element, then shifts its position one step to the right.
   * 6) Now if we get the sorted done place the reference element in its correct position.
   */
  for (let i = 1; i < input_arr.length; i++) {
    const refEl = input_arr[i];
    let j = i - 1;

    while(j>=0 && input_arr[j] > refEl) {
        input_arr[j+1] = input_arr[j];
        j--;
    }

    input_arr[j+1] = refEl;
    
  }

    return input_arr;
}

console.log(insertionSort([4,3,2,1,0]));
console.log(insertionSort([1,3,2,4,0]));
console.log(insertionSort([-1,-3,-2,-4,0]));
console.log(insertionSort("string"));