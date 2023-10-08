import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function useCurrentUserEmail() {
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem("jwtToken");

    if (token) {
      // Decode the JWT token to access the email
      const decodedToken = jwt_decode(token);
      setCurrentUserEmail(decodedToken.email);
    } else {
      setCurrentUserEmail(null);
    }
  }, []);

  return currentUserEmail;
}

export default useCurrentUserEmail;
