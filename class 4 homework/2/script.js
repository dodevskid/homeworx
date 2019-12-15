let array = [10, 11, 12, 13, 99, 'bob']; // bob is an intruder

// Declare variable "res" and sum the objects of the array. Return the result
function sum (){
    let res = array[0] + array[1] + array[2] + array[3]+ array[4];
    return res;
}

// Check if the array does not contain a number and return true or false
function validateNumber(){
    let res = isNaN(array[0,1,2,3,4,5]);
    return res;
}

// Execute the validateNumber function
if (validateNumber()){
     console.log("Error");// Print error message
} 
// Else execute the sum function
else {
    console.log(`${sum()}`);
};

