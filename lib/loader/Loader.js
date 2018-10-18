import propTypes from 'prop-types';
import React from 'react';

import './Loader.css';

/**
 * Loader component, expects css variable --color-primary
 * @param { String } type: expected string values are 'hourglass' or 'roller'
 */
export class Loader extends React.Component{
  static defaultProps={
    type:'hourglass'
  }
  static propTypes={
    type: propTypes.string
  }
  /**
   * Decide which html content to load based on loader type
   */
  loaderHtml(){
    //debugger
    switch (this.props.type.toLowerCase()){
      case 'hourglass':
        return (
          <div className="lds-hourglass"></div>
        )
      case 'roller':
        return (
          <div className="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        )
      default:
        return (
          <h1>Loader type not loaded correctly</h1>
        )
    }
  }
  render(){
    return (
      <div className="app-loader">
        {
          this.loaderHtml()
        }
      </div>
    )
  }
}

export default Loader;