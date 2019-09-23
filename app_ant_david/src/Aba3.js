import React, { Component } from 'react';
 
class Aba3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: '',
            lista: []
        };

        this.addItem = this.addItem.bind(this);

    }

    addItem(event){
        if(this.state.texto != ''){
            this.setState((state, props) =>({
                texto: '',
                lista: state.lista.concat(state.texto)
            }));
        }
    }

    render() { 
        const listaItems = this.state.lista.map((item) =>
                            <li key={item.toString()}>
                            {item}
                            </li>
                        ); 
        return (
            <div className="conteudo">
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend><strong>3º Questão</strong></legend>
                        <br/>
                        <label for="item">Item</label>
                        <br/>
                        <input placeholder="Digite aqui..." type="text" name="item" value={this.state.texto} onChange={(e) => this.setState({texto: e.target.value})}/>
                        <br/>
                        <button type="submit" onClick={this.addItem}>Adicionar</button>
                        <br />
                        <br />
                        <div id="lista">
                        <h2>Lista de Itens</h2>
                            <hr />
                            <br />
                            <ul>{listaItems}</ul>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Aba3;