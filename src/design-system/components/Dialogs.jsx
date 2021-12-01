import React, { Fragment, useState } from "react"
import { Avatar, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, useTheme } from "@material-ui/core"
import { AvatarGroup } from "@material-ui/lab"
import Moment from "react-moment";

import { User } from "./Cards"

import Location from "@material-ui/icons/LocationOn"
import Transportation from "@material-ui/icons/DirectionsBus"
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Calendar from "@material-ui/icons/Event";
import Assignment from "@material-ui/icons/Assignment"
import Restaurant from "@material-ui/icons/Restaurant"
import Email from "@material-ui/icons/Email"
import Phone from "@material-ui/icons/Phone"
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";

export const EventDetails = ({closeModal, modal, applyToEvent, unapplyToEvent, selectedEvent, userType}) => {
  const canUnapply = !selectedEvent.volunteers.includes(selectedEvent.userId)
  const theme = useTheme()
    return (
        <Dialog onClose={closeModal} aria-labelledby="dialog-title" open={modal} maxWidth={"md"} fullWidth>
          <DialogTitle id="dialog-title" style={{borderBottom: `solid ${theme.palette.secondary.main} 2px`}}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h3" component="h1" style={{marginBottom: "8px"}}>
                  {selectedEvent.name} com {selectedEvent.organization}
                </Typography>
              </Grid>
              <Grid item sm={3} container justify="flex-end">
                <Typography variant="h1" title="Número de voluntários" style={{marginBottom: "0px"}}>
                  <SupervisorAccount />: {selectedEvent.volunteers.length}/{selectedEvent.totalVacancies}
                </Typography>
                {userType === "volunteer"
                  ? canUnapply
                  ? <Button 
                      variant="contained" 
                      color="secondary" 
                      style={{marginLeft: "16px", height: "80%"}}
                      onClick={unapplyToEvent}
                      disabled={selectedEvent.volunteers.length === selectedEvent.totalVacancies}>
                        CANCELAR
                    </Button>
                  : <Button 
                      variant="contained" 
                      color="secondary" 
                      style={{marginLeft: "16px", height: "80%"}}
                      onClick={applyToEvent}
                      disabled={selectedEvent.volunteers.length === selectedEvent.totalVacancies}>
                        INSCREVA-SE
                    </Button>
                  : null }
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container style={{marginBottom: "24px"}}>
              <Grid item container md={6} direction="column" style={{gap: "0.5rem"}}>
                <Typography variant="h1" component="p" title="Número de voluntários">
                  <Location />: Rua das Flores, 123 - São Carlos
                </Typography>
                <Typography variant="h1" component="p" title="Dia do evento">
                  <Calendar />:&nbsp; {" "}
                  <Moment date={selectedEvent.initialDate} format={"DD/MM/YYYY"} />{" "}
                </Typography>
                <Typography variant="h1" component="p" title="Horário do evento">
                  <AccessAlarmIcon />:&nbsp; {" "}
                  <Moment date={selectedEvent.initialDate} format={"hh:mm"} />
                  &nbsp;ÀS&nbsp;
                  <Moment date={selectedEvent.finalDate} format={"hh:mm"} />
                </Typography>
              </Grid>
              <Grid item container md={6} direction="column" style={{gap: "0.5rem"}}>
                <Typography variant="h1" component="p">
                  <Transportation />: Fornece Transporte
                </Typography>
                <Typography variant="h1" component="p">
                  <Assignment />: Fornece Certificado
                </Typography>
                <Typography variant="h1" component="p">
                  <Restaurant />: Fornece Alimentação
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h2" component="p">{selectedEvent.details}</Typography>
          </DialogContent>
          <DialogActions>
            <Typography variant="h1" component="p" title="E-mail de contato">
              <Email />&nbsp;{selectedEvent.email}
            </Typography>
            <Typography variant="h1" component="p" title="Telefone para contato">
              <Phone />&nbsp;{selectedEvent.phone? selectedEvent.phone : "Indisponível"}
            </Typography>
          </DialogActions>
        </Dialog>
    )
}

export const OrganizationEventDetails = ({closeModal, modal, deleteEvent, removeUser, selectedEvent}) => { 
  const theme = useTheme()
  const [showUsers, setShowUsers] = useState(false)
  return (
      <Dialog onClose={closeModal} aria-labelledby="dialog-title" open={modal} maxWidth={"md"} fullWidth>
        <DialogTitle id="dialog-title" style={{borderBottom: `solid ${theme.palette.secondary.main} 2px`}}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h3" style={{marginBottom: "8px"}}>
                {selectedEvent.name}
              </Typography>
            </Grid>
            <Grid item sm={4} container justify="flex-end" alignItems="center">
              <Button onClick={() => setShowUsers(!showUsers)}>
                <AvatarGroup max={3} className="created-event-avatar">
                  {selectedEvent.volunteers.map((user, index) => {
                    return <Avatar key={name + index} alt={user.name} />
                  })}
                </AvatarGroup>
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                style={{marginLeft: "16px", height: "80%"}}
                onClick={deleteEvent}
                disabled={selectedEvent.volunteers.length === selectedEvent.totalVacancies}>
                  CANCELAR EVENTO
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {showUsers ?
            selectedEvent.volunteers.map((user) => {
              return <User key={user._id} id={user._id} photo={user.photo} name={user.name} email={user.email} removeUser={removeUser} />
            })
          :
            <Fragment>
              <Grid container style={{marginBottom: "24px"}}>
                <Grid item md={6}>
                  <Typography variant="h1" title="Endereço">
                    <Location />: Rua das Flores, 123 - São Carlos
                  </Typography>
                  <Typography variant="h1" title="Dia do evento">
                    <Calendar />:&nbsp; {" "}
                    <Moment date={selectedEvent.initialDate} format={"DD/MM/YYYY"} />{" "}
                  </Typography>
                  <Typography variant="h1" title="Horário do evento">
                    <AccessAlarmIcon />:&nbsp; {" "}
                    <Moment date={selectedEvent.initialDate} format={"hh:mm"} />
                    &nbsp;ÀS&nbsp;
                    <Moment date={selectedEvent.finalDate} format={"hh:mm"} />
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant="h1">
                    <Transportation />: Fornece Transporte
                  </Typography>
                  <Typography variant="h1">
                    <Assignment />: Fornece Certificado
                  </Typography>
                  <Typography variant="h1">
                    <Restaurant />: Fornece Alimentação
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h2">{selectedEvent.details}</Typography>
            </Fragment>
          }
        </DialogContent>
        <DialogActions>
          <Typography variant="h1" title="E-mail de contato">
            <Email />&nbsp;{selectedEvent.email}
          </Typography>
          <Typography variant="h1" title="Telefone para contato">
            <Phone />&nbsp;{selectedEvent.phone? selectedEvent.phone : "Indisponível"}
          </Typography>
        </DialogActions>
      </Dialog>
  )
}