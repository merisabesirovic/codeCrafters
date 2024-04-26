import React from "react";
import "./Header.css";
import image from "../../img/EyeCenter.png";

export default function Header() {
  return (
    <div className="header">
      <img src={image}></img>
    </div>
  );
}
