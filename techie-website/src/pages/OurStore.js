import React, { useEffect, useState, useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { getProducts } from "../services/backend";
import { useLocation } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const search = useLocation().search;
  const searchQuery = new URLSearchParams(search).get("search") || "";
  const [selectedCategory, setSeletedCategory] = useState("");
  const allCategories = useRef(new Set());
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setLoading(false);
      if (products instanceof Error) {
        setError(products.message);
        return alert("try again");
      }
      products.forEach((product) =>
        allCategories.current.add(product.category)
      );
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const filter = () =>
    products.filter(
      (product) =>
        new RegExp(selectedCategory, "i").test(product.category) &&
        new RegExp(searchQuery, "i").test(product.title)
    );
  const filteredProducts = filter(products);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {[...allCategories.current].map((category) => (
                    <li
                      key={category}
                      onClick={() =>
                        setSeletedCategory(category === "All" ? "" : category)
                      }
                      className={
                        category === selectedCategory && "text-primary"
                      }
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {error ? (
                  <div className="d-flex justify-content-center align-items-center h-100 text-danger w-100">
                    {error}
                  </div>
                ) : loading ? (
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    Loading...
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                    No products found
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <ProductCard grid={grid} {...product} key={product?._id} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
