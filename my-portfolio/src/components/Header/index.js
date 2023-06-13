import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const Header = (props) => {
  return (
    <header
    className=" pt-8 pl-4 pr-8"
    style={{
      backgroundImage: `url(${coverImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: "230px",
      color: '#00FF33', // Set a contrasting text color
      fontSize: "100px",
      fontFamily: 'Permanent Marker', // Use a different font
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Apply a text shadow
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end', // Align h1 to the bottom
    }}
  >
    <h1 className=" pt-8 pl-8 pr-8 ">Andres Garcia</h1>
    {props.children}
  </header>
  );
};

export default Header;
