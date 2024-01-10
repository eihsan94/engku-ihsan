const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Sr. Frontend Engineer</h3>
            <p className="desc">
              I am a seasoned Sr. Frontend Engineer with expertise in crafting
              dynamic and responsive user interfaces. My work spans from
              innovative startups to public companies in Japan and in US,
              leveraging technologies like React, NextJS, Angular and UI library
              like tailwind. I excel in UI design, system integration, and
              developing cutting-edge web services. With a passion for
              optimizing user experiences and a strong background in project
              management, I bring technical and visionary skills to create
              impactful web solutions
            </p>
            <img src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
