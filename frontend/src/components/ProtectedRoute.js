import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(hideLoading());
        navigate("/login");
        return;
      }

      const res = await axios.post(
        "/api/v1/user/getUserData",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch(hideLoading());
      
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    } else if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [user, navigate]);

  return localStorage.getItem("token") ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
}
