function sumSquareDifference(n) {
  return Math.pow( (n+1)*(n/2), 2) -  ((
      (n * (n+1)) *
      (n + (n+1))
    )/6)
}


sumSquareDifference(100);
