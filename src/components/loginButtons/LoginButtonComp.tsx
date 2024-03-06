import React, { ReactNode } from "react";
import "./LoginButtonComp.css";

interface LoginButtonProps {
  icon: ReactNode;
  text: string;
}

const LoginButtonComp: React.FC<LoginButtonProps> = ({ icon, text }) => {
  return (
    <div className="login_button">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default LoginButtonComp;
