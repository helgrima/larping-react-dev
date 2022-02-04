import { SyntheticEvent } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader"
import './Components.css';

export const Components: React.FC = () => {
    const notImplemented = function (): void { console.warn("Not implemented") };
    const printValue = function (e: SyntheticEvent): void {
        const target = e.target as HTMLInputElement;
        console.log(target.value);
    };
    return (
        <div className="components-container">
            <h2 className="caption">Components</h2>
            <p>All components will be presented here</p>
            <div className="components">
                <Button text="I am button" onClick={notImplemented} />
                <Input type="text" onChange={printValue} />
                <Input type="time" onChange={printValue} />
                <Input type="datetime-local" onChange={printValue} />
                <Input type="date" onChange={printValue} />
                <Input type="week" onChange={printValue} />
                <Input type="month" onChange={printValue} />
                <Input type="range" onChange={printValue} />
                <Loader />
            </div>
        </div>
    )
}

export default Components;