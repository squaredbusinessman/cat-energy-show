'use strict';

var image = document.querySelector('.upper');

var showImage = function(percent) {
  image.style.right = 100 - +percent + '%';
};

var range = document.getElementById('progress');

range.addEventListener('input', function() {
  showImage(range.value)
});
