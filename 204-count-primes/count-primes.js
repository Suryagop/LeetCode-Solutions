/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count=0;
    
    // Sieve of Eratosthenes

    let arr=new Array(n).fill(true);
    for(let i=2;i<=Math.sqrt(n);i++){
        if(arr[i]){
            for(let j=i*i;j<n;j=j+i){
                arr[j]=false;
            }
        }
    }

    for(let i=2;i<arr.length;i++){
        if(arr[i]){
            count++;
        }
    }
    return count;
    
};