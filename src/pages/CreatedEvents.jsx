import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker"
import { cloneDeep, every } from "lodash"

import { Grid, Typography } from "@material-ui/core"
import { showToaster } from "../design-system/components/Toaster";

import { OrganizationEventDetails } from "../design-system/components/Dialogs"
import { Event } from "../design-system/components/Cards";
import { generateEventListWithQty } from "../data/mockedEvents";

const createdEvent = () => {
    const [events, setEvents] = useState(generateEventListWithQty());
    const [users, setUsers] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(undefined);
    const [detailsModal, setDetailsModal] = useState(false);

    function openDetailsModal(item) {
        setDetailsModal(true);
        setSelectedEvent(item)
    }

    function closeDetailsModal() {
        setDetailsModal(false)
        setSelectedEvent(undefined)
    }

    function deleteEvent(){
        setEvents(events.filter(event => event._id !== selectedEvent._id))
        showToaster({
            message: "Evento cancelado com sucesso!",
            autoClose: 2000
        });
        setSelectedEvent(undefined)
    }

    function removeUser(id) {
        let volunteers = selectedEvent.volunteers.filter(user => user._id !== id)
        let ids = []
        volunteers.map((user) => ids.push(user._id))

        setSelectedEvent(prevState => {
            return {...prevState, volunteers}
        })
        showToaster({
            message: "Voluntário removido com sucesso!",
            autoClose: 2000
        });
    }

    return (
        <div style={{ position: "fixed", top: "84px", width: "100%" }}>
            <Grid container justify="center" style={{ padding: "0 10%" }}>
                <Grid item xs={12} className="event-header">
                    <Typography variant="h4">Meus Trabalhos</Typography>
                </Grid>
                <Grid item container style={{gap: "1rem"}} >
                    {selectedEvent ?
                        <OrganizationEventDetails
                            closeModal={closeDetailsModal}
                            modal={detailsModal}
                            selectedEvent={selectedEvent}
                            deleteEvent={deleteEvent}
                            removeUser={removeUser}
                        />
                    : null }
                    {events.map((event, index) => (
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
                    ))}
                </Grid>
            </Grid>
        </div>
    )

}

export default createdEvent