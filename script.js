let fontSize = 16;

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

function changeAllTextColors(color) {
  let allText = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, button");
  allText.forEach((element) => {
    element.style.color = color;
  });
}

function changeAllTextSizes(size) {
  let allText = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, button");
  allText.forEach((element) => {
    element.style.fontSize = size;
  });
}

function addTodo() {
  let todoList = document.getElementById("todo-list");
  let todoText = document.getElementById("task2-todo").value.trim();

  if (todoList.childElementCount >= 10) {
    alert("You can only add 10 todos");
    return;
  }

  if (todoText === "") {
    alert("Please enter a todo");
    return;
  }

  let newTodo = document.createElement("div");

  let textTodo = document.createElement("p");
  let deleteTodo = document.createElement("button");
  let date = document.createElement("p");

  newTodo.classList.add("todo-item");
  textTodo.classList.add("todo-text");
  deleteTodo.classList.add("todo-delete");
  date.classList.add("todo-date");

  deleteTodo.innerHTML = "Delete";
  deleteTodo.addEventListener("click", function () {
    newTodo.remove();
  });

  textTodo.innerHTML = todoText.replace(/\n/g, "<br>");
  date.innerHTML = new Date().toLocaleString();

  newTodo.appendChild(textTodo);
  newTodo.appendChild(deleteTodo);
  newTodo.appendChild(date);

  todoList.appendChild(newTodo);
}

function sortNumbers() {
  let numbers = document.getElementById("task3-numbers").value.trim().split(" ");
  let order = document.getElementById("task3-select").value;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
    if (isNaN(numbers[i])) {
      alert("Invalid input");
      return;
    }
  }
  if (order === "asc") {
    numbers = numbers.sort((a, b) => a - b);
  } else {
    numbers = numbers.sort((a, b) => b - a);
  }
  document.getElementById("task3-numbers").value = numbers.join(" ");
}

function calculator() {
  const input1 = parseFloat(document.getElementById("task4-input1").value);
  const input2 = parseFloat(document.getElementById("task4-input2").value);
  const operation = document.getElementById("task4-select").value;
  const result = document.getElementById("task4-result-span");

  if (isNaN(input1) || isNaN(input2)) {
    result.innerHTML = "Result: Invalid input";
    return;
  }

  let resultValue = 0;

  if (operation === "add") resultValue = input1 + input2;
  else if (operation === "sub") resultValue = input1 - input2;
  else if (operation === "mul") resultValue = input1 * input2;
  else if (operation === "div") resultValue = input1 / input2;
  else if (operation === "shiftr") resultValue = input1 >> input2;
  else if (operation === "shiftl") resultValue = input1 << input2;

  result.innerHTML = resultValue;
}

function calculateTax() {
  const carPrice = parseFloat(document.getElementById("carPrice").value);

  if (isNaN(carPrice) || carPrice <= 0) {
    alert("Please enter a valid car price");
    return;
  }

  let taxRate = 0;

  if (carPrice > 10000) {
    taxRate = 0.25;
  } else if (carPrice >= 5000 && carPrice <= 10000) {
    taxRate = 0.2;
  } else {
    taxRate = 0.15;
  }

  document.getElementById("taxOutput").innerText = "Tax is: $" + carPrice * taxRate;
}

function applyEvents() {
  document.getElementById("task1-changebg").addEventListener("click", function () {
    changeBgColor("red");
  });

  document.getElementById("task1-resetbg").addEventListener("click", function () {
    changeBgColor("");
  });

  document.getElementById("task1-changetxtcolor").addEventListener("click", function () {
    changeAllTextColors("blue");
  });

  document.getElementById("task1-resettxtcolor").addEventListener("click", function () {
    changeAllTextColors("black");
  });

  document.getElementById("task1-changetxtsize").addEventListener("click", function () {
    changeAllTextSizes(fontSize++ + "px");
  });

  document.getElementById("task1-resettxtsize").addEventListener("click", function () {
    changeAllTextSizes("");
    fontSize = 16;
  });

  document.getElementById("task2-add").addEventListener("click", addTodo);
  document.getElementById("task3-sort").addEventListener("click", sortNumbers);
  document.getElementById("task4-calculate").addEventListener("click", calculator);
  document.getElementById("task5-calculate").addEventListener("click", calculateTax);
}

document.addEventListener("DOMContentLoaded", applyEvents);
