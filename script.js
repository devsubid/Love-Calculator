if (localStorage.getItem("index") == undefined) {
  localStorage.setItem("index", 0);
}

// send data to process
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

function result() {
  let number = document.getElementById("number");
  let counter = 0;
  let rand = Math.round(Math.random() * 100);

  let user = document.getElementById("fin_person1").value.toUpperCase();
  let userGender = document
    .querySelector('input[name="user_gender"]:checked')
    .value.toUpperCase();
  let partner = document.getElementById("fin_person2").value.toUpperCase();
  let partnerGender = document
    .querySelector('input[name="partner_gender"]:checked')
    .value.toUpperCase();

  let resultHeading = document.getElementById("result-heading");

  resultHeading.innerHTML = `Percentage of love between<br><strong>${user}</strong> and <strong>${partner}</strong>`;
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
    ((/SUBID DAS/.test(user) ||
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
        /SHIV/.test(partner))) ||
    /JAVA/.test(partner)
  ) {
    rand = 100;
  }

  function User() {
    this.name = user;
    this.gender = userGender;
    this.percentage = rand;
    this.partner = partner;
    this.partnerGender = partnerGender;
  }

  let i = localStorage.getItem("index");

  if (i == 0) {
    let array = [];
    array.push(new User());
    i++;
    localStorage.setItem("array", JSON.stringify(array));
    localStorage.setItem("index", i);
    console.log(localStorage.getItem("index"));
    console.log(JSON.parse(localStorage.getItem("array")));
  } else {
    let array = JSON.parse(localStorage.getItem("array"));
    let j;
    for (j = 0; j < array.length; j++) {
      if (
        array[j].name == user &&
        array[j].gender == userGender &&
        array[j].partner == partner &&
        array[j].partnerGender == partnerGender
      ) {
        rand = array[j].percentage;
        break;
      }
    }
    if (j == array.length) {
      array.push(new User());
      i++;
      localStorage.setItem("array", JSON.stringify(array));
      localStorage.setItem("index", i);
      console.log(localStorage.getItem("index"));
      console.log(JSON.parse(localStorage.getItem("array")));
    }
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
