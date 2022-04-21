import React from 'react'
import DialogsCSS from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

<div>
<DialogItem/>

<Message/>
</div>

      

    const Dialogs = (props) => {


      let dialogsElements = props.state.dialogsData
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

      let messagesElements = props.state.messageData
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



