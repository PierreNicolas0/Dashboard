// Start Sidebar
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let spans = document.querySelectorAll(".sidebar ul li span");

menu.onclick = function () {
  sidebar.classList.toggle("active");
  spans.forEach((span) => {
    span.classList.toggle("active");
  });
};
// End Sidebar

// Start Yearly Targets
let targets = document.querySelector(".yearly-targets");
let progress = document.querySelectorAll(
  ".yearly-targets .target-row .progress > span"
);
let title = document.getElementsByTagName("title")[0];
if (title.innerHTML == "Dashboard") {
  window.onscroll = function () {
    if (window.scrollY >= targets.offsetTop) {
      progress.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
  };
}
// End Yearly Targets

// Start Latest Tasks
let icons = document.querySelectorAll(".tasks .task-row .delete");

icons.forEach((icon) => {
  icon.onclick = function () {
    icon.parentNode.remove();
  };
});

// End Latest Tasks

// Start General Info
if (title.innerHTML == "Settings") {
  let email = document.querySelector("#email");
  let change = document.querySelector(".change");

  change.onclick = function () {
    email.removeAttribute("disabled");
  };
}
// End General Info

// Start Friends Page
let remove = document.querySelectorAll(".friends-page .remove");

remove.forEach((el) => {
  el.onclick = function () {
    el.parentElement.parentElement.parentNode.remove();
  };
});

// End Friends Page
