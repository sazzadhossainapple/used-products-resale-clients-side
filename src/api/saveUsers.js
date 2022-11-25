export const saveUsers = async (usersInfo) => {
  const url = `http://localhost:5000/users`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(usersInfo),
  });

  const data = await res.json();
  return data;
};