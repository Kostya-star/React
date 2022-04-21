import React from 'react'
import SidebarCSS from './Sidebar.module.css'
import Friend from './Friends/Friend'

const Sidebar = (props) => {

  let friendsNames = props.name.map( (n) => <Friend name={n.name}/> );

  return (
    <div>
      <h2 className="heading">Friends</h2>
      <Friend name={props.state.name}/>
    </div>
  )
}

export default Sidebar;