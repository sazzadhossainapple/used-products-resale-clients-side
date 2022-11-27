import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.email;
    const currentUser = {
      email: email,
    };

    if (email) {
      axios
        .put(
          `https://e-shoppers-server.vercel.app/jwt/user/${email}`,
          currentUser
        )
        .then((res) => {
          const jwtToken = res?.data?.accessToken;
          if (jwtToken) {
            localStorage.setItem("accessToken", jwtToken);
            setToken(jwtToken);
          }
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
