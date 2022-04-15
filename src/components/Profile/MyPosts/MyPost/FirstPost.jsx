import FirstPostCSS from './FirstPost.module.css'

const FirstPost = (props) => {
  return (
    <div className={FirstPostCSS.firstpost}>
        <img src="https://avatars.mds.yandex.net/i?id=3d1ca053b842be9a1d73109f156b68c0-5204637-images-thumbs&n=13" alt="" />
        {props.message}
      <span>like {props.likecount}</span>
    </div>
)
  
}
export default FirstPost;