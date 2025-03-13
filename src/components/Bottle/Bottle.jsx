// declare an props as a parameter
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle);
    // destructuring from bottle
    const { name, img, price, } = bottle;
    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}</p>
            <button onClick={handleAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;