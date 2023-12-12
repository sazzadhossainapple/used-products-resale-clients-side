import { useEffect, useState } from 'react';

const useByuer = () => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            fetch(`${process.env.REACT_APP_URL}/api/users/buyer`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsBuyer(data?.data);
                    setIsBuyerLoading(false);
                });
        } else {
            setIsBuyerLoading(false);
        }
    }, []);

    return [isBuyer, isBuyerLoading];
};

export default useByuer;
