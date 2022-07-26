// Timeline of posts
import React from 'react';
import axios from 'axios';
import Post from './Post.jsx'
import '../css/Timeline.css'

export default class Timeline extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
      <ul className='timeline'>       
        {this.state.posts
          .map((post) => (
            <li key={post.id} className='timeline-item'>
              <Post name={post.name} createdAt={post.created_at}>
                {post.body}
              </Post>
            </li>
        ))}
      </ul>
    )
  }
}
