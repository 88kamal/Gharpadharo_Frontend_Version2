import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

/* eslint-disable react/prop-types */
export const ProtectedRoute = ({ children, requiredRole }) => {
    const user = authService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== requiredRole || user.needsPasswordChange) {
            // Navigate to the home page with a query parameter to trigger the login modal
            navigate("/login");
        }
    }, [user, requiredRole, navigate]);

    // If the user meets the required conditions, render the protected content
    if (user?.role === requiredRole && !user.needsPasswordChange) {
        return children;
    }

    // If not authorized, return null as the user is redirected
    return null;
};