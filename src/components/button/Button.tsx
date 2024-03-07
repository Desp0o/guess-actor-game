import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  path?: string;
  funName?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, funName, path }) => {
  return (
    <Link to={path ? path : ''}>
      <div className="button" onClick={funName}>
        <p className="button_name">{title}</p>
      </div>
    </Link>
  );
};

export default Button;
