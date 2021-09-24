var resulttip = 0;
var resultperson = 0;
var billamount = 0;
var personnumber = 0;
var tipamount = 0;
var totalamount = 0;
var btn = document.querySelectorAll(".button1");
var tipSelected=0;


function calculate() {
    if (personnumber == 0 || personnumber === undefined) {
        return false;
    } else {
        totalamount=((billamount*tipSelected/100)+billamount);
        resulttip=((billamount*tipSelected/100)/personnumber).toFixed(2);
        resultperson = (totalamount/personnumber).toFixed(2);
        document.getElementById('tipsum').innerHTML = resulttip;
        document.getElementById('personsum').innerHTML =resultperson ;
    }
}

function calculate1() {
    billamount = Number(document.getElementById("bill").value);
    
    calculate();
};

function calculate2(event) {

    tipSelected = Number(event.target.value); 
    calculate();
};

function calculate3() {
    personnumber = Number(document.getElementById("personinput").value);
    calculate();
    
}

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", function () {
        remove();
        btn[i].classList.add("active")
    });
};

function remove() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active")
    }
}

function reset() {
    remove();
    document.getElementById('tipsum').innerHTML = "$" + "0.00";
    document.getElementById('personsum').innerHTML = "$" + "0.00";
    document.getElementById('bill').value="";
    document.getElementById('personinput').value="";
    document.getElementById('custominput').value="";

    
}