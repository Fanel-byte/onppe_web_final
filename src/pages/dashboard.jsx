import React from "react";
import Signal from "../components/Signalement";

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="grid grid-cols-12 grid-rows-12">

                <div className="col-span-12">
                    {/*le code de la partie signalement ici */}
                    <Signal/>
                </div>

            </div>

        </div>

    );
}
