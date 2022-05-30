import styles from "./button.module.scss";
import React, { useState } from "react";

function Button(props) {
  // const [isToggled, setIsToggled] = useState(false);

  const buttonStyle = {
    color: props.onMouseOver,
  };

  function activeButtonBackground(e) {
    e.target.style.background = props.color;
    if (props.toggleState){
      props.toggleState()
    }
  }
  function standardButtonBackground(e) {
    e.target.style.background = "white";
  }

  return (
    <button
      className={styles.button}
      onTouchStart={activeButtonBackground}
      onTouchEnd={standardButtonBackground}
    >
      {props.children}
    </button>
  );
}
export default Button;
