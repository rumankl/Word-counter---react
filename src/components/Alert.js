import React from "react";

function Alert(props) {
  //To capital letter first word of success code
  /*const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };*/ //it is correct but show toLowercase undefined???
  const capitalize = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  return (
    /*for fixting alert size not move in textarea and about */
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;
