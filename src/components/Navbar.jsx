import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import teal from "@material-ui/core/colors/teal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: "fixed",
    minWidth: "100%",
  },
  navbar: {
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    margin: {
      margin: theme.spacing(1),
    },
    marginRight: "25px",
    fontWeight: "400",
    "&-masuk": {
      backgroundColor: theme.palette,
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    fontWeight: "500",
    backgroundColor: teal[300],
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}))(Button);

export default function Navbar(props) {
  const classes = useStyles();
  const postSignOut = async () => {
    await localStorage.removeItem("signIn");
  };
  let isSignedIn = false;
  if (localStorage.getItem("signIn")) {
    isSignedIn = localStorage.getItem("signIn");
  }
  return (
    <div className={classes.root}>
      <AppBar
        position={props.path ? "static" : "fixed"}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <Link to="/">
            <img
              alt="hakita-logo"
              style={{ width: "100px", marginLeft: "110px", cursor: "pointer" }}
              src={require("../images/nav-logo.png")}
            />
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>
          <div style={{ marginRight: "100px" }}>
            <Button className={classes.navButton}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </Button>
            <Button className={classes.navButton}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </Button>
            <Button className={classes.navButton}>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "black" }}
              >
                Services
              </Link>
            </Button>
            <Button className={classes.navButton}>
              <Link
                to="/pricing"
                style={{ textDecoration: "none", color: "black" }}
              >
                Pricing
              </Link>
            </Button>
            <Button className={classes.navButton}>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </Link>
            </Button>
            <Button className={classes.navButton}>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
            </Button>
            {!isSignedIn ? (
              <ColorButton
                className={classes.navButton}
                endIcon={<PersonIcon />}
                variant="contained"
                color="secondary"
                disableElevation
              >
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Masuk
                </Link>
              </ColorButton>
            ) : (
              <ColorButton
                className={classes.navButton}
                endIcon={<PersonIcon />}
                variant="contained"
                color="secondary"
                disableElevation
                onClick={postSignOut}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/signin"
                >
                  Keluar
                </Link>
              </ColorButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
