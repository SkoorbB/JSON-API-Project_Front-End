import React, {Component} from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Titles extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount () {
       if (!this.state.data) {
           fetch('http://localhost:5000/')
           .then(res => res.json())
           .then(res => {
               this.setState({ data: res})
               console.log(res)
           })
       }
    }
    render() {
        if (this.state.data) {
            let list = this.state.data.map(item => {
                return (
                    <div className="eachReturn" key={item.title}>
                        <Link className="reviewLink" to={"/review/" + item.variety}>
                            <p>{item.title}</p>
                            <p>{item.taster_twitter_handle}</p>
                        </Link>
                    </div>
                );
            });
            return <div className="container">{list}</div>;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
    }
}


export default Titles;