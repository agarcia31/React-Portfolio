import React from 'react';

function Resume() {
  return (
    <section className="background-container bg-cover bg-center py-10">
      <div className="my-2">
        <h4 className="font-semibold mb-4">
          Download my <a href="https://www.linkedin.com/" className="hover:text-custom-hover" style={{ fontFamily: "Bitter", fontSize: "32px", color: " #145A32" }}>resume</a>
        </h4>
        <h3 className="font-semibold mb-2" style={{ fontFamily: "Bitter", fontSize: "48px", color: " #145A32" }}>Front-end Proficiencies</h3>
        <ul className="list-disc list-inside ml-4 mb-4" style={{ fontFamily: "Bitter", fontSize: "24px", color: " #145A32" }}>
          <li className="mb-1">HTML</li>
          <li className="mb-1">CSS</li>
          <li className="mb-1">JavaScript</li>
          <li className="mb-1">jQuery</li>
          <li className="mb-1">Responsive Design</li>
          <li className="mb-1">React</li>
          <li className="mb-1">Bootstrap</li>
        </ul>
        <h3 className="font-semibold mb-2" style={{ fontFamily: "Bitter", fontSize: "48px", color: " #145A32" }}>Back-end Proficiencies</h3>
        <ul className="list-disc list-inside ml-4" style={{ fontFamily: "Bitter", fontSize: "24px", color: " #145A32" }}>
          <li className="mb-1">APIs</li>
          <li className="mb-1">Node.js</li>
          <li className="mb-1">Express.js</li>
          <li className="mb-1">MySQL, Sequelize</li>
          <li className="mb-1">MongoDB, Mongoose</li>
          <li className="mb-1">REST</li>
          <li className="mb-1">GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
