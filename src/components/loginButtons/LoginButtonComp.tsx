import React, { ReactNode } from "react";
import "./LoginButtonComp.css";

interface LoginButtonProps {
  icon: ReactNode;
  text: string;
  funName?: ()=> void
}

const LoginButtonComp: React.FC<LoginButtonProps> = ({ icon, text, funName }) => {
  return (
    <div className="login_button" onClick={funName}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default LoginButtonComp;
