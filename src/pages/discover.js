import React, { Component } from 'react';
import axios from "axios";
import Spinner from "../components/spinner"

export default class Discover extends Component {

    state = {
        image: null,
        loading: false
    }

    componentDidMount() {
        this.fetchRandomDog()
    }

    fetchRandomDog = () => {
        this.setState({ loading: true })
        axios("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                this.setState({ 
                    image: res.data.message,
                    loading: false })
        })
            .catch(err => console.log(err))
    }

    renderImage = () => {
        // ternary operator
        return this.state.image && !this.state.loading ? <img src={this.state.image} /> : null
    }

    render() {
        return (
            <div className="text-center">
                <h1>Discover a New Pup</h1>
                {/* short-circuiting */}
                {this.state.loading && <Spinner />}
                { this.renderImage() }
                <br />
                <button onClick={this.fetchRandomDog}>Find Me Another Dog</button>
            </div>
        )
    }
}