const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const success = urlParams.get("success");

const h1 = document.getElementsByTagName("h1")[0];

let message = "";

if (success != null) {
  if (success) {
    message = "Congratulations!";
  } else {
    message = "Sorry, payment has failed!";
  }
} else {
  message = "Sorry, no data available!";
}

h1.textContent = message;
