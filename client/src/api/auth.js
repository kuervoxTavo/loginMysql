import axios from "axios";

// Constante de la API
const API = "http://localhost:3000/api";

export const registerRequest = (usuario) =>
  axios
    .post(`${API}/register`, usuario)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

/* 
  
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  */
