// Constante de la API
const API = "http://localhost:3000/api";

export const registerRequest = async (usuario) => {
  try {
    const res = await fetch(`${API}/register`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    return res.status;

  } catch (error) {
    console.log(error);
  }
};
  