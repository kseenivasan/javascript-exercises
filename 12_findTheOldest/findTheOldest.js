const findTheOldest = function(objArr) {
    const ordered = objArr.sort(function(person1,person2) {
        const d = new Date().getFullYear();
        let person1age;
        let person2age;
        if ( person1.yearOfDeath === undefined) {
            person1age = d - person1.yearOfBirth;
            if (person2.yearOfDeath === undefined) {
                person2age = d - person2.yearOfBirth;
            }
            else {
                person2age = person2.yearOfDeath - person2.yearOfBirth;
            }
        }
        else if (person2.yearOfDeath === undefined) {
            person2age = d - person2.yearOfBirth;
            console.log(d);
            console.log(person2.yearOfBirth);
            if (person1.yearOfDeath === undefined) {
                person1age = d - person1.yearOfBirth;
            }
            else {
                person1age = person1.yearOfDeath - person1.yearOfBirth;
            }
        }
        else {
            person1age = person1.yearOfDeath - person1.yearOfBirth;
            person2age = person2.yearOfDeath - person2.yearOfBirth;
        }

        console.log(person1.name + person1age);
        console.log(person2.name + person2age);
        if (person1age > person2age) {
            return -1;
        }
        else {
            return 1;
        }
    });
    console.log(ordered);
    return ordered[0];

};

// Do not edit below this line
module.exports = findTheOldest;
