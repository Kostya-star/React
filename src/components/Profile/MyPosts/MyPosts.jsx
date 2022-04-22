import React from 'react';
import MyPostsCSS from './MyPosts.module.css'
import Post from './MyPost/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map( (p) => <Post message={p.message} likecount={p.likeCount}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={MyPostsCSS.face}>
      <img src="https://avatars.mds.yandex.net/i?id=7ae77859217baa8cf8d638126bfa81b1-5875527-images-thumbs&n=13" alt="" />
      
      <div>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
      <button onClick={addPost}>Add post</button>
      </div>
      
      </div>
      {postsElements}
    </div>
)
  
}
export default MyPosts;