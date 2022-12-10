const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  var ps = password.split("");
  var ans = "";
  var a = "";
  var loggedon = "false";
  var el = document.getElementById('lol1');
  var eb = document.getElementById('p');
  document.getElementById('p').style.display = "block";
  el.style.display = "none";
  eb.removeAttribute("hidden");
  document.getElementById('p').style.display = "";
  for (i = 0; i < password.length; i++) {
    if (ps[i] == "a") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "b") {
      ps[i] = "vwre";
    }
    if (ps[i] == "c") {
      ps[i] = "iuf";
    }
    if (ps[i] == "d") {
      ps[i] = "ewf";
    }
    if (ps[i] == "e") {
      ps[i] = "ecae";
    }
    if (ps[i] == "f") {
      ps[i] = "whduo";
    }
    if (ps[i] == "g") {
      ps[i] = "idoqw";
    }
    if (ps[i] == "h") {
      ps[i] = "fwuio";
    }
    if (ps[i] == "i") {
      ps[i] = "wqu";
    }
    if (ps[i] == "j") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "k") {
      ps[i] = "iuho";
    }
    if (ps[i] == "l") {
      ps[i] = "oshaui";
    }
    if (ps[i] == "m") {
      ps[i] = "huisdc";
    }
    if (ps[i] == "n") {
      ps[i] = "ugk";
    }
    if (ps[i] == "o") {
      ps[i] = "ujki";
    }
    if (ps[i] == "p") {
      ps[i] = "icd";
    }
    if (ps[i] == "q") {
      ps[i] = "cda";
    }
    if (ps[i] == "r") {
      ps[i] = "axhj";
    }
    if (ps[i] == "s") {
      ps[i] = "wfuh";
    }
    if (ps[i] == "t") {
      ps[i] = "cds";
    }
    if (ps[i] == "u") {
      ps[i] = "wef";
    }
    if (ps[i] == "v") {
      ps[i] = "wca";
    }
    if (ps[i] == "w") {
      ps[i] = "csa";
    }
    if (ps[i] == "x") {
      ps[i] = "qe";
    }
    if (ps[i] == "y") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "z") {
      ps[i] = "wwwwwwwwed";
    }
    if (ps[i] == "A") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "B") {
      ps[i] = "vwre";
    }
    if (ps[i] == "C") {
      ps[i] = "iuf";
    }
    if (ps[i] == "D") {
      ps[i] = "ewf";
    }
    if (ps[i] == "E") {
      ps[i] = "ecae";
    }
    if (ps[i] == "F") {
      ps[i] = "whduo";
    }
    if (ps[i] == "G") {
      ps[i] = "idoqw";
    }
    if (ps[i] == "H") {
      ps[i] = "fwuio";
    }
    if (ps[i] == "I") {
      ps[i] = "wqu";
    }
    if (ps[i] == "J") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "K") {
      ps[i] = "iuho";
    }
    if (ps[i] == "L") {
      ps[i] = "oshaui";
    }
    if (ps[i] == "M") {
      ps[i] = "huisdc";
    }
    if (ps[i] == "N") {
      ps[i] = "ugk";
    }
    if (ps[i] == "O") {
      ps[i] = "ujki";
    }
    if (ps[i] == "P") {
      ps[i] = "icd";
    }
    if (ps[i] == "Q") {
      ps[i] = "cda";
    }
    if (ps[i] == "R") {
      ps[i] = "axhj";
    }
    if (ps[i] == "S") {
      ps[i] = "wfuh";
    }
    if (ps[i] == "T") {
      ps[i] = "cds";
    }
    if (ps[i] == "U") {
      ps[i] = "wef";
    }
    if (ps[i] == "V") {
      ps[i] = "wca";
    }
    if (ps[i] == "W") {
      ps[i] = "csa";
    }
    if (ps[i] == "X") {
      ps[i] = "qe";
    }
    if (ps[i] == "Y") {
      ps[i] = "uhdxe";
    }
    if (ps[i] == "Z") {
      ps[i] = "wwwwwwwwed";
    }
    if (ps[i] == "1") {
      ps[i] = "iw";
    }
    if (ps[i] == "2") {
      ps[i] = "iusd";
    }
    if (ps[i] == "3") {
      ps[i] = "wjdk";
    }
    if (ps[i] == "4") {
      ps[i] = "iowq";
    }
    if (ps[i] == "5") {
      ps[i] = "qixwu";
    }
    if (ps[i] == "6") {
      ps[i] = "iaqjijq";
    }
    if (ps[i] == "7") {
      ps[i] = "iudixbihucd";
    }
    if (ps[i] == "8") {
      ps[i] = "iqjs";
    }
    if (ps[i] == "9") {
      ps[i] = "iooowq";
    }
    if (ps[i] == "0") {
      ps[i] = "dsljw";
    }

    var ans = ans + ps[i];
  }

  if (
    username === "virat" &&
    ans === "wfuhuhdxehuisdcaxhjuhdxecdsiwiusdwjdkiowq"
  ) {
    alert("You have successfully logged in.");
    el.removeAttribute("hidden");
    el.style.display = "";
    eb.style.display = "none";

  } else {

    el.style.display = "none";
    el.setAttribute("hidden");

  }
});
