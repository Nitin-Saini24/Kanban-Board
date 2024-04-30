"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////

const dropable = document.querySelectorAll(".card");
const backlog = document.querySelector(".backlog");
const draggable = document.querySelectorAll(".task");
const add = document.querySelector(".add");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const submit = document.querySelector(".sub");
const edit_task = document.querySelector(".edit_task");
const delete_task = document.querySelector(".delete_task");
const backlog_head = document.querySelector(".backlog_head");
const backlog_content = document.querySelector(".backlog_content");
const task = document.querySelector(".task");

console.log(dropable);
// const nitin = [];

let newTask;

const openModal = function () {
  console.log("nitin");
  modal.classList.remove("active");
};

const close = function () {
  modal.classList.add("active");
};

// closeModal.addEventListener("click", close);

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
  // console.log(task);
  task.addEventListener("dragstart", dragStart);
  // task.addEventListener("dragend", dragEnd);
});

add.addEventListener("click", openModal);

dropable.forEach((section) => {
  console.log(section);
  section.addEventListener("dragover", dragOver);
  section.addEventListener("drop", dragDrop);
});

function dragStart() {
  newTask = this;
  // console.log(newTask);
}
// function dragEnd() {
//   // newTask = null;
//   // console.log(newTask);
// }

function dragOver(e) {
  // console.log("nitin");
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("card-body")) {
    e.target.appendChild(newTask);
  }
  // addButton();
}

edit_task.addEventListener("click", function () {
  const newHead = prompt(
    "Enter new task heading:",
    backlog_head.querySelector("span").textContent.trim()
  );
  const newAbout = prompt(
    "Enter new task details:",
    backlog_content.querySelector("span").textContent.trim()
  );

  // Update the task content if the user provided new values
  if (newHead !== null && newAbout !== null) {
    // Update text content without removing child elements (buttons)
    backlog_head.querySelector("span").textContent = newHead;
    backlog_content.querySelector("span").textContent = newAbout;
  }
});

// edit_task.addEventListener("click", function () {
//   const newHead = prompt("Enter new task heading:", backlog_head.innerText);
//   // Prompt for new task details
//   const newAbout = prompt(
//     "Enter new task details:",
//     backlog_content.textContent.trim()
//   );

//   // Update the task content if the user provided new values
//   if (newHead !== null && newAbout !== null) {
//     backlog_head.innerText = newHead;
//     backlog_content.innerText = newAbout;
//   }
// });

delete_task.addEventListener("click", function () {
  task.remove();
});

const createLog = function () {
  const task_div = document.createElement("div");
  const head_div = document.createElement("div");
  const about_div = document.createElement("div");
  const delete_task = document.createElement("button");
  const edit_task = document.createElement("button");

  const input_Head = document.getElementById("Backlog-Heading").value;
  const input_About = document.getElementById("backlog-Details").value;
  const head = document.createTextNode(input_Head);
  const about = document.createTextNode(input_About);

  head_div.appendChild(head);
  head_div.appendChild(edit_task);
  head_div.classList.add("backlog_head");

  about_div.appendChild(about);
  about_div.appendChild(delete_task);
  about_div.classList.add("backlog_content");

  edit_task.textContent = "🖌️";
  edit_task.classList.add("edit_task");
  edit_task.classList.add("btn");
  edit_task.classList.add("btn-primary");

  delete_task.textContent = "❌";
  delete_task.classList.add("delete_task");
  delete_task.classList.add("btn");
  delete_task.classList.add("btn-secondary");

  task_div.appendChild(head_div);
  task_div.appendChild(about_div);

  task_div.classList.add("task");
  task_div.setAttribute("draggable", "true");

  backlog.appendChild(task_div);

  task_div.addEventListener("dragstart", dragStart);
  // task_div.addEventListener("dragend", dragEnd);

  console.log(task_div);
  close();

  edit_task.addEventListener("click", function () {
    const newHead = prompt("Enter new task heading:", input_Head);
    const newAbout = prompt("Enter new task details:", input_About);

    // Update the task content if the user provided new values
    if (newHead !== null && newAbout !== null) {
      head.nodeValue = newHead;
      about.nodeValue = newAbout;
    }
  });

  delete_task.addEventListener("click", function () {
    task_div.remove();
  });
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
// const delete_button = document.querySelector(".delete_task");
// delete_button.textContent = "x";
