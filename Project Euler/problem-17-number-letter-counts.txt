var proper = [
  0,
  "one".length,
  "two".length,
  "three".length,
  "four".length,
  "five".length,
  "six".length,
  "seven".length,
  "eight".length,
  "nine".length,
  "ten".length,
  "eleven".length,
  "twelve".length,
  "thirteen".length,
  "fourteen".length,
  "fifteen".length,
  "sixteen".length,
  "seventeen".length,
  "eighteen".length,
  "nineteen".length
];

// tenth prefixes
var tenth = [
  "twenty".length,
  "thirty".length,
  "forty".length,
  "fifty".length,
  "sixty".length,
  "seventy".length,
  "eighty".length,
  "ninety".length
];

function below100(n) {
  if (n < 20)
    return proper[n];

  return tenth[n / 10 - 2 | 0] + proper[n % 10];
}

function numberLength(n) {

  if (n < 100)
    return below100(n);

  var res = 0;
  var hundred = Math.floor(n / 100) % 10;
  var thousand = Math.floor(n / 1000);
  var td = n % 100;

  if (n > 999)
    res+= below100(thousand) + "thousand".length;
  if (hundred !== 0)
    res+= proper[hundred] + "hundred".length;
  if (td !== 0)
    res+= "and".length + below100(td);
  return res;
}


function numberLetterCounts(n) {
var num = 0;
  for (var i = 1; i <= n; i++) {
    num+= numberLength(i);
  }
  return num;
}

numberLetterCounts(5);
