import React, { Component } from 'react';
import Aba1 from './Aba1';
import Aba2 from './Aba2';
import Aba3 from './Aba3';
 
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            aba : 1
        };

       this.mudaAba = this.mudaAba.bind(this);
    }

    mudaAba(x){
        this.setState({
            aba: x
          });
    }
  
    render() {
        let conteudo = 0;
        if(this.state.aba == 1){
            conteudo = <Aba1 />;  
        }else if(this.state.aba == 2){
            conteudo = <Aba2 />; 
        }else if(this.state.aba == 3){
            conteudo = <Aba3 />; 
        }
        return (
            <div className="app">
                <nav id="menu">
                    <h1>{this.props.title}</h1>
                    <ul>
                        <li><a onClick={() => this.mudaAba(1)} href="#">Primeira</a></li>
                        <li><a onClick={() => this.mudaAba(2)} href="#">Segunda</a></li>
                        <li><a onClick={() => this.mudaAba(3)} href="#">Terceira</a></li>
                    </ul>
                </nav>
                <br/>
                <br/>
                {conteudo}
            </div>
        );
  }
}

export default Menu;