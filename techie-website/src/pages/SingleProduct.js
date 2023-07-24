import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactImageZoom from "react-image-zoom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { getProduct, getWishlist, toggleWishlist } from "../services/backend";
import { useCart } from "../context/Cart";

const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const [productInCart, setProductInCart] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const toggleFavorite = async () => {
    const currentFavoriteState = isFavorite;
    setIsFavorite(!currentFavoriteState);
    const response = await toggleWishlist(id);
    if (response instanceof Error) {
      setIsFavorite(currentFavoriteState);
      alert("unable to add/remove favorite, try again");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setLoading(false);
      if (product instanceof Error) return setError(product.message);
      setProduct(product);
      setCurrentImage(product.images[0].public_id);
    };
    const fetchWishlist = async () => {
      const wishlist = await getWishlist();
      if (wishlist instanceof Error) return alert(wishlist.message);
      if (wishlist.find((prod) => prod._id === id)) {
        setIsFavorite(true);
      }
    };
    if (cart.find((prod) => prod._id === id)) {
      setProductInCart(true);
    }
    fetchProduct();
    fetchWishlist();
  }, [cart, id]);

  const handleProductAddToCart = () => {
    product.count = quantity;
    if (productInCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }

    setProductInCart(!productInCart);
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center text-danger">
        {error}
      </div>
    );
  }
  return (
    <>
      <Meta title={product.title} />
      <BreadCrumb title={product.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom
                  width={600}
                  height={600}
                  zoomWidth={600}
                  img={
                    product.images.find(
                      (image) => image.public_id === currentImage
                    ).url
                  }
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {product.images
                .filter((image) => image.public_id !== currentImage)
                .map((image) => (
                  <div
                    key={image.public_id}
                    onClick={() => setCurrentImage(image.public_id)}
                  >
                    <img src={image.url} className="img-fluid" alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{product.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {product.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={
                      product.ratings.length <= 0
                        ? 0
                        : product.totalrating / product.ratings.length
                    }
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">
                    ( {product.totalrating} Reviews )
                  </p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">{product.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{product.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{product.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Available :</h3>
                  <p className="product-data">{product.quantity}</p>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      type="button"
                      onClick={handleProductAddToCart}
                    >
                      {productInCart
                        ? "Product added Successfully"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
                      {isFavorite ? (
                        <>
                          <AiFillHeart fill="red" className="fs-5 me-2" />{" "}
                          Remove from Wishlist
                        </>
                      ) : (
                        <>
                          <AiOutlineHeart className="fs-5 me-2" /> Add to
                          Wishlist
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <div
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
