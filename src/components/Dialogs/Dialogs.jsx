import React from 'react'
import DialogsCSS from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  return (
    <div className={DialogsCSS.dialogs}>
      <div className={DialogsCSS.dialogItemsColumnOne}>
        
        <div className={DialogsCSS.dialogItem}>
          <NavLink to='/dialogs/1'>Costya</NavLink>
        </div>
        
        <div className={DialogsCSS.dialogItem}>
        <NavLink to='/dialogs/2'>Nadya</NavLink>
        </div>
        
        <div className={DialogsCSS.dialogItem}>
        <NavLink to='/dialogs/3'>Petr</NavLink>
        </div>
        
        <div className={DialogsCSS.dialogItem}>
        <NavLink to='/dialogs/4'>Julia</NavLink>
        </div>
        
        <div className={DialogsCSS.dialogItem}>
        <NavLink to='/dialogs/5'>Ivan</NavLink>
        </div>
      </div>
      <div className={DialogsCSS.dialogItemsColumnTwo}>
        <div className={DialogsCSS.messageItem}>Hey</div>
        <div className={DialogsCSS.messageItem}>how r u</div>
        <div className={DialogsCSS.messageItem}>bye</div>
      </div>
    </div>
  )
}

export default Dialogs;