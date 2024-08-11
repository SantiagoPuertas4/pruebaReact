const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUserFN = async () => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const data = await res.json();

  if (!res.ok) throw new Error("Ocurrio un error");

  return data;
};

export const deleteUserFn = async (userId) => {
  const res = await fetch(`${BACKEND_URL}/user/${userId}`, {
    method: "DELETE",
  });

  //Que pasa si hay error

  return null;
};
