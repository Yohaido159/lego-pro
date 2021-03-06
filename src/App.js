import React from "react";

import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";

import AdminMain from "./components/AdminMain/AdminMain";
import MainPage from "./components/MainPage/MainPage";

import theme from "../src/UI/theme";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/adminliron" component={AdminMain} />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
