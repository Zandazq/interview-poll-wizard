
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = false, rightAction }) => {
  const navigate = useNavigate();
  
  return (
    <header className="wechat-header relative">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 p-2 text-wechat-darkGray"
          aria-label="返回"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-lg font-medium text-wechat-darkGray">{title}</h1>
      {rightAction && (
        <div className="absolute right-3">{rightAction}</div>
      )}
    </header>
  );
};

export default Header;
