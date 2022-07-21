// import PropTypes from 'prop-types'
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
      <ul className="timeline">       
        {this.state.posts
          // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((post) => (
            <li key={post.id} className="timeline-item">
              <Post name={post.name} createdAt={post.created_at}>
                {post.body}
              </Post>
            </li>
        ))}
      </ul>
    )
  }
}


// function Timeline({ posts }) {
//   return (
//     <ul className="timeline">
//       {posts
//         .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//         .map(({ id, name, body, created_at }) => (
//           <li key={id} className="timeline-item">
//             <Post name={name} createdAt={created_at}>
//               {body}
//             </Post>
//           </li>
//       ))}
//     </ul>
//   )
// }

// Timeline.propTypes = {
//   posts: PropTypes.array,
// }

// export default Timeline