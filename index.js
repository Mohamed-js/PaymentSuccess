const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const success = urlParams.get("success");

const h1 = document.getElementsByTagName("h1")[0];
const pr = document.getElementsByTagName("p")[0];

let message = "";
let sub = "";

if (success != null) {
  if (success === true || success === "true") {
    message = "Congratulations!";
    sub =
      "Your payment is success, now you can go to the app and have more fun!";
  } else {
    message = "Sorry, payment has failed!";
    sub = "Your payment has failed, please make sure you enter valid data.";
  }
} else {
  message = "Sorry, no data available!";
  sub = "";
}

h1.textContent = message;
pr.textContent = sub;

const btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  history.go(parseInt(`-${history.length - 1}`));
};
