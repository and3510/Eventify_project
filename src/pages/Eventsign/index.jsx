import React from "react";
import { StyledEventsign } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Imagem_evento from "../../assets/evente_image.png"

const Eventos = ["Pokemon GO", "Campus Party", "Festa na AABB"];

export default function Eventsign() {
    return (
        <StyledEventsign>
            <Header />
            <section id="pagina">
                <div id="painel">
                    <h1>Evento: {Eventos[0]}</h1>
                    <img src={Imagem_evento} /> <br /> <br />
                    <a href="/eventabout">Sobre o Evento</a> <br />
                    <label htmlFor="">Nome</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Telefone</label> <br />
                    <input type="tel" /> <br />
                    <button>Se Inscrever</button>
                </div>
            </section>
            <Footer />
            
        </StyledEventsign>
    )
}
