import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = ({ requiredRoles }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  if (requiredRoles) {
    const hasRequiredRole = requiredRoles.some((role) =>
      user.roles.includes(role),
    );

    if (!hasRequiredRole) {
      return <Navigate to="/unauthorized" />;
    }
  }

  // Render the protected route if the user is authenticated and authorized
  return <Outlet />;
};

AuthGuard.propTypes = {
  requiredRoles: PropTypes.arrayOf(PropTypes.string),
};

export default AuthGuard;
