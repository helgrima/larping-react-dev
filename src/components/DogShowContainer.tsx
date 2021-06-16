import React, { useState } from "react";
import FetchDogButton from "./FetchDogButton";
import './DogShowContainer.css';


export const DogShowContainer: React.FC = () => {
    const [dogImage, setDogImage] = useState<string>("");
    const fetchRandomDog = async () => {
        const fromAPI = await (await fetch("https://random.dog/woof.json")).json();
        setDogImage(fromAPI.url);
    };
    return <div className="DogShow-container">
        <FetchDogButton onClick={fetchRandomDog} />
        <img className="DogShow-container-img" src={dogImage} alt="dog" />

    </div>

}

export default DogShowContainer;