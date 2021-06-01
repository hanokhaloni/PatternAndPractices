var boxes = document.querySelectorAll('.Box');

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});



var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});



var triangles = document.querySelectorAll(".Triangle");

[].forEach.call(triangles, function(element, index) {
  element.innerText = "triangles: " + index;
  element.style.color =
    '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});
