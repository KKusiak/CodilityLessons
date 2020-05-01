
function solution(N) {
    const binary = N.toString(2);
    return binary
            .split('1')
            .reduce((maxGap, item, index, binary) => {
                if( item.length > maxGap 
                    && binary[index-1] !== undefined 
                    && binary[index+1] !== undefined) return item.length;
                return maxGap;
            }, 0);
}