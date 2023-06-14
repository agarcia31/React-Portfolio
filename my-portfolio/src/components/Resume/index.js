import React from "react";

function Resume() {
  return (
    <section className="background-container bg-cover bg-center py-10">
      <div className="my-2">
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
              transition: "color 0.3s", // Add a smooth transition for the color change
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0CFF00")} // Set the hover color on mouse enter
            onMouseLeave={(e) => (e.target.style.color = "#145A32")} // Reset the color on mouse leave
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
          <ul
            className="skills-list"
            style={{
              background: "#D5F5E3",
              fontFamily: "Bitter",
              fontSize: "24px",
              color: "#145A32",
              display: "block",
              padding: "10px",
            }}
          >
            <li className="mb-1">HTML</li>
            <li className="mb-1">CSS</li>
            <li className="mb-1">JavaScript</li>
            <li className="mb-1">jQuery</li>
            <li className="mb-1">Responsive Design</li>
            <li className="mb-1">React</li>
            <li className="mb-1">Bootstrap</li>
          </ul>
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
            }}
          >
            Back-end Proficiencies
          </h3>
          <ul
            className="skills-list"
            style={{
              background: "#D5F5E3",
              fontFamily: "Bitter",
              fontSize: "24px",
              color: "#145A32",
              display: "block",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <li className="mb-1">APIs</li>
            <li className="mb-1">Node.js</li>
            <li className="mb-1">Express.js</li>
            <li className="mb-1">MySQL, Sequelize</li>
            <li className="mb-1">MongoDB, Mongoose</li>
            <li className="mb-1">REST</li>
            <li className="mb-1">GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
