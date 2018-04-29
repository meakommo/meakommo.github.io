import React from 'react'

class NewestPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subTitle: '',
      blogSample: '',
      url: ''
    }
  }

  render () {
    return (
      <div className="main-section offset-by-two five columns">
        <div>
          <h2>{this.state.title}</h2>
        </div>
        <ul>
          <li><strong>{this.state.subTitle}</strong></li>
          <p>{this.state.blogSample}</p>
        </ul>
        <ul>
          <li>
            <Link to={this.state.url}>Read More</Link>
          </li>
        </ul>
      </div>
    )
  }
}
