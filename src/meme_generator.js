import React, { Component } from "react"
import './App.css';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div className="main-body">
                <h1></h1>
                <div className="form-div">
                    <form className = "meme-form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange = {this.handleChange}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange = {this.handleChange}
                        />
                        <input
                            type="number"
                            name="font_size"
                            placeholder="font size"
                            onChange={this.handleChange}
                            value={this.state.font_size}
                        />
                        <button>Generate</button>
                    </form>
                </div>
                    <div className="meme">
                    <h2
                        style={{ fontSize: Number(this.state.font_size) }}
                        className="top"
                    >
                        {this.state.topText}
                    </h2>
                    <img src={this.state.randomImg} alt="" />
                    <h2
                        style={{ fontSize: Number(this.state.font_size) }}
                        className="bottom"
                    >
                        {this.state.bottomText}
                    </h2>
                    </div>
            </div>
        )
    }
}

export default MemeGenerator