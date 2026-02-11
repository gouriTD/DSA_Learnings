// Here we are going to find the first and second largest number in the array.

function findFirstAndSecondLargestNum(input_arr) {
    
    if (!input_arr) {
        return "input undefined"
    }
    else if (!Array.isArray(input_arr)) {
        return "Input is not of array type";
    } else if(input_arr.length === 0) {
        return "Empty array";
    } else if(input_arr.length === 1) {
        return "Given input has single element"
    }

    let first = input_arr[0];
    let second = input_arr[1];

    if(first < second) {
        first = input_arr[1];
        second = input_arr[0];
    }

    for(let i=2; i < input_arr.length; i++) {
        if(input_arr[i] > first){
            second = first;
            first = input_arr[i];
        } else if(input_arr[i] > second) {
            second = input_arr[i];
        }
    }

    return [first,second];
}

console.log(findFirstAndSecondLargestNum([1,100,1000, 300, 900, 1200]));
console.log(findFirstAndSecondLargestNum([0,1]));
console.log(findFirstAndSecondLargestNum([]));
console.log(findFirstAndSecondLargestNum([500]));
console.log(findFirstAndSecondLargestNum());
console.log(findFirstAndSecondLargestNum(1,2));
console.log(findFirstAndSecondLargestNum([-1,-2,-3,100]));

