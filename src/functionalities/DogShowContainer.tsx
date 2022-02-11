import React, { useEffect, useState } from "react";
import Button from "components/Button";
import DogVisual from "components/DogVisual";
import Loader from "components/Loader";
import FiletypeDetector, { Filetype } from "utilities/FiletypeDetector";
import './DogShowContainer.css';

export const DogShowContainer: React.FC = () => {
    const [filetype, setFiletype] = useState<Filetype>(Filetype.Unknown);
    const [dogSource, setDogSource] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchRandomDog();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const fetchRandomDog = async () => {
        setLoading(true);
        URL.revokeObjectURL(dogSource);
        const urlRequestResponse: Response = await fetch("https://random.dog/woof.json");
        const urlRequestResponsePayload: any = await urlRequestResponse.json();
        const mediaRequestResponse: Response = await fetch(urlRequestResponsePayload.url);
        const mediaRequestResponsePayload: Blob = await mediaRequestResponse.blob();
        setFiletype(FiletypeDetector.GetFiletype(urlRequestResponsePayload.url));
        setDogSource(URL.createObjectURL(mediaRequestResponsePayload));
        setLoading(false);
    };
    return (
        <div className="DogShow-container">
            <h2 className="caption">Dogs</h2>
            {loading ?
                <Loader />
                :
                <>
                    <DogVisual filetype={filetype} source={dogSource} />
                    <Button text="Fetch dog" onClick={fetchRandomDog} />
                </>

            }
        </div>
    )
}

export default DogShowContainer;