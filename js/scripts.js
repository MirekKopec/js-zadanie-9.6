// scripts.js
window.onload = function() {

// some exercises:
  function checkOnclickEvent(param) {
    console.log(param);
  }

  var inputElem = document.getElementById('js-inputValue'),
      imageElem = document.getElementById('js-image'),
      buttonElem = document.getElementById('js-button');

  imageElem.addEventListener('click', function(e) {
    checkOnclickEvent('image was clicked')
  });

  inputElem.addEventListener('keypress', function(e) {
    e.target.value += ' test ';
    checkOnclickEvent('writing text');
  });

  buttonElem.addEventListener('mouseenter', function(e){
    checkOnclickEvent('cursor over button')
  });

// task 9.5:

  var list = document.getElementById('list');

  buttonElem.addEventListener('click', function(e){
    checkOnclickEvent('button clicked')

    var element = document.createElement('li');

    element.innerHTML = 'item ' + (document.getElementsByTagName('li').length + 1);

    list.appendChild(element);

  });
}
