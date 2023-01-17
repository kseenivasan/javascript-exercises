const removeFromArray = function(targetArray, ...removalArray) {
    for (let i = 0; i < removalArray.length;i++) {
        for (let j = 0; j < targetArray.length;j++) {
            if (removalArray[i] === targetArray[j]) {
                targetArray.splice(j,1);
                break;
            }
        }
    }
    return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
