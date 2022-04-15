import MyPosts from './MyPosts/MyPosts'
import ProfileCSS from './Profile.module.css'

const Profile = () => {
  return <div className={ProfileCSS.content}>
  <div>
  <img src="https://picfiles.alphacoders.com/297/297577.jpg" alt="" />
  </div>
  <MyPosts />
  </div>
}
export default Profile;