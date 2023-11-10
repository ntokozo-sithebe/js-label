// Addition button
//const btnAdd = document.querySelector('[data-addition]')
//const lblOutput = document.querySelector('#output')
//function addition() {
  //  let numb1 = document.getElementById('numb1').value
   // let numb2 = document.getElementById('numb2').value
   // let sum =eval(`${numb1}+ ${numb2}`)
    // lblOutput.innerHTML = `<strong>${sum}</strong>`
  //  lblOutput.textContent = sum
//}
//btnAdd.addEventListener('click', addition)


// .value
// DO NOT USE innerHTML
// use eval 

// to display the position or placement on the array then [] log or table console.log or console.table


// CHANGING THE POSITIONS 


//let data = [5, 3, 8, 'Veronique', 'Sivuyisiwe']

//console.log(data);
//console.log(`Arrays size: ${data.length}`); // the length of an array - length is not a method its a property -- properties don't have parenthesis()
// 
//console.log(`Element at position 3: ${data[3]}`);

//data.push('Matthew') // adds a new value from the end

// console.log(data.at(-1) );

//data.push('Shawn', 'Simamkele') // adds elements at the back
//console.log(data)

//data.unshift('new', 'element') // adds the element in front
//console.log(data)

//data.pop('Simamkele')
//let lastRemovedElement = data.pop() // pop removes the last element
//console.log(data)
//console.log(lastRemovedElement)

//console.log(data.concat) //combies 2 or more array -- creates new array without deleting any existing arrays/previous array

// opposite of - unshift - adds new element ... shift -- removes the first element

//slice -- starting point is your index and then the end is your the number of your ending position of which value you want-the length
//console.log(data.slice(1,4))


//data.splice(2, 0,'Ntokozo')
//console.log(--Adding using splice)
// string value (your index) folllowed by what you're deleting --if youre not deleting then it will be 0 -- which means you'll be adding a value -----followed by the value that youre adding()...

//let task = [1, 3, 5]
//console.log(task.splice(2, 0, 'Ntokozo'))

//task.splice(2, 0 , 'Ntokozo')-- another way of showing it on your console !!!! --- if you want to add more values then you use a comma,

//console.log(task.splice(1,2)) // removed the 2 values which were 'Ntokozo' and 3

//task.splice(0,2) // removed the rest of the array 


// my own example

//let mobi = [1, 3, 5, 7, 9]
//mobi.splice(4, 0 , 'Tashreeq') // sequence [1, 3, 5, 7, Tashreeq, 9]
//mobi.splice(2,3,'Tarryn')   // sequence [1, 3, Tarryn, 9]


let data = [7, 3, 'Abc', 1, 'abc']
//console.log(data);
//console.log(data.reverse()) // reverses the order
//console.log(data.sort())// sorts the numbers in ascending order followed by the first string then the second

let numbers = data.filter(onlyNumbers)

// Named function or function declaration

function onlyNumbers(a){
    return typeof a == 'number' // return numbers creates a new array with only numbers ... // typeof- indentifies the type of data 
}

console.log(data);
let evenNumbers = data.filter( testing)
console.log(evenNumbers);

addNumbers = x,y => x+y    //arrow function

function addNumbers(x,y){
    return x + y
}

//function testing(x){
 //   return x % 2 >=1
//}




