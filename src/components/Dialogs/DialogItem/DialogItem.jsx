import React from 'react'
import DialogsCSS from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = /dialogs/ + props.id

  let newDialogItem = React.createRef();
  let addNewDialogItem = () => {
    let newText = newDialogItem.current.value;
    alert(newText);
  }


  return (
  <div className={DialogsCSS.dialogItem}>
  <NavLink onClick={addNewDialogItem} to={path}>{props.name}</NavLink>
    <textarea ref={newDialogItem}></textarea>
    <button onClick={addNewDialogItem}>Add post</button>
</div>
)
}

export default DialogItem;



