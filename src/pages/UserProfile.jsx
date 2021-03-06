import React, { Fragment, useState, useEffect, useContext } from "react"
import { store} from "../store"

import { Grid, Typography, Paper, Avatar, TextField, Button, IconButton } from "@material-ui/core"

import facebookLogo from "../assets/external-logos/facebook-brands.svg"
import instagramLogo from "../assets/external-logos/instagram-brands.svg"
import whatsappLogo from "../assets/external-logos/whatsapp-brands.svg"

import { mockedUser } from "../data/mockedEvents"

const UserProfile = () => {
    const { state, dispatch } = useContext(store)
    const userType = state.userType;

    const [name, setName] = useState(state.name)
    const [avatar, setAvatar] = useState(state.avatar)
    const [description, setDescription] = useState(state.description)
    const [documentNumber, setDocumentNumber] = useState(state.documentNumber)
    const [email, setEmail] = useState(state.email)
    const [phone, setPhone] = useState(state.phone)
    const [street, setStreet] = useState(state.address?.street)
    const [number, setNumber] = useState(state.address?.number)
    const [addressComplement, setAddressComplement] = useState(state.address?.addressComplement)
    const [city, setCity] = useState(state.address?.city)
    const [uf, setUF] = useState(state.address?.uf)
    const [postal, setPostal] = useState(state.address?.postal)
    const [facebook, setFacebook] = useState(state.facebook)
    const [instagram, setInstagram] = useState(state.instagram)

    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        dispatch({
            type: "set_profile",
            data: mockedUser
          })
    }, [])

    function imageUpload(event) {
        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0]
            setAvatar(URL.createObjectURL(image))
        }
    }

    function editProfile() {
        event.preventDefault()
        const isVolunteer = !email.includes("ong")

        const { password, cnpj } = state;

        const data = {
          name,
          email,
          password,
          adress: {
            street: street,
            number: number,
            city: city,
            uf: uf
          },
          phone,
          cnpj,
          isVolunteer
        };
    
        dispatch({
          type: "set_profile",
          data
        })

        setIsEditing(false)
    }

    return (
        <div style={{ margin: "84px 10% 0"}}>
            <Grid container justify="center" alignContent="flex-start">
                <Grid item xs={12} className="event-header" style={{height: "10%"}}>
                    <Typography variant="h4">Configura????es da Conta</Typography>
                </Grid>
                <Paper
                    style={{
                        backgroundColor: "#E2FAFC",
                        width: "100%",
                        height: "calc(80% - 84px)",
                        marginBottom: "24px",
                        minHeight: "200px",
                        borderRadius: "8px",
                        padding: "24px"
                    }}>
                    <Grid item container>
                        <Grid item container className="settings-row">
                            <Grid item sm={12} md={2}>
                                <input 
                                    accept="image/*"
                                    id="avatar-upload"
                                    type="file"
                                    style={{display: "none"}}
                                    onChange={imageUpload}
                                    disabled={!isEditing}
                                />
                                <label htmlFor="avatar-upload">
                                    <IconButton component="span">
                                        <Avatar src={avatar} alt="avatar" style={{height: "120px", width: "120px"}}/>
                                    </IconButton>
                                </label>
                            </Grid>
                            <Grid item container md={10}>
                                <Grid item container spacing={2}>
                                    <Grid item container sm={12} md={8}>
                                        <TextField
                                            color="secondary"
                                            label={userType === "solicitant" ? "Raz??o Social" : "Nome"}
                                            id="name"
                                            type="text"
                                            className="settings-form"
                                            value={name}
                                            disabled={!isEditing}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={4}>
                                        <TextField
                                            fullWidth
                                            color="secondary"
                                            label="Email"
                                            id="email"
                                            type="text"
                                            className="settings-form"
                                            value={email}
                                            disabled={!isEditing}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>
                                    <Grid item container md={4} justifyContent="flex-start" alignItems="flex-end" style={{flexWrap: "nowrap", height: "fit-content"}}>
                                        <img src={facebookLogo} alt="logo do facebook" style={{height: "36px", marginRight: "0.5rem"}} />
                                        <TextField
                                            color="secondary"
                                            label="Facebook"
                                            id="facebook"
                                            type="text"
                                            className="settings-form"
                                            value={facebook}
                                            disabled={!isEditing}
                                            onChange={(e) => setFacebook(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container md={4} justifyContent="flex-start" alignItems="flex-end" style={{flexWrap: "nowrap", height: "fit-content"}}>
                                        <img src={instagramLogo} alt="logo do instagram" style={{height: "36px", marginRight: "0.5rem"}} />
                                        <TextField
                                            color="secondary"
                                            label="Instagram"
                                            id="instagram"
                                            type="text"
                                            className="settings-form"
                                            value={instagram}
                                            disabled={!isEditing}
                                            onChange={(e) => setInstagram(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container md={4} justifyContent="flex-start" alignItems="flex-end" style={{flexWrap: "nowrap", height: "fit-content"}}>
                                        <img src={whatsappLogo} alt="logo do whatsapp" style={{height: "36px", marginRight: "0.5rem"}} />
                                        <TextField
                                            color="secondary"
                                            label="WhatsApp"
                                            id="whatsapp"
                                            type="text"
                                            className="settings-form"
                                            value={phone}
                                            disabled={!isEditing}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container className="settings-row">
                            <TextField
                                multiline
                                rows={3}
                                inputProps={{
                                    "maxLength": 240 
                                }}
                                color="secondary"
                                label={
                                    userType === "solicitant" 
                                    ? "Fa??a um resumo de sua ONG para poss??veis volunt??rios"
                                    : "Fa??a uma breve descri????o sobre voc?? para poss??veis organizadores"
                                }
                                id="street"
                                type="text"
                                className="settings-form"
                                value={description}
                                disabled={!isEditing}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item container spacing={2} className="settings-row">
                            <Grid item container md={7}>
                                <TextField
                                    color="secondary"
                                    label="Endere??o"
                                    id="street"
                                    type="text"
                                    className="settings-form"
                                    value={street}
                                    disabled={!isEditing}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </Grid>
                            <Grid item container md={2}>
                                <TextField
                                    color="secondary"
                                    label="N??mero"
                                    id="number"
                                    type="text"
                                    className="settings-form"
                                    value={number}
                                    disabled={!isEditing}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item container md={3}>
                                <TextField
                                    color="secondary"
                                    label="Complemento"
                                    id="complement"
                                    type="text"
                                    className="settings-form"
                                    value={addressComplement}
                                    disabled={!isEditing}
                                    onChange={(e) => setAddressComplement(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} className="settings-row">
                            <Grid item container md={3}>
                                <TextField
                                    color="secondary"
                                    label="CEP"
                                    id="postal"
                                    type="text"
                                    className="settings-form"
                                    value={postal}
                                    disabled={!isEditing}
                                    onChange={(e) => setPostal(e.target.value)}
                                />
                            </Grid>
                            <Grid item container xs={10} md={7}>
                                <TextField
                                    color="secondary"
                                    label="Cidade"
                                    id="city"
                                    type="text"
                                    className="settings-form"
                                    value={city}
                                    disabled={!isEditing}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item container xs={2} md={2}>
                                <TextField
                                    color="secondary"
                                    label="UF"
                                    id="uf"
                                    type="text"
                                    className="settings-form"
                                    value={uf}
                                    disabled={!isEditing}
                                    onChange={(e) => setUF(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        {userType.userType === "solicitant" ?
                            <Grid item container spacing={2} className="settings-row">
                                <Grid item container sm={12} md={3}>
                                    <TextField
                                        color="secondary"
                                        label="CNPJ"
                                        id="cpf"
                                        type="text"
                                        className="settings-form"
                                        value={documentNumber}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        :
                            null
                        }
                        <Grid item container className="settings-row" justify="flex-end" alignContent="flex-end">
                            {isEditing ?
                                <Fragment>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => setIsEditing(false)}>
                                            CANCELAR
                                    </Button>
                                    <Button
                                        style={{ marginLeft: "32px" }}
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={editProfile}>
                                            SALVAR
                                    </Button>
                                </Fragment>
                            :

                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => setIsEditing(true)}>
                                        EDITAR PERFIL
                                </Button>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )

}

export default UserProfile