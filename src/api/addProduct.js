export const addProduct = async (addProduct) => {
  const url = `http://localhost:5000/addProducts`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(addProduct),
  });

  const data = await res.json();
  return data;
};
