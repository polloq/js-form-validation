const validateForm = form => {
  const errors = [];

  for (let key in form.elements) {
    if (form.elements.hasOwnProperty(key)) {
      switch (form.elements[key].type) {
        case 'text':
          containsOnlyText(form.elements[key].value, errors);
          console.warn('Errors: ', errors);
          break;
        case 'number':
          console.log('number: ', form.elements[key].value);
          break;
        case 'email':
          console.log('email: ', form.elements[key].value);
          break;
        case 'password':
          console.log('password: ', form.elements[key].value);
          break;
        case 'tel':
          console.log('tel: ', form.elements[key].value);
          break;
        case 'date':
          console.log('date: ', form.elements[key].value);
          break;
        case 'time':
          console.log('time: ', form.elements[key].value);
          break;
        case 'checkbox':
          console.log('checkbox: ', form.elements[key].value);
          break;
        case 'radio':
          console.log('radio: ', form.elements[key].value);
          break;
        case 'file':
          console.log('file: ', form.elements[key].value);
          break;
      }
    }
  }
};

const containsOnlyText = (string, errors) => {
  const re = /^[a-zA-Z]+$/;
  // const msg = 'The string must contains only letters';

  errors.push(!re.test(string));
};

const containsOnlyDigits = () => {};
