function solution(X, A) {

    let positions = new Set();
    for(i=0;i<A.length;i++) {
        positions.add(A[i]);
        if(positions.size == X)return i;
    }

    return -1;

} 