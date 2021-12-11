import React, { Fragment, useState, useContext } from "react";
import { store } from "../store" 

import { Grid, IconButton, Menu, useTheme, MenuItem } from "@material-ui/core";
import { NavButton, LoginButton } from "../design-system/components/Buttons";
import { Appbar } from "../design-system/components/Appbar";
import "../stylesheets/navbar.css";

import logo from "../assets/logo_holpe_white.png";
import Organization from "@material-ui/icons/LocationCity"
import Person from "@material-ui/icons/Person"
import { navigate } from "@reach/router";

const Navbar = () => {
  const theme = useTheme();
  const { state } = useContext(store)

  const userType = state.userType;
  const [menuAnchor, setMenuAnchor] = useState(null)

  function handleMenu(event) {
    if(menuAnchor) {
      setMenuAnchor(null)
    }
    else {
      setMenuAnchor(event.currentTarget)
    }
  }

  function enterEventCreation() {
    handleMenu()
    navigate("/create-event")
  }

  function enterSettings() {
    handleMenu()
    navigate("/user-profile")
  }

  function enterCreatedEvents() {
    handleMenu()
    navigate("/your-events")
  }

  function logout() {
    localStorage.clear();
    document.location.reload();
  }

  return (
    <Fragment>
      <Appbar container component="nav" alignItems="center" position="fixed" style={{zIndex: 1, padding: "0 0.75rem"}}>
        <Grid item container xs={11} className="navbar">
          <img src={logo} alt="" className="logo" />
          <NavButton onClick={() => navigate("/")}>
            Home
          </NavButton>
          <NavButton onClick={() => navigate("/about")}>Sobre</NavButton>
          <NavButton onClick={() => navigate("/events")}>
            Trabalhos
          </NavButton>
          <NavButton onClick={() => navigate("/team")}>Equipe</NavButton>
        </Grid>
        <Grid item container xs={1} alignItems="center" justify="center">
          {userType ? (
            <Fragment>
              <IconButton 
                onClick={handleMenu}
                title="Menu do usuário"
                style={{backgroundColor: "#E2FAFC", color: theme.palette.secondary.main, width: "7vh", height: "7vh"}}>
                {userType.userType === "volunteer" ?
                  <Person />
                :
                  <Organization />
                }
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                open={Boolean(menuAnchor)}
                onClose={handleMenu}
              >
                {userType.userType === "solicitant" ?
                  <Fragment>
                    <MenuItem onClick={enterEventCreation}>Criar Evento</MenuItem>
                    <MenuItem onClick={enterCreatedEvents}>Eventos Criados</MenuItem>
                  </Fragment>
                : null }
                <MenuItem onClick={enterSettings}>Editar Perfil</MenuItem>
                <MenuItem onClick={logout}>Sair</MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>LOGIN</LoginButton>
          )}
        </Grid>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
