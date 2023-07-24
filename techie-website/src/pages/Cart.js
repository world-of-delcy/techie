import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useCart } from "../context/Cart";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, removeFromCart } = useCart();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {cart.length <= 0 && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "50vh" }}
              >
                Cart is empty
              </div>
            )}
            {cart &&
              cart.map((product) => (
                <div
                  className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  key={product._id}
                >
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img
                        src={product.images[0].url}
                        className="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div className="w-75">
                      <p>{product.title}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">$ {product.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        id=""
                        defaultValue={product.count}
                      />
                    </div>
                    <div
                      onClick={() => removeFromCart(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <AiFillDelete className="text-danger " />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">$ {product.count * product.price}</h5>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {cartTotal}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                {cart.length > 0 && (
                  <button onClick={handleCheckout} className="button">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
