import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import "../style/footer.css";

export default function Footer(props) {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 pr-5">
              <h2>About us</h2>
              <p>
                HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat
                Indonesia dalam membuat dan memproses dokumen legal yang aman
                dan terpercaya. Kami menggunakan teknologi otomasi untuk
                mempermudah proses pembuatan dokumen.{" "}
              </p>
            </div>
            <div className="col-sm-4">
              <h2>Contact Us</h2>
              <p>
                Mail: info@hakita.id <br />
                Jl. Boulevard Barat Raya No.27, RW. 9, Kelapa Gading Barat -
                Jakarta Utara14240
              </p>
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
        {!props.path? 
        <div className="copy-right">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">Syarat & Ketentuan</div>
                  <div className="col-sm-4">Kebijakan Privasi</div>
                  <div className="col-sm-4">Panduan Pembayaran</div>
                </div>
            </div>
                <div className="col-sm-6 text-right">© PT Legalindo Mitra Abadi, 2020</div>
              </div>
          </div>
        </div>
      :
      <div className="copy-right">
          <div className="container">
                <div className="text-center">© PT Legalindo Mitra Abadi, 2020</div>
          </div>
        </div>
      }
      </div>
    </Fragment>
  );
}
