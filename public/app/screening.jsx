import React from 'react'

class Screening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }

    this.addMessage = this.addMessage.bind(this)
    this.handleNewMsg = this.handleNewMsg.bind(this)
  }

  addMessage() {
    let msgObj = {
      text: document.getElementById('chat-input').value,
      user: localStorage.currUser
    }
    socket.emit('sendMsgToServer', msgObj)
    this.setState({messages: this.state.messages.concat(msgObj)})
    document.getElementById('chat-input').value = ''
  }

  handleNewMsg() {
    socket.on('sendMsgBackToClient', msg => {
      let msgObj = {
        text: msg.text,
        user: msg.user
      }
      this.setState({messages: this.state.messages.concat(msgObj)})
    });
  }

  componentDidMount() {
    this.socket = io('/')
    this.handleNewMsg();
    console.log('this.state.messages', this.state.messages)
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
                <span className="chat-box-heading">Talk about the movie</span>
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
                          <strong className="primary-font">{message.user}</strong>
                          <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>
                            12 mins ago
                          </small>
                        </div>
                        <p>
                          {message.text}
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
