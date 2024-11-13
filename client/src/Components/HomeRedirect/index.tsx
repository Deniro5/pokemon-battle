import React, { ReactChildren, useEffect } from "react";
import useStore from "../../zustand/store";
import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import { useNavigate } from "react-router-dom";

type RouteProtectorProps = {
  children: React.ReactNode;
};

export default function HomeRedirect({ children }: RouteProtectorProps) {
  const { isAuthenticated, user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, user]);

  return children;
}
