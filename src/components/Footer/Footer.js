import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Tadawvkugwviywrvuvwbi</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=100041078220896"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/junaid-qureshi-dvdvs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/dsvdsv/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/developer-dsvdsv"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Nsdvsdike Shoes Temdsvdvsdsvsplate
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
