/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  console.log(pets[i], " ");
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// pets.sort();
const petsSorted = [...pets].sort();
console.log(petsSorted);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const petsReverse = [...pets].sort();
petsReverse.reverse();

for (i = 0; i < pets.length; i++) {
  console.log(petsReverse[i], " ");
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const petsMove = [...pets];
const move = function () {
  petsMove.push(petsMove[0]);
  petsMove.shift();
};

move();

console.log(petsMove);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "AB123CD";
cars[1].licensePlate = "AB456CD";
cars[2].licensePlate = "AB789CD";

console.log(cars[0].licensePlate, cars[1].licensePlate, cars[2].licensePlate);

// sopra l'ho fatto a mano con le conoscenze acquisite fino ad ora nel corso, qui sotto invece metodo sfruttando google e siti come stack overflow/w3s

const carsFunction = [...cars];
const aggiungiLicensePlate = (arr, ...licensePlates) => {
  arr.forEach((obj, index) => {
    obj.licensePlate = licensePlates[index];
  });
};

aggiungiLicensePlate(carsFunction, "SB324SD", "SB234AS", "SB394ZJ");
console.log(
  carsFunction[0].licensePlate,
  carsFunction[1].licensePlate,
  carsFunction[2].licensePlate
);

// ho visto che in caso si può anche far scegliere la chiave aggiungendo key (variabile) nelle prorietà e poi scrivendo obj[key] alla riga 87

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Fiat",
  model: "Punto",
  color: "grey",
  trims: ["1", "2", "3"],
  licensePlate: "AB012HJ",
});
console.log(cars[3]);

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop([cars[i].trims.length - 1]);
}
console.log(cars[0].trims, cars[1].trims, cars[2].trims, cars[3].trims);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let x = 0;
while (numericArray[x] !== 32) {
  console.log(numericArray[x]);
  x++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charactersPosition = [];

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersPosition.push("1");
      break;
    case "b":
      charactersPosition.push("2");
      break;
    case "c":
      charactersPosition.push("3");
      break;
    case "d":
      charactersPosition.push("4");
      break;
    case "e":
      charactersPosition.push("5");
      break;
    case "f":
      charactersPosition.push("6");
      break;
    case "g":
      charactersPosition.push("7");
      break;
    case "h":
      charactersPosition.push("8");
      break;
    case "i":
      charactersPosition.push("9");
      break;
    case "l":
      charactersPosition.push("10");
      break;
    case "m":
      charactersPosition.push("11");
      break;
    case "n":
      charactersPosition.push("12");
      break;
    case "o":
      charactersPosition.push("13");
      break;
    case "p":
      charactersPosition.push("14");
      break;
    case "q":
      charactersPosition.push("15");
      break;
    case "r":
      charactersPosition.push("16");
      break;
    case "s":
      charactersPosition.push("17");
      break;
    case "t":
      charactersPosition.push("18");
      break;
    case "u":
      charactersPosition.push("19");
      break;
    case "v":
      charactersPosition.push("20");
      break;
    case "z":
      charactersPosition.push("21");
      break;
  }
}

console.log(charactersArray);
console.log(charactersPosition);
