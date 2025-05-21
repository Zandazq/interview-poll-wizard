
import React from "react";
import Header from "@/components/Layout/Header";
import PollList from "@/components/PollList";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const PollsPage = () => {
  const navigate = useNavigate();
  
  const handleProfile = () => {
    navigate("/profile");
  };
  
  return (
    <div className="wechat-container">
      <Header 
        title="薪资调查" 
        rightAction={
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleProfile} 
            className="text-wechat-darkGray"
          >
            <User size={20} />
          </Button>
        } 
      />
      <PollList />
    </div>
  );
};

export default PollsPage;
