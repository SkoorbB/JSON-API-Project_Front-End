import React, {Component} from 'react';
import axios from 'axios';

class Titles extends Component {
    componentDidMount () {
        const ax = axios.create ({
            BaseURL: 'http://localhost:5000/'
        });
        const get = ax.get('/');
        console.log(get)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Titles;