import React from "react";
import "./ToBackComp.css";
import ToBackArrowSVG from "../SVG/BackArrowSVG";
import { Link } from "react-router-dom";

interface ToBackProp {
  path: string;
}

const ToBackComp: React.FC<ToBackProp> = ({ path }) => {
  return (
    <Link to={path}>
      <div className="to_back">
        <ToBackArrowSVG />
        <p style={{ fontWeight: "700", fontSize: "20px" }}>Back</p>
      </div>
    </Link>
  );
};

export default ToBackComp;
