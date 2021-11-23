import React from "react";
import { Grid, Typography } from "@material-ui/core"

import { Member } from "../design-system/components/Cards"

import config_bg from "../assets/config-bg.png"

import gustavo from "../assets/members/gustavo.jpg"
import andrey from "../assets/members/andrey.jpg"
import cocenza from "../assets/members/cocenza.jpg"
import machado from "../assets/members/machado.jpg"
import morao from "../assets/members/morao.jpg"
import orlando from "../assets/members/orlando.jpg"
import rafaela from "../assets/members/rafaela.jpg"

const Team = () => {
    return (
        <div style={{ margin: "9vh auto 0", width: "80%"}}>
            <Grid container justify="center">
                <Grid item xs={12} className="event-header">
                    <Typography variant="h4">Equipe</Typography>
                </Grid>
                <Grid item container justify="space-between">
                    <Member photo={gustavo} name="Gustavo Pedralino" email="gpedralino@usp.br" alt="Homem branco de óculos azul escuro e fone de ouvido branco sob céu azul" />
                    <Member photo={andrey} name="Andrey Lucas" email="andrey.garcia@usp.br" alt="Jovem branco de óculos preto posando em frente ao espelho com o celular" />
                    <Member photo={cocenza} name="Gabriel Cocenza" email="gabriel.cocenza@usp.br" alt="Homem branco de cabelos longos e barba posando ao lado de cachorro semelhante a um Rottweiler preto" />
                    <Member photo={machado} name="Gabriel Machado" email="gabrielrmachado11@gmail.com" alt="Homem pardo de cabelos longos em uma selfie preto e branco" />
                    <Member photo={morao} name="Gabriel Muniz" email="gabrielmorao@usp.br" alt="Homem branco e ruivo com barba sorrindo de perfil" />
                    <Member photo={orlando} name="Orlando Pasqual" email="orlando.filho@usp.br" alt="Homem pardo de cabelos curtos e barba com um dedo sob o rosto" />
                    <Member photo={rafaela} name="Rafaela Silva" email="rafaela.souzasilva@usp.br" alt="Mulher branca de cabelos pretos longos e franja posando ao lado de um gato branco e laranja" />
                </Grid>
            </Grid >
        </div>
    )
}

export default Team;
