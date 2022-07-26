// Post Form
import { useState, useContext } from 'react';
import useAxios from '../utils/useAxios';
import AuthContext from '../context/AuthContext';
import Avatar from './Avatar';
import '../css/PostForm.css';

const PostForm = () => {
  const { user } = useContext(AuthContext);  
  const api = useAxios();  
  const [body, setBody] = useState('');  

  const handleSubmit = async (e) => {
    if (user === null) {
      alert('Register and log in first!');
    }
    e.preventDefault();
    const name = user.username;

    // async await post to api/add/ endpoint, window reload to show new post
    (async () => {
      try {
        const response = await api.post(
          '/add/',
          {name, body},
        );
        console.log(response);
        window.location.reload(false);
      } catch (error) {
        console.log(error.message);
        console.log(body);
      } 
    })();
  };
  
  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <div className='post-form-container'>
        <Avatar />
        <input
          type='textarea'
          id='body'          
          className='post-form-textarea'          
          onChange={e => setBody(e.target.value)}
          placeholder='Post a message on the wall...'
        />
      </div>
      <button className='post-form-submit'>Post</button>
    </form>
  );  
}

export default PostForm;
