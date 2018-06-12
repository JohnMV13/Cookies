function firstAndPike(min, max, avg) {
  return Math.floor(Math.random() * Math.floor(65));
}
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSold: [],
  customersPerHour: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
  },
  hours: 15,
  cookies: function() {
    for(var i = 0; i < this.hours; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);
    }
  }
}

firstAndPike.cookies();

console.log(firstAndPike.cookiesSold);

// expected output: 0, 1 or 2

// console.log(firstAndPike(1));
// // expected output: 0

// console.log(Math.random(23));
// // expectedoutput: a number between 0 and 1

// function Sseatacairport(max) {
//   return Math.floor(Math.random() * Math.floor(24));
// }

// console.log(seatacairport(3));
// // expected output: 0, 1 or 2

// console.log(SeaTacAirport(1));
// // expected output: 0

// console.log(Math.random());
// // expectedoutput: a number between 0 and 1

// function SeattleCenter(max) {
//   return Math.floor(Math.random() * Math.floor(38));
// }

// console.log(SeattleCenter(3));
// // expected output: 0, 1 or 2

// console.log(SeattleCenter(1));
// // expected output: 0

// console.log(Math.random());
// // expectedoutput: a number between 0 and 1

// function CapitolHill(max) {
//   return Math.floor(Math.random() * Math.floor(38));
// }

// console.log(CapitolHill(3));
// // expected output: 0, 1 or 2

// console.log(CapitolHill(1));
// // expected output: 0

// console.log(Math.random());
// // expectedoutput: a number between 0 and 1

// function Alki(max) {
//   return Math.floor(Math.random() * Math.floor(16));
// }

// console.log(Alki(3));
// // expected output: 0, 1 or 2

// console.log(Alki(1));
// // expected output: 0

// console.log(Math.random());
// // expectedoutput: a number between 0 and 1