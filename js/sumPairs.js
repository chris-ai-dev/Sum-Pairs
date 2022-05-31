exports.sumPairs = function(array,target) {
    let sumPairArray = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            //console.log(array[i] + array[j])
            if(array[i] + array[j] === target) {
                sumPairArray.push([array[i],array[j]])
                delete array[i],array[j];
                
            }
        }
    }
    if(sumPairArray.length === 0) {
        return "unable to find pairs"
    }
    return sumPairArray;
};

console.log(exports.sumPairs([3, 1, 5, 8, 2], 27));