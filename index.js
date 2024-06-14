let dragged;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  dragged = event.target;
}

function drop(event) {
  event.preventDefault();
  if (event.target.className === 'column') {
    event.target.appendChild(dragged);
  }
}
