import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getWishlist, toggleWishlist } from "../services/backend";

const Wishlist = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlist();
      if (wishlist instanceof Error) return alert(wishlist.message);
      setList(wishlist);
    };
    fetchWishlist();
  }, []);
  console.log("my wishlist", list);
  const removeProductFromWishlist = async (id) => {
    const oldList = [...list];
    setList(list.filter((pro) => pro._id !== id));
    const response = await toggleWishlist(id);
    if (response instanceof Error) {
      alert("failed to add/remove from wishlist");
      setList(oldList);
    }
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {list.length <= 0 ? (
            <div
              className="d-flex justify-content-center align-items-center "
              style={{ height: "50vh" }}
            >
              No Wishlists
            </div>
          ) : (
            list.map((product) => (
              <div className="col-3" key={product._id}>
                <div className="wishlist-card position-relative">
                  <div onClick={() => removeProductFromWishlist(product._id)}>
                    <img
                      src={"images/cross.svg"}
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                  </div>
                  <div className="wishlist-card-image">
                    <img
                      src={product.images[0].url}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{product.title}</h5>
                    <h6 className="price">$ {product.price}</h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
