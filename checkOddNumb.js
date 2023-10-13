//Ramadhika
// Fitur mencari angka ganjil
const isOdd = function(value){
    if (value%2 == 0)
        return false;
    else
        return true;
}
  
//console.log(isOdd(11))
module.exports = { isOdd }