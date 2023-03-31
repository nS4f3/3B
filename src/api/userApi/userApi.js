const loginRequest = async function (username, password) {
  var response;

  const userData = {
    username: username,
    password: password,
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
};

export default loginRequest;
