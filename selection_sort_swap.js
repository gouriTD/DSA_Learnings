console.log("***Selection sorting Algorithm***");
// In this selection sort algorithm we are swaping the selection multiple times when iterating through the given array.

const input_arr1 = [45, 23, 67, 1, 0, 11];
const input_arr2 = [-1, -2, 0, -3, -4, 0];

function sort(input_arr ){
    for(let i=0; i < input_arr.length; i++) {
        for (let j = i+1; j < input_arr.length; j++) {
            if (input_arr[i] > input_arr[j]) {
                let temp = input_arr[i];
                input_arr[i] = input_arr[j];
                input_arr[j] = temp;
            }
        }
    }
    return input_arr;
}



const output_arr = sort(input_arr1);
console.log(output_arr);
console.log(sort(input_arr2));
console.log(sort([100, 0, -20, 90, -4, 1, 11, 99]));
