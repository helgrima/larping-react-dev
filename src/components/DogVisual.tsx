import React from "react";
import { Filetype } from "utilities/FiletypeDetector";
import './DogVisual.css';

type Props = {
    filetype: Filetype,
    source: string
};

export const DogVisual: React.FC<Props> = props => {
    if (props.filetype === Filetype.Image) {
        return (
            <img className="DogVisual-img" src={props.source} alt="dog" />
        );
    }
    else if (props.filetype === Filetype.Video) {
        return (
            <video className="DogVisual-video" autoPlay loop>
                <source src={props.source} />
            </video>
        );
    }
    return <div>Guru meditation</div>
}

export default DogVisual;