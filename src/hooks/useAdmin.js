import { useEffect, useState } from 'react';

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token) {
            fetch(`${process.env.REACT_APP_URL}/api/users/admin`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsAdmin(data?.data);
                    setIsAdminLoading(false);
                });
        } else {
            setIsAdminLoading(false);
        }
    }, []);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
