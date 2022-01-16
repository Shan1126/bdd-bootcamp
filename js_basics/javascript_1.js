var name = 'Adam';
var names = ['Adam', 'Eve', 'Ram'] //array
var hobbies = ['Reading', 'Cooking', 'Piano']; //array
var x = [];
var str = '';
var n = undefined;
var x =  NaN
var x =10;
var y = '10'


var a = 10;
var b = 20;
var c = a+b;
console.log(c);

function sum(a, b) {
    return a+b;
}

var c = sum(10,20);
console.log(c)


function multiply(a,b) {
    return a*b;
}

function square(a) {
    return a*a;
}

function printMe(msg) {
    console.log(msg)
}

function printMe(arr) {
    console.log(arr[0])
    console.log(arr[2]);
}
var x = [1,2,4,6,10,12] //x[0], x[5]
//create a function that takes an array and sums up all the elements

function sumOfArray(arr) {
    var s = 0;
    for(var i = 0; i<arr.length; i++) {
       s = s+ arr[i]; 
    }
    return s;
}

for (let i = 0; i< 10; i++) {
    console.log(i);
    if(i ==5 ) break;
}

for( var i =0; i< 10; i++) {
    if(i > 7) {
        continue;
    }
    console.log(i);
}

var name = 'Adam'
const name = {} //constant, cannot change once assigned
let name = 'Eve' // same as var, it can chnage value later

function add() {

}


Person  = name, age, email, address, hobbies, title

const person = {
    name: 'Shan',
    age: 20,
    email: 'test@tewst.com',
    address: '10, main str, san jose ca',
    isCitizen: false,
    hobbies : ['reading', 'music']
}

const car = {
    color: 'red',
    model: 'camry',
    maker: 'toyota',
    year: 2020
}

console.log(person['name'])

//JSON - Javascript Object Notation

function addItemToArray(arr, item) {
    const arr =  ['India', 'USA', 'China', 'Russia', 'UK']
    console.log()
    arr.push('Germany')
}

