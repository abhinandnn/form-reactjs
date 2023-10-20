import React, { useState } from "react";

const useForm = () => {
const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    studentno: "",
    rollno: "",
    phone: "",
    address: "",
    username: "",
    password: "",
    password2: ""
});


  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const error = {
    firstname: (inputs.firstname.trim()==='')|(inputs.firstname.length>15) ? 'lol' : '',
    lastname: (inputs.lastname.length>15) ? 'lol' : '',
    address: (inputs.address.trim()==='')|(inputs.address.length>20) ? 'lol' : '',
    studentno: (inputs.studentno.trim()==='')|!(inputs.studentno.length===7) ? 'lol' : '',
    rollno: (inputs.rollno.trim()==='')|!(inputs.rollno.length===13) ? 'lol' : '',
    phone: (inputs.phone.trim() === '')|!(inputs.phone.length===10)? 'lol' : '',
    email: (inputs.email.trim() === '')|(inputs.email.length>50)? 'lol' : '',
    username: (inputs.username.trim()==='')|(inputs.username.length>15) ? 'lol' : '',
    password: (inputs.password.trim() === '')|!(inputs.password===inputs.password2)|(inputs.password.length<8) ? 'lol' : '',
    password2: inputs.password2.trim() === '' ? 'lol' : '',
  }
    
      let hasErrors = false;
      for (const i in error) {
        if (error[i] !== '') {
          hasErrors = true;
          break;
        }
      }
  
      if (!hasErrors) {
        console.log('Form submitted:', inputs);
      }
      else
      console.log('fill all the details correctly!');
  };

  return { handleChange, inputs, handleSubmit };
};

export default useForm;