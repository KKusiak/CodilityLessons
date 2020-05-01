function solution(A) {
    const sumA = A.reduce((acc,cur)=>{
       return acc + cur 
    },0)
    const N = A.length + 1
    const sumB = (N*(N+1))/2
    return sumB-sumA
}