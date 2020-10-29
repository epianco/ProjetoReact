import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            usuario: {
                nome: "",
                salario: "",
                dataNascimento: ""
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de Conexão com o servidor
                </div>
            );
        }
    }

    componentDidMount () {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(data => {
                data.json().then(data => {
                    if(data.error) {
                        this.setState({ erro: data.error });
                    }else {
                        this.setState({ usuario: data});
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }       

    render() {
        
    }
}