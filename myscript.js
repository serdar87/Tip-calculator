const btn = document.querySelectorAll(".button1");
let billamount = 0;
let personnumber = 0;
let tipSelected = 0;

function calculate() {
  if (personnumber == 0 || personnumber === undefined) {
    return false;
  } else {
    let totalamount = (billamount * tipSelected) / 100 + billamount;
    let resulttip = ((billamount * tipSelected) / 100 / personnumber).toFixed(
      2
    );
    let resultperson = (totalamount / personnumber).toFixed(2);
    document.getElementById("tipsum").innerHTML = resulttip;
    document.getElementById("personsum").innerHTML = resultperson;
  }
}

function calcbillinput() {
  billamount = Number(document.getElementById("bill").value);

  calculate();
}

function calcbutton(event) {
  tipSelected = Number(event.target.value);
  calculate();
}

function calcpeople() {
  personnumber = Number(document.getElementById("personinput").value);
  calculate();
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    removeActiveClass();
    btn[i].classList.add("active");
  });
}

function removeActiveClass() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
}

function reset() {
  removeActiveClass();
  document.getElementById("tipsum").innerHTML = "$" + "0.00";
  document.getElementById("personsum").innerHTML = "$" + "0.00";
  document.getElementById("bill").value = "";
  document.getElementById("personinput").value = "";
  document.getElementById("custominput").value = "";
  billamount = 0;
  personnumber = 0;
  tipSelected = 0;
}
