'use strict';

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {console.log(response);  return response.text();})
//       .then(json => console.log(JSON.parse(json).title))
//       .finally(() => console.log("2"))

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
}

document.querySelector('[data-emailForm]').addEventListener('submit', e =>{
      e.preventDefault();
      const email = e.target.firstElementChild.value;
      if(isEmailValid(email)){
            alert('пися в попе');
      }
})