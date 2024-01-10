import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && name && phone && msg) {
      // send message to the user
      setLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setLoading(false);
      setSuccess(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Contact</h3>
            <h3 className="title">Get In Touch</h3>
            <p className="desc">
              If you have any suggestion, project or even you want to say
              “hello”, please fill out the form below and I will reply you
              shortly.
            </p>
          </div>
          {/* /Main Title */}
          {/* Contact Form */}
          <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
            <div
              className="empty_notice"
              style={{ display: error ? "block" : "none" }}>
              <span>Please Fill Required Fields!</span>
            </div>
            {/* */}
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}>
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={name}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}>
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={email}
                      name="email"
                      id="email"
                      type="email"
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "phone" || phone ? "active" : ""
                    }`}>
                    <input
                      onFocus={() => setActive("phone")}
                      onBlur={() => setActive(null)}
                      id="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      name="phone"
                      type="tel" // Use type "tel" for phone numbers
                      pattern="^[0-9]*$"
                      title="Please enter a valid phone number"
                      required // Make the input required
                    />
                    <span className="moving_placeholder">Phone</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}>
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      onChange={(e) => onChange(e)}
                      value={msg}
                      id="message"
                    />
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  {success && (
                    <div
                      style={{
                        border: "1px solid green",
                        marginBottom: "10px",
                        padding: "10px",
                        color: "green",
                        fontSize: "24px",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}>
                      Your message has been received, we will contact you soon.
                    </div>
                  )}
                  <input
                    className="a"
                    type="submit"
                    id="send_message"
                    value={loading ? "Sending..." : "Send Message"}
                  />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="resumo_fn_contact_info">
            <p>Address</p>
            <h3>
              45-25 OoyamaCho Sante Yoyogi Uehara Room 203, Shibuya City, Tokyo,
              Japan
            </h3>
            <p>Phone</p>
            <h3>
              <a href="tel:+818029474788">(+81) 080 2947 4788</a>
            </h3>
            <p>
              <a className="fn__link" href="mailto:eihsan94@gmail.com">
                eihsan94@gmail.com
              </a>
            </p>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
