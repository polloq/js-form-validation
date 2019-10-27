const form = document.forms['generic-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  validateForm(form);

  console.log('Submit with success!');
});

console.log('Form elements: ', form.elements);
console.log(typeof form.elements);
