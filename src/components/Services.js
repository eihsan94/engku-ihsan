const Services = () => {
  const data = [
    {
      title: "App Audit",
      description:
        "I will audit your app and give you a detailed report on what you need to do to improve your app.",
      pricing: "$100",
    },
    {
      title: "App Design",
      description:
        "I will design your app from scratch. I will design the UI and UX of your app.",
      pricing: "$500",
    },
    {
      title: "App Development",
      description:
        "I will develop your app from scratch. I will develop the frontend and backend of your app.",
      pricing: "$1000",
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Services</h3>
            <h3 className="title">What I Do</h3>
            <p className="desc">
              I help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers
              and growing overall sales.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              {data.map((d, i) => (
                <li key={i}>
                  <div className="item">
                    <div className="item_left">
                      <h3>{d.title}</h3>
                      <p>{d.description}</p>
                    </div>
                    <div className="item_right">
                      <p>Starts from</p>
                      <h3>{d.pricing}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;
