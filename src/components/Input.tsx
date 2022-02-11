import React from "react";
import './Input.css';

type Props = {
    type: string
    value?: string
    name: string;
    onChange: (e: any) => void;
};

export const Input: React.FC<Props> = props => {
    return (
        <input className="input" name={props.name} value={props.value} type={props.type} onChange={props.onChange} />
    );
}

export default Input;