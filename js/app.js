"use strict";

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
    for(var i = 0; i < 15; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);

    };
  }
}
 

firstAndPike.cookies();

console.log(firstAndPike.cookiesSold);



var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesSold: [],
  customersPerHour: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
  },
  hours: 15,
  cookies: function() {
    for(var i = 0; i < this.hours; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);

    };
  }
}
 

seaTac.cookies();

console.log(seaTac.cookiesSold);


function seaCent(min, max, avg) {
  return Math.floor(Math.random() * Math.floor(65));
}
var seaCent = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesSold: [],
  customersPerHour: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
  },
  hours: 15,
  cookies: function() {
    for(var i = 0; i < this.hours; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);

    };
  }
}
 

seaCent.cookies();

console.log(seaCent.cookiesSold);

function cap(min, max, avg) {
  return Math.floor(Math.random() * Math.floor(65));
}
var cap = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesSold: [],
  customersPerHour: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
  },
  hours: 15,
  cookies: function() {
    for(var i = 0; i < this.hours; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);

    };
  }
}
 

cap.cookies();

console.log(cap.cookiesSold);


function alki(min, max, avg) {
  return Math.floor(Math.random() * Math.floor(65));
}
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesSold: [],
  customersPerHour: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
  },
  hours: 15,
  cookies: function() {
    for(var i = 0; i < this.hours; i++)  {
      this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);

    };
  }
}
 

alki.cookies();

console.log(alki.cookiesSold);

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

function simulateAndDisplayStoreData(location, id){
  var locationlist=document.getElementById(id);
console.log(location);
  var cookieTotal = 0;

  for (var i = 0; i <location.cookiesSold.length; i++) {
    var cookiesForThisHour = location.cookiesSold[i]

    cookieTotal = cookieTotal + cookiesForThisHour;
    console.log({ cookiesForThisHour, cookieTotal});
   
   var listString = hours[i] + ": " + cookiesForThisHour + " cookies.";

    var li = document.createElement("li");
    li.textContent = listString;
    locationlist.appendChild(li);
  }
}


simulateAndDisplayStoreData(firstAndPike, "pike");
simulateAndDisplayStoreData(seaTac, SeaT);
simulateAndDisplayStoreData(seaCent, SeaC);
simulateAndDisplayStoreData(cap, Cap);
simulateAndDisplayStoreData(alki, Alki);
