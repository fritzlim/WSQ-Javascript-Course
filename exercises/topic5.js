// Topic 5. Object Oriented Programming

//Javascript Class
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class</h2>

<p>In this example we demonstrate a simple class definition and how to use it.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.carname;
</script>

</body>
</html>


//Constuctor Method
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Method</h2>

<p>Demonstration of how to add a method in a JavaScript Class.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.present();
</script>

</body>
</html>

//Passing Paremeter to Method
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Method</h2>

<p>Pass a parameter into the "present()" method.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.present("Hello");
</script>

</body>
</html>

//Activity: Class 

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class</h2>

<p id="demo"></p>

<script>
class Rect {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }
  area =  () => this.length*this.height;
}

rect1 = new Rect(3,5);

document.getElementById("demo").innerHTML = rect1.area();
</script>

</body>
</html>


//Inheritance
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Inheritance</h2>

<p>Use the "extends" keyword to inherit all methods from another class.</p>
<p>Use the "super" method to call the parent's constructor function.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
</script>

</body>
</html>


//Activity: Class 

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class</h2>

<p id="demo"></p>

<script>
class Rect {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }
  area =  () => this.length*this.height;
}

class Square extends Rect {
    constructor(length) {
        super(length,length)
    }
}

square1 = new Square(3);

document.getElementById("demo").innerHTML = rect1.area();
</script>

</body>
</html>

//Activity: Inheritance
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class</h2>

<p id="demo"></p>

<script>
class Rect {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }
  area =  () => this.length*this.height;
}

class Square extends Rect {
    constructor(length) {
        super(length,length);
    }
}

square1 = new Square(3);

document.getElementById("demo").innerHTML = square1.area();
</script>

</body>
</html>
