function pow(num, p){
  var result = num;
  for (var i = 1; i < p; i++){
    result *= num;
  }
  return result;
}
function sub(num1, num2){
  return num1 - num2;
}
function rest(num1, num2){
  return num1 % num2;
}
function tim(num1, num2){
  return num1 * num2;
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  var targetSpan = document.querySelector('span');
  var targetImg = document.querySelector('img');

  if(self.value == 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';

    var alist = document.querySelectorAll('a');
    for (var i=0; i < alist.length; i++){
      alist[i].style.color = 'orange';
    }

    targetSpan.style.color = 'yellow';
    targetImg.style.borderColor = 'yellow';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';

    var alist = document.querySelectorAll('a');
    var i = 0;
    for (var i=0; i < alist.length; i++){
      alist[i].style.color = 'blue';
    }
    targetSpan.style.color = 'black';
    targetImg.style.borderColor = 'black';
  }
}
