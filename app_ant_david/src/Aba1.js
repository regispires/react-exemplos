import React, { Component } from 'react';
 
class Aba1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            preco: 0,
            quantidade: 0
        };

    }

    render() {  
        return (
            <div className="conteudo">
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend><strong>1º Questão</strong></legend>
                        <br/>
                        <label for="preco">Preço</label>
                        <br/>
                        <input placeholder="Digite aqui..." type="number" onChange={(e) => this.setState({preco: e.target.value})} step="0.01" min="0" name="preco" />
                        <br/>
                        <br/>
                        <label for="quant">Quantidade</label>
                        <br/>
                        <input placeholder="Digite aqui..." type="number" onChange={(e) => this.setState({quantidade: e.target.value})} min="0" name="quant"/>
                        <br/>
                        <br/>
                        <h2>Total: {(this.state.preco * this.state.quantidade).toFixed(2).replace(".",",")}</h2>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Aba1;