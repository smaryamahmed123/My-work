//=============================================CHAPTER # 21====================================//
//Q1    var allLower = userInput.toLowerCase;
/*Ans*/ //var allLower = userInput.toLowerCase();  

//Q2
/*Ans*/ //var x = "KARAchi";
//x = x.toLowerCase();
//console.log(x)

//Q3
// /*Ans*/ var y = "iSlAmAbAd";
// y = y.toUpperCase();
// console.log(y)

//Q4
// /*Ans*/ var a = "MARYAM";
// var z = a.toLowerCase();
// console.log(z);

//Q5
// /*Ans*/ var arr = ["apple","ORINGE","BANANA","MANGO"]
// var convertedArr = [];
// for(var i=0; i<arr.length; i++){
//     convertedArr.push(arr[i].toLowerCase());
// }
// console.log(convertedArr);

//Q6
// /*Ans*/    

//Q7
// /*Ans*/  var variable = "kArAcHI"
// function firstLetter(str){
//     return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
// }
// var convertedStr = firstLetter(variable);
// console.log(convertedStr);


//=============================================CHAPTER # 22-25======================================================//

//Q1
// /*Ans*/ var someWords = "captain";
// var a = someWords.slice(1,3)
// console.log(a)

//Q2
// /*Ans*/ var input = "Syeda Maryam Ahmed";
// var numberOfCharechter = input.length;
// console.log(numberOfCharechter)

//Q3
// /*Ans*/ var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg)

//Q4
// /*Ans*/ var a = "hania"
// var  b = a.length;
// var c = b;
// console.log(c)

//Q5
// /*Ans*/ var a = "maryam ahmed";
// var b = a.length;
// console.log(b);

// var c =  a.slice(1,-3);
// console.log(c);

//Q6  //What is the value of indx?
// /*Ans*/ var text = "To be or not to be.";
// var indx = text.indexOf("be");
// the value of the index is 3.

//Q7  //What is the value of indx?
// /*Ans*/  var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// the value of the index is 16.

//Q8
// /*Ans*/ var text = "To go or not to go, that is the question.";
// var index = text.lastIndexOf("go");
// console.log(index);
//\\===================================================================================|||||||||||||||||||||||||||||||||||||||||||||||||||||========================================================================================================================
//Q10
// /*Ans*/ var a = "abcde";
// a = a.charAt(2);
// console.log(a)

//Q11
// /*Ans*/ var text = "syeda maryam ahmed";
// var cha = text.charAt(9);
// console.log(cha);

//Q12
// /*Ans*/ var str = "This is a test string.";
// var x = str.charAt(str.length - 1);
// console.log(x);

//Q13
// /*Ans*/ var str = "This, is a test string.";
// var x = str.charAt(4);
// console.log(x);

//Q14
// /*Ans*/ var text = "hasan "
// if (text.length >= 3 && text.charAt(2) === "s") {
//     console.log("the third charechter is 's'")
//   } else {
//     console.log("the third charechter is not's'")
//   }
  
//Q15
// /*Ans*/  var inputString = "Hello, world!";
// var charArray = [];

// for (var i = 0; i < inputString.length; i++) {
//   charArray.push(inputString.charAt(i));
// }

// console.log(charArray);


// var reply = "This is a no and a no, but also a maybe.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);

//Q16
// /*Ans*/  var str = "1 is the first number";
// var newStr = str.replace("1","one")
// console.log(newStr);

//Q17
/*Ans*/ var x =  "a"
var y = x.replace("x", "z");
console.log(y)


///////////////////////////////////////////////////////////////CHAPTER # 26 ////////////////////////////////////////////////////////////////////////////////////////////
//Q1
// /*Ans*/ var a =Math.round(7.9);
// console.log(a)
//Q2
// /*Ans*/ var origNum = 9.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

//Q3
// /*Ans*/   var origNum = 9.9;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

//Q4
///*Ans*/  var a =  7.8;
// var a = Math.round(a);
// console.log(a)

//Q5
// /*Ans*/ var originalNumber = 0.5;
// var roundedNumber = Math.floor(originalNumber);

// console.log(roundedNumber);


/////////////////////////////////////////////////////////////Chapter # 27 (Random Numbers)/////////////////////////////////////////////////////////////////////////////


