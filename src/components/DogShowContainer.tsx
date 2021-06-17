import React, { useEffect, useState } from "react";
import FetchDogButton from "./FetchDogButton";
import DogVisual from "./DogVisual";
import FiletypeDetector, { Filetype } from "utilities/FiletypeDetector";
import './DogShowContainer.css';


export const DogShowContainer: React.FC = () => {
    const [filetype, setFiletype] = useState<Filetype>(Filetype.Unknown);
    const [dogSource, setDogSource] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchRandomDog();
    }, []);
    const fetchRandomDog = () => {
        setLoading(true);
        fetch("https://random.dog/woof.json").then(async (response: Response) => {
            response.json().then((payload: any) => {
                setDogSource(payload.url);
                setFiletype(FiletypeDetector.GetFiletype(payload.url));
                setDogSource(payload.url);
                setLoading(false);
            });

        });

    };
    return (
        <div className="DogShow-container">
            <FetchDogButton onClick={fetchRandomDog} />
            {loading ?
                <div>loading</div>
                :
                <DogVisual filetype={filetype} source={dogSource} />
            }
        </div>
    )

}

export default DogShowContainer;