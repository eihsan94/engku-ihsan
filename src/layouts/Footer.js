const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" onClick={() => scrollTop()} className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Copyright © {new Date().getFullYear()}. All rights reserved. <br />
            Designed &amp; Developed by <br />
          </p>
          <img
            style={{
              width: "300px",
              height: "auto",
              marginTop: "20px",
            }}
            src="img/signature.png"
            alt="image"
          />{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
