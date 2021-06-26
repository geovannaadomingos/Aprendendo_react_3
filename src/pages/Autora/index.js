import React, { useState, useEffect } from 'react'
import './style.css'
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

const Autora = () => {
    const [repositorios, setRepositorio] = useState([]);
    const [input, setInput] = useState("");
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([]);


    useEffect(() => {
        fetch("https://api.github.com/users/geovannaadomingos/repos")
            .then(resposta => resposta.json())
            .then(dados => setRepositorio(dados))
    }, [])

    useEffect(() => {
        setRepositoriosFiltrados(
            repositorios.filter((repositorio) => {
                return(
                    repositorio.name.includes(input.toUpperCase()) || repositorio.name.includes(input.toLowerCase())
                ) 
            })
        )
    }, [input, repositorios])

    console.log(repositoriosFiltrados)
    return (
        <>
            <Menu />
            <section className="main_autora">
                <div className="descricao_main_autora">
                    <h2 className="subtitle_main_autora">Pesquise e encontre outros projetos feitos por Geovanna Domingos, autora dessa aplicação divertida: </h2>
                </div>
                <div className="div_input">
                    <form className="form">
                        <input placeholder="Digite e encontre repositórios do Github" className="input_autora" id="input_autora" onChange={e => { setInput(e.target.value) }} />
                    </form>
                </div>
                <div className="div_cards_autora">
                    {repositoriosFiltrados.map((repositorio) =>
                        <div key={repositorio.id} className="card_autora">
                            <p className="p_card_autora">{repositorio.name}</p>
                            <p className="p_card_autora">Linguagem: <span>{repositorio.language}</span></p>
                            <p className="p_card_autora"><a target="_blanck" href={repositorio.html_url}>Link do repositório</a></p>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Autora