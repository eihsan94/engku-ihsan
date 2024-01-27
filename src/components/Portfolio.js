import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} i={modalValue} data={projects} />}
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio">
            {projects.map((project, i) => (
              <SwiperSlide
                key={i}
                className="item modal_item"
                onClick={() => {
                  setModal(true);
                  setModalValue(i + 1);
                }}
                data-index={1}>
                <img
                  key={project.img}
                  src={project.img}
                  style={{
                    height: "250px",
                    width: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  alt="img"
                />
                <div className="title_holder">
                  <p>{project.name}</p>
                  <h3>
                    <a href="#">{project.name}</a>
                  </h3>
                </div>
                <div className="fn__hidden">
                  <p className="fn__cat">{project.skills}</p>
                  <h3 className="fn__title">{project.name}</h3>
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="img" />
                    <div
                      className="abs_img"
                      data-bg-img="img/portfolio/1.jpg"
                    />
                  </div>
                  <p className="fn__desc">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const projects = [
  {
    img: "img/portfolio/team-yaa.png",
    tag: "MERN Stack, React, TypeScript, MongoDB, Node.js, Firebase, Vercel",
    name: "E-commerce Platform for Halal Food in Japan",
    desc: "I played a pivotal role in developing an e-commerce website tailored to address the needs of individuals in Japan seeking halal food options. Utilizing the MERN stack (MongoDB, Express, React, Node.js), this project harnessed the power of React and TypeScript to create a user-friendly and responsive interface. The backend, built with Node.js and Express, efficiently manages server-side operations and API interactions, while MongoDB ensures robust and scalable data handling. The platform is designed to simplify the process of locating and purchasing halal food, significantly benefiting the community. Deployed on Firebase for reliable backend services and hosted on Vercel for its frontend, the website ensures seamless user experiences and high-performance standards. This project reflects my commitment to leveraging technology for social good, providing a valuable resource for the halal community in Japan.",
    url: "https://team-yaa-mall.vercel.app/",
  },
  {
    img: "img/portfolio/anyx.jpg",
    tag: "GraphQL, React, Tailwind CSS, JavaScript, TypeScript",
    name: "Build EC platform AnyX in React, Typescript, Tailwind and GraphQL",
    desc: `As a key player in the AnyX project, I significantly advanced e-commerce and D2C channel solutions through my expertise in Node.js, React, and GraphQL. My strategic developments included a comprehensive frontend engineering library that standardized and improved development efficiency using React's robust capabilities, ensuring a swift and consistent project workflow. Additionally, my contributions to the AnyX tool simplified e-commerce management, optimization, and tracking, enabling businesses to leverage their data with Node.js and GraphQL for competitive growth. Committed to enhancing the developer experience, I streamlined backend processes to be as intuitive as their frontend counterparts, reducing development time and bolstering product quality. My role in AnyX underscores my dedication to fusing a strong technology stack with innovative platforms, meeting the demands of modern e-commerce and setting the stage for ongoing advancements`,
    url: "https://any-x.com/",
  },
  {
    img: "img/portfolio/cruzzie.jpg",
    tag: "React, Next JS, Tailwind CSS, TypeScript, Bun.JS, Golang, Python",
    name: "Developed No Code tools, Cruzzie with Next JS, Typescript, Golang",
    desc: `Project goal At Cruzzie, I tackled the substantial challenge of enabling startups, especially an American Series A client with a recent $10M funding, to master their data management and analytics. These emerging companies faced the daunting task of integrating and interpreting complex data streams from diverse sources, such as financial data from Quickbooks and transactional data from Stripe. The difficulty lay in not only aggregating this data but also in translating it into actionable insights—critical for driving strategic decisions and achieving competitive advantage. The project's aim was to develop a solution that could seamlessly blend these varied data inputs into a cohesive, user-friendly analytics platform that would streamline revenue operations and offer scalable, data-driven growth opportunities.`,
    url: "https://www.cruzzie.com/",
  },
  {
    img: "img/portfolio/beyond.jpg",
    tag: "React, Next JS, Tailwind CSS, TypeScript, Wordpress, Node JS",
    name: "Build a magazine using Next Js and Wordpress as CMS In Typescript",
    desc: `Beyond Magazine aimed to establish a cutting-edge web media platform that was content-rich, highly adaptable, and capable of utilizing the latest web technologies for an enhanced user experience. I played a pivotal role in the development of Beyond Magazine. My contributions including Spearheading the integration of a modern frontend using NextJS, allowing for a seamless and responsive user experience, Implementing serverless architectures for a scalable and cost-efficient backend, Integrating WordPress CMS to provide a rich content management system that empowered non-technical editorial staff to easily manage content, Ensuring the platform’s compliance with web standards and optimal performance metrics. The launch of Beyond Magazine was a resounding success, with the platform receiving accolades for its innovative use of technology and superb user experience. The combination of NextJS and serverless architecture resulted in a fast, reliable, and scalable website, while WordPress integration enabled dynamic content management. The project not only met but exceeded the client's goals, setting a new standard for web media platforms`,
    url: "https://www.beyondmag.jp/",
  },
  {
    img: "img/portfolio/mamakyu.jpg",
    tag: "React, Next JS, Shopify, TypeScript",
    name: "Optimizing E-commerce Performance: Pioneering Headless Shopify Integration with Next.js and Cost-Saving Achievements",
    desc: `I pioneered the integration of a headless Shopify setup with Next.js, a move that optimized performance without compromising on user experience. My cost-cutting initiatives were notable, resulting in over 30% savings on the running cost of the e-commerce site.`,
    url: "https://shop.mamakyu.com/z",
  },
];
