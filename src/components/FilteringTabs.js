import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../rtk/slices/categories-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import Products from "./Products";

function FiltaringTabs() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const getAllProuducts = () => {
    dispatch(fetchProducts(""));
  };
  const getProductsInThisCategory = (category) => {
    dispatch(fetchProducts(category));
  };

  useEffect(() => {
    dispatch(fetchCategories());
    getAllProuducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-center pb-4">
          <Button
            variant="outline-secondary"
            className="mx-3 my-2 py-2 px-5"
            onClick={() => {
              getAllProuducts();
            }}
          >
            All
          </Button>
          {categories.map((category, index) => {
            return (
              <div className="d-inline-block" key={index}>
                <Button
                  variant="outline-secondary"
                  className="mx-3 my-2 py-2 px-5"
                  onClick={() => {
                    getProductsInThisCategory(`/category/${category}`);
                  }}
                >
                  {category}
                </Button>
              </div>
            );
          })}
        </div>
        <Products />
      </div>
    </>
  );
}
export default FiltaringTabs;
