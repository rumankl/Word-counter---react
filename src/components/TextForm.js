import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text); //not imp to write, beacuse it is make for understand the code in console output
    // setText("you have click on handleupclick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text); //not imp to write, beacuse it is make for understand the code in console
    // setText("you have click on handleupclick");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox"); //// if there is navigator.clip... then we should not  write this code
    text.select(); /// if there is navigator.clip... then we should not write this code

    navigator.clipboard.writeText(text.value); // if we reove all this var tset and text.selection and doc.getselection... then we must remove (.value)
    document.getSelection().removeAllRanges(); /// to remove the selection color while we are copy the text /// this also, if there is navigator.clip... then we should not write this code
    props.showAlert("copied to clipboard !", "success");
  };

  const handleOnChange = (event) => {
    console.log("on change"); //not imp to write, beacuse it is make for understand the code in console
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("Enter text here2");
  //text = "new text"; // wrong way to change state
  //setText("new text"); // correct way to change state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "red",
        }}
      >
        <h1 className="mb -2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#red",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-3 my-1 "
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2 my-1 "
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1  my-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "red",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {/*{text.trim().split(" ").length} words and {text.length} characters*/}
          {/*for 0 word, changing 0 in word nos using filter......*/}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        {/*} //text.split() thauma text.split(/\s+/) whitespace or by a space \s or
        including newline +(more than one)*/}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview </h2>
        {/*<p>{text}</p>-----OR----------------------------*/}
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box about to preview it here"}
        </p>
      </div>
    </>
  );
}
