import "./App.css";

import React, { useState } from "react";
// import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import { connect } from 'react-redux'

const App = ()=>{
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 15;
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#581845"
            progress={progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  category="technology"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  category="general"
                  country="in"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;
