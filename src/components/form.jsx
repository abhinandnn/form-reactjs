import React from "react";
import Validation from "./Validation";


function Form() {
  const { handleChange, inputs, handleSubmit } = Validation();

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={inputs.firstname}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={inputs.lastname}
            onChange={handleChange}
          />
          <div className="gender" onChange={handleChange}>
            <p className="gh">Gender:</p>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            
          />
          <input
            type="number"
            name="studentno"
            placeholder="Student No"
            value={inputs.studentno}
            onChange={handleChange}
          />
          <input
            type="number"
            name="rollno"
            placeholder="Roll No"
            value={inputs.rollno}
            onChange={handleChange}
          />

          <input
            type="number"
            name="phone"
            placeholder="Mobile No"
            value={inputs.phone}
            onChange={handleChange}
          />
          <input
            type="textarea"
            name="address"
            placeholder="City"
            value={inputs.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={inputs.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password *"
            value={inputs.password2}
            onChange={handleChange}
          />
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;