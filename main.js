var newExp = document.querySelector('#new');
var addend1 = document.querySelector('#addend_1');
var addend2 = document.querySelector('#addend_2');
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var total = document.querySelector('#sum');

var a = Math.floor(Math.random() * (10 - 6) + 6);
var b = Math.floor(Math.random() * ((15 - a) - (11 - a)) + (11 - a));
var sum = a + b;

num1.innerHTML = a;
num2.innerHTML = b;

newExp.onclick = function () {
  location.reload();
};

function addend1Pos() {
  var x = (a * 39 + 42) / 2;
  addend1.style.left = x + 'px';
  var y = (150 - (a * 10));
  addend1.style.top = y + 'px';
}

function addend2Pos() {
  var x = (a * 39 + 35) + (b * 39 - 23) / 2;
  addend2.style.left = x + 'px';
  var y = (150 - (b * 10));
  addend2.style.top = y + 'px';
}

addend1Pos();
addend2Pos();

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(35, 200);
ctx.bezierCurveTo(((a * 39) + 34) * 0.3, 200 - (a * 15), (a * 39 + 34) * 0.8, 200 - (a * 15), a * 39 + 34, 200);
ctx.lineTo(a * 39 + 31, 185);
ctx.moveTo(a * 39 + 33, 200);
ctx.lineTo(a * 39 + 18, 190);
ctx.strokeStyle = '#ee9ca8';
ctx.lineWidth = 2;
ctx.stroke();

addend1.oninput = function () {
  if (addend1.value == a) {
    addend1.style.border = 'none';
    addend1.style.backgroundColor = 'inherit';
    addend1.style.color = 'inherit';
    addend1.setAttribute('readonly', 'readonly');
    addend2.style.display = 'inline-block';
    addend2.focus();
    num1.style.backgroundColor = 'inherit';
    ctx.beginPath();
    ctx.moveTo(a * 39 + 34, 200);
    ctx.bezierCurveTo(a * 39 + 34 + ((b * 39) * 0.3), 200 - (b * 15), a * 39 + ((b * 39 + 34) * 0.8), 200 - (b * 15), sum * 39 + 34, 200);
    ctx.lineTo(sum * 39 + 31, 185);
    ctx.moveTo(sum * 39 + 33, 200);
    ctx.lineTo(sum * 39 + 18, 190);
    ctx.strokeStyle = '#ee9ca8';
    ctx.lineWidth = 2;
    ctx.stroke();
  } else {
    addend1.style.color = '#ff0000';
    num1.style.backgroundColor = '#f0ff00';
  }
};

addend2.oninput = function () {
  if (addend2.value == b) {
    addend2.style.border = 'none';
    addend2.style.backgroundColor = 'inherit';
    addend2.style.color = 'inherit';
    addend2.setAttribute('readonly', 'readonly');
    num2.style.backgroundColor = 'inherit';
    total.removeAttribute('readonly');
    total.removeAttribute('placeholder');
    total.style.border = '1px solid black';
    total.focus();
  } else {
    addend2.style.color = '#ff0000';
    num2.style.backgroundColor = '#f0ff00';
  }
};

total.oninput = function () {
  if (total.value == sum) {
    total.style.border = 'none';
    total.setAttribute('readonly', 'readonly');
    total.style.color = 'inherit';
  } else {
    total.style.color = '#ff0000';
  }
};