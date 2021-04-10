let btn = document.querySelector('#img__arrow');
let block = document.querySelectorAll('.invalid');


btn.addEventListener('click', errorEmail);

function errorEmail() {
    let email = document.querySelector('#email').value;
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
        email === "" ||
        email === null ||
        email === undefined ||
        !email.match(pattern)
      ) {

        block.forEach(block => {
          block.style.display = "block";
        });

      }
      if (email.match(pattern)) {

        block.forEach(block => {
          block.style.display = "none";
        });

      }

}