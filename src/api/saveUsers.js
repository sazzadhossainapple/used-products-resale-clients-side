export const saveUsers = async (usersInfo) => {
    const url = `${process.env.REACT_APP_URL}/api/users`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(usersInfo),
    });

    const data = await res.json();
    return data;
};
