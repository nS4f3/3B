import React, { useState } from "react";
import { Login } from "../../components";

async function login(username, password) {
  var response;

  const userData = {
    "username": username,
    "password": password,
  };

  await fetch("http://localhost:5000/api/v1/users/", {
    method: "POST",
    body: JSON.stringify(userData),
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => (response = err))
    .then((data) => {
      response = data;
    });

  return response;
}

export default function LoginContainer({ ...restProps }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <Login {...restProps}>
      <Login.Form>
        <Login.FormInner>
          <Login.Label>User Name</Login.Label>
          <Login.Input
            onChanged={(evt) => {
              if (evt.target.value.length >= 8) {
                setUserName(evt.target.value);
              }
            }}
            type="text"
          ></Login.Input>
        </Login.FormInner>

        <Login.FormInner>
          <Login.Label>Password</Login.Label>
          <Login.Input
            onChanged={(evt) => {
              if (evt.target.value.length >= 8) {
                setPassword(evt.target.value);
              }
            }}
            type="password"
          ></Login.Input>
        </Login.FormInner>

        <Login.FormInner>
          <Login.Label />
          <Login.Button
            disabled={userName === "" || password === ""}
            onPress={async () => {
              const res = await login(userName, password);
              

              console.log(res);
            }}
          >
            Login
          </Login.Button>
        </Login.FormInner>
      </Login.Form>

      <Login.Manuel>
        <p>Manuel</p>
        <p>Manuel</p>
        <p>Manuel</p>
        <p>Manuel</p>
      </Login.Manuel>
    </Login>
  );
}
