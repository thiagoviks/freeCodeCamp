function largestPrimeFactor(number) {
if(number%2===0){
    return 2;
  }

  // test the odd numbers, greater than 3
  var list_of_prime_numbers = [];
  var i = 3;

  // check the division of the input number and i variable
  // if division no reminder, it is one of the prime numbers
  // if not, increase i by 2 to test the next odd number
  while(number != 1){
    if(number % i === 0){
      number /= i;
      list_of_prime_numbers.push(i);
    }else{
      i+=2; // increase by 2 to test the next odd number
    }
  }
return list_of_prime_numbers[list_of_prime_numbers.length-1];
}

largestPrimeFactor(13195);
