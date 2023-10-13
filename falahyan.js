const odd_even_number = (n) => {
    if (typeof(n) === 'number'){
        if(n % 2 == 0){
            return `${n} is a Even Number`;
        } else {
            return `${n} is a Odd Number`;
        }
    }
    return `Wrong Input : ${n} is not a Number`;
}

module.exports = { odd_even_number };