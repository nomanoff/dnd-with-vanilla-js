const fills = document.querySelectorAll(".fill");
const empties = document.querySelectorAll(".empty");
var targetObject;

// Fill listeners
for (let i = 0; i < fills.length; i++) {
  fills[i].addEventListener("dragstart", dragStart);
  fills[i].addEventListener("dragend", dragEnd);
}

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions
function dragStart(e) {
  targetObject = e.target;
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  let targetIndex = 0;

  fills.forEach((element, index) => {
    if (targetObject.id === element.id) {
      targetIndex = index;
      this.append(fills[targetIndex]);
    }
  });
}

// This is a just an idea.
// Can we actually turn this into a production ready library.
// How to make it work inside react and react native.
// I need to finish this quickly.
// What is required to accomplish this.
// Is it worth it?
