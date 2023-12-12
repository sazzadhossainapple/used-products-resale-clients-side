import { useEffect, useState } from 'react';

const useSeller = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            fetch(`${process.env.REACT_APP_URL}/api/users/seller`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsSeller(data?.data);
                    setIsSellerLoading(false);
                });
        } else {
            setIsSellerLoading(false);
        }
    }, []);

    return [isSeller, isSellerLoading];
};

export default useSeller;
