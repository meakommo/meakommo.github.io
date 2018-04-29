import React from 'react'

class NewestPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      blogSample: '',
      url: ''
    }
  }

  render () {
    return (
      <div className="main-section offset-by-two five columns">
        <div>
          <h2>Leadership</h2>
        </div>
        <ul>
          <li><strong>What is your experience of compassionate (or not) leadership?</strong></li>
          <p>Compassion is an often forgotten part of social interactions, this is particularly true when it comes to leadership.
					as a leader if you are able to sympathise with those working for you then you can better understand what motivates them
           and in turn motivate them better.
          </p>
        </ul>
        <ul>
          <li>
            <a className="button" href="blog/c9-leadership.html">Read More</a>
          </li>
        </ul>
      </div>
    )
  }
}
