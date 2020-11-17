function multiplesOf3and5(number) {
 var sum = 0;
    for (var i =0; i < number; i++) {
        if (i % 3 == 0 || i % 5 === 0) {
            sum += i;
        }
    }
    //console.log(number);
  return sum;
}

multiplesOf3and5(1000);
