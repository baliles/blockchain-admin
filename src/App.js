import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ContractNew from './modules/contract-new';
import AMNew from './modules/am-new';
import { web3 } from './web3';

class App extends Component {
  render() {
    return (

      <div>
        <div className = "jumbotron jumbotron-fluid">
          <div className = "container">
            <h2 className = "display-4"><div className = "logo"></div>ACME & Co. Private Blockchain</h2>
            
            {web3.isConnected() && <p className = "lead">Smart Contract Administration</p>}

            {!web3.isConnected() && <p className = "lead">Initiating your private instance</p>}

          </div>
        </div>

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ContractNew} />
                <Route exact path='/car' component={AMNew} />
            </Switch>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
