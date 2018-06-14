




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