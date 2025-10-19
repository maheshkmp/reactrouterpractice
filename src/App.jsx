import React from "react";
import "./App.css";
import "./index.css";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import BodyContent from "./Components/BodyContent/BodyContent";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <HeaderContent />
      <Home />
      {/* <BodyContent>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tenetur explicabo sunt maiores excepturi consectetur ad
          exercitationem. In, id! Nihil sunt quisquam tenetur deserunt voluptas
          eligendi laborum fugit in. Deleniti!
        </p>
      </BodyContent> */}
    </>
  );
}

export default App;
