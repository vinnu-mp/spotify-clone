alert("Note: None of the buttons are working as it is only a frontend project");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("⚠️ This is a frontend-only project. Buttons are non-functional.");
  });
});
