function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for(var a = 1; a < sumOfabc; a++){
     for(var b = a + 1; b < sumOfabc; b++){
         var c = sumOfabc - a - b;
         if(a * a + b * b == c * c){
             return (a * b * c);
         }
     }
 }

 
}

specialPythagoreanTriplet(1000);
