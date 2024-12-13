const logout = () => {
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    // console.log("token", token);

    // Decode JWT token to get user data
    const decodedToken = parseJwt(token); // Implement parseJwt function to decode token
    return decodedToken;
};


// Function to decode JWT token
const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // console.log("jsonPayload", jsonPayload);

    return JSON.parse(jsonPayload);
};

export default {
    logout,
    getCurrentUser,
};