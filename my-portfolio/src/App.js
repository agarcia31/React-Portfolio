import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import "./App.css"; // Import the CSS file
import './index.css';
import 'tailwindcss/tailwind.css';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
