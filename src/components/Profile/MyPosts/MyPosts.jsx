import MyPostsCSS from './MyPosts.module.css'
import Post from './MyPost/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map( (p) => <Post message={p.message} likecount={p.likeCount}/> );

  return (
    <div>
      <div className={MyPostsCSS.face}>
      <img src="https://avatars.mds.yandex.net/i?id=7ae77859217baa8cf8d638126bfa81b1-5875527-images-thumbs&n=13" alt="" />
      </div>
      {postsElements}
    </div>
)
  
}
export default MyPosts;