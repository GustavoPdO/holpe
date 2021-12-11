import React from "react";
import { Grid, Typography } from "@material-ui/core";

import logoHolpe from "../assets/logo_holpe_blue.png";

const MainLogo = ({ message }) => (
  <Grid container justify="center" alignContent="flex-start" style={{height: "30%"}}>
    <img src={logoHolpe} alt="" className="main-logo" />
    <Grid item xs={12}>
      <Typography variant="subtitle1" component="h1" style={{color: "#208bb3"}}>{message}</Typography>
    </Grid>
  </Grid>
);

export default MainLogo;
