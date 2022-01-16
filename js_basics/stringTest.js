function addItemToArray() {
    const arr =  ['India', 'USA', 'China', 'Russia', 'UK']
    // console.log(arr)
    // arr.push('Germany')
    // console.log(arr)
    // arr.pop()
    // console.log(arr)
    // arr.unshift('Japan')
    // console.log(arr)
    console.log(arr)
    const index = arr.indexOf('Mexico')
    console.log(index)
    // arr.splice(1, 1)
    // console.log(arr)
}


//write a function that adds a country to an array only if it is not present
const a = ['India', 'USA', 'China', 'Russia', 'UK']
'India'
const countries   = ['India', 'USA', 'China', 'Russia', 'UK']
   
function addCountryToArray(arr, name) {
   if(arr.indexOf(name) > -1) {
    console.log('already present')
   } else {
       arr.push(name)
   }
   console.log(arr)
}

addCountryToArray(countries,'Chile');

addCountryToArray(countries,'Mexico');
addCountryToArray(countries,'Chile');
