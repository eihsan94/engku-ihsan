import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");

  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I'm a Front-end Engineer with over 6 years
                of experience. I'm from Malaysia, currently working in Japan. I code and create
                web elements for amazing people around the world. I like
                work with new people. New people are new experiences.
              `}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Engku Ihsan</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>19th Sept 1994</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>29 years</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>Tokyo, Japan</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+81) 080 2947 4788</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:eihsan94@gmail.com">eihsan94@gmail.com</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Linked In</th>
                    <th>
                      <a href="https://www.linkedin.com/in/ihsan-engku-744847218/">
                        Ihsan Engku
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="files/Ihsan_CV＿En.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg">
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg">
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    {experiences.map((experience, i) => (
                      <li key={i}>
                        <div className="item">
                          <div className="item_top">
                            <h5>{experience.company}</h5>
                            <span> {experience.date} </span>
                          </div>
                          <h3>{experience.title}</h3>
                          {experience.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Tottori University</h5>
                          <span>( 2014 — 2018 )</span>
                        </div>
                        <h3>
                          Bachelor Degree Mechanical Engineering and Robotics
                        </h3>
                        <p>
                          With a Bachelor's Degree in Mechanical Engineering and
                          Robotics, my educational journey provided a unique
                          foundation for my career in frontend engineering. This
                          degree fostered an analytical mindset and a
                          problem-solving approach, essential for developing
                          complex user interfaces and engaging web solutions. My
                          understanding of mechanical systems and robotics
                          principles complements my frontend skills, enabling me
                          to approach web development with a unique perspective
                          that blends technical engineering with creative design
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  {skills.map((skill, i) => (
                    <div
                      className="progress_item open"
                      data-value={skill.percent}
                      key={i}>
                      <div className="item_in">
                        <h3 className="progress_title">{skill.name}</h3>
                        <span
                          className="progress_percent"
                          style={{ right: `${100 - skill.percent}%` }}>
                          {skill.percent}%
                        </span>
                        <div className="bg_wrap">
                          <div
                            className="progress_bg"
                            style={{ width: `${skill.percent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                {/* <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
                </div> */}
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;

const skills = [
  {
    name: "React",
    percent: 92,
  },
  {
    name: "Next JS",
    percent: 90,
  },
  {
    name: "Typescript",
    percent: 95,
  },
  {
    name: "Angular",
    percent: 80,
  },
  {
    name: "Tailwind",
    percent: 92,
  },
  {
    name: "GraphQL",
    percent: 85,
  },
  {
    name: "HTML5 & CSS3",
    percent: 95,
  },
  {
    name: "Node JS",
    percent: 92,
  },
  {
    name: "Express",
    percent: 90,
  },
  {
    name: "Restful API",
    percent: 92,
  },
  {
    name: "Python",
    percent: 70,
  },
  {
    name: "Golang",
    percent: 75,
  },
];

const SkillSection = ({ title, description }) => {
  const sectionStyle = {
    marginBottom: "1em",
    padding: "0 1em",
  };

  return (
    <div style={sectionStyle}>
      <div>
        <strong>{title}</strong>
      </div>
      {description}
    </div>
  );
};

const Career = ({ description, skills }) => {
  const paragraphStyle = {
    marginBottom: "1em",
  };

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <p style={paragraphStyle}>{description}</p>
      <h4 style={paragraphStyle}>Skillset & Contributions:</h4>
      {showAll &&
        skills.map((skill, index) => (
          <SkillSection
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      <button style={{ cursor: "pointer" }} onClick={toggleShowAll}>
        {!showAll ? "Show All" : "Hide"}
      </button>
    </div>
  );
};

const experiences = [
  {
    company: "Panasonic Group Yohana LLC Palo, Alto California, United States",
    date: "(APR 2024 - Present)",
    title: "Senior Engineer Ⅱ L5",
    description: (
      <Career
        skills={[
          {
            title:
              "AI-Driven Travel Search with Google Maps & Gemini Vertex AI Integration",
            description:
              "Spearheaded the implementation of a state-of-the-art travel search engine, seamlessly integrating Google Maps API with Gemini Vertex AI. This enabled users to not only receive personalized hotel and vacation recommendations based on LLM-driven insights but also visualize and pinpoint their desired locations directly on interactive maps.",
          },
          {
            title: "Enhanced Semantic Search for Precise Results",
            description:
              "To significantly improve search accuracy, we implemented a custom semantic search algorithm that employs word embeddings, contextual understanding, and query expansion techniques. Word embeddings represent words and phrases as numerical vectors in a high-dimensional space, allowing for semantic similarity comparisons. By understanding the context of search queries, the algorithm can identify relevant results even when users use different phrasing or synonyms. Additionally, query expansion techniques broaden the search scope by incorporating related terms, enhancing the likelihood of finding comprehensive and informative results.",
          },
          {
            title: "AI-Powered Workflow Automation",
            description:
              "Leveraged AI to develop software solutions that streamlined internal processes, resulting in substantial productivity gains and cost savings.",
          },
          {
            title: "AI Cost Optimization & Accuracy Enhancement",
            description:
              "Developed and implemented a novel '3Ps' architectural method, combining the strengths of multiple AI models (Anthropic, OpenAI, Gemini, and a fine-tuned Llama model) to optimize costs, reduce hallucinations, and deliver the most accurate results.",
          },
          {
            title: "Full-Stack Web Development & Localization",
            description:
              "Led the development and adaptation of global web applications for the Japanese market, ensuring a seamless user experience across languages and cultural nuances.",
          },
          {
            title: "Feature Development (Japan Focus)",
            description:
              "Designed and implemented features specifically tailored to the needs and preferences of Japanese users, showcasing a deep understanding of local market dynamics.",
          },
          {
            title: "Marketing Optimization",
            description:
              "Spearheaded marketing strategies across web pages and online stores, utilizing data-driven insights to enhance visibility and engagement in Japan.",
          },
        ]}
      />
    ),
  },
  {
    company: "Anymind Group",
    date: "(SEPTEMBER 2022 - PRESENT)",
    title: "Senior Frontend Engineer",
    description: (
      <Career
        description="I hold a key position as a Senior Frontend Engineer at Anymind Group in Roppongi, Tokyo. I've played a pivotal role in several key initiatives:"
        skills={[
          {
            title: "UI Library Development",
            description:
              "Led the creation and development of the company's UI Library using React.js, Mantine, and Tailwind CSS, utilizing NX for scalable codebase management.",
          },
          {
            title: "Advanced Design Principles",
            description:
              "Employed advanced design principles, focusing on responsive and atomic design for improved UI/UX, prioritizing accessibility and cross-browser compatibility.",
          },
          {
            title: "Frontend Library Architecture",
            description:
              "Architected and managed a frontend library with a focus on React components, Hooks, and Context API within a DDD monorepo architecture, ensuring scalability and maintainability.",
          },
          {
            title: "CSS-in-JS Techniques",
            description:
              "Implemented CSS-in-JS techniques with styled-components and integrated a CI/CD pipeline using Bitbucket pipeline, facilitated by NX for streamlined workflows.",
          },
          {
            title: "Standardized Coding Practices",
            description:
              "Implemented standardized coding practices and automated processes in the DDD monorepo, enhancing development speed and consistency across projects.",
          },
          {
            title: "AnyX Project Contribution",
            description:
              "Significantly contributed to the AnyX project, implementing GraphQL for optimized data handling and Zod for type validation, all within a DDD monorepo architecture.",
          },
          {
            title: "Authentication and Security",
            description:
              "Implemented Auth0 for robust authentication and security within a DDD monorepo architecture.",
          },
        ]}
      />
    ),
  },
  {
    company: "Cruzzie, Inc.",
    date: "( June 2023 — Oct 2023 )",
    title: "CTO",
    description: (
      <Career
        description="At Cruzzie, Inc., my role as CTO involved spearheading several pivotal initiatives in the development of the Cruzzie Analytics App:"
        skills={[
          {
            title: "UI Library Development",
            description:
              "Led the creation and development of the Cruzzie Analytics App's UI Library, utilizing React.js, Mantine, and Tailwind CSS. Employed TurboRepo and Next.js with create-t3-app, running on Bun.JS for scalable codebase management.",
          },
          {
            title: "Advanced Design Principles",
            description:
              "Focused on advanced design principles in the Cruzzie Analytics App, emphasizing responsive and atomic design to enhance user experience and interface.",
          },
          {
            title: "UI/UX Enhancement",
            description:
              "Enhanced the UI/UX of the Cruzzie Analytics App, prioritizing accessibility and cross-browser compatibility for superior functionality.",
          },
          {
            title: "Frontend Library Architecture",
            description:
              "Architected and managed a frontend library focusing on React components, Hooks, and Context API for the Cruzzie Analytics App, ensuring scalability and maintainability.",
          },
          {
            title: "CSS-in-JS Techniques",
            description:
              "Implemented CSS-in-JS techniques with styled-components in the Cruzzie Analytics App. Integrated a CI/CD pipeline using Vercel and GitHub actions for optimized workflows.",
          },
          {
            title: "Standardized Coding Practices",
            description:
              "Established standardized coding practices and automated processes, enhancing development speed and consistency across the Cruzzie Analytics App's projects.",
          },
          {
            title: "Authentication and Database Management",
            description:
              "Implemented Next Auth for secure and effective authentication in the Cruzzie Analytics App, complemented by PrismaJS for database management.",
          },
          {
            title: "AI-Powered Chat Interface",
            description:
              "Integrated OpenAI Chat GPT API in the Cruzzie Analytics App, developing an advanced AI-powered chat interface.",
          },
          {
            title: "Zapier Integration",
            description:
              "Implemented Zapier integration for the chat interface, enabling seamless automation and connectivity with various external applications and services.",
          },
        ]}
      />
    ),
  },
  {
    company: "Qlub, Tokyo.",
    date: "( March 2022 — Sept 2022 )",
    title: "Product Development Manager",
    description: (
      <Career
        description="As Product Development Manager at Qlub, I played a crucial role in shaping and aligning the product's strategy for the Japanese market, ensuring compliance with local laws and market needs."
        skills={[
          {
            title: "Pioneering Product Direction and Market Alignment",
            description:
              "Guided Qlub's product strategy for the Japanese market, focusing on ensuring legal and market compliance to meet the unique needs of the region.",
          },
          {
            title: "Japan POS Integration",
            description:
              "Authored essential documentation on POS and payment gateways, which proved vital in enhancing the team's understanding and efficiency in integrating these systems into Qlub's infrastructure.",
          },
          {
            title: "Global to Local Adaptation for POS Integration",
            description:
              "Customized global tech solutions to fit the Japanese market requirements, demonstrating my expertise in Golang development and integrating systems like Square, Stripe, and PayPal.",
          },
          {
            title: "The Vital Link Synchronizing Japan and Global Teams",
            description:
              "Served as a key liaison between Japan and global teams, streamlining communication and ensuring seamless integration and synchronization of projects across different regions.",
          },
        ]}
      />
    ),
  },
  {
    company: "Seven Rich Group, Tokyo.",
    date: "( April 2021 — Feb 2022 )",
    title: "Senior Software Engineer",
    description: (
      <Career
        description={`
        During my tenure at Mindplate, I was a Senior Software Engineer where I led numerous initiatives to enhance site performance, streamline operations, and drive sales through strategic technical implementations.
      `}
        skills={[
          {
            title: "Headless Shopify and Next.js",
            description: `
            Pioneered a headless Shopify setup with Next.js, improving site performance and user experience while leveraging the Shopify API for deeper integration.
          `,
          },
          {
            title: "Cost Reduction via AWS Serverless Architecture",
            description: `
            Reduced e-commerce operational costs by over 30% through an AWS serverless architecture, employing Lambda, DynamoDB, and S3, enhancing the site's scalability and efficiency.
          `,
          },
          {
            title: "Contentful CMS Integration",
            description: `
            Integrated Contentful CMS to improve website adaptability and content management, utilizing AWS serverless technologies for a more dynamic content delivery.
          `,
          },
          {
            title: "Infrastructure Optimization",
            description: `
            Increased development efficiency by 10% through infrastructure code using the Serverless Framework, which streamlined deployment and operational processes.
          `,
          },
          {
            title: "Sales Strategy Execution",
            description: `
            Developed and executed high LTV sales strategies for cross-selling and upselling within the Shopify platform, supported by AWS serverless infrastructure, significantly boosting sales subscriptions.
          `,
          },
          {
            title: "CI/CD with GitHub Actions",
            description: `
            Authored GitHub Actions for CI/CD, ensuring efficient, automated deployments and an optimized development pipeline.
          `,
          },
          {
            title: "Micro-Frontend Consolidation",
            description: `
            Led the consolidation of 5 micro-frontend apps into a single SPA, achieving improved performance, design uniformity, and code reusability.
          `,
          },
          {
            title: "SPA Initiative Analysis and Communication",
            description: `
            Analyzed and communicated the effectiveness of the SPA initiative to upper management, emphasizing its cost-benefit impact.
          `,
          },
          {
            title: "Source Code Refactoring",
            description: `
            Conducted comprehensive source code updates and refactoring, streamlining the contribution process for other engineers.
          `,
          },
          {
            title: "Frontend Feature Development",
            description: `
            Oversaw the creation and implementation of over 10 high-impact frontend features, elevating the product's capabilities significantly.
          `,
          },
          {
            title: "Collaboration with Backend and DevOps Teams",
            description: `
            Fostered collaborations with backend and DevOps teams for the release of new applications and API endpoints.
          `,
          },
          {
            title: "Technical Briefs and Task Management",
            description: `
            Wrote detailed tech briefs for large features, coordinating efforts between frontend and backend teams, and efficiently managing tasks through JIRA.
          `,
          },
          {
            title: "Exploring Cutting-Edge Technologies",
            description: `
            Explored and implemented cutting-edge technologies and patterns to enhance business operations and developer productivity.
          `,
          },
          {
            title: "Knowledge Sharing and Best Practices",
            description: `
            Shared expertise and best practices with various teams, leading to widespread adoption and improved company-wide practices.
          `,
          },
          {
            title: "Bridging Communication Gaps",
            description: `
            Bridged communication gaps between developers and other business departments, ensuring alignment and understanding of technical and business objectives.
          `,
          },
        ]}
      />
    ),
  },
  {
    company: "C3Reve, Tokyo.",
    date: "( March 2020 — March 2021 )",
    title: "Senior Software Engineer",
    description: (
      <Career
        description="My role at C3Reve as a Senior Software Engineer was marked by significant contributions to various projects, integrating modern web technologies and ensuring efficient deployment on cloud platforms."
        skills={[
          {
            title:
              "Elevating User Experience: Crafting the Mindweather Web App",
            description: `
              Developed Mind Weather, integrating Line with Angular and TypeScript for the frontend. Implemented atomic design principles for component design and utilized SASS for styling. Deployed Mindweather on AWS S3 infrastructure.
            `,
          },
          {
            title: "Bringing Families Closer: Developing StoryM – A Hybrid App",
            description: `
              Created StoryM, a hybrid Android and iOS app, using Ionic Angular with TypeScript. Employed atomic design components and LESS for CSS in StoryM. Deployed StoryM effectively on AWS.
            `,
          },
          {
            title: "Streamlining Line Official Account Management: Limember",
            description: `
              Led the development of Limember, a Line official account management service. Utilized LIFF with Ionic Angular and TypeScript for Limember's frontend. Followed atomic design principles for component design. Deployed Limember on AWS S3 infrastructure.
            `,
          },
          {
            title:
              "Elevating Coupon Management on Line: MigakiIchigotoichibiko",
            description: `
              Contributed to MigakiIchigotoichibiko, a Line coupon management service. Implemented LIFF with Ionic React and TypeScript for MigakiIchigotoichibiko's frontend. Designed atomic design components for code consistency. Deployed MigakiIchigotoichibiko using AWS S3 infrastructure.
            `,
          },
        ]}
      />
    ),
  },
  {
    company: "Birdworks Inc, Tottori.",
    date: "( April 2018 — Feb 2020 )",
    title: "Software Engineer",
    description: (
      <Career
        description="At Birdworks Inc, my role as a Software Engineer entailed developing innovative software solutions and fostering talent through mentorship programs."
        skills={[
          {
            title:
              "Revolutionizing Asset Management: Inventory Management System",
            description: `
              Developed a sophisticated Inventory Management System at Birdworks, utilizing Angular for the frontend, Rails for the backend, and Ionic for the Android app. Implemented Material Design System with angular material ui library and included a QR code scanner for efficient inventory management.
            `,
          },
          {
            title:
              "Elevating Presentations: Company Slideshow Web App with MQTT Integration",
            description: `
              Created a Company Slideshow Web App using Express and Angular. Integrated MQTT for device control, enabling commands to be sent to devices like Pepper and Robohon for automated presentations.
            `,
          },
          {
            title: "Fostering Future Talent: Biannual 5-Day Internship Program",
            description: `
              Spearheaded a 5-day internship program twice annually at Birdworks, focusing on talent development and mentorship. This program was instrumental in nurturing future professionals in the tech industry.
            `,
          },
        ]}
      />
    ),
  },
];
