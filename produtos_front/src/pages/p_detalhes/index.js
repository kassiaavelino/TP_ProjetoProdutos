import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Item1 from '../../images/item-1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default class Detalhes extends Component {
    state = {
        produtos: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/produtos/${id}`)
            .then(produtos =>
                produtos.json().then(produtos => this.setState({ produtos }))
            )
            .catch(erro => this.setState({ erro }));
    }

 
    render() {
        const { produtos, index } = this.state;
 
        return (
            <div className="produtos-info">
                <div className="navbar">
                    <h1><Link to="/"><img className="logo" alt="logo" src={Logo}/></Link></h1>
                    <button className="button">
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </div>

                <div class="media-detalhe">
                        <div class="media-body">
                            
                            <div>
                                <h1><Link to="/"><img className="itens" alt="logo" src={Item1}/></Link></h1>
                                <h1> {produtos.p_nome} </h1>
                                <h1> R$ {produtos.p_precovenda} </h1>
                            </div>                            
                            <h5 className="descricao"> {produtos.p_descricao} </h5>
                                                        
                        </div>
                        <button className="button-link">
                            <Link to='/carrinho'>Comprar</Link>
                        </button>
                </div>                              
            </div>
        );
    }
}
