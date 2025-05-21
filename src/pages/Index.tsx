
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setTimeout(() => {
        navigate("/polls");
      }, 100);
    }
    setIsLoading(false);
  }, [navigate]);
  
  if (isLoading) {
    return (
      <div className="wechat-container flex items-center justify-center min-h-screen">
        <p>加载中...</p>
      </div>
    );
  }
  
  const handleAuthSuccess = () => {
    navigate("/polls");
  };
  
  return (
    <div className="wechat-container">
      <div className="h-52 flex items-center justify-center bg-gradient-to-r from-wechat-green to-wechat-lightGreen">
        <h1 className="text-2xl font-bold text-white">薪资调查助手</h1>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-wechat-darkGray">
            面试薪资透明，职场决策更轻松
          </h2>
          <p className="text-wechat-mediumGray mt-2">
            通过参与和查看薪资调查，了解行业薪资水平
          </p>
        </div>
      </div>
      
      <div className="border-t border-wechat-gray">
        <AuthForm onSuccess={handleAuthSuccess} />
      </div>
    </div>
  );
};

export default Index;
