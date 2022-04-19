import PostCSS from './Post.module.css'

const Post = (props) => {
  return (
    <div className={PostCSS.post}>
        <img src="https://avatars.mds.yandex.net/i?id=3d1ca053b842be9a1d73109f156b68c0-5204637-images-thumbs&n=13" alt="" />
        {props.message}
      <span>like {props.likecount}</span>
    </div>
)
  
}
export default Post;