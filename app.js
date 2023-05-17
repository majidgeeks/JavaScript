
// 1. Declare an empty array using JS literal notation to store 
// student names in future.

// var studentNames = [];

//-------------------------------------------
// 3. Declare and initialize a strings array.

// var friuts = ["apple", "mango", "banana", ];

//------------------------------------------
// 4. Declare and initialize a numbers array.

// var num1 = [12, 13, 14];

//--------------------------------------------
// 5. Declare and initialize a boolean array.

// var bool = [true, false];

//=================================================
// 6. Declare and initialize a mixed array.

// var mixedArray = ["apple", 12, true];

//=================================================
// 7. Declare and Initialize an array and store available mobile 
// networks in Pakistan.

// var networks = ["telenor", "mobilink", "zong", "ufone"];

//=====================================================
// 8. Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like:

// var qualifications = ["ssc", "hsc", "bcs", "bs", "bcom", "ms", "mphil", "phd"];

// for(var i = 0; i < qualifications.length; i++){
//     document.write(i+")"+ qualifications[i]+"<br>");
// }

//=======================================================
// 9. Declare and initialize an empty array to store top movies of 
// 2015. Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

// var movies = [];
// movies = movies.push();

// for(var i = 0; i < 5; i++){
    
//     movies = prompt("enter movies names");
    

// };
// console.log(movies[i]);
//??????????????????????????????????????????????

//====================================================
// 10. Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array


// var favCars = ["civic", "lamborghini", "audi",];

// document.write(favCars+"<br>");
// document.write("first index of the array"+ favCars.indexOf("civic")+"<br>");
// document.write("car at first index of the array is "+favCars[0]+"<br>" );
// document.write("last index of the array"+ favCars.lastIndexOf("audi")+"<br>");
// document.write("car at last index of the array is "+ favCars[2]);


//======================================================


// 11. Write a program to store 3 student names in an array. Take 
// another array to store score of these three students. Assume 
// that total marks are 500 for each student, display the scores & 
// percentages of students like:

// var students = ["aslam", "raheel", "afreen"];

// var studentScores = [320, 230, 480];

// var totalMarks = 500;

// document.write(students[0]+" scores " +studentScores[0]+" and the percentage is "+(studentScores[0]*100)/500+"<br>");
// document.write(students[1]+" scores " +studentScores[1]+" and the percentage is "+(studentScores[1]*100)/500+"<br>");
// document.write(students[2]+" scores " +studentScores[2]+" and the percentage is "+(studentScores[2]*100)/500+"<br>");

//=====================================================

// 12. Initialize an array with color names. Display the array 
// elements in your browser.

// var colours = ["red", "green", "blue", "yellow"];
// document.write(colours);

//===================================================

// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

// var userInput = prompt("type colour name");

// userInput = colours.unshift(userInput);

// console.log(colours)

//=============================================

// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

// var userInput = prompt("type clour here");

// userInput = colours.push(userInput);

// console.log(colours);

//===================================================


// c. Add two color to the beginning of the array. Display 
// the updated array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

// var userInput1 = prompt("type clour here" );
// var userInput2 = prompt("type clour here" );
// userInput1 = colours.unshift(userInput1);
// userInput2 = colours.unshift(userInput2);

//  console.log(colours);

//====================================================

// d. Delete the first color in the array. Display the updated 
// array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

// var dltFirst = colours.shift();

// console.log(colours);

//=====================================================

// e. Delete the last color in the array. Display the updated 
// array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

//  var dltLast = colours.pop();

//  console.log(colours);

//======================================================


// f. Ask the user at which index he/she wants to add a color & 
// color name. Then add the color to desired position/index. 
// . Display the updated array in your browser.

// var colours = ["red", "green", "blue", "yellow"];

// var userInput = prompt("enter the place where u want to add colur");
// var userInput1 = prompt("enter the colour name which u want to add");
// var add = colours.splice(userInput, 0, userInput1);

// console.log(colours);

//======================================================

// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your 
// browser.

// var colours = ["red", "green", "blue", "yellow"];

// var userInput = prompt("type how many colours you want to delete in the index");
// var userInput1 = prompt("type the position from where u want to delete in the index");
// var dlt = colours.splice(userInput1, userInput);

// console.log(colours);

//======================================================

//====================================================

// 13. Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method.

// var studentsScores = [320, 230, 180, 440];

// var sortedScores = studentsScores.sort();

// console.log(sortedScores);

//===================================================


// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// var fruits = ["strawberry", "apple", "orange", "banana"];

// var sortedFriuts = fruits.sort();

// console.log(sortedFriuts);

//====================================================

// 15. Write a program to initialize an array with city names. Copy 
// 3 array elements from cities array to selectedCities array. 

// var cityNames = ["karachi", "islamabad", "lahore", "multan"];

// var selectedCities = cityNames.slice(0, 3);

// console.log(selectedCities);

//======================================================


// 16. Write a program to create a single string from the below 
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];

// var join = arr.join(",");

// document.write('array :'+"<br>" + join+ "<br>" );

// var joinString = arr.join(" ");

// document.write("string :"+"<br>" + joinString);

//======================================================

// 17. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out)

// var electronics = [];

// electronics[0] = "keyboard";
// electronics[1] = "mouse";
// electronics[2] = "printer";
// electronics[3] = "led";

// console.log(electronics);

// //???????????????????????????????????????????????
//================================================


// 18. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-First 
// Out)


//??????????????????????????????????????????????
//==================================================
