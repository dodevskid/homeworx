let array = [10, 11, 12, 13, 99, 'bob']; // bob is an intruder

// Declare variable "res" and sum the objects of the array. Return the result
function sum (){
    let res = array[0] + array[1] + array[2] + array[3]+ array[4];
    return res;
}

// Check if the array contains not a number and return true or false
function validateNumber(){
    let res = isNaN(array[0,1,2,3,4,5]);
    return res;
}

// If array contains not a number print error message
if (validateNumber()){
     console.log("Error");
} 
// Else execute the sum function of all the objects in the array
else {
    console.log(`${sum()}`);
};

