import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default props => {
  return <FontAwesomeIcon icon={faPauseCircle} onClick={props.onClick} />;
};
