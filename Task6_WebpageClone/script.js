// Shop button action
document.getElementById("shopBtn").addEventListener("click", () => {
  alert("Explore Products Coming Soon!");
});

// Subscribe button action
document.getElementById("subscribeBtn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("Please enter your email!");
  } else {
    alert("Thanks for subscribing, " + email + " 🎉");
  }
});
