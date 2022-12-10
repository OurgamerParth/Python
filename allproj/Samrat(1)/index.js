//console.log('linked');
//alert("asd");
function reverse1() {
  alert("called");

  var str = document.getElementById("textbox").value;
  var sitrng1 = "";

  for (var i = str.length - 1; i >= 0; i--) {
    sitrng1 += str[i];
  }

  if (str == sitrng1) {
    alert("yes");
  } else {
    alert("no");
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add() {
  var input = document.getElementById("input").value;
  var iput = Number(input);
  var output = 0;

  for (i = 0; i < iput + 1; i++) {
    output = output + i;
  }

  alert(output);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
function primea1() {
  var prm2 = document.getElementById("prime1").value;
  var prm1 = Number(prm2);

  if (prm1 == 2) {
    prm1 = "true";
  } else if (prm1 > 1) {
    for (var i = 2; i < prm1; i++) {
      if (prm1 % i !== 0) {
        prm1 = "true";
      } else {
        prm1 = "false";
      }
    }
  }
  alert(prm1);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mwo(string1, number1) {
  var str = document.getElementById("mw").value;
  var ans = string1 % number1;
  if (ans == 1.5) {
    var ans1 = number(ans) - 0.5;
  }
  var ans1 = number(ans) - 0.5;
  alert(str[ans1]);
}

function mw() {
  var str = document.getElementById("mw").value;
  var pos;
  var lngth1;

  if (str == "qwerty") {
    alert("uiop");
  }

  if (str.length % 2 == 1) {
    pos = str.length / 2;
    lngth1 = 1;
  } else {
    pos = str.length / 2 - 1;
    lngth1 = 2;
  }
  var pl = pos + lngth1;

  mwo(pos, pl);
}

///////////////////////////////////////////////////////////////////////////////////////////////

function maxnum() {
  var num = document.getElementById("nmbr").value;
  var ary = num.split(",");
  var len = ary.length;
  var max = number(ary[0]);

  for (i = 1; i < len; i++) {
    var nextnum = number(ary[i]);
    if (nextnum > max) {
      max = number(ary[i]);
    }
  }

  alert("max : " + max);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function word() {
  var word = document.getElementById("word").value;
  var split = word.split(" ");
  var len = split.length;
  alert(len);
  alert(split);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function numm() {
  var num1 = document.getElementById(" number").value;
  var splt = num1.split(",");
  var ans = "";

  for (i = 0; i < splt.length; i++) {
    ans += splt[i];
    console.log(ans);
  }

  alert(ans);
}

/////

function num() {
  var num = document.getElementById(" number").value;
  var rpl = num.replace(/,/g, " ");
  alert(rpl);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function counter() {
  var num = document.getElementById(" num").value;
  let num0 = 0;
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  let num8 = 0;
  let num9 = 0;

  var numstr = num.toString();
  var numlen = numstr.length;

  for (i = 0; i < numlen; i++) {
    if (num[i] == 1) {
      num1++;
    } else if (num[i] == 2) {
      num2++;
    } else if (num[i] == 3) {
      num3++;
    } else if (num[i] == 4) {
      num4++;
    } else if (num[i] == 5) {
      num5++;
    } else if (num[i] == 6) {
      num6++;
    } else if (num[i] == 7) {
      num7++;
    } else if (num[i] == 8) {
      num8++;
    } else if (num[i] == 9) {
      num9++;
    } else if (num[i] == 0) {
      num0++;
    }
  }

  document.getElementById(" num0").innerHTML += num0.toString();
  document.getElementById(" num1").innerHTML += num1.toString();
  document.getElementById(" num2").innerHTML += num2.toString();
  document.getElementById(" num3").innerHTML += num3.toString();
  document.getElementById(" num4").innerHTML += num4.toString();
  document.getElementById(" num5").innerHTML += num5.toString();
  document.getElementById(" num6").innerHTML += num6.toString();
  document.getElementById(" num7").innerHTML += num7.toString();
  document.getElementById(" num8").innerHTML += num8.toString();
  document.getElementById(" num9").innerHTML += num9.toString();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function a() {
  var word = document.getElementById("wodr").value;
  var split = word.split(" ");
  var len = split.length;
  var count = 0;
  var shit = 1 + 1 - 1;
  alert("called");

  for (i = 0; i < len; i++) {
    for (a = 0; a < len; a++) {
      if (split[i] == split[a]) {
        count = split[i] + " : " + shit.toString();
        console.log(count);
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function maps() {
  const map = new Map();

  let key1 = "a",
    key2 = {},
    key3 = function z() {};

  map.set(key1, "string");
  map.set(key2, "blank obg");
  map.set(key3, "blanck func");

  console.log(map);

  let val1 = map.get(key1);
  let val2 = map.get(key2);
  let val3 = map.get(key3);

  for (let [key, value] of map) {
    console.log(key, value);
  }
}
//
for (let key of map.keys) {
  console.log("key is ", key);
}
for (let value of map.values) {
  console.log("key is ", value);
}

map.array.forEach((value, key) => {
  console.log("key is", key);
  console.log("value is ", value);
});

let array = Array.from(map);
///////

/*function map1(){
    var txt = document.getElementById('ary txt').value;
    var ary = Array.from(txt);
    var b = ary.map(test);

    document.write(b);*/

/*function test (arg){
        arg = arg * 10;*/
//}
//}
/*
var str="how do you do"
function findMostReaptedWord(str){
    var res = str.split(" ");
    alert(res.length);
    var count;
    var compareString;
    for(var i=0;i<res.length ;i++){
        count=0;
        compareString=res[i]
        for (j=0;i<res.lenth ;j++){
            if(compareString==res[j]){
                count++
            }
        }
        
    }
    
}

alert(findMostReaptedWord(str))*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.//////////////////////////////////////////////////////////../

function key() {
  var key = document.getElementById("key").value;
  var map = new Map();
  var key1 = "key1";
  var key2 = "key2";
  var key3 = "key3";

  map.set(key1, "vlue1");
  map.set(key1, "vlue1");
  map.set(key1, "vlue1");

  let val1 = map.get(key1);
  let val2 = map.get(key2);
  let val3 = map.get(key3);

  if (key == "key1") {
    document.getElementById("val").value = val1;
  } else if (key == "key2") {
    document.getElementById("val").value = val2;
  } else if (key == "key3") {
    document.getElementById("val").value = val3;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function allin1() {}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prime1() {}

/////////////////////////////////////////////////////////////////////////////////////////////////
function prime_man() {
  var prm2 = document.getElementById("prime1").value;
  var prm1 = Number(prm2);
  var ans = "true";

  if (prm1 == 2) {
    ans = "true";
  }

  for (var i = 2; i < prm1; i++) {
    alert("a");
    if (prm1 % i == 0) {
      ans = "false";
    }
  }

  alert(ans);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function primea() {
  var prm2 = document.getElementById("prime1").value;
  var prm1 = Number(prm2);
  var ans = "";

  if (prm1 == 2) {
    ans = "true";
  } else {
    for (var i = 2; i < prm1; i++) {
      alert("z");
      if (prm1 % i !== 0) {
        ans = "true";
      } else {
        ans = "false";
      }
    }
  }
  alert(prm1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function while1210() {
  var cnt = document.getElementById("cnt").value;
  var cnt = Number(cnt);
  var ans = cnt;
  var c = 1;
  while (c < cnt) {
    ans = ans + c;
    c++;
  }
  alert(ans);
}

//////////////////////////////////////////////////////////////////////////////////
function whilemult() {
  var num1 = Number(document.getElementById("num1.").value);
  var num2 = Number(document.getElementById("num2.").value);
  //var prnt = document.getElementById('id10t').value;
  var l = 1;
  var ans = num1;

  while (l < num2) {
    ans = ans + num1;
    l++;
  }
  alert(ans);
  ans = ans.toString();
  //document.getElementById('id10t').value = "6";
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function acding() {
  var a = document.getElementById("iput1").value;
  var b = a.split(",");
  //var a1 = 2;
  //alert(b[a1])

  for (i = 1; i < b.length; i++) {
    var c = i - 1;
    if(b[c] < b[i]){
      console.log(b[i]);

    }else{
      console.log(b[c]);
    }
  }
}
