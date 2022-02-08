import React from "react";
import './Gauge.css';

type Props = {
    value: number;
    prefix?: string;
};

export const Gauge: React.FC<Props> = props => {
    return (
        <span className="gauge">{`${props.value}${props.prefix ?? ""}`}</span>
    );
}

export default Gauge;