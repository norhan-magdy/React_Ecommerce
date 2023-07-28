import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";

function PlusBtns(props) {
  const dispatch = useDispatch();
  return (
    <>
      {props.product.quantity >= 20 ? (
        <Button
          onClick={() => {
            dispatch(addToCart(props.product));
          }}
          disabled
        >
          +
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(addToCart(props.product));
          }}
        >
          +
        </Button>
      )}
    </>
  );
}
export default PlusBtns;
