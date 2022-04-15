import MyPostsCSS from './MyPosts.module.css'
import FirstPost from './MyPost/FirstPost'

const MyPosts = () => {
  return (
    <div>
      <div className={MyPostsCSS.face}>
      <img src="https://avatars.mds.yandex.net/i?id=7ae77859217baa8cf8d638126bfa81b1-5875527-images-thumbs&n=13" alt="" />
      </div>
      <FirstPost message='Hey bro!' likecount='0'/>
      <FirstPost message='It is my first post! How are you?' likecount='32'/>
    </div>
)
  
}
export default MyPosts;