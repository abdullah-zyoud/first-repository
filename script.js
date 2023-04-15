
function message() {
  alert("Loading weather report...");
}

function Switch(element) {
  for (var i = 1; i <9; i++) {
    var NoOftemp = document.querySelector("#temp" + i);
    var temp = parseInt(NoOftemp.innerText);
    if (element.value == "°C") {
        NoOftemp.innerText = Math.round(temp - 32);
    } else {
        NoOftemp.innerText = Math.round(temp + 32);
    }
  }
}
var policy_message = document.querySelector(".policyMessage");
function accept() {
    policy_message.remove();
  }
