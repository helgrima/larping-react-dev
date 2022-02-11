import React from "react";
import './Gauge.css';

type Props = {
    label: string;
    value: number;
    prefix?: string;
};

export const Gauge: React.FC<Props> = props => {
    return (
        <div className="gauge">
            <span className="label">{props.label}</span>
            <span className="value">{`${props.value}${props.prefix ?? ""}`}</span>
        </div>  
    );
}

export default Gauge;