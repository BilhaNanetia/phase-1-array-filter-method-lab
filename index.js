function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

console.log (findMatching(drivers, 'Bobby'));  //Output: ['Bobby', 'Bobby']
console.log (findMatching(drivers, 'Sammy'));  //Output: ['Sammy']

//Returns matching drivers if case does not match but letters do
const Drivers = ['Bobby', 'Sammy','Sally', 'Annette', 'Sarah', 'bobby'];
console.log (findMatching(Drivers, 'Bobby'));  //Output: ['Bobby', 'bobby']

//Returns an empty array if there is no match
const DRivers = ['Bobby', 'Sammy','Sally', 'Annette', 'Sarah', 'bobby'];
console.log (findMatching(Drivers, 'Susan'));  //Output: []

function fuzzyMatch (drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}
const drivers2 = ['Bobby', 'Sammy','Sally', 'Annette', 'Sarah', 'bobby'];

console.log(fuzzyMatch(drivers2, 'Sa'));  //Output: ['Sammy', 'Sarah', 'Sally']
console.log(fuzzyMatch(drivers2, 'y'));   //Output: []
console.log(fuzzyMatch(drivers2, 'mm'));  //Output: []


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
//Name matches the hometown
console.log(matchName(drivers, 'Bobby'));
//Output:
//[
// {name: 'Bobby', hometown: 'Pittsburgh'},
// {name: 'Bobby', hometown; 'Tampa Bay'}
//]

