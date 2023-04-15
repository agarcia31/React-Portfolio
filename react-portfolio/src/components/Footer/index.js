import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "agarcia31 github",
      link: "https://github.com/"
    },
    {
      name: "Andres Garcia linkedin",
      link: "https://www.linkedin.com/"
    },
    {
      name: "a.garcia.atn31@gmail.com",
      link: "https://gmail.com/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
