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
    minHeight: "200px",
    borderRadius: "8px",
  },
}))((props) => {
  const theme = useTheme();
  return (
    <Paper {...props}>
      <Grid 
        container style={{
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
            src={props.photo ? props.photo : defaultImage}
            alt={"capa do evento"}
            style={{
              height: "inherit",
              maxHeight: "180px",
              margin: "auto",
              marginRight: "1rem"
            }}
          />
        </Grid>
        <Grid item container style={{flexGrow: 3}}>
          <Grid
            item
            style={{
              width: "100%",
              height: "min-content",
              paddingBottom: "0.5rem",
              borderBottom: `solid ${theme.palette.secondary.main} 2px`,
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h3">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">{props.summary}</Typography>
          </Grid>
          <Grid item container justify="space-around" alignItems="flex-end">
            <Typography variant="h1" title="Número de voluntários">
              <SupervisorAccount />: {props.volunteers}/{props.vacancies}
            </Typography>
            <Typography variant="h1" title="Dia e horário do evento">
              <Calendar />:&nbsp;
              <Moment date={props.initialDate} format={"DD/MM/YYYY"} />{" "}
              &nbsp;&nbsp;
              <AccessAlarmIcon />:&nbsp;
              <Moment date={props.initialDate} format={"hh:mm"} />
              &nbsp;ÀS&nbsp;
              <Moment date={props.finalDate} format={"hh:mm"} />
            </Typography>
            <Button onClick={props.openModal} style={{backgroundColor: "transparent", padding: 0}}>
              <Typography variant="h1">
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
    maxWidt: "600px",
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
            <Typography variant="h1">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">{props.email}</Typography>
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
  root: {
    width: "50%",
    margin: "16px"
  },
}))((props) => {
  return (
    <Grid container {...props}>
      <Grid item xs={2}>
        <Avatar src={props.photo} style={{height: '3em', width: "3em"}} />
      </Grid>
      <Grid item container xs={8}>
        <Grid item xs={12}>
          <Typography variant="h2">{props.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">{props.email}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={() => props.removeUser(props.id)} style={{backgroundColor: "transparent"}}>
          <Typography variant="h1">
            REMOVER
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
});