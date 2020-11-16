/* Opdracht: Array methods - deel 2
Voor elk van de onderstaande opdrachtjes heb je één van onderstaande array methods nodig. Om de puzzel op te lossen heb je eerst de test data nodig.
Er zijn meerdere oplossingen mogelijk voor 1 probleem.

[ ] .find method
[ ] .forEach method
[ ] .some method
[ ] .every method
[ ] de .includes method
De volgende 3 methods zijn wat advanced. Er zijn een aantal opdrachten waar je deze functies kunt gebruiken. We gaan er later vandaag nog meer mee oefenen:

[ ] de .map method

[ ] de .filter method

[ ] de .reduce method */

// deel A
/* A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

Test data

  const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  / Hier komt jouw functie
  
  console.log(findSpiderMan(superheroes)) 
  / Find Spiderman
  / result should be: {name: "Spiderman", alter_ego: "Peter Parker"} */

//   Mijn antwoord deel A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
  
    let findSpiderMan = function() {
        return superheroes.find(({name}) => name === "Spiderman" );
    }
    
    console.log(findSpiderMan(superheroes)) 
    //  Find Spiderman
    //  result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

    // deel B
    /* B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

Test Data

  doubleArrayValues([1, 2, 3]) 
  / result should be [2, 4, 6] */

//   Mijn antwoord deel B

/* Een voorbeeld:
var ar = [1, 2, 3, 4, 5];
var ar2 = []; // new array
// pass value, multiply times 2, and push to new array
ar.forEach( function(v) { ar2.push(v*2); } );
// view new array
console.log( ar2 ); // [2, 4, 6, 8, 10] */

let doubleArrayValues = [1, 2, 3];
let newValue = []; 
doubleArrayValues.forEach(function(v) {newValue.push(v * 2); });

console.log(newValue); // [2, 4, 6]

// .map method
/* Een voorbeeld:

var ar = [1, 2, 3, 4, 5];
var ar2 = ar.map( function(v) { return v*2; } );
console.log( ar2 ); // [2, 4, 6, 8, 10] */

let doubleArrayValues2 = [1, 2, 3, 4, 5];
let newValue2 = doubleArrayValues2.map(function(v) {return v *2; });
console.log(newValue2); // [2, 4, 6]


// deel C
/* C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.

Test Data

  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  / result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2]})
  / result should be false */

//   Mijn antwoord deel C

// voorbeeld:
/* const array = [1, 2, 3, 4, 5];

/ checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
/ expected output: true */

let containsNumberBiggerThan10 = function(array) {
    return array.some(element => {
      return element > 10;
    });
  };



console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 
//   result should be true
  console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
//   result should be false

// deel D
/* D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

Test Data

  isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
  // result should be true */

//   Mijn antwoord D:
// Voorbeeld: 
/* const array1 = [1, 2, 3];

console.log(array1.includes(2));
/ expected output: true */

let isItalyInTheGreat7 = function (array) {
    return array.includes("Italy");
  }

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
// result should be true


// deel E
/* E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.

Test Data

  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  / result should be [10, 40, 30, 60, 90, 70, 110] */

//   Mijn antwoord E:

let tenfold = function(array) {
    return array.map(num => {
        return num * 10;
    })};


console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// deel F
/* F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

Test Data

  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  / result should be: false */

//   Mijn antwoord F:

// Voordbeeld:
// .every method
/* const items = [
    {name: 'Bike',  price: 100  },
    {name: 'TV',  price: 200  },
    {name: 'Album',  price: 10  },
    {name: 'Book',  price: 5  },
    {name: 'Phone',  price: 500  },
    {name: 'Computer',  price: 1000  },
    {name: 'Keyboard',  price: 25  }
]


const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100;
    / return item.price <= 1000; //true
})

console.log(hasInexpensiveItems); // false */

let isBelow100 = function(array) {
    return array.every(number => {
      return number < 100;
    });
  }

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false


// deel G Bonus
/* G Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).

In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.

Test Data

  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  / result should be 1118 */

//   Mijn antwoord G Bonus:

// voorbeeld:
// .reduce method
/*const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15 */

const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;


console.log(array1.reduce(reducer));
// result should be 1118