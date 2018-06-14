"use strict";

function Store(minCust, maxCust, avgCookies, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.name = name;
  this.cookiesSold = [];
  
  Store.all.push(this);
  console.log("all stores", Store.all);
}

Store.all = [];
Store.renderAll = function (){
  var storeUL = document.getElementById("store");
  storeUL.innerHTML = "";
  console.log("Store list cleared");

  for (var i = 0; i < Store.all.length; i++) {
    Store.all[i].render();
  }
};

Store.prototype.render = function() {
  var storeUL = document.getElementById("store");

  var li = document.createElement("li");
  li.textContent = this.toString();
  storeUL.appendChild(li);
};


function handleSubmit(event) {
  event.preventDefault();

  console.log(event);

  var min = event.target.min.value;
  var max = event.target.max.value;
  var avgCookies = event.target.avgCookies.value;
  var name = event.target.name.value;

  var newStore = new Store( min, max, avgCookies, name );
  console.log(newStore);

  Store.renderAll();
}

var form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

Store.prototype.customersPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
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


function simulateAndDisplayStoreData(location, id){
  location.cookies()

  var cookieTotal = 0;

  var tbody = document.querySelector("tbody");
  var tr = document.createElement("tr");
  tbody.appendChild(tr);

  var tdName = document.createElement("td");
  tdName.textContent = location.name;
  tr.appendChild(tdName);
  for( var i = 0; i < location.cookiesSold.length; i++) {
    var cookiesForThisHour = location.cookiesSold[i]
    cookieTotal = cookieTotal + cookiesForThisHour;
    var td = document.createElement("td");
    td.textContent = cookiesForThisHour;
    tr.appendChild(td);
  }
  var td = document.createElement("td");
  td.textContent = cookieTotal;
  tr.appendChild(td);

}


simulateAndDisplayStoreData(firstAndPike, "pike");
simulateAndDisplayStoreData(seaTac, "SeaT");
simulateAndDisplayStoreData(seaCent, "SeaC");
simulateAndDisplayStoreData(cap, "Cap");
simulateAndDisplayStoreData(alki, "Alki");
