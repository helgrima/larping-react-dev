import React, { useEffect, useState } from "react";
import FetchDogButton from "./FetchDogButton";
import DogVisual from "./DogVisual";

import Loader from "react-loader-spinner";
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
                fetch(payload.url).then(async (response: Response) => {
                    response.blob().then(async (blob) => {
                        setFiletype(FiletypeDetector.GetFiletype(payload.url));
                        setDogSource(URL.createObjectURL(blob));
                        setLoading(false);
                    });
                });
            });
        });

    };
    return (
        <div className="DogShow-container">
            <FetchDogButton onClick={fetchRandomDog} />
            {loading ?
                <Loader type="Rings"
                    color="#34113F"
                    height={80}
                    width={80}
                    timeout={3000} />
                :
                <DogVisual filetype={filetype} source={dogSource} />
            }
        </div>
    )

}

export default DogShowContainer;