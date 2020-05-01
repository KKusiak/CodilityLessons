



function solution(A, K) {
    if(A.length === 0) return [] 
    let size = A.length - 1
    let last = A[size]
    for(let i = 0; i < K;i++ ){
        last = A[size]
        for(let j = size; j > 0; j--){
            A[j] = A[j-1]
        }
        A[0] = last
    }
    return A
}