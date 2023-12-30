import React from "react";
import Validation from "./Validation";


function Form() {
  const { handleChange, inputs, handleSubmit, error} = Validation();

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>

        <div className="form__row">
          <label>First Name:</label>
          <input required
          maxLength={20}
            type="text"
            name="firstname"
            placeholder="Should only contain Alphabets"
            value={inputs.firstname}
            onChange={handleChange}
          />
<p className="eror">{error.firstname}</p>
<label>Last Name:</label>
          <input
          maxLength={20}
            type="text"
            name="lastname"
            placeholder="Should only contain Alphabets"
            value={inputs.lastname}
            onChange={handleChange}
          />
          <p className="eror">{error.lastname}</p>
          <label>Gender:</label>
          <div className="gender" onChange={handleChange} required>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
        <p className="eror">{error.gender}</p>
        <label>Email:</label>
          <input required
          maxLength={100}
            type="email"
            name="email"
            placeholder="Should be not a valid email"
            value={inputs.email}
            onChange={handleChange}
          />
          <p className="eror">{error.email}</p>
          <label>Student No:</label>
          <input required
          maxLength={7}
            type="number"
            name="studentno"
            placeholder="Must be of 7 digits"
            value={inputs.studentno}
            onChange={handleChange}
          />
          <p className="eror">{error.studentno}</p>
          <label>Roll No:</label>
          <input required
           maxLength={13}
            type="number"
            name="rollno"
            placeholder="Must be of 13 digits"
            value={inputs.rollno}
            onChange={handleChange}
          />
<p className="eror">{error.rollno}</p>
<label>Mobile No:</label>
          <input required
            type="number"
            maxLength={13}
            name="mobile"
            placeholder="Must be of 10 digits"
            value={inputs.mobile}
            onChange={handleChange}
          />
          <p className="eror">{error.mobile}</p>
          <label>City:</label>
          <input required
          maxLength={30}
            type="textarea"
            name="address"
            placeholder="Lucknow"
            value={inputs.address}
            onChange={handleChange}
          />
          <p className="eror">{error.address}</p>
          <label>Username:</label>
          <input required
          maxLength={30}
            type="text"
            name="username"
            placeholder="Can contain english alphabets,numbers,'.'and'_'"
            value={inputs.username}
            onChange={handleChange}
          />
          <p className="eror">{error.username}</p>
          <label>Password:</label>
          <input required

            type="password"
            name="password"
            placeholder="Must have 6 characters"
            value={inputs.password}
            onChange={handleChange}
          />
          <p className="eror">{error.password}</p>
          <label>Confirm Password</label>
          <input required
            type="password"
            name="password2"
            placeholder="Should be same as password"
            value={inputs.password2}
            onChange={handleChange}
          />
          <p className="eror">{error.password2}</p>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;