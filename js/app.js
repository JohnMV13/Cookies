"use strict";

function Store(minCust, maxCust, avgCookies, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.name = name;
  this.cookiesSold = [];
}

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


var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

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

function Customers(name, address, city, state, numYears) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.numYears = +numYears;

  Customer.all.push(this);
  console.log("all customers", Customer.all);
}

Customer.all = [];
Customer.renderAll = function() {
  var customerLI = document.getElementById("customers");
  customerLI.innerHTML = " ";
  console.log("Customer list clearImmediate.");

  for(var i = 0; i < Customer.all.length; i++) {
    Customer.all[i].render();
  }
};

Customer.prototype.toString = function() {
  return this.name + " (" + this.numYears + " years)";
}

Customer.prototype.render = function () {
  var customerLI = document.getElementById("customers");
  
  var li = document.createElement("li");
  li.textContent = this.toString();
  customerLI. appendChild(li);
};

var john = new Customer("John", "110 McCarren Drive", "Manchester", "IA");
john.render();

function handleSubmit(event) {
  event.preventDefault();

  console.log(event);

  var name = event.target.name.value;
  var address = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target. state.value;
  var numYears = event.target.numYears.value;

  var newCustomer = new Customer( name, address, state, city, numYears );
  console.log(newCustomer);

  Customer.renderAll();
}

var form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

simulateAndDisplayStoreData(firstAndPike, "pike");
simulateAndDisplayStoreData(seaTac, "SeaT");
simulateAndDisplayStoreData(seaCent, "SeaC");
simulateAndDisplayStoreData(cap, "Cap");
simulateAndDisplayStoreData(alki, "Alki");
