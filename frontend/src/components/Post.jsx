import PropTypes from 'prop-types'
import Avatar from './Avatar'
import '../styles/Post.css'

function Post(props){
    const { name, children, createdAt } = props

    return (
        <div className="post">
            <Avatar name={name} />
            <div className="post-header">
                <span className="post-user">{name}</span>
                <span className="post-created-at">{createdAt}</span>
            </div>
            <div className="post-content">{children}</div>
        </div>
    )
}

Post.propTypes = {
    name: PropTypes.string,
    createdAt: PropTypes.string,
}

export default Post