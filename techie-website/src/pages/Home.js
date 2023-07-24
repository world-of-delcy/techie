import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
// import { services } from "../utils/Data";

import ssdImage from "../images/ssd.jpg";
import graphicscard from "../images/graphicscard.jpg";

const services = [];

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="https://pimages.toolbox.com/wp-content/uploads/2023/01/11160057/cpu-and-gpu-chips.jpg"
                className="rounded-3"
                alt="main banner"
                height="418px"
                width="645px"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>Spares For System</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link to="product" className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="https://cdn.windowsreport.com/wp-content/uploads/2020/10/largest-SSD-hard-drives.jpg"
                  className="rounded-3"
                  alt="main banner"
                  height="205px"
                  width="310px"
                />
                <div className="transbox position-absolute small-banner-content">
                  <div>
                    <h4>Best Sake</h4>
                    <h5>SSD drive</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="https://pimages.toolbox.com/wp-content/uploads/2023/02/10044719/Picture-of-a-motherboard.jpg"
                  className="rounded-3"
                  alt="main banner"
                  height="205px"
                  width="310px"
                />
                <div className="transbox position-absolute small-banner-content">
                  <div>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Mother board</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://cdn.hswstatic.com/gif/computer-ram.jpg"
                  className="rounded-3"
                  alt="main banner"
                  height="205px"
                  width="310px"
                />
                <div className="transbox position-absolute small-banner-content">
                  <div>
                    <h4>NEW ARRIVAL</h4>
                    <h5>RAM</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://sm.ign.com/t/ign_nordic/feature/b/best-graph/best-graphics-cards-2020-top-gpus-for-every-budget_csvw.1200.jpg"
                  className="rounded-3"
                  alt="main banner"
                  height="205px"
                  width="310px"
                />
                <div className="transbox position-absolute small-banner-content">
                  <div>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Graphics card</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>MotherBoard</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://www.asus.com/media/global/gallery/h4e5jsilpcxxbfrc_setting_xxx_0_90_end_2000.png"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Processor</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://5.imimg.com/data5/RN/JR/SE/SELLER-100976058/computer-processor-500x500-500x500.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>SSD card</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/514zf7oJF6L._SY450_.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Hard disk</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/51hxjdaLCuL.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>RAM</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/61l4EStxhnL._SL1274_.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cd drive</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/5174-Ly9k6L._AC._SR360,460.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Graphics Card</h6>
                  <p>2 Items</p>
                </div>
                <img
                  src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2017/08/how-to-install-graphics-card.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>All parts</h6>
                  <p>14 Items</p>
                </div>
                <img
                  src="https://img2.exportersindia.com/product_images/bc-full/dir_109/3247216/desktop-computer-spare-parts-1480605.jpg"
                  alt="camera"
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <h3 className="section-heading">Featured Collection</h3>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://live.staticflickr.com/65535/49817096387_179775508d_b.jpg"
                style={{ width: "310px", height: "380px" }}
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>High Performance</h5>
                <h6>Powerfull cpu</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://media.istockphoto.com/id/1315103172/vector/technology-circuit-board-texture-background-abstract-circuit-electronic-motherboard-vector.jpg?s=612x612&w=0&k=20&c=z79bNAVnpsaY0yiNtN2Xm0xnko64ayrCyCl0t37YkIw="
                style={{ width: "310px", height: "380px" }}
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Super Fast</h5>
                <h6 className="text-dark">600 nits of Power.</h6>
                <p className="text-dark">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={ssdImage}
                style={{ width: "310px", height: "380px" }}
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SSD card</h5>
                <h6 className="text-dark">Smart ssd cards</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={graphicscard}
                style={{ width: "310px", height: "380px" }}
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Graphics card</h5>
                <h6 className="text-dark">For good quality of display</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>

        <div>
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
