import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import routes from './router/routes';

import {Header, Sidebar, Footer} from '../lib';

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Sidebar items={routes}/>
          <section className="app-content">
            <AppRouter/>
          </section>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
