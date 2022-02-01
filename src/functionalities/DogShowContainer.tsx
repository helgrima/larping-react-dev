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