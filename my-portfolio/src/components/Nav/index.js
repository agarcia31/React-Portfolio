import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav
      className="pt-8 pb-0 pr-8 pl-8"
      style={{
        width: "100%",
        color: "#00FF33", // Set a contrasting text color
        fontSize: "52px",
        fontFamily: "Permanent Marker", // Use a different font
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Apply a text shadow
      }}
    >
      <ul className="flex justify-center">
        {pages.map((Page) => (
          <li
            className={`mx-8 ${
              currentPage.name === Page.name ? "navActive" : ""
            }`}
            key={Page.name}
          >
            <span
               className="cursor-pointer transition-colors hover:text-hover-color"
              onClick={() => setCurrentPage(Page)}
            >
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
