import React from "react";

import { Grid } from "@material-ui/core";

import logoIcmc from "../assets/logo-icmc.png";
import logoMonitora from "../assets/logo-monitora.png";

const Footer = () => (
  <Grid item container className="footer" justifyContent="center" alignItems="center">
    <div>
      <p>Uma parceria entre</p>
      <div className="image-container">
        <img src={logoIcmc} alt="logo do icmc" className="logo" />{" "}
        <img src={logoMonitora} alt="logo da Monitora" className="logo" />
      </div>
    </div>
  </Grid>
);

export default Footer;
