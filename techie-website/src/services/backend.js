import http from "./http";

export const login = (credentials) => http.post("/user/login", credentials);

export const signup = (user) => http.post("/user/register", user);

export const logout = () => http.post("/user/logout");

export const getProducts = () => http.get("/product");

export const getProduct = (_id) => http.get(`/product/${_id}`);

export const toggleWishlist = (prodId) =>
  http.put("/product/wishlist", { prodId });

export const getWishlist = () => http.get("/user/wishlist");
