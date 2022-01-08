import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form``;
const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const [signUp, setSignUp] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(signUp);
  };

  const handleRegister = async (e) => {
    try {
      await axios
        .post(`http://localhost:4000/signup`, {
          first_name: e.first_name,
          last_name: e.last_name,
          email: e.email,
          password: e.password,
        })
        .then((res) => {
          alert(`${e.first_name} you are register check you ${e.email}`);
        });
    } catch (error) {
      console.log(error);
    }

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <div>
            <TextField
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </Form>
      </>
    );
  };
};
