import React, { SyntheticEvent, useEffect, useState } from "react";
import Label from "../components/Label";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Select from "components/Select";
import Gauge from "components/Gauge";
import './Components.css';

export const Components: React.FC = () => {
    const notImplemented = function (): void { console.warn("Not implemented") };
    const printValue = function (e: SyntheticEvent): void {
        const target = e.target as HTMLInputElement;
        console.log(target.value);
    };

    const [gaugeNumber, setGaugeNumber] = useState<number>(0);
    const rangeOnChange = function (e: SyntheticEvent): void {
        const target = e.target as HTMLInputElement
        setGaugeNumber(parseInt(target.value));
    };

    return (
        <div className="components-container">
            <h2 className="caption">Components</h2>
            <p>All components will be presented here</p>
            <div className="components">
                <div className="label-input">
                    <Label name="text" text="Text" />
                    <Input type="text" name="text" onChange={printValue} />
                </div>
                <div className="label-input">
                    <Label name="number" text="Number" />
                    <Input type="number" name="number" onChange={printValue} />
                </div>
                <div className="label-input">
                    <Label name="datetime-local" text="Datetime local" />
                    <Input type="datetime-local" name="datetime" onChange={printValue} />
                </div> 
                <div className="label-input">
                    <Label name="select" text="Select" />
                    <Select name="select" options={[["1", "Alpha"], ["2", "Beta"], ["3", "Gamma"]]} onChange={printValue} />
                </div>

                <div className="label-input">
                    <Label name="range" text="Range" />
                    <Input type="range" name="range" value={gaugeNumber.toString()} onChange={rangeOnChange} />
                </div>   
                    <Gauge label="Gauge" value={gaugeNumber} prefix="%" />

                <Button text="I am button" onClick={notImplemented} />
                <Loader />
            </div>
        </div>
    )
}

export default Components;