//Q1
// /*Ans*/ var randomNumber = Math.random();
// var inRange = Math.floor(randomNumber * 50) + 1 ;
// console.log(inRange)

//Q2
// /*Ans*/ var ran = Math.random();
// var str = ran;
// console.log(str)

//Q3
// /*Ans*/  function dice(){
//     return Math.floor(Math.random()*6) + 1
// }
// var result = dice();
// console.log("you rolled a " + result)

//Q4
// /*Ans*/ function coin(){
//     var randomNumber = Math.random();
//     if(randomNumber < 0.5){
//         return "Head"
//     }else{
//         return "Tail"
//     }
// }
// var result = coin();
// console.log("The head/tail result is " + result);


////////////////////////////////////////////////////////////////////////////Chapter 28, 29 (Converting Strings)/////////////////////////////////////////////////////////


//Q1
// /*Ans*/ var str = "67";
// var num = parseInt(str);
// console.log(num);

//Q2
// /*Ans*/ function convartingStr(){
//     var str = "123";
//      var num = parseInt(str);
//      console.log(num);
    

// }
// convartingStr()

//Q3
// /*Ans*/ var  convertingDecimalStrToNum = "5.876";
// var converded = parseFloat(convertingDecimalStrToNum);
// console.log(converded);

//Q4
/*Ans*/ function canBeConvertedToNumber(str) {
  // Attempt to convert to a number and check if the result is not NaN
  return !isNaN(Number(str));
}

// let str = "123.45";
// if (canBeConvertedToNumber(str)) {
//   let num = parseFloat(str); // or parseInt(str) for integers
//   console.log("Conversion successful:", num);
// } else {
//   console.log("Cannot be converted to a number.");
// }

//Q5
// /*Ans*/ var str = 6789;
// var num  = str.toString();
// console.log(num);

//Q6
// /*Ans*/ function numberToStr (){
//     var str = 42;
//  var num  = str.toString();
//  console.log(num);
// }
// numberToStr()

//Q7
// /*Ans*/ var decimal = "3.14";
// var integer = Number(decimal);
// console.log(integer);


//////////////////////////////////////////////////////////////////////////Chapter # 30 (Controlling the length of decimals)/////////////////////////////////////////////////

//Q1
// /*Ans*/ let num = "4321.98776655";
  ///let newNum = num.toFixed(4).toString();
//  var total = 545.7890
//  var prettyTotal = total.toFixed(2);

// let num = 12.3456789;
// let newNum = num.toFixed(4).toString();
// console.log(newNum)

//Q2
// /*Ans*/ var a = 1234.5678;
// a = Number(Number(a.toFixed(2)))
// console.log(a)

//Q3
// /*Ans*/  var num = 1234.56789;
// if (num.toFixed(2).toString().length > 4) {
//     console.log("Number has less than 4 characters.");
    
// }else{
//     console.log('Number has not less than 4 characters.')
// }

//Q4
// /*Ans*/ var a = 123.456789;
// var x = alert("The  rounded number is " +  a.toFixed(2).toString())


/////////////////////////////////////////////////////////////////////Chapter # 31 - 34 (Date & Time)////////////////////////////////////////////////////////////////////////


//Q1
// /*Ans*/ var date = new Date;
// var newDate = date;
// console.log(newDate);

//Q2
// /*Ans*/  var a = new Date().toString();
// var dObj= a;
// console.log(dObj)

//q3
// /*Ans*/    var d = new Date();
// var currentMonth = d.getDay();
// console.log(currentMonth)

//Q4
// /*Ans*/ let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var day = date.getDay();
// alert("The current day is: " + dayNames[day]);

//Q5
// /*Ans*/ let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var date = new Date();
// var day = date.getDay();
// console.log( );

// var monthNames = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
// var date = new Date();
// var month = date.getMonth()
// console.log()

// var dayOfMonth = date.getDate();

// var currYr = date.getFullYear();

// var currentHrs = date.getHours();

// var currMins = date.getMinutes();

// var currSecs = date.getSeconds()

// var a = (dayNames[day] + " " + monthNames[month] + " " +dayOfMonth + " " + currYr + " " + currentHrs + ":" + currMins + ":" + currSecs); 

