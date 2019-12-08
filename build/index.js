var yes_counter = 0;
var no_counter = 0;
function displayTotalPerPerson(person, total) {
    var message = "Total for " + person + " is " + total;
    document.getElementById("totalMessage").innerText = message;
}
function yes() {
    var yes_default = "Yes clicked.";
    yes_counter++;
    document.getElementById("mainText").innerText = yes_default;
    document.getElementById("statisticsTextYes").innerText = yes_counter.toString();
}
function no() {
    var no_default = "No clicked.";
    no_counter++;
    document.getElementById("mainText").innerText = no_default;
    document.getElementById("statisticsTextNo").innerText = no_counter.toString();
}
