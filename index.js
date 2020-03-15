// Import stylesheets
import './style.css';

// Write Javascript code!
const acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
const balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};
 console.log(Object.keys(balance));

console.log("Sort By User",acctData.sort(dynamicSort("user" , "desc")));
console.log("filtered by Bob -", filterArray(acctData ,"user", "Bob"));
console.log("filtered by Charlie -", filterArray(acctData ,"user", "Charlie"));
// console.log("Sort By User",acctData.sort(dynamicSort("acctNum" , 1)));
console.log("filtered by Alice -", filterArray(acctData ,"user", "Alice"));


function dynamicSort(property , sortOrder) {
     return function (a,b) {
        if(sortOrder == "desc"){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}



function filterArray(array, key ,value){
 let response = array.filter(data => data[key] == value);
   return response;
}