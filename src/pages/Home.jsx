import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import "../style/home.css";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    fontWeight: "500",
    backgroundColor: teal[300],
    "&:hover": {
      backgroundColor: teal[700],
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  navButton: {
    margin: {
      margin: theme.spacing(1),
    },
    marginRight: "25px",
    fontWeight: "500",
    "&-masuk": {
      backgroundColor: theme.palette,
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div className="section1 jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 font-weight-bold">
            Urusan Legal jadi lebih
            <br /> gampang dengan hakita
          </h1>
          <Link to="/blog" type="button" className="btn home-btn">
            Baca Artikel
          </Link>
        </div>
      </div>
      <div className="section2 container">
        <div className="row">
          <div className="col-sm-4">
            <div className="row">
              <div
                className="col-sm-4"
                style={{ display: "grid", justifyContent: "end" }}
              >
                <img
                  alt="needs"
                  style={{ width: "60px" }}
                  src={require("../images/needs.png")}
                />
              </div>
              <div className="col-sm-8">
                  <h3>We Meet People’s Needs</h3>
                <p>
                  Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang
                  menakutkan dan belum terjangkau untuk semua golongan. Inilah
                  mengapa kami ada; untuk melawan stigma dan menjawab segala
                  kebutuhan legal Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div
                className="col-sm-4"
                style={{ display: "grid", justifyContent: "end" }}
              >
                <img
                  alt="needs"
                  style={{ width: "60px" }}
                  src={require("../images/protect.png")}
                />
              </div>
              <div className="col-sm-8">
                  <h3>We Provide Protection </h3>
                <p>
                  Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10
                  tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan
                  hukum yang sesuai dengan hak Anda sebagai warga negara.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div
                className="col-sm-4"
                style={{ display: "grid", justifyContent: "end" }}
              >
                <img
                  alt="needs"
                  style={{ width: "60px" }}
                  src={require("../images/trust.png")}
                />
              </div>
              <div className="col-sm-8">
                  <h3>We Are Trustworthy</h3>
                <p>
                  HAKITA hadir karena kami percaya bahwa hukum adalah hak semua
                  orang. Semua yang kami lakukan di HAKITA selalu selaras dengan
                  misi kami untuk menjadikan hukum sebagai sesuatu yang mudah
                  dimengerti dan dapat diakses oleh semua orang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3 container text-center justify-content-center">
        <div className="row">
          <div className="container">
            <h1 className="section-title mb-5">Product and Services</h1>
            <p className="title-detail">
              Apapun kebutuhan legal Anda, biar HAKITA yang urus.
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 mr-4">
              <div className="service">
                <img alt="needs" src={require("../images/otomat.png")} />
              </div>
              <h3>Otomasi Dokumen</h3>
              <p>
                Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa
                butuh waktu berminggu-minggu sekarang bisa selesai dalam
                hitungan menit dengan template dari HAKITA.
              </p>
              <ColorButton
                className={classes.navButton}
                endIcon={<ArrowForwardSharpIcon />}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Learn More
              </ColorButton>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <img alt="agree" src={require("../images/agreement.png")} />
              </div>
              <h3>Sistem Manajemen Dokumen</h3>
              <p>
                Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan
                dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu
                Anda jika ada dokumen yang membutuhkan perhatian khusus lewat
                fitur reminder kami.
              </p>
              <ColorButton
                className={classes.navButton}
                // style={{fontWeight:"500", backgroundColor:"#43B5A5"}}
                endIcon={<ArrowForwardSharpIcon />}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Learn More
              </ColorButton>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>

      <div className="section4 jumbotron jumbotron-fluid">
        <div
          className="container"
          style={{ paddingLeft: "200px", paddingRight: "200px" }}
        >
          <h1 className="display-4 font-weight-bold">APAKAH ANDA TAHU:</h1>
          <h2>
            Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP
            kepada orang yang ditabrak
          </h2>
        </div>
      </div>

      <div className="section5">
        <div className="row">
          <div className="container">
            <h1 className="section-sub-title mb-3 text-center">
              Love Reading, Keep Reading
            </h1>
            <p className="title-detail text-center">
              Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="service">
                <p className="blog-label">Blog</p>
                <p className="blog-title">
                  Perlindungan Hukum Revenge Porn di Indonesia
                </p>
                <p className="blog-date">8/4/2020, 11:25:46 PM</p>
                <Link to="/blog" className="blog-link">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <p className="blog-label">Blog</p>
                <p className="blog-title">
                  Gimana sih Biar Belanja di Online Shop Aman
                </p>
                <p className="blog-date">8/4/2020, 9:37:11 PM</p>
                <Link to="/blog" className="blog-link">
                  Read More
                </Link>
              </div>
              <hr/>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <p className="blog-label">Blog</p>
                <p className="blog-title">Konser Semasa COVID 19, Boleh?</p>
                <p className="blog-date">6/15/2020, 8:34:06 PM</p>
                <Link to="/blog" className="blog-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6 container text-center justify-content-center">
        <div>
          
        </div>
        <div className="row">
          <div className="container">
            <h1 className="section-title">Have a questions?</h1>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 mr-4">
              <div className="service">
              <i className="fas fa-envelope-square"></i>
                <p>info@hakita.com</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat, Jakarta
                  Utara
                </p>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
