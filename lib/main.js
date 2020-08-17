const userForm = document.querySelector('.user-form');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const commentInput = document.querySelector("#comment");
const msg = document.querySelector('.msg');
const comments = document.querySelector("#comments");

userForm.addEventListener('submit', onSubmit);

function onSubmit (e){
  e.preventDefault();
  if(nameInput.value === '') {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
  }
}

