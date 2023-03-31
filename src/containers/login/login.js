import React, { useState } from "react";
import { Login } from "../../components";
import { userlogin, userloading } from "../../storage";

import { LoginRequest } from "../../api"; // we can create all apis inside that folder
import { useSelector, useDispatch } from "react-redux";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export default function LoginContainer({ ...restProps }) {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Login {...restProps}>
      <Login.Form>
        <Login.FormInner>
          <Login.Label>{state.isLoading ? "yes" : "no"}</Login.Label>
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
          <Login.Label>{state.user}</Login.Label>
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
              dispatch(userloading()); // set state to loading to show a visual response to user
              await timeout(5000);
              //TODO:fetch api data and send to login

              dispatch(
                userlogin({
                  success: true,
                  data: {
                    user: "Yasin kömür",
                    about: "adhasdjas",
                  },
                })
              );
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
