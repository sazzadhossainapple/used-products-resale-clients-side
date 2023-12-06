import { useEffect, useState } from 'react';

const useSeller = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            fetch(`${process.env.REACT_APP_URL}/api/users/seller`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsSeller(data?.isSeller);
                    setIsSellerLoading(false);
                });
        } else {
            setIsSellerLoading(false);
        }
    }, []);

    return [isSeller, isSellerLoading];
};

export default useSeller;
