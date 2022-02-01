import React from "react";
import './Input.css';

type Props = {
    type: string
    name: string
    onChange: (e: any) => void;
};

export const Input: React.FC<Props> = props => {
    return (
        <input className="input" type={props.type} onChange={props.onChange} />
    );
}

export default Input;