import React, { SyntheticEvent, useState } from "react";
import Gauge from "components/Gauge";
import Label from "components/Label";
import Input from "components/Input";
import './Dashboard.css';
import Button from "components/Button";
class DashboardState {
    gauges: Array<[string, number, string]>;
    constructor() {
        this.gauges = new Array<[string, number, string]>();
    } 
}

class NewGauge {
    caption?: string;
    prefix?: string;
}

export const Dashboard: React.FC = () => {
    let dashboardState = new DashboardState();
    dashboardState.gauges.push(["CPU Usage", 10, "%"]);

    const [dashboard, setDashboard] = useState<DashboardState>(dashboardState);
    const [newGauge, setNewGauge] = useState<NewGauge>();
    
    const addNewGauge = () => {
        let dbCopy = {...dashboard};
        dbCopy.gauges.push([newGauge?.caption!, 0, newGauge?.prefix!]);
        setDashboard(dbCopy);
    };
    const gauges = dashboard?.gauges.map((g) =>
        <Gauge label={g[0]} value={g[1]} prefix={g[2]} />
    );
    return (
        <div className="dashboard-container">
            <h2 className="caption">Dashboard</h2>
            <div>
                <Label name="caption" text="Caption" />
                <Input type="text" onChange={(e: SyntheticEvent) => setNewGauge({...newGauge, caption: (e.target as HTMLInputElement).value})} />
                <Label name="prefix" text="Prefix" />
                <Input type="text" onChange={(e: SyntheticEvent) => setNewGauge({...newGauge, prefix: (e.target as HTMLInputElement).value})} />
                <Button onClick={addNewGauge} text="Add gauge" />
            </div>
            <div className="dashboard">
                {gauges}
            </div>
        </div>
    )
}

export default Dashboard;