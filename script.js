const form = document.querySelector('#form')
const input = document.querySelectorAll('.input')
const email = document.querySelector('#email')


form.addEventListener('submit',(e) => {
    e.preventDefault();
    ValidateEmail(email)
    input.forEach((data) => {
      if(data.value == "") {
        alert("input is not completed")
        data.style.border = `1px solid red`
      }
        alert("completed")
    })
})


function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      return true;
    } else {
      alert("Invalid email address!😡🧛‍♂");
      return false;
    }
  console.log(input)
  }
