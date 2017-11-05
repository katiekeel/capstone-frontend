import {ActionCable} from 'react-actioncable-provider'
require('create-react-class');

export default class ChatRoom extends Component {
    state = {
      messages: []
    };

    onReceived (message) {
        this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        })
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.perform('sendMessage', {message})
    }

    render () {
        return (
            <div>
                <ActionCable ref='roomChannel' channel={{channel: 'RoomChannel', room: '3'}} onReceived={this.onReceived} />
                <ul>
                    {this.state.messages.map((message) =>
                        <li key={message.id}>{message.body}</li>
                    )}
                </ul>
                <input ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}
