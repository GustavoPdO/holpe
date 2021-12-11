import React from "react";
import {
  Avatar,
  Paper,
  Grid,
  withStyles,
  useTheme,
  Typography,
  Button
} from "@material-ui/core";
import Moment from "react-moment";

import defaultImage from "../../assets/card-default.png";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Calendar from "@material-ui/icons/Event";

export const Event = withStyles(() => ({
  root: {
    backgroundColor: "#E2FAFC",
    width: "100%",
    minHeight: "10rem",
    borderRadius: "0.5rem"
  },
}))((props) => {
  const theme = useTheme();
  return (
    <Paper {...props}>
      <Grid container spacing={2} style={{padding: "1rem"}}>
        <Grid item container justifyContent="center" alignItems="center" xs={12} md={3}>
          <img
            src={props.photo ? props.photo : defaultImage}
            alt={"capa do evento"}
            style={{
              height: "inherit",
              maxHeight: "9rem",
            }}
          />
        </Grid>
        <Grid item container md>
          <Grid
            item
            style={{
              width: "100%",
              height: "min-content",
              paddingBottom: "0.25rem",
              borderBottom: `solid ${theme.palette.secondary.main} 2px`,
            }}
          >
            <Typography variant="h3" component="p">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" component="p" style={{margin: "0.5rem 0"}}>{props.summary}</Typography>
          </Grid>
          <Grid item container justifyContent="space-around" alignItems="center">
            <Typography variant="h1" component="span" title="Número de voluntários" style={{marginBottom: "0.25rem"}}>
              <SupervisorAccount />: {props.volunteers.length}/{props.vacancies}
            </Typography>
            <Typography variant="h1" component="span" title="Dia e horário do evento" style={{marginBottom: "0.25rem"}}>
              <Calendar />:&nbsp;
              <Moment date={props.initialDate} format={"DD/MM/YYYY"} />{" "}
              &nbsp;&nbsp;
              <AccessAlarmIcon />:&nbsp;
              <Moment date={props.initialDate} format={"hh:mm"} />
              &nbsp;ÀS&nbsp;
              <Moment date={props.finalDate} format={"hh:mm"} />
            </Typography>
            <Button onClick={props.openModal} style={{backgroundColor: "transparent", marginBottom: "0.25rem", padding: 0}}>
              <Typography variant="h1" component="span">
                SAIBA MAIS
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

export const Member = withStyles(() => ({
  root: {
    backgroundColor: "#E2FAFC",
    maxWidth: "600px",
    minHeight: "140px",
    borderRadius: "8px",
  },
}))((props) => {
  const theme = useTheme();
  return (
    <Paper {...props}>
      <Grid container style={{
        display: "flex",
        flexWrap: "nowrap",
        height: "100%", 
        width: "100%",
        padding: "1rem"
      }}>
        <Grid item justify="center"
          style={{
            flexGrow: 1
          }}>
          <img
            src={props.photo}
            alt={props.alt}
            style={{
              height: "120px",
              maxHeight: "120px",
              margin: "auto",
              marginRight: "1rem",
              borderRadius: "24px"
            }}
          />
        </Grid>
        <Grid item container direction="column">
          <Grid
            item
            style={{
              width: "100%",
              paddingBottom: "0.5rem",
              borderBottom: `solid ${theme.palette.secondary.main} 2px`,
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h1" component="p">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" component="p">{props.email}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

export const ThemedPaper = withStyles(() => ({
  root: {
    backgroundColor: "#E2FAFC",
    width: "60vw",
    margin: "auto",
    minHeight: "200px",
    borderRadius: "8px",
  },
}))((props) => {
  const theme = useTheme();
  return (
    <Paper {...props}>
      <Grid container style={{width: "100%", padding: "1rem"}}>
        <Grid
          item
          style={{
            width: "100%",
            height: "min-content",
            borderBottom: `solid ${theme.palette.secondary.main} 2px`,
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h3" component="h1">{props.name}</Typography>
        </Grid>         
        <Grid item>
          {props.text}
        </Grid>
      </Grid>
    </Paper>
  )
})

export const User = withStyles(() => ({
  root: {},
}))((props) => {
  return (
    <Grid item container {...props}>
      <Grid item xs={2} sm={1}>
        <Avatar src={props.photo} style={{height: '3em', width: "3em"}} />
      </Grid>
      <Grid item container xs>
        <Grid item xs={12}>
          <Typography variant="h2" component="p">{props.name}</Typography>
          <Typography variant="h2" component="p">{props.email}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={() => props.removeUser(props.id)} style={{backgroundColor: "transparent"}}>
          <Typography variant="h1" component="span">
            REMOVER
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
});