// declare an props as a parameter
const Bottle = ({ bottle }) => {
    // console.log(bottle);
    // destructuring from bottle
    const { name, img, price, } = bottle;
    return (
        <div>
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}</p>
        </div>
    );
};

export default Bottle;