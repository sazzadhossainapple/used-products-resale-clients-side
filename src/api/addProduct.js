export const addProduct = async (addProduct) => {
    const url = `${process.env.REACT_APP_URL}/api/products`;
    const token = localStorage.getItem('accessToken');

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addProduct),
    });

    const data = await res.json();
    return data;
};
