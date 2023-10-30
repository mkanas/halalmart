"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully signed in");
      router.push("/components/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <main className="bg-white  py-[50px] ">
      {loading ? (
        <div>
          <h1 className="text-center">Loading...</h1>
        </div>
      ) : (
        <section>
          <h1 className="font-semibold mb-5 text-center">Login</h1>
          <div className="flex gap-[100px] justify-around">
            <form onSubmit={signIn} className="bg-[#1d1431] p-10 rounded-md ">
              <div>
                <input
                  className="w-[350px] border  text-xs outline-none py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-[350px] border text-xs outline-none py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center  justify-center ">
                <button
                  type="submit"
                  className=" text-xs font-semibold mt-[35px] text-black broder w-[30%] bg-white px-[3px] py-[6px] border-white rounded-[4px]"
                >
                  Login
                </button>
              </div>
              <h4 className="text-xs text-center text-white mt-6">
                Dont have an Account ?{" "}
                <Link
                  className="hover:text-red-600 cursor-pointer"
                  href="/components/signup"
                >
                  Create an Account
                </Link>{" "}
              </h4>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default Login;
