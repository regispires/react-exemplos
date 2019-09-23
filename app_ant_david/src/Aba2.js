import React, { Component } from 'react';
 
class Aba2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: ''
        };

    }

    render() {  
        return (
            <div className="conteudo">
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend><strong>2º Questão</strong></legend>
                        <br/>
                        <label for="texto">Texto</label>
                        <br/>
                        <input placeholder="Digite aqui..." type="text" onChange={(e) => this.setState({texto: e.target.value})} name="texto" />
                        <br/>
                        <br />
                        <h2>Texto Digitado</h2>
                        <textarea disabled value={this.state.texto}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Aba2;