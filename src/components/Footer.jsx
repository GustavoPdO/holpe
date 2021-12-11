import React from "react";

import { Grid } from "@material-ui/core";

import logoIcmc from "../assets/logo-icmc.png";
import logoMonitora from "../assets/logo-monitora.png";

const Footer = () => (
  <Grid item container className="footer" justify="center" alignItems="center">
    <p>Uma parceria entre</p>&nbsp;
    <img src={logoIcmc} alt="logo do icmc" className="logo" />{" "}
    <img src={logoMonitora} alt="logo da Monitora" className="logo" />
  </Grid>
);

export default Footer;
