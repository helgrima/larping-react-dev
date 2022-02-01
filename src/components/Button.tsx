import React from "react";
import './Button.css';

type Props = {
    text: string,
    onClick: () => void;
};

export const Button: React.FC<Props> = props => {
    return (
        <button onClick={props.onClick} className="button">
            {props.text}
        </button>
    );
}

export default Button;