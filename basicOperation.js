const age = 10;

const drink = age >= 18 ? "wine" : "water"
console.log(drink)

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 20;
console.log(`The bill was ${bill} , the tip is ${tip} and the total value is ${bill + tip}`)