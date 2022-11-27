export const addProduct = async (addProduct) => {
  const url = `https://e-shoppers-server.vercel.app/addProducts`;

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
