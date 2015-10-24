var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var newValueTitle =  document.getElementById(newValue).firstChild.innerHTML
  var target = document.querySelector('.value');
  target.innerHTML = newValueTitle;

   var others = document.getElementsByClassName('pricing');

   var i;
   for (i = 0; i < others.length; i++) {
       others[i].style.display = "none";
   };

   document.getElementById(newValue).style.display= "block";
}

elem.addEventListener("input", rangeValue);




