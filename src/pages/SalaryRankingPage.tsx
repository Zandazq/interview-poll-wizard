import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Users, Target, Sparkles } from "lucide-react";

const SalaryRankingPage = () => {
  const navigate = useNavigate();
  
  // Mock user salary data - in real app this would come from form/API
  const [userPercentile] = useState(75); // User beats 75% of people
  const [userSalary] = useState(15000); // User's salary
  
  const getEmotionalMessage = (percentile: number) => {
    if (percentile >= 90) {
      return {
        title: "你站在了金字塔尖！",
        subtitle: "大佬，饿饿，饭饭！",
        icon: "👑",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500",
        textColor: "text-yellow-600"
      };
    } else if (percentile >= 70) {
      return {
        title: "优秀！",
        subtitle: "你已经跑赢了绝大多数同龄人！",
        icon: "🚀", 
        color: "bg-gradient-to-r from-green-400 to-blue-500",
        textColor: "text-green-600"
      };
    } else if (percentile >= 40) {
      return {
        title: "稳稳的中坚力量",
        subtitle: "生活不止有工作，还有诗和远方~",
        icon: "🌟",
        color: "bg-gradient-to-r from-blue-400 to-purple-500", 
        textColor: "text-blue-600"
      };
    } else {
      return {
        title: "兄dei，是时候支棱起来了！",
        subtitle: "你的潜力不止于此！",
        icon: "💪",
        color: "bg-gradient-to-r from-purple-400 to-pink-500",
        textColor: "text-purple-600"
      };
    }
  };

  const emotionalData = getEmotionalMessage(userPercentile);
  
  const comparisonData = [
    { label: "全国平均薪资", value: 8500, icon: "🏢" },
    { label: "同城市平均", value: 12000, icon: "🏙️" },
    { label: "同行业平均", value: 13500, icon: "💼" },
    { label: "同年龄平均", value: 11800, icon: "👥" },
  ];

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="薪资排名" 
        showBack={true}
      />
      
      <div className="p-4 space-y-6">
        {/* Main Ranking Card */}
        <Card className="relative overflow-hidden border-wechat-gray rounded-xl shadow-lg">
          <div className={`${emotionalData.color} p-6 text-white`}>
            <div className="text-center space-y-4">
              <div className="text-6xl">{emotionalData.icon}</div>
              <h1 className="text-2xl font-bold">
                🤑 你的薪资打败了全国多少对手？
              </h1>
              <div className="bg-white/20 rounded-full p-6">
                <div className="text-5xl font-bold">{userPercentile}%</div>
                <div className="text-lg">的求职者</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white">
            <div className="text-center space-y-3">
              <div className={`text-2xl font-bold ${emotionalData.textColor}`}>
                {emotionalData.title}
              </div>
              <div className="text-lg text-wechat-darkGray">
                {emotionalData.subtitle}
              </div>
              
              <div className="flex items-center justify-center space-x-2 mt-4">
                <TrendingUp className={`h-5 w-5 ${emotionalData.textColor}`} />
                <span className="text-sm text-wechat-darkGray">
                  你的薪资: <span className="font-bold text-wechat-green">¥{userSalary.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Comparison */}
        <Card className="p-6 border-wechat-gray rounded-xl shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-wechat-green" />
            <h3 className="text-lg font-medium text-wechat-green">详细对比分析</h3>
          </div>
          
          <div className="space-y-4">
            {comparisonData.map((item, index) => {
              const percentage = Math.min((userSalary / item.value) * 100, 150);
              const isAboveAverage = userSalary > item.value;
              const difference = Math.abs(userSalary - item.value);
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm text-wechat-darkGray">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">¥{item.value.toLocaleString()}</div>
                      <div className={`text-xs ${isAboveAverage ? 'text-green-600' : 'text-red-600'}`}>
                        {isAboveAverage ? '+' : '-'}¥{difference.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className="h-2"
                  />
                </div>
              );
            })}
          </div>
        </Card>

        {/* Action Suggestions */}
        <Card className="p-6 border-wechat-gray rounded-xl shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-wechat-green" />
            <h3 className="text-lg font-medium text-wechat-green">提升建议</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Sparkles className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <div className="font-medium text-wechat-darkGray">技能提升</div>
                <div className="text-sm text-gray-600">学习新技术栈，提升核心竞争力</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <div className="font-medium text-wechat-darkGray">跳槽时机</div>
                <div className="text-sm text-gray-600">市场行情不错，可以考虑换个环境</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Sparkles className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium text-wechat-darkGray">副业发展</div>
                <div className="text-sm text-gray-600">开拓多元化收入来源</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-3 mt-8">
          <button 
            onClick={() => navigate("/polls")} 
            className="wechat-btn-primary flex items-center justify-center"
          >
            <span className="mr-2">📊</span> 查看更多调查
          </button>
          
          <button 
            onClick={() => navigate("/results-demo")} 
            className="wechat-btn-secondary flex items-center justify-center"
          >
            <span className="mr-2">📈</span> 查看详细分析
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryRankingPage;