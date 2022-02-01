import React from "react";
import './Label.css';

type Props = {
    name: string
    text: string
};

export const Label: React.FC<Props> = props => {
    return (
        <label className="label" htmlFor={props.name}>{props.text}</label>
    );
}

export default Label;