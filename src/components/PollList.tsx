
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Poll } from "@/types";
import { mockPolls } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Star } from "lucide-react";

interface PollListProps {
  polls?: Poll[];
}

const PollList: React.FC<PollListProps> = ({ polls = mockPolls }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const filteredPolls = polls.filter(
    (poll) =>
      poll.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poll.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleViewPoll = (pollId: string) => {
    navigate(`/poll/${pollId}`);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  
  return (
    <div className="space-y-4 p-4">
      <div className="sticky top-0 z-10 bg-white pb-4">
        <Input
          type="text"
          placeholder="搜索薪资调查..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="wechat-input"
        />
      </div>
      
      {filteredPolls.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-wechat-mediumGray">没有找到匹配的调查</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPolls.map((poll) => (
            <div 
              key={poll.id} 
              className="wechat-card hover:shadow-md transition-shadow" 
              onClick={() => handleViewPoll(poll.id)}
            >
              <h3 className="text-lg font-medium text-wechat-darkGray mb-2">
                {poll.title}
              </h3>
              <p className="text-sm text-wechat-mediumGray mb-4">
                {poll.description}
              </p>
              <div className="flex items-center justify-between text-xs text-wechat-mediumGray">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(poll.createdAt)}
                  </span>
                  <span className="flex items-center">
                    <User size={14} className="mr-1" />
                    {poll.totalVotes}人参与
                  </span>
                </div>
                <span className="flex items-center text-wechat-green">
                  <Star size={14} className="mr-1" />
                  查看详情
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => navigate("/create")}
          className="rounded-full w-14 h-14 bg-wechat-green hover:bg-wechat-lightGreen shadow-lg"
        >
          <span className="text-2xl">+</span>
        </Button>
      </div>
    </div>
  );
};

export default PollList;
