import React from "react";
import './Loader.css';

type Props = {
};

export const Loader: React.FC<Props> = props => {
    return (
        <div className="loader">
            <div className="loader-item"></div>
            <span className="loader-text">Loading</span>
        </div>
    );
}

export default Loader;