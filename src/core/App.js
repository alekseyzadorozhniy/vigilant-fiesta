import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import Routes from '../routes';
import AppHeader from '../header';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="app-page">
          <Header className="app-header">
            <AppHeader />
          </Header>
          <Content className="app-content">
            <Routes />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
