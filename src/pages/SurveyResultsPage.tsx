
import React from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const SurveyResultsPage = () => {
  const navigate = useNavigate();
  
  const surveyStats = [
    { text: "你的学历打败 30%的人" },
    { text: "你的当前薪资/上份薪资打败30%的人" },
    { text: "同等经验同等学历期望薪资平均x×K" },
  ];
  
  const interviewData = [
    { range: "0-5", votes: "?", percentage: "?" },
    { range: "6-10", votes: "?", percentage: "?" },
    { range: "11-15", votes: "?", percentage: "?" },
    { range: "16-20", votes: "?", percentage: "?" },
    { range: "21家以上", votes: "?", percentage: "?" },
    { range: "在职", votes: "?", percentage: "?" },
  ];
  
  return (
    <div className="wechat-container">
      <Header 
        title="调查结果" 
        showBack={true}
      />
      
      <div className="p-4 space-y-6">
        {/* Survey Statistics */}
        <Card className="p-4 space-y-3 border-wechat-gray">
          {surveyStats.map((stat, index) => (
            <p key={index} className="text-base text-wechat-darkGray">
              {stat.text}
            </p>
          ))}
        </Card>
        
        {/* Interview Data */}
        <Card className="p-4 border-wechat-gray">
          <h3 className="text-base font-medium mb-4 text-wechat-darkGray">一个月平均面试几家</h3>
          
          <div className="space-y-3">
            {interviewData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-wechat-darkGray">{item.range}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-wechat-darkGray">{item.votes} 票</span>
                  <span className="text-wechat-darkGray">{item.percentage} %</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Career Plans Section */}
        <Card className="p-4 border-wechat-gray">
          <h3 className="text-base font-medium mb-4 text-wechat-darkGray">转行想法</h3>
          
          <RadioGroup defaultValue="想要转行" className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="option-1" className="text-wechat-darkGray">想要转行</Label>
              <RadioGroupItem value="想要转行" id="option-1" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="option-2" className="text-wechat-darkGray">暂时忍着</Label>
              <RadioGroupItem value="暂时忍着" id="option-2" />
            </div>
          </RadioGroup>
        </Card>
        
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => navigate("/polls")} 
            className="wechat-btn-primary max-w-xs"
          >
            返回调查列表
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyResultsPage;
