/**
 * Created by paul on 04/07/2014.
 */
//creates new methods
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

document.writeln('Hello, world!');

var F = function () {};
document.writeln(typeof F);
F.foobar = 'I"m a foobar'
document.writeln(typeof F);
document.writeln(F.foobar);


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    }, arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    } };

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

//iterate across var properties (including functions and protoype
//no guarantee on the order of the names
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(name + ': ' + another_stooge[name]);
    } }














































