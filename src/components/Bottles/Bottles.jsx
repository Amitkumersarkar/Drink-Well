import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import '../Bottle/bottle.css';
import './bottles.css';

const Bottles = () => {
    // step-1: to hold data declared an state
    const [bottles, setBottles] = useState([]);

    // step-2: to load data declare an useEffect
    useEffect(() => {
        // for local data
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // adding eventHandler here
    const handleAddToCart = bottle => {
        console.log(bottle);
    }

    return (
        <div>
            {/*dynamic for showing data item */}
            <h2>Water Bottles Here : {bottles.length} </h2>

            {/*state data looping  here */}
            {/* send data to the bottle components */}
            <div className="bottle-container">
                {
                    bottles.map(bottle =>
                        <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}> </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;