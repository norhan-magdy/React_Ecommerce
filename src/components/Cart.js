import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import Swal from "sweetalert2";
import { clearCart, removeFromCart } from "../rtk/slices/cart-slice";
import PlusBtns from "./PlusBtns";
import NegativeBtn from "./NegativeBtn";
import { useEffect, useState } from "react";

function Cart() {
  const [cartLength, setCartLength] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const deleteProduct = (product) => {
    Swal.fire({
      title: "Remove from cart",
      text: "Do you really want to remove this item from cart?",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "##6c757d",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(product));
      }
    });
  };
  const clearProducts = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to remove all products from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "##6c757d",
      confirmButtonText: "CLEAR!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire("Your cart is empty");
      }
    });
  };

  useEffect(() => {
    const cartLength = JSON.parse(localStorage.getItem("cartLength"));
    if (cartLength) {
      setCartLength(cartLength);
    } else {
      setCartLength(0);
    }
  }, [cart]);

  return (
    <Container>
      <br />
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>Shopping Cart </h2>
            </th>
            <th className="text-center">price</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <Image
                  className="my-1"
                  src={product.image}
                  style={{ width: "125px", height: "125px" }}
                  alt={product.title}
                />
              </td>
              <td>
                <p>{product.title}</p>
                <NegativeBtn product={product} />
                <span className="mx-3">{product.quantity}</span>
                <PlusBtns product={product} />
              </td>
              <td className="fs-5 text-center">${product.price}</td>
              <td className="text-center">
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    deleteProduct(product);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>{`Subtotal (${cartLength} items):`}</td>
            <td className="fs-5 text-center">{`$${totalPrice.toFixed(2)}`}</td>
            <td className="text-center">
              <Button
                variant="outline-warning"
                onClick={() => {
                  clearProducts();
                }}
              >
                Clear all
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
