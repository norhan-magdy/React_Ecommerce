import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { reduceProduct } from "../rtk/slices/cart-slice";

function NegativeBtn(props) {
  const dispatch = useDispatch();
  return (
    <>
      {props.product.quantity === 1 ? (
        <Button
          onClick={() => {
            dispatch(reduceProduct(props.product));
          }}
          disabled
        >
          -
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(reduceProduct(props.product));
          }}
        >
          -
        </Button>
      )}
    </>
  );
}
export default NegativeBtn;
