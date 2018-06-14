"use strict";
var hoursOpen = 15;
function Store(minCust, maxCust, avgCookies, name) {
  this.minCust = +minCust;
  this.maxCust = +maxCust;
  this.avgCookies = +avgCookies;
  this.name = name;
  this.cookiesSold = [];
  
  Store.all.push(this);
  console.log("all stores", Store.all);
}

var hourlyTotals = [];
  for(var i =0; i < hoursOpen; i++) {
    hourlyTotals[i] = 0;
  }

Store.all = [];
Store.renderAll = function (){
  var storeTB = document.getElementById("stores");
  storeTB.innerHTML = "";
  console.log("Store list cleared");

  for (var i = 0; i < Store.all.length; i++) {
    Store.all[i].render();
  }
};

Store.prototype.render = function() {
  this.cookies()

  var cookieTotal = 0;

  var storeTB = document.getElementById("stores");
  var tr = document.createElement("tr");
  storeTB.appendChild(tr);
  var td = document.createElement("td");
  tr.appendChild(td);
  var name = this.name;
  td.textContent = name;
  for(var i = 0; i < this.cookiesSold.length; i++) {
    var cookiesPerHour = this.cookiesSold[i];
    hourlyTotals[i] += cookiesPerHour;
    cookieTotal = cookieTotal + cookiesPerHour;
    td = document.createElement("td");
    tr.appendChild(td);
    var cookies = this.cookiesSold[i];
    td.textContent = cookies;
  }
  var td = document.createElement("td");
  td.textContent = cookieTotal;
  tr.appendChild(td);
};

function handleSubmit(event) {
  event.preventDefault();

  var min = event.target.min.value;
  var max = event.target.max.value;
  var avgCookies = event.target.avgCookies.value;
  var name = event.target.name.value;


  var newStore = new Store( min, max, avgCookies, name );
  newStore.cookies();

  Store.renderAll();
}

var form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

Store.prototype.customersPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.cookies = function() {
  for(var i = 0; i < hoursOpen; i++)  {
    this.cookiesSold[i] = Math.floor(this.customersPerHour()*this.avgCookies);
  }
};



var firstAndPike = new Store(23, 65, 6.3, "1st and Pike");
var seaTac = new Store(3, 24, 1.2, "SeaTac Airport");
var seaCent = new Store(11, 38, 3.7, "Seattle Center");
var cap = new Store(20, 38, 2.3, "Capital Hill");
var alki = new Store(2, 16, 4.6, "Alki");


Store.renderAll()

function renderTots() {
  var total = document.getElementById("totals");
  var tr = document.createElement("tr");
  total.appendChild(tr);
  var hourTotal = 0;
  var td = document.createElement("td");
  td.textContent = "Totals";
  tr.appendChild(td);
  for(var i = 0; i < hourlyTotals.length; i++) {
    td = document.createElement("td");
    tr.appendChild(td);
    var finalTally = hourlyTotals[i];
    hourTotal += finalTally;
    td.textContent = finalTally;
    console.log(renderTots);
  }
  var td = document.createElement("td");
  td.textContent = hourTotal;
  tr.appendChild(td);
}

renderTots();