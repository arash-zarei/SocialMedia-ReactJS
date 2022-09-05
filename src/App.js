import React from "react";

import { Route, Routes } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
import Saved from "./Components/Saved/Saved";
import Videos from "./Components/Videos/Videos";

//Contexts
import ChangeModeContextProvider from "./Contexts/ChangeModeContextProvider";

const App = () => {
  return (
    <section className="App">
      <ChangeModeContextProvider>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<Posts />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/newsfeed" />
          </Route>
        </Routes>
      </ChangeModeContextProvider>
    </section>
  );
};

export default App;
