import React from 'react';
import { Alert, Form, List, Button, Input, InputNumber} from 'antd';

const { TextArea } = Input;

class MyForm1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preco: 0,
      qtd: 0,
      result: 0      
    }
    this.onChangePreco = this.onChangePreco.bind(this);
    this.onChangeQtd = this.onChangeQtd.bind(this);
  }  

  onChangePreco(value){
    this.setState(function(state) {
      return {
        preco: value, result: value*state.qtd
      };
    });
  }

  onChangeQtd(value){    
    this.setState(function(state){
      return {
        qtd: value, result: value*state.preco
      };
    });
  }

  render() {
    return (
      <Form>
        <Form.Item label="Preço">
          <InputNumber value={this.state.preco} onChange={this.onChangePreco}/>,
        </Form.Item>
        <Form.Item label="Quantidade">
          <InputNumber value={this.state.qtd} onChange={this.onChangeQtd}/>,
        </Form.Item>
        <Alert message={"O resultado é "+this.state.result} type="success" />
      </Form>
    );
  }
}

class MyForm2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""      
    }
    this.onChangeText = this.onChangeText.bind(this);
  }  

  onChangeText({target: {value}}){
    //console.log(value);
    this.setState({
      text: value
    });
  }

  render() {
    return (
      <Form>
        <Form.Item label="Texto">
          <TextArea placeholder="Digite um texto" value={this.state.text} onChange={this.onChangeText}/>
        </Form.Item>
        <Form.Item>
        <Alert message={this.state.text} type="success" />
        </Form.Item>
      </Form>
    );
  }
}

class MyForm3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      list: []      
    }
    this.onClick = this.onClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }  

  onChangeText({target: {value}}){
    //console.log(value);
    this.setState({
      text: value
    });
  }
    
  onClick(e){
    //console.log(e);
    this.setState(function(state) {
      if(state.text !== "")
        return {
          text:"", list: [...state.list, state.text]
        };
      else
        return {};      
    });
  }

  render() {    
    return (
      <Form>
        <Form.Item label="Item">
          <Input placeholder="Nome do Item" value={this.state.text} onChange={this.onChangeText}/>,
          <Button onClick={this.onClick}>Add</Button>,
        </Form.Item>
        <Form.Item>
          <h3 style={{ marginBottom: 16 }}>Minha Lista de Itens</h3>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Form.Item>
      </Form>
    );
  }
}

class MyForm extends React.Component {
  render() {
    switch(this.props.tarefa){
      case 'tarefa1':
        return <MyForm1/>
      case 'tarefa2':
        return <MyForm2/>
      case 'tarefa3':
        return <MyForm3/>
      default:
        return <MyForm1/>
    }
  }
}

export default MyForm;