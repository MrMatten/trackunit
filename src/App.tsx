import React, {useEffect} from 'react';
import './App.css';

function App() {
    useEffect(() => {
        // fetch("https://

    })

    return (
        <div className="App">
            <div className="query-container">
                <input type="text" placeholder="search for the greates cat giph ever" />
                <select name="text-placement">
                    <option value="top-image-placement">Place text at the top of the image</option>
                    <option value="bottom-image-placement">Place text at the bottom of the image</option>
                    <option value="below-placement">Place text below the image</option>
                </select>
            </div>
            <div className="display-container">
                <img alt="" src=""/>
                <p id="image-text"></p>
                <img alt="" src=""/>
                <p id="image-text"></p>
                <img alt="" src=""/>
                <p id="image-text"></p>
            </div>
        </div>
    );
}

export default App;
