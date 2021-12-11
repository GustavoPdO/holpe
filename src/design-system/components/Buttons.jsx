import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export const NavButton = withStyles({
  root: {
    height: "inherit",
    fontFamily: "Roboto",
    fontWeight: 100,
    fontSize: "2rem",
    textTransform: "none",
    color: "white",
    padding: "0 16px",
    "&:hover": {
      height: "inherit",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: "0px",
    },
  },
})(Button);

export const LoginButton = withStyles({
  root: {
    minHeight: "30px",
    width: "80px",
    fontSize: "1rem",
    color: "#0179A7",
    background: "#E2FAFC",
    "&:hover": {
      background: "#E2FAFCE6",
    },
  }
})(Button);

export const IconButton = withStyles(() => ({
  root: {
    minHeight: "50px",
    width: "240px",
    borderRadius: "16px",
    margin: "8px",
  },
}))((props) => (
  <Button {...props}>
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <img
          src={props.icon}
          alt=""
          style={{ height: "100%", maxHeight: "36px", paddingTop: "20%" }}
        />
      </Grid>
      <Grid item xs={10}>
        <span>{props.msg}</span>
      </Grid>
    </Grid>
  </Button>
));
