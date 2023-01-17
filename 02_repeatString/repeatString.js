const repeatString = function(string, count) {
    let i = 0;
    let returnString = "";
    while (i < count) {
        returnString += string;
        i++;
    }
    if (count < 0) {
        return "ERROR";
    }
    else {
        return returnString;
    }

};

// Do not edit below this line
module.exports = repeatString;
