const getTheTitles = function(objArr) {
    let arr = [];
    objArr.forEach(element => {
        arr.push(element.title);
    });

    return arr;

};

// Do not edit below this line
module.exports = getTheTitles;
