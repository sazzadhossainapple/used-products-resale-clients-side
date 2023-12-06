import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const currentUser = {
            email: email,
        };

        if (email) {
            axios
                .put(
                    `${process.env.REACT_APP_URL}/api/users/jwt/${email}`,
                    currentUser
                )
                .then((res) => {
                    const jwtToken = res?.data?.data?.token;

                    if (jwtToken) {
                        localStorage.setItem('accessToken', jwtToken);
                        setToken(jwtToken);
                    }
                });
        }
    }, [user]);

    return [token];
};

export default useToken;
