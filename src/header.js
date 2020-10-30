import React from "react"
import './App.css'

function Header(){
    return (
        <header>
            <div class="overlay">
                <h1>Meme Generator</h1>
                <div className="directions">
                    <h3></h3>
                    <h3>Enter the text to display at the top of the image</h3>
                    <h3>Enter the text to display at the bottom of the image</h3>
                    <h3>Click on the Generate button</h3>
                    <h3>Now you have your own meme</h3>
                </div>
                <br />
		    </div>
        </header>
    )
}

export default Header