import React, { useState, useContext, useEffect } from "react";
import { store } from "../store"
import { useTheme, Grid, Typography, Button } from "@material-ui/core";

import { Event } from "../design-system/components/Cards";
import { EventDetails } from "../design-system/components/Dialogs"

import "../stylesheets/events.css";

import { generateEventList, mockedUser } from "../data/mockedEvents";

const Events = () => {
  const theme = useTheme();
  const { state, dispatch } = useContext(store)
  const userType = state.userType;

  const [userID] = useState("")
  const [events] = useState(generateEventList());
  const [appliedEvents, setAppliedEvents] = useState(generateEventList())
  const [unappliedEvents, setUnappliedEvents] = useState(generateEventList())
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [showAppliedEvents, setShowAppliedEvents] = useState(true)

  useEffect(() => {
    dispatch({
        type: "set_profile",
        data: mockedUser
      })
}, [])

  function openDetailsModal(item, id){
    item.userId = id;
    setDetailsModal(true)
    setSelectedEvent(item)
  }

  function closeDetailsModal(){
    setDetailsModal(false)
    setSelectedEvent(undefined)
  }

  function applyToEvent(){
    setUnappliedEvents(appliedEvents.filter(event => event._id !== selectedEvent._id))
    setAppliedEvents([...unappliedEvents, selectedEvent])
    setSelectedEvent(undefined)
  }

  function unapplyToEvent() {
    setAppliedEvents(appliedEvents.filter(event => event._id !== selectedEvent._id))
    setUnappliedEvents([...unappliedEvents, selectedEvent])
    setSelectedEvent(undefined)
  }

  function renderEventList() {
    if(userType !== "volunteer") {
      return events.map((event, index) => (
              <Event
                key={index}
                name={event.name}
                photo={event.photo}
                summary={event.summary}
                details={event.details}
                volunteers={event.volunteers}
                vacancies={event.totalVacancies}
                initialDate={event.initialDate}
                finalDate={event.finalDate}
                openModal={() => openDetailsModal(event)}
              />
            ))
    }
    else if(showAppliedEvents) {
      return appliedEvents.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          photo={event.photo}
          summary={event.summary}
          details={event.details}
          volunteers={event.volunteers}
          vacancies={event.totalVacancies}
          initialDate={event.initialDate}
          finalDate={event.finalDate}
          openModal={() => openDetailsModal(event, userID)}
        />
      ))
    }
    else {
      return unappliedEvents.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          photo={event.photo}
          summary={event.summary}
          details={event.details}
          volunteers={event.volunteers}
          vacancies={event.totalVacancies}
          initialDate={event.initialDate}
          finalDate={event.finalDate}
          openModal={() => openDetailsModal(event)}
        />
      ))
    }
  }

  return (
    <div style={{ margin: "9vh auto 0", width: "80%" }}>
      <Grid container justify="center">
        <Grid item xs={12} className="event-header">
          <Typography variant="h4">Trabalhos</Typography>
        </Grid>
        {userType === "volunteer"
          ? <Grid item container justify="center" style={{textAlign: "center"}}>
              <Grid item xs={6} style={{
                  borderRight: `solid ${theme.palette.secondary.main} 2px`,
                  backgroundColor: showAppliedEvents ? `#E2FAFC` : "transparent"
                }}>
                <Button onClick={() => setShowAppliedEvents(true)} >
                  <Typography variant="h3" component="span">Inscrições</Typography>
                </Button>
              </Grid>
              <Grid item xs={6} style={{
                  backgroundColor: showAppliedEvents ? "transparent" : `#E2FAFC`
                }}>
                <Button onClick={() => setShowAppliedEvents(false)} >
                  <Typography variant="h3" component="span">Novos Eventos</Typography>
                </Button>
              </Grid>
            </Grid>
          : null }
        <Grid item container style={{gap: "1rem"}}>
          {renderEventList()}
        </Grid>
        {selectedEvent ?
          <EventDetails
            closeModal={closeDetailsModal}
            modal={detailsModal}
            applyToEvent={applyToEvent}
            unapplyToEvent={unapplyToEvent}
            selectedEvent={selectedEvent}
            userType={userType}
            userID={userID}
          />
        : null }
      </Grid>
    </div>
  );
};

export default Events;
