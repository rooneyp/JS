//"use strict"

//creates new methods. pg4
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

l = function(msg) {
    console.log(msg);
}

//learnStrings();
//learnEquals();

//learnScope();
//l(" is b visible globally: " + globalB);
//l(" is lateDefined visible globally: " + lateDefined); //not visible

//learnBoolean();
//learnForIn();

//OBJECTS

function MyObj(x,y) {
    this.x = x;
    this.y = y;
}

myObj1 = new MyObj(1,2);

l(myObj1);

//Creating a Prototype
//The standard way to create an object prototype is to use an object constructor function:
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

//With a constructor function, you can use the new keyword to create new objects from the same prototype:
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

l("myFather prototype is: " + myFather.__proto__);
l("myFather prototype is: " + myFather.prototype);
l("myFather prototype is: " + Object.getPrototypeOf(myFather)); //most compatible

function learnStrings() {
    l("aaa");
    l('bbb');
    l('a.toUpperCase()'.toUpperCase());
}

function learnEquals() {
    var a = 'aaa';
    l("does a === a : " + (a === a));
    l("does c' + 'a' + 't' === 'cat' : " + ('c' + 'a' + 't' === 'cat'));
    l("does 5 == '5' : " +  (5 == '5'));
    l("does 5 === '5' : " +  (5 === '5'));
}

function learnScope() {

    lateDefined = "lateDefined";
    if (true) {
        var b = "Good day"; //use var else its global
    }
    l("b is visible as brackets don't limit scope: " + b);
    globalB = b;

    var lateDefined; // var defn's are processed first in JS = hoisting
}

function learnBoolean() {
    if(! (false || null || undefined || '' || 0 || NaN ) ) {
        l("all false");
    } else {
        l("some true");
    }
}

function learnForIn() {
    myObj = {
        foo1: "bar1",
        foo2: "bar2",
    }

    for (myvar in myObj) {
        l(myvar);
        l(typeof myvar);
        l(typeof myObj);
    }
}

//var F = function () {};
//document.writeln(typeof F);
//F.foobar = 'I"m a foobar'
//document.writeln(typeof F);
//document.writeln(F.foobar);
//
//
//
//var flight = {
//    airline: "Oceanic",
//    number: 815,
//    departure: {
//        IATA: "SYD",
//        time: "2004-09-22 14:55",
//        city: "Sydney"
//    }, arrival: {
//        IATA: "LAX",
//        time: "2004-09-23 10:42",
//        city: "Los Angeles"
//    } };
//
//var stooge = {
//    "first-name": "Jerome",
//    "last-name": "Howard"
//};
//
//stooge['middle-name'] = 'Lester';
//stooge.nickname = 'Curly';
//flight.equipment = {
//    model: 'Boeing 777'
//};
//flight.status = 'overdue';
//
//var another_stooge = Object.create(stooge);
//
//another_stooge['first-name'] = 'Harry';
//another_stooge['middle-name'] = 'Moses';
//another_stooge.nickname = 'Moe';
//
////iterate across var properties (including functions and protoype
////no guarantee on the order of the names
//var name;
//for (name in another_stooge) {
//    if (typeof another_stooge[name] !== 'function') {
//        document.writeln(name + ': ' + another_stooge[name]);
//    } }














































