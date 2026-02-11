function bubbleSort(input_arr) {
    for (let outerindex = 0; outerindex < input_arr.length-1; outerindex++) {
        let swapped = false;
        for (let innerindex = 0; innerindex < input_arr.length-1-outerindex; innerindex++) {
            if (input_arr[innerindex] > input_arr[innerindex + 1]) {
                // swap the respective elements.
                [input_arr[innerindex],input_arr[innerindex + 1]] = [input_arr[innerindex + 1],input_arr[innerindex]];
                swapped = true;

            }
            
        }
        if(!swapped){
            console.log("we already have a sorted array");
            break;
        }
        
    }

    // We will try to do in place sorting hence would return the same input array but in sorted form.
    return input_arr;
}

console.log(bubbleSort([1,2,3,4,5]));
console.log(bubbleSort([10,2,300,1,0, 60, -1]));