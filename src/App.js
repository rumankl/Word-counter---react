import React, { useState } from "react";
import "./Appa.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Dark mode has been enabled", "success");
      ///titile favicon logo site write
      document.title = "universal - Dark Mode";
      // setInterval(() => {
      //   document.title = "universal - Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //  document.title = "Install universal now";
      //}, 1500); ///////
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "universal - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="Universal" abouttext="About us" />*/}
      {/*<Navbar />*/}
      <Router>
        <Navbar title="Universal" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /user--->component1
            /user/home--->component2 */}
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  heading="Try Universal- word counter, charater counter, remove extra space"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
