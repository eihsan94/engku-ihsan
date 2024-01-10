import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const Customers = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://envato.com/" rel="noreferrer" target="_blank">
                  <img src="img/partners/1.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://upwork.com/" rel="noreferrer" target="_blank">
                  <img src="img/partners/upwork.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://fiverr.com" target="_blank" rel="noreferrer">
                  <img src="img/partners/fiverr.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://beyondmag.jp" target="_blank" rel="noreferrer">
                  <img src="img/partners/beyond.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://qlub.io/en/" rel="noreferrer" target="_blank">
                  <img src="img/partners/qlub.png" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://shop.mamakyu.com/"
                  rel="noreferrer"
                  target="_blank">
                  <img src="img/partners/mamakyu.png" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key="1">
                <div className="title_holder">
                  <p className="desc">
                    “ Ihsan's expertise in frontend development is truly
                    exceptional. His ability to craft dynamic and responsive
                    user interfaces has made a significant impact on our
                    projects. He is a valuable asset to any team!”
                  </p>
                  <h3 className="title">Albert Walker</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key="2">
                <div className="title_holder">
                  <p className="desc">
                    {`“ I have had the pleasure of working with Ihsan on multiple projects, and his skills in React and NextJS are unmatched. His dedication to optimizing user experiences is commendable ”`}
                  </p>
                  <h3 className="title">Anna Barbera</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key="3">
                <div className="title_holder">
                  <p className="desc">
                    “ We were struggling with outdated user interfaces until we
                    brought Ihsan on board. His expertise in crafting dynamic
                    and responsive UIs solved our frontend problems effectively”
                  </p>
                  <h3 className="title">Susan Rowan</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key="3">
                <div className="title_holder">
                  <p className="desc">
                    “ Our web services lacked the responsiveness and engagement
                    we needed. Ihsan's mastery of React and NextJS addressed
                    these issues head-on, leading to remarkable improvements”
                  </p>
                  <h3 className="title">David Harrington</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key="3">
                <div className="title_holder">
                  <p className="desc">
                    “ Our startup was struggling with delivering cutting-edge
                    solutions until Ihsan joined. His expertise in React and
                    NextJS enabled us to solve complex problems for our users”
                  </p>
                  <h3 className="title">Jessica Beau</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Customers;
