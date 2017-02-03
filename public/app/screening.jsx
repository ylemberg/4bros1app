import React from 'react'

class Screening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.']
    }

    this.addMessage = this.addMessage.bind(this)
  }

  addMessage() {
    socket.emit('sendMsgToServer', document.getElementById('chat-input').value)
    document.getElementById('chat-input').value = ''
  }

  handleNewMsg() {
    socket.on('sendMsgBackToClient', msg => {
      this.setState({messages: this.state.messages.concat(msg)})
    });
  }

  componentDidMount() {
    this.socket = io('/')
    this.handleNewMsg();
  }

  render() {
    return (
      <div className="container chat-box-container">
        <div className="row chat-row">
          <iframe className="screening-vid" width="682" height="600" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
          <div className="col-md-5 chat-box">
            <div className="panel panel-primary chat-box-panel">
              <div className="panel-heading">
                <span className="glyphicon glyphicon-comment"></span>
                Talk about the movie
              </div>
              <div className="panel-body chat-box-panel-body">
                <ul className="chat">
                  {this.state.messages.map(message => (
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff&text=U" className="img-circle"/>
                      </span>
                      <div className="chat-body clearfix">
                        <div className="header">
                          <strong className="primary-font">Jack Sparrow</strong>
                          <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>
                            12 mins ago
                          </small>
                        </div>
                        <p>
                          {message}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel-footer">
                <div className="input-group">
                  <input
                    id="chat-input"
                    type="text"
                    className="form-control input-sm"
                    placeholder="Type your message here..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-warning btn-sm" id="btn-chat" onClick={this.addMessage}>
                      Send</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Screening
