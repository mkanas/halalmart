"use client";

import React, { useState, useEffect } from "react";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return { currentUser };
};

export default useAuth;
