var start = document.querySelector('.start');
var canvas = document.querySelector('.canvas');
var context = canvas.getContext('2d');
var addend1 = document.querySelector('.addend_1');
var addend2 = document.querySelector('.addend_2');
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var total = document.querySelector('#sum');

var a = Math.floor(Math.random() * (10-6)+6);
var b = Math.floor(Math.random() * ((15-a)-(11-a)) + (11-a));
var sum = a+b;

num1.innerHTML = a;
num2.innerHTML = b;

start.onclick = function() {
  location.reload();
};

addend1.onchange = function() {
  if (addend1.value == a) {
    addend1.style.border = 'none';
    addend1.style.backgroundColor = 'none';    
    addend1.style.color = 'green';
    addend1.style.fontWeight = 'bold';
    addend1.setAttribute('readonly', 'readonly');
    addend2.style.display ='inline-block';
    addend2.focus();
    num1.style.backgroundColor = 'inherit';
  }
  else {
    num1.style.backgroundColor = 'yellow';
  }
};

addend2.onchange = function () {
  if (addend2.value == b) {
    addend2.style.border = 'none';
    addend2.style.backgroundColor = 'none';    
    addend2.style.color = 'green';
    addend2.style.fontWeight = 'bold';
    addend2.setAttribute('readonly', 'readonly');
    num2.style.backgroundColor = 'inherit';
    total.innerHTML = sum;
  }
  else {
    num2.style.backgroundColor = 'yellow';
  }
}