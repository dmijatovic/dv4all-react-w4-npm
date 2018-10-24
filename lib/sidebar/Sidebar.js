import React, { Component } from 'react';
import propTypes from 'prop-types';
//import { Link } from 'react-router-dom';

/**
 * Sidebar component
 */
class Sidebar extends Component {
  static defaultProps={
    items:[{
      type:"link",
      path:"/",
      label:"Home",
      props:{exact:true},
      link:{exact:true}
    }]
  }
  static propTypes={
    items: propTypes.arrayOf(
      propTypes.shape({
        type: propTypes.string,
        link: propTypes.string,
        label: propTypes.string,
        props: propTypes.object
      })
    )
  }
  getMenuItems = () =>{

    let items = this.props.items.map(item=>{
      return (<li key={item.path}>{item.label}</li>)
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
