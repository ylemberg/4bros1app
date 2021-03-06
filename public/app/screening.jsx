import React from 'react'
import moment from 'moment'

class Screening extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }

    this.addMessage = this.addMessage.bind(this)
    this.handleNewMsg = this.handleNewMsg.bind(this)
    this.handleInProgressTyping = this.handleInProgressTyping.bind(this)
    this.userTyping = this.userTyping.bind(this)
    this.updateTimestamp = this.updateTimestamp.bind(this)
    this.addMessageWithEnter = this.addMessageWithEnter.bind(this)
  }

  addMessage() {
    let msgObj = {
      text: document.getElementById('chat-input').value,
      user: localStorage.currUser,
      timestamp: moment(new Date())
    }
    socket.emit('sendMsgToServer', msgObj)
    socket.emit('sendToServerWhichUserIsTyping', null)
    this.setState({messages: this.state.messages.concat(msgObj)})
    document.getElementById('chat-input').value = ''
  }

  addMessageWithEnter(evt) {
    if(evt.key === 'Enter') {
      this.addMessage()
    }
  }

  handleNewMsg() {
    socket.on('sendMsgBackToClient', msg => {
      let msgObj = {
        text: msg.text,
        user: msg.user,
        timestamp: moment(msg.timestamp)
      }
      this.setState({messages: this.state.messages.concat(msgObj)})
    });
  }

  handleInProgressTyping() {
    socket.on('sendToClientWhichUserIsTyping', user => {
      if(user) {
        document.getElementById('user-typing').innerText = user + ' is typing...'
      } else {
        document.getElementById('user-typing').innerHTML = '&nbsp;'
      }
    })
  }

  userTyping() {
    if(document.getElementById('chat-input').value.length) {
      socket.emit('sendToServerWhichUserIsTyping', localStorage.currUser)
    } else {
      socket.emit('sendToServerWhichUserIsTyping', null)
    }
  }

  updateTimestamp() {
    this.forceUpdate()
  }

  componentDidMount() {
    this.socket = io('/')
    this.handleNewMsg()
    this.handleInProgressTyping()
    setInterval(this.updateTimestamp, 15000)
  }

  render() {
    return (
      <div className="container chat-box-container">
        <div className="row chat-row">
          <iframe width="682" height="600" src="https://www.youtube.com/embed/live_stream?channel=UCOvUtFmjqalJXWRqpmm7zGg" frameborder="0" allowfullscreen></iframe>
          <div className="col-md-5 chat-box">
            <div className="panel panel-primary chat-box-panel">
              <div className="panel-heading">
                <span className="glyphicon glyphicon-comment"></span>
                <span className="chat-box-heading">Talk about Dog Day Afternoon</span>
              </div>
              <div className="panel-body chat-box-panel-body" id="chat-box-body">
                <ul className="chat">
                  {this.state.messages.map(message => (
                    <li className="left clearfix">
                      <div className="chat-body clearfix" id="chat-msg">
                        <div className="header">
                          <strong className="primary-font">{message.user}</strong>
                          <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>
                            {message.timestamp.fromNow()}
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
              <div className="panel-footer" id="chat-box-footer">
                <span id="user-typing">&nbsp;</span>
                <div className="input-group">
                  <input
                    onChange={this.userTyping}
                    onKeyPress={this.addMessageWithEnter}
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
