'use strict';

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {console.log(response);  return response.text();})
//       .then(json => console.log(JSON.parse(json).title))
//       .finally(() => console.log("2"))

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
}

document.querySelector('[data-emailForm]').addEventListener('submit', e => {
      e.preventDefault();
      const email = e.target.firstElementChild.value;
      if (isEmailValid(email)) {
            alert('пися в попе');
      }
})

class Person {
      constructor(imgSrc, name, comment, selector) {
            this.imgSrc = imgSrc;
            this.name = name;
            this.comment = comment;
            this.selector = selector;
      }

      addPerson(){
            const testimonialGrid = document.querySelector(this.selector),
                  newElem = document.createElement('div');
            newElem.classList = "testimonials_elem";
            newElem.innerHTML = `
                  <div class="testimonials_image">
                    <img src="${this.imgSrc}" alt="${this.name}">
                  </div>
                  <div class="testimonials_text">
                    <h4 class="testimonials_name">${this.name}</h4>
                    <div class="testimonials_comment">
                      ${this.comment}
                    </div>
                  </div>
            `;
            testimonialGrid.append(newElem);
      }
}


const persons = [
      new Person(
            "images/img/olivia.png", 
            "olivia cole", 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.`, 
            "[data-testimonial_grid]"
      ),
      new Person(
            "images/img/evan.png", 
            "evan white", 
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eius dolorum voluptatum est fugit minima!`, 
            "[data-testimonial_grid]"
      ),
      new Person(
            "images/img/jessica.png", 
            "jessica page", 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.`, 
            "[data-testimonial_grid]"
      )
];
persons.forEach(e => {
      e.addPerson();
});