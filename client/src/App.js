import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListingPage from './components/ListingPage';

import LeftMenu from './pages/LeftMenu';
import Footer from './pages/Footer';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {

    const spinner = document.getElementById('spinner');

    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }

    return (
      <ApolloProvider client={client}>
        <Router>
              <Row>
                <Col span={4}>
                    <LeftMenu />
                </Col>
                <Col span={20} style={{ 'backgroundColor': '#E7E7E8' }}>
                     <Route exact path="/" component={ ListingPage }/>
                  </Col>
              </Row>
              <Row>
                <Col span={24}>
                    <Footer />
                </Col>
              </Row>
        </Router>       
      </ApolloProvider>
    );
  }
}

export default App;
