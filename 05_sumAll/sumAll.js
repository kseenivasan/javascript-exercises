const sumAll = function(first, last) {
    let sum = 0;
    let start;
    let end;
    if (first < 0 || last < 0 || typeof first !== "number" || typeof last !== "number") {
        return "ERROR";
    }
    if (first < last) {
        start = first;
        end = last;
    }
    else {
        start = last;
        end = first;
    }
    for (let i = start; i <= end;i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
