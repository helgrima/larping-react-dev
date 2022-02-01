import { SyntheticEvent } from "react";
import Label from "../components/Label"
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select"
import Loader from "../components/Loader"
import './Components.css';

export const Components: React.FC = () => {
    const notImplemented = function (): void { console.warn("Not implemented") };
    const printValue = function (e: SyntheticEvent): void {
        const target = e.target as HTMLInputElement;
        console.log(target.value);
    };
    return (
        <div className="components">
            <h2 className="caption">Components</h2>
            <p>All components will be presented here</p>
            <div className="label-input">
                <Label name="text" text="Plain text" />
                <Input type="text" name="text" onChange={printValue} />
            </div>

            <div className="label-input">
                <Label name="number" text="Number" />
                <Input type="number" name="number" onChange={printValue} />
            </div>

            <div className="label-input">
                <Label name="datetime" text="Datetime" />
                <Input type="datetime-local" name="datetime" onChange={printValue} />
            </div>

            <div className="label-input">
                <Label name="range" text="Range" />
                <Input type="range" name="range" onChange={printValue} />
            </div>

            <div className="label-input">
                <Label name="select" text="Select" />
                <Select name="select" options={[["1", "Alpha"], ["2", "Beta"], ["3", "Gamma"]]} onChange={printValue} />
            </div>
            <Loader />
            <Button text="Button" onClick={notImplemented} />
        </div>
    )
}

export default Components;