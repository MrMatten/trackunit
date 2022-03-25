import React, {useState} from 'react';
import './App.css';

function App() {
    const [gifImagesData, setGifImagesData] = useState([{
        url:"https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif",
        width: "400px",
        height: "400px"
    }])

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

    const getImages = async (event: any) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const userInput = formData.get("user-input")

        const gifs = await searchGiphy(userInput)
        const data = gifs.data.map((gif: any) => gif.images.downsized_medium)
        setGifImagesData(data)
    }

    return (
        <div className="App">
            <div className="query-container">
                <form onSubmit={getImages}>
                    <input type="text" name="user-input" placeholder="search for the greates cat giph ever" />
                    <p id="image-text"></p>
                    <select name="text-placement">
                        <option value="top-image-placement">Place text at the top of the image</option>
                        <option value="bottom-image-placement">Place text at the bottom of the image</option>
                        <option value="below-placement">Place text below the image</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
            <div className="display-container">
                { gifImagesData.map((imageData: any) => {
                    return <img key="" alt="" src={imageData.url} width={imageData.width} height={imageData.height} />
                }) ?? <p></p>}
            </div>
        </div>
    );
}

export default App;
