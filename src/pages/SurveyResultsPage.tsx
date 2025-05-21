
import React from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SurveyResultsPage = () => {
  const navigate = useNavigate();
  
  const surveyStats = [
    { text: "你的学历打败 30%的人", icon: "🎓", highlight: "30%" },
    { text: "你的当前薪资/上份薪资打败30%的人", icon: "💰", highlight: "30%" },
    { text: "同等经验同等学历期望薪资平均25K", icon: "📊", highlight: "25K" },
  ];
  
  const interviewData = [
    { range: "0-5", votes: "28", percentage: "35" },
    { range: "6-10", votes: "20", percentage: "25" },
    { range: "11-15", votes: "16", percentage: "20" },
    { range: "16-20", votes: "8", percentage: "10" },
    { range: "21家以上", votes: "4", percentage: "5" },
    { range: "在职", votes: "4", percentage: "5" },
  ];
  
  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="调查结果" 
        showBack={true}
      />
      
      <div className="p-4 space-y-6">
        {/* Survey Statistics */}
        <Card className="p-4 space-y-4 border-wechat-gray rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-wechat-green mb-2 text-center">个人薪资统计</h3>
          {surveyStats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-xl mr-3">{stat.icon}</span>
              <p className="text-base text-wechat-darkGray flex-1">
                {stat.text.replace(stat.highlight, '')}
                <span className="text-wechat-green font-medium">{stat.highlight}</span>
              </p>
              <ChevronRight className="text-gray-400 h-5 w-5" />
            </div>
          ))}
        </Card>
        
        {/* Interview Data */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm">
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">一个月平均面试几家</h3>
          
          <div className="space-y-3">
            {interviewData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center text-sm text-wechat-darkGray">
                  <span>{item.range}</span>
                  <div className="flex items-center space-x-2">
                    <span>{item.votes} 票</span>
                    <span className="text-wechat-green font-medium">{item.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-wechat-green h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Career Plans Section */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm">
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">转行想法</h3>
          
          <RadioGroup defaultValue="想要转行" className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <Label htmlFor="option-1" className="text-wechat-darkGray flex items-center">
                <span className="text-xl mr-3">🔄</span>
                想要转行
              </Label>
              <RadioGroupItem value="想要转行" id="option-1" className="text-wechat-green" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <Label htmlFor="option-2" className="text-wechat-darkGray flex items-center">
                <span className="text-xl mr-3">⏳</span>
                暂时忍着
              </Label>
              <RadioGroupItem value="暂时忍着" id="option-2" className="text-wechat-green" />
            </div>
          </RadioGroup>
        </Card>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => navigate("/polls")} 
            className="wechat-btn-primary max-w-xs flex items-center justify-center"
          >
            <span className="mr-1">📋</span> 返回调查列表
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyResultsPage;
