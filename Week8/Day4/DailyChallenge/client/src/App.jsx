import {Component, useState} from 'react'
import './App.css'

class App extends Component {
    state = {
        message: '',
        post: '',
        response: ''
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:3000/api/hello');
            const data = await response.json();
            this.setState({message: data.message});
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    }

    handleChange = (event) => {
        this.setState({post: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/world',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({post: this.state.post})
                });
            const data = await res.json();
            this.setState({ response: data.response });
            console.log('POST server res: ', data);
        } catch (error) {
            console.error('Error sending post:', error);
        }
    }

    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <h1>{this.state.message}</h1>
                    </header>
                </div>
                <div>
                    <h2>Post to Server:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.post}
                               onChange={this.handleChange}
                               placeholder="Your opinion is very important to us"
                        />
                        <button type="submit">Send</button>
                        <h3>{this.state.response}</h3>
                    </form>
                </div>
            </>
        )
    }

}

export default App
