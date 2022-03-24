import React, {useEffect} from 'react';
import './App.css';

function App() {
    const searchGiphy = async (searchTerm: string) => {
        const params = new URLSearchParams({
            "api_key": "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq",
            "q": searchTerm,
            "rating": "q",
            "limit": "3"
        })

        const response = await fetch(`https://api.giphy.com/v1/stickers/search?` + params)
        return response.json()
    }

    const getImages = () => {
        const promise = searchGiphy("cat")
        promise.then(response => {
            console.log(response)
            if(response.meta.status > 299) {
                throw new Error("oh noo")
            }
            for(const imageData in response["data"]) {
                console.log(imageData)
                return <img src=""/>
                // return <img src={imageData.images.downsized_medium.url} alt="" />
            }
        })
        .catch(err => console.log(`log error here ${err}`))
        return <img src=""/>
    }

    return (
        <div className="App">
            <div className="query-container">
                <input type="text" placeholder="search for the greates cat giph ever" />
                <p id="image-text"></p>
                <select name="text-placement">
                    <option value="top-image-placement">Place text at the top of the image</option>
                    <option value="bottom-image-placement">Place text at the bottom of the image</option>
                    <option value="below-placement">Place text below the image</option>
                </select>
            </div>
            <div className="display-container">
                {getImages()}
            </div>
        </div>
    );
}

export default App;
