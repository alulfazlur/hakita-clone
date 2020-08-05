import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/sign.css";

export default function SignIn(props) {
  const postSignIn = async () => {
    await localStorage.setItem("signIn", true);
    props.history.replace("/");
  };
  return (
    <Fragment>
      <div className="container login-page">
        <div className="form login-form">
          <Link to="/">
            <img
              src={require("../images/nav-logo.png")}
              alt="logo"
              style={{ width: "200px", marginBottom: "50px" }}
            />
          </Link>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="passWord" placeholder="Password" />
            <button onClick={postSignIn}>Masuk</button>
            <p style={{ color: "#3f51b5", marginTop: "20px" }}>
              Belum punya akun? <br />{" "}
              <Link to="/" style={{ color: "#3f51b5" }}>
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
