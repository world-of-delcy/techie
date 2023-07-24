import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="row">
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img
              src="https://5.imimg.com/data5/DO/AG/MY-49489529/external-hard-disk-500x500.jpg"
              className="img-fluid"
              alt="blog"
            />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quaerat accusamus officia
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img
              src="https://pimages.toolbox.com/wp-content/uploads/2023/02/10044719/Picture-of-a-motherboard.jpg"
              className="img-fluid w-100 h-100"
              alt="blog"
            />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quaerat accusamus officia
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img
              src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Intel-Rocker-Lake-2-e1615908186584.jpg"
              className="img-fluid w-100 h-100"
              alt="blog"
            />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quaerat accusamus officia
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img
              src="https://assetsio.reedpopcdn.com/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              className="img-fluid w-100 h-100"
              alt="blog"
            />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quaerat accusamus officia
            </p>
            <Link to="/blog/:id" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
