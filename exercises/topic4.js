//Topic 4. Error Handling and Debugging

//Javascript Try Catch 

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Handling</h2>

<p>This example demonstrates how to use <b>catch</b> to diplay an error.</p>

<p id="demo"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>

</body>
</html>


//Throw 
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>

//finally

<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>

<p id="p01"></p>

<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
</script>

</body>
</html>

//Syntax Error
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>

<p>You cannot evaluate code that contains a syntax error:</p>

<p id="demo"></p>

<script>
try {
  eval("alert('Hello)");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
</script>

</body>
</html>


//Type Error
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>

<p>You cannot convert a number to upper case:</p>

<p id="demo"></p>

<script>
var num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
</script>

</body>
</html>

//console.log
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>

<p>Activate debugging in your browser (Chrome, IE, Firefox) with F12, and select "Console" in the debugger menu.</p>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html> 

//Debugger keyword

<!DOCTYPE html>
<html>
<head>
</head>

<body>

<p id="demo"></p>

<p>With the debugger turned on, the code below should stop executing before it executes the third line.</p>

<script>
var x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

