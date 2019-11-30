import React from "react";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default props => {
  return (
    <FontAwesomeIcon
      icon={faAngleDoubleRight}
      onClick={() => {
        props.onClick(1);
      }}
    />
  );
};
