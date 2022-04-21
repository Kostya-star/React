import React from 'react'
import FriendCSS from './Friend.module.css'

const Friend = (props) => {
  return (
    <div>
      <a href="#"><img src="https://avatars.mds.yandex.net/i?id=a9be5e167ca10bacca7de515b270df21-5810594-images-thumbs&n=13" alt="friend" /> <span>{props.name}</span></a>
    </div>
  )
}

export default Friend;