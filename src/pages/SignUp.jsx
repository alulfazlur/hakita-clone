import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/sign.css";

export default function SignUp() {
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
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="passWord" placeholder="Password" />
            <button>Daftar</button>
            <p style={{ color: "#3f51b5", marginTop: "20px" }}>
              Sudah Punya Akun? <br />{" "}
              <Link to="/signin" style={{ color: "#3f51b5" }}>
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