// console.log(a);

// //Q6
// /*Ans*/ let later = new Date(2020, 11, 0);
// console.log(later)

//Q7
// /*Ans*/let specificDate = new Date(1992, 1, 2);
// console.log(specificDate)

//Q8
// /*Ans*/ var a =  alert(new Date(1980, 0, 1).getTime());
// console.log(a)

//Q9
// /*Ans*/ let date = new Date('2023-08-27');

// // Change the year to 2024
// date.setFullYear(2024);

// console.log(date); 

//Q10
// /*Ans*/ var inputDate = '2023-8-27';
// function ChangeMonth (inputDate){

//   var date = new Date(inputDate);

//   date.setMonth(0);

//   return date;
// }
// var newMonth = ChangeMonth(inputDate);

// console.log(newMonth);

//Q11
/*Ans*/ 

//Q12
/*Ans*/ 
// function changeTime(inputeTime) {

//   var time = new Date(inputeTime);

//   var newMin = parseInt(prompt('Enter the Minute value'));

//   time.setMinutes(newMin);

//   return time;
// }
// var inputeTime = '2023-08-27T10:11:00';
// var minute = changeTime(inputeTime);

// console.log(minute);

//Q13
// /*Ans*/  var inputHour = '2023-08-27T10:33:00';
// function changeHour(inputHour){

//   var hour = new Date(inputHour);

//   hour.setHours(12);

//   return hour;
// }
// var newHour = changeHour(inputHour);

// console.log(newHour)

//Q14
// /*Ans*/ function calculateAge(birthdate){
//   var birth = new Date(birthdate);

//   var currentAge = new Date();

//   var age = currentAge.getFullYear() - birth.getFullYear();

//   if (currentAge.getMonth() < birth.getMonth() ||
//     (currentAge.getMonth() === birth.getMonth() &&
//      currentAge.getDate()< birth.getDate()))
// {
//     age--
//   }

//   return age;

// }

// var birthdate = '2006-05-07';
// var age = calculateAge(birthdate)
// console.log("Your age is " + age)


//////////////////////////////////////////////////////////////////Chapter 35 - 37 (Functions)////////////////////////////////////////////////////////////////////////////


//Q1
// /*Ans*/ function displayAlert(message) {
// }

//Q2
// /*Ans*/  function askName (){
//   var userName = prompt("enter your Name")
//   console.log(userName)
// }
// askName()

//Q3
// /*Ans*/ function callTwoFunctions() {
//     functionOne();
//     functionTwo();
// }

// function functionOne() {
//     console.log("Function One called.");
// }

// function functionTwo() {
//     console.log("Function Two called.");
// }

// Call the function that calls the other two functions
// callTwoFunctions();

//Q4
// /*Ans*/ function displayNameAlert() {
//     const name = prompt("Enter name");
//     alert("Entered name: " + name);
// }

// // Call the function
// displayNameAlert();

//Q5
// /*Ans*/ function concat(a, b, c) {
//   console.log(a,b,c)
// }
// // Define a variable, a string, and a number
// const variableValue = "Hello";
// const stringValue = "world";
// const numberValue = 42;

// // Call the concat function with the three values
// concat(variableValue, stringValue, numberValue);

//Q6
/*Ans*/
// function towParameters(one,tow){
//   console.log(one, tow)
// }
// var one = "Hello ";
// var tow = "World";

// towParameters(one, tow)

//Q7
// /*Ans*/ function multiplyAndAssign(a, b, c) {
//     const result = a * b * c;
//     return result;
// }

// const multiplicationResult = multiplyAndAssign(2, 3, 4);

// console.log("Multiplication result:", multiplicationResult);

//Q8
// /*Ans*/ function averageNum(number) {
//   if(number.length === 0){
//     return 0;
//   }
//   var sum = 0;
//   for(var i=0; i<number.length; i++){
//     sum += number[i];
//   }
//   return sum / number.length;
// }
// var number = [5, 10, 15, 20];
// var avg = averageNum(number);
// console.log(avg);



//Q9
// /*Ans*/ function sum (a,b){
//   console.log(a + b)
// }sum(5,4);

