import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import { useGlobalState } from "./Contexts";
import "./menu.css";

const wall_generation_ref = {
  instant: 0,
  "not-instant": 1,
};

function WallGenerationButton() {
  const [state, dispatch] = useGlobalState();

  const dropdownState = {
    0: "wall-dropdown-invalid",
    1: "wall-dropdown-invalid",
    2: "wall-dropdown",
  };

  const wall_generation_options = {
    0: "Instant",
    1: "Animated",
  };

  let buttonState = {
    dropDownValue: "Select Wall Generation Type: ",
  };

  function handleSelect(e) {
    dispatch({ wallGenerationType: wall_generation_ref[e] });
    buttonState["dropDownValue"] = e;
  }

  return (
    <DropdownButton
      data-bs-toggle="dropdown"
      variant="success"
      title={
        buttonState["dropDownValue"] +
        wall_generation_options[state.wallGenerationType]
      }
      id="wall-generation-select"
      onSelect={handleSelect}
      className="dropdown"
    >
      <Dropdown.Header>Dropdown header</Dropdown.Header>
      <Dropdown.Item eventKey="instant">
        {wall_generation_options[0]}
      </Dropdown.Item>
      <Dropdown.Item eventKey="not-instant">
        {wall_generation_options[1]}
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default WallGenerationButton;
