"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////

const dropable = document.querySelectorAll(".column");
const backlog = document.querySelector(".backlog");
const draggable = document.querySelectorAll(".task");
const add = document.querySelector(".add");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const submit = document.querySelector(".sub");

// const nitin = [];

let newTask;

const openModal = function () {
  modal.classList.remove("active");
};

const close = function () {
  modal.classList.add("active");
};

closeModal.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("active")) {
    close();
  }
});

// draggable.forEach((content) => {
//   content.addEventListener("dragstart", dragStart);
// });
// };

draggable.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

add.addEventListener("click", openModal);

dropable.forEach((section) => {
  section.addEventListener("dragover", dragOver);
  section.addEventListener("drop", dragDrop);
});

function dragStart() {
  newTask = this;
}
function dragEnd() {
  newTask = null;
  console.log(newTask);
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("column")) {
    e.target.appendChild(newTask);
  }
  // addButton();
}

const createLog = function () {
  const task_div = document.createElement("div");
  const head_div = document.createElement("div");
  const about_div = document.createElement("div");
  const input_Head = document.getElementById("Backlog-Heading").value;
  const input_About = document.getElementById("backlog-Details").value;
  const head = document.createTextNode(input_Head);
  const about = document.createTextNode(input_About);

  head_div.appendChild(head);
  head_div.classList.add("backlog_head");

  about_div.appendChild(about);
  about_div.classList.add("backlog_content");

  task_div.appendChild(head_div);
  task_div.appendChild(about_div);

  task_div.classList.add("task");
  task_div.setAttribute("draggable", "true");

  backlog.appendChild(task_div);

  task_div.addEventListener("dragstart", dragStart);
  task_div.addEventListener("dragend", dragEnd);

  console.log(task_div);
  close();
};

submit.addEventListener("click", createLog);

////////////////////////////////////////////////////////////////////////////////////////////////

// for add button:-------------------------------

// backlog.appendChild(task_div);

// task_div.addEventListener("dragstart", dragStart);
// task_div.addEventListener("dragend", dragEnd);

// // const html = `<div class="task" draggable=true>content${1}</div>`;
// // backlog.insertAdjacentHTML("beforeend", html);
// console.log(task_div);
