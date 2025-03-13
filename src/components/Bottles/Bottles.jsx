import { useEffect } from "react";
import { useState } from "react";

const Bottles = () => {
    // step-1: to hold data declared an state
    const [bottles, setBottles] = useState([]);

    // step-2: to load data declare an useEffect
    useEffect(() => {
        // for local data
        fetch('bottles.json')
            .then(res => res.json)
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h2>Water Bottles Here </h2>
        </div>
    );
};

export default Bottles;