
import React from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SurveyResultsDemoPage = () => {
  const navigate = useNavigate();
  
  const personalStats = [
    { text: "你的学历打败了", icon: "🎓", highlight: "68%", detail: "的程序员" },
    { text: "你的薪资打败了", icon: "💰", highlight: "45%", detail: "的同行" },
    { text: "同等经验同等学历期望薪资平均", icon: "📊", highlight: "28K", detail: "/月" },
    { text: "同等年龄平均薪资", icon: "👥", highlight: "32K", detail: "/月" },
    { text: "你的生活压力指数", icon: "💼", highlight: "中等", detail: "有房贷车贷" },
  ];
  
  const interviewData = [
    { range: "0-2家", votes: "45", percentage: 30, isUser: false },
    { range: "3-5家", votes: "38", percentage: 25, isUser: true },
    { range: "6-8家", votes: "28", percentage: 19, isUser: false },
    { range: "9-12家", votes: "22", percentage: 15, isUser: false },
    { range: "13家以上", votes: "10", percentage: 6, isUser: false },
    { range: "未面试", votes: "7", percentage: 5, isUser: false },
  ];
  
  const salaryDistribution = [
    { range: "5K-10K", count: 12, percentage: 8 },
    { range: "10K-15K", count: 25, percentage: 17 },
    { range: "15K-20K", count: 35, percentage: 24, isUser: true },
    { range: "20K-25K", count: 28, percentage: 19 },
    { range: "25K-30K", count: 20, percentage: 14 },
    { range: "30K以上", count: 25, percentage: 18 },
  ];
  
  const careerChoiceData = [
    { choice: "当然会，代码比人心好懂", votes: 156, percentage: 65, isUser: false },
    { choice: "不会，该给年轻人让路了", votes: 84, percentage: 35, isUser: true },
  ];
  
  const loanPressureData = [
    { type: "无贷款", count: 45, percentage: 30 },
    { type: "仅房贷", count: 38, percentage: 25 },
    { type: "仅车贷", count: 22, percentage: 15 },
    { type: "房贷+车贷", count: 28, percentage: 18, isUser: true },
    { type: "多种贷款", count: 17, percentage: 12 },
  ];
  
  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="投票结果示例" 
        showBack={true}
      />
      
      {/* 示例数据提示横幅 */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 mx-4 mt-4 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <span className="text-2xl mr-2">⚠️</span>
          <div className="text-center">
            <div className="text-lg font-bold">这是示例数据展示</div>
            <div className="text-sm opacity-90">参与真实投票后可查看完整数据分析</div>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        {/* 说明卡片 */}
        <Card className="p-4 border-wechat-green border-2 bg-green-50">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-2">✨</span>
            <h3 className="text-lg font-medium text-wechat-green">投票后您将获得</h3>
          </div>
          <p className="text-sm text-wechat-darkGray">
            完成投票后，您将看到详细的数据分析，了解自己在行业中的位置
          </p>
        </Card>

        {/* 个人数据分析 */}
        <Card className="p-4 space-y-4 border-wechat-gray rounded-xl shadow-sm relative">
          <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full border border-orange-200">
            示例数据
          </div>
          <h3 className="text-lg font-medium text-wechat-green mb-2 text-center">📊 个人数据分析</h3>
          {personalStats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-xl mr-3">{stat.icon}</span>
              <div className="flex-1">
                <p className="text-base text-wechat-darkGray">
                  {stat.text}
                  <span className="text-wechat-green font-bold text-lg mx-1">{stat.highlight}</span>
                  {stat.detail}
                </p>
              </div>
              <ChevronRight className="text-gray-400 h-5 w-5" />
            </div>
          ))}
        </Card>
        
        {/* 面试频率对比 */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm relative">
          <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full border border-orange-200">
            示例数据
          </div>
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">🎯 一个月平均面试几家</h3>
          
          <div className="space-y-3">
            {interviewData.map((item, index) => (
              <div key={index} className={`space-y-1 ${item.isUser ? 'bg-green-50 p-2 rounded-lg border border-wechat-green' : ''}`}>
                <div className="flex justify-between items-center text-sm text-wechat-darkGray">
                  <div className="flex items-center">
                    <span>{item.range}</span>
                    {item.isUser && <span className="ml-2 text-xs bg-wechat-green text-white px-2 py-1 rounded">您的选择</span>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{item.votes} 票</span>
                    <span className="text-wechat-green font-medium">{item.percentage}%</span>
                  </div>
                </div>
                <Progress 
                  value={item.percentage} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* 薪资分布对比 */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm relative">
          <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full border border-orange-200">
            示例数据
          </div>
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">💰 薪资分布对比</h3>
          
          <div className="space-y-3">
            {salaryDistribution.map((item, index) => (
              <div key={index} className={`space-y-1 ${item.isUser ? 'bg-green-50 p-2 rounded-lg border border-wechat-green' : ''}`}>
                <div className="flex justify-between items-center text-sm text-wechat-darkGray">
                  <div className="flex items-center">
                    <span>{item.range}</span>
                    {item.isUser && <span className="ml-2 text-xs bg-wechat-green text-white px-2 py-1 rounded">您的区间</span>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{item.count} 人</span>
                    <span className="text-wechat-green font-medium">{item.percentage}%</span>
                  </div>
                </div>
                <Progress 
                  value={item.percentage} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* 生活压力分析 */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm relative">
          <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full border border-orange-200">
            示例数据
          </div>
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">🏠 生活压力分析</h3>
          
          <div className="space-y-3">
            {loanPressureData.map((item, index) => (
              <div key={index} className={`space-y-1 ${item.isUser ? 'bg-green-50 p-2 rounded-lg border border-wechat-green' : ''}`}>
                <div className="flex justify-between items-center text-sm text-wechat-darkGray">
                  <div className="flex items-center">
                    <span>{item.type}</span>
                    {item.isUser && <span className="ml-2 text-xs bg-wechat-green text-white px-2 py-1 rounded">您的情况</span>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{item.count} 人</span>
                    <span className="text-wechat-green font-medium">{item.percentage}%</span>
                  </div>
                </div>
                <Progress 
                  value={item.percentage} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </Card>
        
        {/* 职业选择态度 */}
        <Card className="p-4 border-wechat-gray rounded-xl shadow-sm relative">
          <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full border border-orange-200">
            示例数据
          </div>
          <h3 className="text-lg font-medium mb-4 text-center text-wechat-green">🤔 职业选择态度</h3>
          
          <div className="space-y-3">
            {careerChoiceData.map((item, index) => (
              <div key={index} className={`space-y-2 ${item.isUser ? 'bg-green-50 p-2 rounded-lg border border-wechat-green' : ''}`}>
                <div className="flex justify-between items-center text-sm text-wechat-darkGray">
                  <div className="flex items-center flex-1">
                    <span className="flex-1">{item.choice}</span>
                    {item.isUser && <span className="ml-2 text-xs bg-wechat-green text-white px-2 py-1 rounded">您的选择</span>}
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <Progress 
                    value={item.percentage} 
                    className="h-2 flex-1 mr-4"
                  />
                  <div className="flex items-center space-x-2">
                    <span>{item.votes}票</span>
                    <span className="text-wechat-green font-medium">{item.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 行动建议 */}
        <Card className="p-4 border-wechat-green border-2 bg-blue-50">
          <h3 className="text-lg font-medium mb-3 text-center text-wechat-green">💡 个性化建议</h3>
          <div className="space-y-2 text-sm text-wechat-darkGray">
            <p>• 您的薪资处于中等水平，可考虑技能提升获得更好机会</p>
            <p>• 面试频率适中，建议保持当前求职节奏</p>
            <p>• 生活压力较大，建议合理规划财务和职业发展</p>
            <p>• 与68%的人有相似职业态度，这很正常</p>
          </div>
        </Card>
        
        {/* Fixed floating button */}
        <button 
          onClick={() => navigate("/poll-form")} 
          className="fixed bottom-6 right-6 z-50 bg-wechat-green hover:bg-wechat-green/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium animate-pulse"
        >
          <span>📝</span>
          <span>立即参与投票</span>
        </button>
      </div>
    </div>
  );
};

export default SurveyResultsDemoPage;
