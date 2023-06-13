import React from "react";

function Project(props) {
  const { name, description, link, repo, image } = props.project;

  return (
    <div
      className="max-w-lg rounded overflow-hidden shadow-lg mx-4 mb-4 bg-custom-color"
      style={{ border: "10px solid #145A32" }}
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="px-2">
        <div
          className="font-bold text-center"
          style={{ fontFamily: "Bitter", fontSize: "48px", color: " #145A32" }}
        >
          {name}
        </div>
        <p
          className=""
          style={{ fontFamily: "Bitter", fontSize: "28px", color: " #145A32" }}
        >
          {description}
        </p>
      </div>
      <div className="px-6 py-4 text-center">
        <a
          href={link}
          className="hover:underline text-green-800 hover:text-custom-hover mr-2"
          style={{ fontFamily: "Bitter", fontSize: "18px" }}
        >
          Website
        </a>
        <a
          href={repo}
          className="hover:underline text-green-800 hover:text-custom-hover"
          style={{ fontFamily: "Bitter", fontSize: "18px" }}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