//Q10
// /*Ans*/ function averageNum(number) {
//   if(number.length === 0){
//     return 0;
//   }
//   var sum = 0;
//   for(var i=0; i<number.length; i++){
//     sum += number[i];
//   }
//   return sum / number.length;
// }
// var number = [5, 10, 15, 20];
// var avg = averageNum(number);
// console.log(avg);

//Q11
///*Ans*/ function averageNum(number) {
//   if(number.length === 0){
//     return 0;
//   }
//   var sum = 0;
//   for(var i=0; i<number.length; i++){
//     sum += number[i];
//   }
//   return sum / number.length;
// }
// var number = [5, 10, 15, 20];
// var avg = averageNum(number);
// console.log(avg);
//Q12
// /*Ans*/ function countLetters(word) {
//     var letterCounts = {};
    
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         if (letterCounts[letter]) {
//             letterCounts[letter]++;
//         } else {
//             letterCounts[letter] = 1;
//         }
//     }
    
//     return letterCounts;
// }

// var inputWord = "hello";
// var letterCountResult = countLetters(inputWord);

// console.log(letterCountResult);  // Outputs: { h: 1, e: 1, l: 2, o: 1 }


//Q13
// /*Ans*/ function setYearInDate(year, dateObj) {
//     dateObj.setFullYear(year);
//     return dateObj;
// }

// var currentDate = new Date(); // Get the current date
// var targetYear = 2024; // Example year to set
// var dateWithYearSet = setYearInDate(targetYear, currentDate);

// console.log(dateWithYearSet);


//Q14
///*Ans*/  function calculateAge(birthdate){
//   var birth = new Date(birthdate);

//   var currentAge = new Date();

//   var age = currentAge.getFullYear() - birth.getFullYear();

//   if (currentAge.getMonth() < birth.getMonth() ||
//     (currentAge.getMonth() === birth.getMonth() &&
//      currentAge.getDate()< birth.getDate()))
// {
//     age--
//   }

//   return age;

// }

// var birthdate = '2006-05-07';
// var age = calculateAge(birthdate)
// console.log("Your age is " + age)

//Q15
// /*Ans*/ function checkWordPresence(word, array) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === word) {
//           return true;
//       }
//   }
//   return false;
// }

// var wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var wordToCheck = 'raza';
// var isWordPresent = checkWordPresence(wordToCheck, wordArray);

// console.log(isWordPresent);  



//Q16
// /*Ans*/ function repeatLetters(str) {
//   var repetedString = "";
//   for(var i = 0; i< str.length; i++){
//     repetedString += str[i].repeat(10);
//   }
//   return repetedString
// }
// var inputString = "abcde"
// var result = repeatLetters(inputString);
// console.log(result)

//Q17
// /*Ans*/ function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   var originalArray = ['a', 'b', 'c', 'd', 'e'];
//   var reversedArray = reverseArray(originalArray);
  
//   console.log(reversedArray); 
  

////////////////////////////////////////////////////////////////Chapter 38 (Local vs. Global Variables)////////////////////////////////////////////////////////////


//Q1
// /*Ans*/ function localVariable(){
//   var local = "This is local Variable"
//   console.log(local);
// }
// localVariable()


//Q2
// /*Ans*/ var local = "This is global Variable"
//  function localVariable(){
  
//   console.log(local);
// }
// localVariable()


/////////////////////////////////////////////////////////Chapter 39, 40 (Switch Statements)///////////////////////////////////////////////////////////////////////

//Q1
// /*Ans*/
// const dayOfWeek = "Wednesday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's the start of the week.");
//         break;
//     case "Tuesday":
//         console.log("It's the second day of the week.");
//         break;
//     case "Wednesday":
//         console.log("It's the middle of the week.");
//         break;
//     case "Thursday":
//         console.log("It's almost the weekend.");
//         break;
//     case "Friday":
//         console.log("It's the end of the workweek.");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }

//Q2
// /*Ans*/ const cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "New York":
//       alert("You entered New York!");
//       break;
//   case "Los Angeles":
//       alert("You entered Los Angeles!");
//       break;
//   case "Chicago":
//       alert("You entered Chicago!");
//       break;
//   default:
//       alert("City not recognized.");
// }
