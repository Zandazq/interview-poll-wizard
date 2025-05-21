
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast({
      title: "已退出登录",
    });
    navigate("/");
  };
  
  const handleMyPolls = () => {
    toast({
      title: "功能开发中",
      description: "此功能正在开发中，敬请期待",
    });
  };
  
  if (!user) {
    return (
      <div className="wechat-container">
        <Header title="个人中心" showBack />
        <div className="p-4 text-center">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="wechat-container">
      <Header title="个人中心" showBack />
      
      <div className="p-4">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              <User size={24} />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-medium">{user.name}</h2>
            <p className="text-wechat-mediumGray">用户ID: {user.id}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">我的调查</h3>
            <Button onClick={handleMyPolls} variant="outline" className="w-full">
              创建的调查
            </Button>
            <Button onClick={handleMyPolls} variant="outline" className="w-full mt-3">
              参与的调查
            </Button>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">设置</h3>
            <Button onClick={handleLogout} variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
              退出登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
