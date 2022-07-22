import axios from 'axios'
// import { useState } from 'react'
import Avatar from './Avatar'
import '../css/PostForm.css'
import React from 'react'

export default class PostForm extends React.Component {
  state = {
    id: '',
    name: '',
    body: '',
    created_at: ''
  }
  
  handleChange = event => {
    this.setState({ id: event.target.value, name: event.target.value, body: event.target.value, created_at: Date(Date.now()) });
  }

  handleSubmit = event => {
    event.preventDefault();

    const post = {
      id: this.state.id,
      name: this.state.name,
      body: this.state.body,
      created_at: this.state.created_at
    };

    axios.post(`http://127.0.0.1:8000/api/add/`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <div className="post-form-container">
          <Avatar />
          <textarea
            onChange={this.handleChange}
            className="post-form-textarea"
            placeholder="Post a message on the wall..."
          />
        </div>
        <button className="post-form-submit">Post</button>
      </form>
    )
  }
}
