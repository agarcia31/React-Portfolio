import React from "react";

function Resume() {
  return (
    <section className="background-container bg-cover bg-center py-10">
      <div className="my-2" style={{ marginLeft: "20px" }}>
        <h4
          className="font-semibold mb-4"
          style={{
            fontFamily: "Bitter",
            fontSize: "48px",
            color: "#0CFF00",
          }}
        >
          Download my{" "}
          <a
            href="https://www.linkedin.com/"
            className="hover:underline"
            style={{
              fontFamily: "Bitter",
              fontSize: "48px",
              color: "#145A32",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0CFF00")}
            onMouseLeave={(e) => (e.target.style.color = "#145A32")}
          >
            Resume
          </a>
        </h4>
        <div>
          <h3
            className="font-semibold mb-2"
            style={{
              background: "#28B463",
              fontFamily: "Bitter",
              fontSize: "48px",
              color: "#145A32",
              display: "inline-block",
              padding: "0 10px",
            }}
          >
            Front-end Proficiencies
          </h3>
          <div className="skills-container">
            <ul
              className="skills-list"
              style={{
                background: "#D5F5E3",
                fontFamily: "Bitter",
                fontSize: "24px",
                color: "#145A32",
                display: "inline-block",
                padding: "30px",
                listStyleType: "square",
                marginTop: "10px",
              }}
            >
              <li className="mb-1">
                <span className="skill-name">HTML</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  100%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">CSS</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  100%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">JavaScript</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  80%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">jQuery</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  50%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">Responsive Design</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  85%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">React</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  75%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">Bootstrap</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  100%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">TailWind CSS</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  100%
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3
            className="font-semibold mb-2"
            style={{
              background: "#28B463",
              fontFamily: "Bitter",
              fontSize: "48px",
              color: "#145A32",
              display: "inline-block",
              padding: "0 10px",
              marginTop: "20px",
            }}
          >
            Back-end Proficiencies
          </h3>
          <div className="skills-container">
            <ul
              className="skills-list"
              style={{
                background: "#D5F5E3",
                fontFamily: "Bitter",
                fontSize: "24px",
                color: "#145A32",
                display: "inline-block",
                padding: "30px",
                listStyleType: "square",
                marginTop: "10px",
              }}
            >
              <li className="mb-1">
                <span className="skill-name">APIs</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  95%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">Node.js</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  55%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">Express.js</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  60%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">MySQL, Sequelize</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  65%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">MongoDB, Mongoose</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  60%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">REST</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  75%
                </span>
              </li>
              <li className="mb-1">
                <span className="skill-name">GraphQL</span>
                <span className="skill-level" style={{ marginLeft: "10px" }}>
                  70%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;