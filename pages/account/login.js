import Layout from "@/components/Layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/AuthForm.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Layout title="User Login ">
      <div className={styles.auth}>
        <h2>
          <FaUser /> Login
        </h2>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" className="btn" />

          <p>
            Don't Have A Account ?
            <Link href="/account/register"> Register </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
