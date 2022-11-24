export const getImageUrl = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `${process.env.REACT_APP_APIKEYIMAGE}`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.data.display_url;
};
