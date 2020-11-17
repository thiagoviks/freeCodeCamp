function collatz(n) {

  for (var c = 1; n > 1; c++) {

    if (n % 2 === 0)
      n/= 2;
    else
      n = 3 * n + 1;
  }
  return c;
}

function longestCollatzSequence(limit) {

  var max = 0, max_i = 0;

  for (var i = 1; i < limit; i++) {

    var c = collatz(i);
    if (c > max) {
      max = c;
      max_i = i;
    }
  }
  return max_i;
}

longestCollatzSequence(14);
