const people2 = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
const findTheOldest = function (people) {
    for (let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = 2023;
        }
    }

    let oldestIndex = 0;
    for (let i = 1; i < people.length; i++) {
        agePrevious = people[i-1].yearOfDeath - people[i-1].yearOfBirth;
        ageActual = people[i].yearOfDeath - people[i].yearOfBirth;
        if (ageActual > agePrevious) {
            oldestIndex = i;
        }
    }
    return people[oldestIndex];
};

console.log(findTheOldest(people2));

// Do not edit below this line
module.exports = findTheOldest;