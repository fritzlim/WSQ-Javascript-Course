//Topic 1 Basic Javascript Programming

// My first Javascript 
<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 

//External Javascript script
<!DOCTYPE html>
<html>

<head>
  <script src="script.js"></script>
</head>

<body>
  <h1>A Web Page</h1>
  <p id="demo">A Paragraph</p>
  <button type="button" onclick="myFunction()">Try it</button>
</body>

</html>

//script.js
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  //Inner HTML
  <!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>

//Document Write
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>

//Window Alert
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>

//Console Log
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>

//Number
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

//String
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

var text1 = "Hello World!";       
var text2 = text1.toUpperCase(); 

//Regular Expression
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Methods</h2>

<p>Search a string for "W3Schools", and display the position of the match:</p>

<p id="demo"></p>

<script>
var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
document.getElementById("demo").innerHTML = n;
</script>

</body>
</html>

//Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>

</body>
</html>

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

//Array Sorting
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements

//Date
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
var d = new Date(2018, 11, 24, 10, 33, 30);
var d = new Date(2018, 11, 24, 10, 33);
var d = new Date(2018, 11, 24, 10);
var d = new Date(2018, 11, 24);
var d = new Date(2018, 11);
var d = new Date(2018);

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript new Date()</h2>

<p>One parameter will be interpreted as new Date(milliseconds).</p>

<p id="demo"></p>

<script>
var d = new Date(2018);
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>

//Javascript Date
var d = new Date("2015-03-25");
var d = new Date("2015-03");
var d = new Date("2015");
var d = new Date("03/25/2015");

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript ISO Dates</h2>

<p id="demo"></p>

<script>
var d = new Date("2015-03-25");
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>

//Javascript Object
var car = {type:"Fiat", model:"500", color:"white"};
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  //Activity: Javascript OBject
<html>
<head>
<title>Sample Page</title>
</head>
<body>
<script>
	var person = {name:"Ally",height:160};

	document.write(person.name + "\'s height is " + person.height +'cm');
</script>
</body>
</html>

//Math
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random();     // returns a random number

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math.pow()</h2>

<p>Math.pow(x,y) returns the value of x to the power of y:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = Math.pow(8,2);
</script>

</body>
</html>

//Activity: Javascript Math
<html>
<head>
<title>Sample Page</title>
</head>
<body>
<script>

	var r = 5;
	var area = Math.PI*r*r;

    document.write('<br>The area of the circle is ' + area);
</script>
</body>
</html>

//Conditional Statement

//If
<!DOCTYPE html>
<html>
<body>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="demo">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>

</body>
</html>

//if-else
<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a time-based greeting:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}
</script>

</body>
</html>

//Ternary Opertor 

var a = 8;
var b = 8;
var c = (a>b) ? a : b
alert("the larger number is " + c);

//Switch
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>

</body>
</html>

//Activity: Swith 

// var dice = Math.floor((Math.random() * 6) + 1);

// switch (dice) {
	case 1:console.log('One');
	break;
	case 2:console.log('Two');
	break;
	case 3:console.log('Three');
	break;
	case 4:console.log('Four');
	break;
	case 5:console.log('Five');
	break;
	case 6:console.log('Six');
	break;
	default:console.log('Not sure the dice ');
}


//For loop
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

// Ex: For Loop
<!DOCTYPE html>
<html>

<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
  
for  (var i=0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

// For In Loop
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For/In Loop</h2>

<p>The for/in statement loops through the properties of an object.</p>

<p id="demo"></p>

<script>
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>

// For Off Loop
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For/Of Loop</h2>

<p>The for/of statement loops through the values of an iterable object.</p>


<script>
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For/Of Loop</h2>

<p>The for/of statement loops through the values of an iterable object.</p>

<script>
var txt = 'JavaScript';
var x;

for (x of txt) {
  document.write(x + "<br >");
}
</script>

</body>
</html>

//While Loop
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>

<p id="demo"></p>

<script>
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

//Do While Loop
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Do/While Loop</h2>

<p id="demo"></p>

<script>
var text = ""
var i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

//Ex: While Loop
var i = 0;
while
 (i 
<
 10) {
  console.log(i);
  i++
}

//Break
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Loops</h2>

<p>A loop with a <b>break</b> statement.</p>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

//Conintue 
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Loops</h2>

<p>A loop with a <b>continue</b> statement.</p>

<p>A loop which will skip the step where i = 3.</p>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

//Ex: Break or Continue 
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      
  break
  ;
    }
  }