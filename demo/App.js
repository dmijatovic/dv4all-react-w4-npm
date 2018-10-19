import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import {Header, Sidebar, Footer} from '../lib';

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Sidebar/>
          <section className="app-content">
            <AppRouter/>
          </section>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
