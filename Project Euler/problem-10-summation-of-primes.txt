function sieve(n){
    let prime = [];
    for(let i = 1; i < n + 1; i++){
        prime.push(true);
    }
    prime[0]=false; // 0 not prime
    prime[1]=false; // 1 not prime
    let p = 2;
    while(p*p<=n){
        if(prime[p] == true){
            for(let i = 2*p; i<=n; i += p){
                prime[i] = false;
            }
        }
        p += 1;
    }
    return prime;
}
	

function primeSummation(n) {

  let prime = sieve(n);
    let sum = 0;
    for (let i=0; i<prime.length; i++){
        if(prime[i]==true){
            sum = sum + i;
        }
    }
    return sum;
}

primeSummation(2000000);
