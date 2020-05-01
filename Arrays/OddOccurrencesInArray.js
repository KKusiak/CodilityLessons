function solution(A) {
    const result = A.reduce((acc,cur) =>{
        return acc ^ cur
    },0)
    return result
    
}