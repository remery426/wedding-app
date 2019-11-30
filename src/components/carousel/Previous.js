import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default props => {
  return (
    <FontAwesomeIcon
      icon={faAngleDoubleLeft}
      onClick={() => {
        props.onClick(-1);
      }}
    />
  );
};
