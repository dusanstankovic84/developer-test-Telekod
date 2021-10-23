export const url = "https://reqres.in/api";

// function for posting username/password and receiving the access token from the server

export const postData = (user, pass, pin, setToken, onNotFound) => {
  const userData = { email: user, password: pass, pin: pin };
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        let err = new Error("HTTP status code" + response.status);
        err.status = response.status;
        throw err;
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      setToken(data.accessToken);
    })
    .catch((reason) => {
      handleError(reason, setToken, onNotFound);
    });
};


// function for error handling

const handleError = (err, setToken, onNotFound) => {
  if (err?.status === 401) {
    alert("Token has expired. Please login again.");
    setToken("");
  } else if (err?.status === 400) {
    alert("Invalid credentials.");
    setToken("");
  } else if (err?.status === 404) {
    if (typeof onNotFound === 'function') {
      return onNotFound()
    }
    alert('Resource not found');
  } else {
    alert("Server Error:\n" + err.toString());
  }
};