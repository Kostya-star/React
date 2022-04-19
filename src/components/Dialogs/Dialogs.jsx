import React from 'react'
import DialogsCSS from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = /dialogs/ + props.id
  return <div className={DialogsCSS.dialogItem}>
  <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
  return <div className={DialogsCSS.messageItem}>{props.message}</div>
}

      

    const Dialogs = (props) => {

      let dialogsData = [
        {id: 1, name: 'Costya'},
        {id: 2, name: 'Nadya'},
        {id: 3, name: 'Petr'},
        {id: 4, name: 'Julia'},
        {id: 5, name: 'Ivan'},
      ]

      let dialogsElements = dialogsData
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

      let messageData = [
        {id: 1, message: 'hi'},
        {id: 1, message: 'how r u'},
        {id: 1, message: 'bye'},
      ]

      let messagesElements = messageData
        .map( (message) => <Message message={message.message}/>)

      return (
      <div className={DialogsCSS.dialogs}>

        <div className={DialogsCSS.dialogItemsColumnOne}>
        {dialogsElements}
        </div>

        <div className={DialogsCSS.dialogItemsColumnTwo}>
          {messagesElements}
        </div>
        
      </div>
  )
}

export default Dialogs;