/**
 * The classic selection sort follows the following step by step procedure.
 * 1) Starts at the minimum index.
 * 2) Compare the index value with the adjacent index values.
 * 3) Findout the index value at which the min element is stored.
 * 4) In the outer loop of array iteration swap the min_index value with the current index of array.
 * 5) Return the final sorted array.
 * @param {*} input_arr 
 * @returns sorted input_arr
 */

function selectionSort(input_arr){
    for (let index = 0; index < input_arr.length; index++) {
        let minIndex = index;
        for (let index2 = index+1; index2 < input_arr.length; index2++) {
            if(input_arr[minIndex] > input_arr[index2]) {
                minIndex = index2;
            }
        }

        // Avoids unnecessary swap if the current index holds the min value.
        if(minIndex !== index) {
            [input_arr[index],input_arr[minIndex]]= [input_arr[minIndex],input_arr[index]];
        }
    }
    return input_arr;
}

console.log(selectionSort([23, 0, -1, 20, 100, 42]));
console.log(selectionSort([100, 20, -1, 400, 4, -3]));