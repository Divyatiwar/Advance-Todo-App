import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    dispatch(login({ username: "User123" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="text-center mb-3">
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
