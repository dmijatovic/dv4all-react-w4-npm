import React, { Component } from 'react';
import propTypes from 'prop-types';

/**
 * Sidebar component
 */
class Sidebar extends Component {
  static defaultProps={
    items:[{
      type:"link",
      link:"/",
      label:"Home"
    }]
  }
  static propTypes={
    items: propTypes.arrayOf(
      propTypes.shape({
        type: propTypes.string,
        link: propTypes.string,
        label: propTypes.string
      })
    )
  }
  getMenuItems = () =>{

    let items = this.props.items.map(item=>{
      return (<li key={item.link}>{item.label}</li>)
    })

    return items;
  }
  render() {
    return (
      <nav className="app-sidebar">
        <h1>This is sidebar</h1>
        <ul>
          {this.getMenuItems()}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
