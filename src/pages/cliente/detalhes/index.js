import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class Cliente extends Component {
    state = {
        cliente: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { cliente, index } = this.state;
 
        if (cliente.ativo) {
            cliente.ativo = "Cliente Ativo";
        } else {
            cliente.ativo = "Cliente Inativo";
        }
 
        return (
            <div className="cliente-info">
                <h1> {cliente.nome} </h1>
                <h1> {cliente.ativo} </h1>
                <h1> {cliente.salario} </h1>
                <h1> {cliente.dataNascimento} </h1>
                <br />
                <Link to={`/clientes`}> Voltar </Link> <br />
                <Link to={`/editarCliente/${cliente.id}`}> Editar </Link> <br />
                <Link to={`/deletarCliente/${cliente.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}
