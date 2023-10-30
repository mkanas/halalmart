"use client";

import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  return currentUser ? children : router.push("/components/login");
};

export default ProtectedRoutes;
