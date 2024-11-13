import React, { ReactChildren, useEffect } from "react";
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

type RouteProtectorProps = {
  children: React.ReactNode;
};

export default function RouteProtector({ children }: RouteProtectorProps) {
  const { isAuthenticated, user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, user]);

  return children;
}
