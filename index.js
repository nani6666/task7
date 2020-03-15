// Import stylesheets
import './style.css';

// Write Javascript code!
const acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice",
 "balance":  4593.22
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob",
 "balance":  232142.5
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice",
 "balance": 0
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice",
 "balance":  4344
 }
];
const balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

document.getElementById("accountNumbers").innerHTML = JSON.stringify(accountNumbers(acctData , "acctNum"));

document.getElementById("users").innerHTML = JSON.stringify(accountNumbers(acctData , "user"));

document.getElementById("san").innerHTML = JSON.stringify(acctData.sort(sortBy("acctNum" , "asc", "num")));

document.getElementById("fob").innerHTML = JSON.stringify(filterArray(acctData ,"user", "Bob"));

document.getElementById("foc").innerHTML = JSON.stringify(filterArray(acctData ,"user", "Charlie"));


document.getElementById("soa").innerHTML =JSON.stringify(acctData.sort(sortBy("acctNum" , "asc")));

document.getElementById("foa").innerHTML = JSON.stringify(filterArray(acctData ,"user", "Alice"));


document.getElementById("sob").innerHTML =JSON.stringify(acctData.sort(sortBy("balance" , "asc" , "num")));

console.log("Sort By User",acctData.sort(sortBy("user" , "asc" ,"string")));
console.log("filtered by Bob -", filterArray(acctData ,"user", "Bob"));
console.log("filtered by Charlie -", filterArray(acctData ,"user", "Charlie"));
console.log("filtered by Alice -", filterArray(acctData ,"user", "Alice"));


function accountNumbers(array, key) {
  return array.map(function(item) { return item[key]; });
}

function sortBy(property , sortOrder , param) {
     return function (a,b) {
       if(param == "string"){
          if(sortOrder == "desc"){
            return b[property].localeCompare(a[property]);
          }else{
            return a[property].localeCompare(b[property]);
         }      
       } else {
         if(sortOrder == "desc"){
            return b[property]- a[property];
          }else{
            return a[property]-b[property];
         }      
       }
        
    }
}



function filterArray(array, key ,value){
 let response = array.filter(data => data[key] == value);
   return response;
}