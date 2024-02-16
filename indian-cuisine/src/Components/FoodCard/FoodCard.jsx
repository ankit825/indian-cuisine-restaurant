import React, { useContext, useState } from "react";
import "./FoodCard.css";
import { CartContext } from "../../Context/Cart";

const FoodCard = ({ data }) => {
  const [blob, setBlob] = useState(data?.images?.data);
  const [quantity, setQuantity] = useState(0);
  //   const [cart, setCart] = useState([]);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  function blobToB64(blob) {
    return btoa(
      new Uint8Array(blob).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  }

  //   const handleClick = (item) => {
  //     // Update cart item quantity if already in cart
  //     if (cart.some((cartItem) => cartItem.id === item.id)) {
  //       setCart((cart) =>
  //         cart.map((cartItem) =>
  //           cartItem.id === item.id
  //             ? {
  //                 ...cartItem,
  //                 amount: cartItem.amount + 1,
  //               }
  //             : cartItem
  //         )
  //       );
  //       return;
  //     }

  //     // Add to cart
  //     setCart((cart) => [
  //       ...cart,
  //       { ...item, amount: 1 }, // <-- initial amount 1
  //     ]);
  //   };

  //   const handleClick = (id, data) => {
  //     if (data.id === id) {
  //       setQuantity((prev) => prev + 1);
  //     }
  //   };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const strtoInt = (str) => {
    str = str?.replaceAll("\\s.*", "");
    return parseInt(str) * 50;
  };

  return (
    <div>
      <hr className="line"></hr>
      <div className="items">
        <h4>{data.Name}</h4>
        <h6>&#8377;{`${strtoInt(data.Price)}`}</h6>
        <p>{data.Description}</p>
        <div>
          {blob?.length > 0 ? (
            <img src={`data:image/png;base64,${blobToB64(blob)}`} />
          ) : (
            <img src="/myimg/default-food-image.jpg" />
          )}
          <div>
            {!cartItems.find((item) => item.id === data.id) ? (
              <div className="imageSection">
                <button
                  onClick={() => {
                    addToCart(data);
                  }}
                >
                  ADD
                </button>
              </div>
            ) : (
              <div
                className="btngroup"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button
                  type="button"
                  className="remove"
                  onClick={() => {
                    const cartItem = cartItems.find(
                      (item) => item.id === data.id
                    );
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(data);
                    } else {
                      removeFromCart(data);
                    }
                  }}
                >
                  -
                </button>
                <span>
                  {cartItems.find((item) => item.id === data.id).quantity}
                </span>
                <button
                  type="button"
                  className="add"
                  onClick={() => {
                    addToCart(data);
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
