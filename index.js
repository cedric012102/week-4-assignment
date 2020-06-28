//1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’ 
var firstName = 'Cedric'
var lastName = 'Smith'

console.log(`I am ${firstName + ' ' + lastName}`);

//2.	Write the same function as above as an arrow function with a different name.

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Luke', 'Cage'));


//3.Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
//a.	Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
customCountdown = (countdownTime) => { 
    setTimeout(function(){
      return alert('Time is up!')
    }, countdownTime * 1000)
  }
  customCountdown(3);

  //3. 
  //b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.

  askAreWeThereYet = (question) => {
    setInterval(function() {
      alert("askAreWeThereYet");
    }, 3000);
  }
  
  askAreWeThereYet();

  //4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.
//a.	Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback that will process the sliced element.
//b.	Inside the function, use the first two parameters to splice an element from the array.
//c.	Call the callback function and pass the spliced value into it.
//d.	Outside of your function, create an array of strings, call processSplicedValue, and pass the array, an index number, and console.log into it. For example: processSplicedValue(arrayName, 2, console.log);
//e.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
//f.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
//g.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.

function processSplicedValue(array, index, callback) {
  array.splice(index, 1)
  let splicedValue = array.splice(index, 1)
  callback(splicedValue)
}

let arrayOfStrings = ['Super Mario Bros', 'Mortal Kombat', 'NBA Jam', 'Zelda']

processSplicedValue(arrayOfStrings, 2, console.log);

processSplicedValue(arrayOfStrings, 2, alert);

processSplicedValue(arrayOfStrings, 2, (value) => alert(value));

function onceAgain(string) {
  let lastString = ""
  for(let i = 0; i < 21; i++) {
    lastString = lastString + string
  }
  return lastString
}

processSplicedValue(arrayOfStrings, 2, onceAgain)