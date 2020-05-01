function solution(A) {
    let length = A.length;
    let left = A[0]
    let right = A.reduce((a,b)=>{return a + b},0) - A[0];
    let min = Math.abs(left-right)
    for(let i = 1;i<length - 1; i++){
        left += A[i];
        right -= A[i];
        let distance = Math.abs(left - right)
        if(distance < min){
            min = distance
        }
    }
    return min
}