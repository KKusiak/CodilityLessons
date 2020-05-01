function solution(A) {
    let min = 1;
    A.sort((a,b) => a - b)

    for (let i in A) {
        if (A[i] > 0 && A[i] == min) {
                min++;
        }
    }

    return min;
}
