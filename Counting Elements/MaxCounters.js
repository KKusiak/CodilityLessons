function solution(N, A) {
    let maxVal = 0;
    let lastMax = 0;
    
    let counters = new Array(N).fill(0)
    let maxAll = N + 1 
    for(let i = 0 ; i < A.length ; i++){
        let index = A[i] - 1
        if(A[i] < maxAll){
            if(counters[index] < lastMax ) counters[index] = lastMax
            counters[index]++
            if(counters[index] > maxVal) maxVal = counters[index]
        }
        else lastMax = maxVal
    }
    for(let j = 0; j < counters.length ; j++){
        if(counters[j] < lastMax) counters[j] = lastMax
    }
    return counters
}