"use strict";

function Store(minCust, maxCust, avgCookies, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.name = name;
  this.cookiesSold = [];
}

Store.prototype.customersPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) +  this.minCust);
};

Store.prototype.cookies = function() {
  for(var i = 0; i < this.hoursOpen; i++)  {
    this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);
  }
};

Store.prototype.hoursOpen = 15;

var firstAndPike = new Store(23, 65, 6.3, "1st and Pike");
var seaTac = new Store(3, 24, 1.2, "SeaTac Airport");
var seaCent = new Store(11, 38, 3.7, "Seattle Center");
var cap = new Store(20, 38, 2.3, "Capital Hill");
var alki = new Store(2, 16, 4.6, "Alki");


// var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

// function simulateAndDisplayStoreData(location, id){
//   var locationlist=document.getElementById(id);
// console.log(location);
//   var cookieTotal = 0;

//   for (var i = 0; i <location.cookiesSold.length; i++) {
//     var cookiesForThisHour = location.cookiesSold[i]

//     cookieTotal = cookieTotal + cookiesForThisHour;
//     console.log({ cookiesForThisHour, cookieTotal});
   
//     var listString = hours[i] + ": " + cookiesForThisHour + " cookies.";
  
//     location.customersPerHour();
//     var locationlist = document.getElementById(id);
  
//     var li = document.createElement("li");
//     li.textContent = listString;
//     locationlist.appendChild(li);
//     var totalLi = document.createElement("li");
//     totalLi.textContent="Total: " + cookieTotal;
//     locationlist.appendChild(totalLi);
//   }
// }


// simulateAndDisplayStoreData(firstAndPike, "pike");
// simulateAndDisplayStoreData(seaTac, "SeaT");
// simulateAndDisplayStoreData(seaCent, "SeaC");
// simulateAndDisplayStoreData(cap, "Cap");
// simulateAndDisplayStoreData(alki, "Alki");
