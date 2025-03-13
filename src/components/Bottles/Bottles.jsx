import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import '../Bottle/bottle.css';
import './bottles.css';
import { addToLS, getStoredCart } from "../../utilities/localstorage";

const Bottles = () => {
    // step-1: to hold data declared an state
    const [bottles, setBottles] = useState([]);
    // declare an new state
    const [cart, setCart] = useState([]);


    // step-2: to load data declare an useEffect
    useEffect(() => {
        // for local data
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        // dependency injection
        console.log('called the useEffect'); //bottles.length);
        const storedCart = getStoredCart();
        console.log(storedCart);

    }, [])

    // adding eventHandler here
    const handleAddToCart = bottle => {
        // console.log(bottle);
        // create an new copy to push something new
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);

    }

    return (
        <div>
            {/*dynamic for showing data item */}
            <h2>Water Bottles Available Here : {bottles.length} </h2>
            <h4>Cart : {cart.length}</h4>
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