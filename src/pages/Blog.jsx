import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/blog.css";

export default function Blog() {
  return (
    <Fragment>
      <div className="container my-2 before-nav" style={{ paddingLeft: "0" }}>
        <div className="row">
          <div className="col-sm-6 mail">
            <i className="fas fa-envelope"></i>
            Mail : info@hakita.id
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="media">
              <Link to="https://fb.me/hakita.id">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link to="https://instagram.com/hakita.id">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar path="blog" />

      <div className="blog-page-title jumbotron jumbotron-fluid ">
        <div className="container">
          <h1 className="display-4 font-weight-bold">Blog</h1>
        </div>
      </div>

      <div className="container blog-article">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6 mb-5">
                <div className="image-holder">
                  <img
                    alt="article-img"
                    src={require("../images/hakita-1.jpg")}
                  />
                </div>
                <div className="title-holder mt-3">
                  <p>Perlindungan Hukum Revenge Porn di Indonesia</p>
                </div>
                <div className="publish-holder">
                  11 hours ago <span>in criminal law</span>
                </div>
                <div className="desc-holder mt-3 mb-3">
                  Berkembangnya teknologi saat ini memunculkan jenis kejahatan
                  seksual yang baru. Kini kejahatan...
                </div>
                <Link
                  to="/blog"
                  className="link-holder"
                  style={{ color: "black" }}
                >
                  Continue Reading
                </Link>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="image-holder">
                  <img
                    alt="article-img"
                    src={require("../images/hakita-2.jpg")}
                  />
                </div>
                <div className="title-holder mt-3">
                  <p>Gimana sih Biar Belanja di Online Shop Aman?</p>
                </div>
                <div className="publish-holder">
                  13 hours ago <span>in hukum bisnis</span>
                </div>
                <div className="desc-holder mt-3 mb-3">
                  Berbelanja online saat ini sudah menjadi kebiasaan di
                  masyarakat Indonesia. Banyaknya...
                </div>
                <Link
                  to="/blog"
                  className="link-holder"
                  style={{ color: "black" }}
                >
                  Continue Reading
                </Link>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="image-holder">
                  <img
                    alt="article-img"
                    src={require("../images/hakita-3.jpg")}
                  />
                </div>
                <div className="title-holder mt-3">
                  <p>Konser Semasa COVID 19, Boleh?</p>
                </div>
                <div className="publish-holder">
                  2 months ago <span>in CONCERT</span>
                </div>
                <div className="desc-holder mt-3 mb-3">
                  Berbelanja online saat ini sudah menjadi kebiasaan di
                  masyarakat Indonesia. Banyaknya...
                </div>
                <Link
                  to="/blog"
                  className="link-holder"
                  style={{ color: "black" }}
                >
                  Continue Reading
                </Link>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="image-holder">
                  <img
                    alt="article-img"
                    src={require("../images/hakita-4.jpg")}
                  />
                </div>
                <div className="title-holder mt-3">
                  <p>Instansi Pemerintah yang Tetap Buka semasa COVID 19</p>
                </div>
                <div className="publish-holder">
                  2 months ago <span>in covid 19</span>
                </div>
                <div className="desc-holder mt-3 mb-3">
                  Berbagai langkah telah dicoba untuk memerangi bahaya dan
                  penyebaran COVID 19 yang kini...
                </div>
                <Link
                  to="/blog"
                  className="link-holder"
                  style={{ color: "black" }}
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ paddingLeft: "100px" }}>
            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <div
                  className="input-group-text"
                  id="btnGroupAddon2"
                  style={{ backgroundColor: "transparent" }}
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
                name="search"
              />
            </div>
            <div className="popular-list">
              <p className="sub-title">Popular post</p>
              <div className="row mb-3">
                <div className="col-sm-5">
                  <div className="image-holder-mini">
                    <img
                      alt="article-img"
                      src={require("../images/hakita-1.jpg")}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="title-holder-mini">
                    Perlindungan Hukum Revenge Porn di Indonesia
                  </div>
                  <div className="publish-holder-mini">August 4, 2020</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-5">
                  <div className="image-holder-mini">
                    <img
                      alt="article-img"
                      src={require("../images/hakita-2.jpg")}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="title-holder-mini">
                  Gimana sih Biar Belanja di Online Shop Aman?
                  </div>
                  <div className="publish-holder-mini">August 4, 2020</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-5">
                  <div className="image-holder-mini">
                    <img
                      alt="article-img"
                      src={require("../images/hakita-3.jpg")}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="title-holder-mini">
                  Konser Semasa COVID 19, Boleh?
                  </div>
                  <div className="publish-holder-mini">June 15, 2020</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-5">
                  <div className="image-holder-mini">
                    <img
                      alt="article-img"
                      src={require("../images/hakita-4.jpg")}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="title-holder-mini">
                  Instansi Pemerintah yang Tetap Buka semasa COVID 19
                  </div>
                  <div className="publish-holder-mini">June 14, 2020</div>
                </div>
              </div>
            </div>
            <div className="recent-comment">
              <p className="sub-title">Recent Comments</p>
            </div>
            <div className="categories">
              <p className="sub-title">Categories</p>
              <p style={{ fontSize: "13px" }}>
                UNCATEGORIZAED{" "}
                <span className="publish-holder-mini">
                  {"("}35{")"}
                </span>
              </p>
            </div>
            <div className="tags">
              <p className="sub-title">Tags</p>
              <div className="row">
                <div className="tags-mini">bangkrut</div>
                <div className="tags-mini">Blog</div>
                <div className="tags-mini">civil law</div>
                <div className="tags-mini">contract</div>
                <div className="tags-mini">corona</div>
                <div className="tags-mini">coronavirus</div>
                <div className="tags-mini">corona virus</div>
                <div className="tags-mini">corporate law</div>
                <div className="tags-mini">covid19</div>
                <div className="tags-mini">covid 19</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer path="blog" />
    </Fragment>
  );
}
