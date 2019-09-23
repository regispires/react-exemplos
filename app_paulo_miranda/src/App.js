import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Menu, Icon } from 'antd';
import MyForm from './MyForm';

class App extends React.Component {
  state = {
    current: 'tarefa1',
  };

  handleClick = e => {
    //console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="tarefa1">
            <Icon type="edit" />
            Tarefa 1
          </Menu.Item>
          <Menu.Item key="tarefa2">
            <Icon type="edit" />
            Tarefa 2
          </Menu.Item>
          <Menu.Item key="tarefa3">
            <Icon type="plus" />
            Tarefa 3
          </Menu.Item>
        </Menu>
        <div className="div-form">
        <MyForm tarefa={this.state.current}/>
        </div>
      </div>
    );
  }
}

export default App;
