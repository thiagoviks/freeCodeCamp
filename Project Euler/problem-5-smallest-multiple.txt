function generate_prime_from_less_than_n(n){
  var list_of_prime_nums = [2];
  for(var i=3; i<=n; i+=2){
    var is_prime = true;
    for(var j=0; j<list_of_prime_nums.length; j++){
      var check_is_prime = i % list_of_prime_nums[j];
      if(check_is_prime === 0){
        is_prime = false;
        break;
      }
    }
    if(is_prime){
      list_of_prime_nums.push(i);
    }
  }
  return list_of_prime_nums;
}

function smallestMult(n) {

var prime_numbers = generate_prime_from_less_than_n(n);
  console.log('prime numbers:', prime_numbers);

  var multiply_them = prime_numbers.reduce(function(product, prime) {
    return product * Math.pow(prime, Math.floor(Math.log(n) / Math.log(prime)));
  }, 1);

  return multiply_them;
}

smallestMult(20);
