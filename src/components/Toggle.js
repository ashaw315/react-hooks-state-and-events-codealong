import React, { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] =useState(true)
    function handleToggleClick(){
      setIsOn((isOn) => !isOn);
    }
    
    const color = isOn ? "red" : "blue";
    
  
  return <button style={{ background : color }} onClick={handleToggleClick}>{isOn ? "On" : "Off"}</button>;
}

export default Toggle;
