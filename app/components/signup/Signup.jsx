"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "@/firebase.config";
import { storage, db } from "@/firebase.config";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            toast.error(error.message);
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      // Dapatkan URL unduhan
      const photoURL = await getDownloadURL(uploadTask.snapshot.ref);

      // Update profil pengguna
      await updateProfile(user, {
        displayName: username,
        photoURL,
      });

      // Simpan data pengguna di basis data firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: username,
        email,
        photoURL,
      });

      setLoading(false);
      toast.success("Success created account");
      //router.push("/components/login");
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      console.info(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="bg-white  py-[50px] ">
      {loading ? (
        <div>
          <h6 className="text-center text-black text-2xl py-10 h-full">
            Loading.....
          </h6>
        </div>
      ) : (
        <section>
          <h1 className="font-semibold mb-5 text-center">Signup</h1>
          <div className="flex gap-[100px] justify-around">
            <form onSubmit={signup} className="bg-[#1d1431] p-10 rounded-md ">
              <div>
                <input
                  className="w-[350px] border text-xs outline-none py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                  type="text"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-[350px] border text-xs outline-none py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
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
              <div>
                <input
                  className="w-[350px]  text-xs text-white  py-[5px] px-[7px]  border-slate-500 rounded-[4px] mt-[12px]"
                  type="file"
                  placeholder=""
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="flex items-center justify-center ">
                <button
                  type="submit"
                  className=" text-xs font-semibold mt-[35px] text-black broder w-[50%] bg-white px-[3px] py-[6px] border-white rounded-[4px]"
                >
                  Create An Account
                </button>
              </div>
              <h4 className="text-xs text-center text-white mt-6">
                Already Have Account ?{" "}
                <Link
                  className="hover:text-red-600 cursor-pointer"
                  href="/components/login"
                >
                  Login
                </Link>{" "}
              </h4>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default Signup;
