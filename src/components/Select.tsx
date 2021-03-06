import React from "react";
import './Select.css';

type Props = {
    name: string
    options: Array<[string, string]>
    onChange: (e: any) => void;
};

export const Select: React.FC<Props> = props => {
    const optionElements = props.options.map((option) =>
        <option key={option[0]} value={option[0]}>{option[1]}</option>
    );
    return (
        <select className="select" name="" onChange={props.onChange}>
            {optionElements}
        </select>
    );
}

export default Select;