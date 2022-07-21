import PropTypes from 'prop-types'
import Post from './Post.jsx'
import './../styles/Timeline.css'

function Timeline({ posts }) {
  return (
    <ul className="timeline">
      {posts.map(({ id, name, body, created_at }) => (
        <li key={id} className="timeline-item">
          <Post name={name} createdAt={created_at}>
            {body}
          </Post>
        </li>
      ))}
    </ul>
  )
}

Timeline.propTypes = {
  posts: PropTypes.array,
}

export default Timeline