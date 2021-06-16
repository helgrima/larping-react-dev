import React from "react";
import './FetchDogButton.css';

type Props = {
    onClick: () => void;
};

export const FetchDogButton: React.FC<Props> = props => {
    return (
        <button onClick={props.onClick} className="FetchDog-button">
            Fetch dog
        </button>
    );
}

export default FetchDogButton;