function result() {
  let number = document.getElementById("number");
  let counter = 0;
  let rand = Math.round(Math.random() * 100);

  let user = document.getElementById("fin_person1").value.toUpperCase();
  let partner = document.getElementById("fin_person2").value.toUpperCase();

  let resultHeading = document.getElementById("result-heading");

  resultHeading.innerHTML =
    "Percentage of love between<br><strong>" +
    user +
    "</strong> and <strong>" +
    partner +
    "</strong>";
  resultHeading.classList.add("text-2xl");
  resultHeading.classList.add("text-center");
  resultHeading.classList.add("font-bold");
  resultHeading.classList.add("mb-6");

  if (
    /DEBARUN DEY/.test(user) ||
    /DEBA/.test(user) ||
    /DEBARUN/.test(user) ||
    /DEBU/.test(user) ||
    /DEBO/.test(user) ||
    /DEB/.test(user) ||
    /DEBARUN DEY/.test(partner) ||
    /DEBA/.test(partner) ||
    /DEBARUN/.test(partner) ||
    /DEBU/.test(partner) ||
    /DEBO/.test(partner) ||
    /DEB/.test(partner)
  ) {
    rand = 0;
  } else if (rand == 0) {
    rand = 12;
  }
  if (
    /SUBID DAS/.test(user) ||
    /SUBID/.test(user) ||
    /SUB/.test(user) ||
    /SUBID DAS/.test(partner) ||
    /SUBID/.test(partner) ||
    /SUB/.test(partner)
  ) {
    rand = 0;
  }
  if (
    (/SUBID DAS/.test(user) ||
      /SUBID/.test(user) ||
      /SUB/.test(user) ||
      /SUBID DAS/.test(partner) ||
      /SUBID/.test(partner) ||
      /SUB/.test(partner)) &&
    (/SHIB/.test(user) ||
      /SHIB/.test(partner) ||
      /SIV/.test(user) ||
      /SIV/.test(partner) ||
      /SIB/.test(user) ||
      /SIB/.test(partner) ||
      /SHIV/.test(user) ||
      /SHIV/.test(partner)) ||
      /JAVA/.test(partner)
  ) {
    rand = 100;
  }
  let interval = 2000 / rand - 5;

  setInterval(() => {
    if (rand == 0) {
      number.innerHTML = counter + "%";
    } else if (counter == rand) {
      clearInterval();
    } else {
      counter++;
      number.innerHTML = counter + "%";
    }
  }, interval);

  //set property:
  document.documentElement.style.setProperty(
    "--end-offset",
    472 - 472 * (rand / 100)
  );
}

// contact
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form");
  let status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  function success() {}

  function error() {}

  function hideMsg() {}

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let graph = document.querySelector(".percentage");
    graph.classList.remove("hidden");
    result();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
