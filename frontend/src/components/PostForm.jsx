import Avatar from './Avatar'
import './..styles/PostForm.css'

function PostForm() {
  return (
    <form className="post-form">
      <div className="post-form-container">
        <Avatar />
        <textarea
          className="post-form-textarea"
          placeholder="Post a message on the wall..."
        />
      </div>
      <button className="post-form-submit">Post</button>
    </form>
  )
}

export default PostForm