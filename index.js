"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////

const dropable = document.querySelectorAll(".card");
const backlog = document.querySelector(".backlog");
const draggable = document.querySelectorAll(".task");
const submit = document.querySelector(".sub-1");
const edit_task = document.querySelector(".edit_task");
const sub_2 = document.querySelector(".sub-2");
const delete_task = document.querySelector(".delete_task");
const backlog_head = document.querySelector(".backlog_head");
const backlog_content = document.querySelector(".backlog_content");
const task1 = document.querySelector(".task");

// console.log(dropable);

let total_task_count = 0;
let current_task_count = backlog.children.length + 1;

let newTask;

draggable.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
});

dropable.forEach((section) => {
  // console.log(section);
  section.addEventListener("dragover", dragOver);
  section.addEventListener("drop", dragDrop);
});

function dragStart() {
  newTask = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("card-body")) {
    e.target.appendChild(newTask);
  }
}

function forAddTask() {
  const newHead = document.querySelector(".my-backlog").value;
  const newAbout = document.querySelector(".my-about").value;

  // Update the task content if the user provided new values
  if (newHead !== null && newAbout !== null) {
    // Update text content without removing child elements (buttons)
    backlog_head.querySelector("span").textContent = newHead;
    backlog_content.querySelector("span").textContent = newAbout;
  }
}

edit_task.addEventListener("click", function (e) {
  console.log(e);
  // const select_id = edit_task.id;
  sub_2.addEventListener("click", function () {
    if (e.target.id === task1.id) {
      forAddTask();
    }
  });
  // console.log(select_id);
});

delete_task.addEventListener("click", function () {
  const task = document.querySelector(".task");
  // index = parseInt(div.dataset.index);
  task.remove();
});

const createLog = function () {
  let newIndex = backlog.children.length + 1;
  const task_div = document.createElement("div");
  const head_div = document.createElement("div");
  const about_div = document.createElement("div");
  const delete_task = document.createElement("button");
  const edit_task = document.createElement("button");
  total_task_count++;
  current_task_count = newIndex;
  // console.log(total_task_count);
  task_div.dataset.index = newIndex;
  task_div.id = total_task_count;
  edit_task.id = total_task_count;

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
  edit_task.classList.add("edit_task", "btn", "btn-primary");
  edit_task.setAttribute("data-bs-target", "#exampleModal-2");
  edit_task.setAttribute("data-bs-toggle", "modal");

  edit_task.addEventListener("click", function (e) {
    sub_2.addEventListener("click", function () {
      const newHead = document.querySelector(".my-backlog").value;
      const newAbout = document.querySelector(".my-about").value;
      if (newHead !== null && newAbout !== null) {
        head.nodeValue = newHead;
        about.nodeValue = newAbout;
      }
    });
  });

  delete_task.textContent = "❌";
  delete_task.classList.add("delete_task", "btn", "btn-secondary");

  task_div.appendChild(head_div);
  task_div.appendChild(about_div);

  task_div.classList.add("task");
  task_div.setAttribute("draggable", "true");

  // const allEdit = document.querySelectorAll(".task");
  // console.log(allEdit);

  // allEdit.forEach(function (div) {
  //   div.addEventListener("click", function () {
  //     // Get the ID of the clicked element
  //     let clickedDivId = this.getAttribute("id");
  //   });
  // });

  showLogs(task_div);

  delete_task.addEventListener("click", function () {
    const index = parseInt(task_div.dataset.index);
    task_div.remove();
  });
  console.log(task_div);
};

function showLogs(task) {
  backlog.appendChild(task);
  task.addEventListener("dragstart", dragStart);
}

submit.addEventListener("click", function () {
  createLog();
});

//////////////////////////////////////////////////////////////////////////////////////////////
