import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-between">


      <div className="max-w-[750px] ml-16">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>
          <br></br><br></br><br></br><br></br>

      <div className="mr-16 flex flex-col gap-y-[350px]">

          <div>
            <div className="font-bold text-3xl text-green-600">Your Cart</div> <br></br>
            <div className="font-bold text-3xl text-green-600">Summary</div>

          </div>

          <div>
              <p>
                <span className="font-bold">Total Items: {cart.length}</span>
              </p>
              <p className="font-bold">Total Amount: ${totalAmount}</p> <br></br>
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[15px] p-1 px-3 uppercase 
              hover:bg-green-600
              hover:text-white transition duration-300 ease-in">
                CheckOut Now
              </button>
          </div>

      </div>


    </div>) : 
    (<div className="flex justify-center mt-[250px] items-center flex-col">
      <h1 className="text-green-600 text-lg font-semibold">Cart Empty</h1> <br></br>
      <Link to={"/"}>
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[20px] p-1 px-3 uppercase 
          hover:bg-green-600
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
