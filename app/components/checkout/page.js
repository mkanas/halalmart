import React from "react";
import CheckOut from "./CheckOut";
import ProtectedRoutes from "@/app/custom-hooks/protectedRoutes";

const page = () => {
  return (
    <ProtectedRoutes>
      <CheckOut />
    </ProtectedRoutes>
  );
};

export default page;
