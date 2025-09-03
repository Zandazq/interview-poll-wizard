import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Users, Target, Sparkles, BarChart3, Swords, GraduationCap } from "lucide-react";

const SalaryRankingPage = () => {
  const navigate = useNavigate();
  
  // Mock user data - in real app this would come from form/API
  const [userSalary] = useState(15000);
  const [userPercentile] = useState(75); // Overall ranking
  const [agePercentile] = useState(82); // Age-based ranking  
  const [industryPercentile] = useState(68); // Industry ranking
  const [alumniPercentile] = useState(78); // Alumni ranking
  const [userAge] = useState(25);
  const [userIndustry] = useState("互联网");
  const [userSchool] = useState("清华大学");
  
  // Overall ranking emotional messages
  const getOverallMessage = (percentile: number) => {
    if (percentile >= 90) {
      return {
        title: "你站在了金字塔尖！",
        subtitle: "大佬，饿饿，饭饭！",
        icon: "👑",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500"
      };
    } else if (percentile >= 70) {
      return {
        title: "优秀！",
        subtitle: "你已经跑赢了绝大多数同龄人！",
        icon: "🚀", 
        color: "bg-gradient-to-r from-green-400 to-blue-500"
      };
    } else if (percentile >= 60) {
      return {
        title: "稳稳的中坚力量",
        subtitle: "生活不止有工作，还有诗和远方~",
        icon: "🌟",
        color: "bg-gradient-to-r from-blue-400 to-purple-500"
      };
    } else {
      return {
        title: "兄dei，是时候支棱起来了！",
        subtitle: "你的潜力不止于此！",
        icon: "💪",
        color: "bg-gradient-to-r from-purple-400 to-pink-500"
      };
    }
  };

  // Age-based ranking emotional messages
  const getAgeMessage = (percentile: number) => {
    const birthYear = new Date().getFullYear() - userAge;
    if (percentile >= 80) {
      return {
        title: `${birthYear}年的你，活成了${birthYear-1}后羡慕的样子！`,
        icon: "🏆",
        color: "bg-gradient-to-r from-pink-400 to-red-500"
      };
    } else if (percentile >= 40) {
      return {
        title: `和大多数'${birthYear.toString().slice(-2)}后'一样，在努力搞钱的路上狂奔！`,
        icon: "🏃‍♂️",
        color: "bg-gradient-to-r from-blue-400 to-cyan-500"
      };
    } else {
      return {
        title: "别慌！你的同龄人可能只是比你多打了几年工👀",
        icon: "😅",
        color: "bg-gradient-to-r from-gray-400 to-gray-600"
      };
    }
  };

  // Industry ranking emotional messages
  const getIndustryMessage = (percentile: number) => {
    if (percentile >= 75) {
      return {
        title: `不愧是${userIndustry}的黄金战士！这薪资很可以！`,
        icon: "⚔️",
        color: "bg-gradient-to-r from-yellow-400 to-amber-500"
      };
    } else if (percentile >= 40) {
      return {
        title: "稳稳拿捏行业平均水平，安心吃鸡！",
        icon: "🐔",
        color: "bg-gradient-to-r from-green-400 to-emerald-500"
      };
    } else {
      return {
        title: "心疼你3秒……是行业不行，还是老板不行？",
        icon: "😢",
        color: "bg-gradient-to-r from-purple-400 to-violet-500"
      };
    }
  };

  const overallData = getOverallMessage(userPercentile);
  const ageData = getAgeMessage(agePercentile);
  const industryData = getIndustryMessage(industryPercentile);

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="薪资排名" 
        showBack={true}
      />
      
      <div className="p-4 space-y-6">
        {/* 1. Overall Salary Ranking */}
        <Card className="relative overflow-hidden border-wechat-gray rounded-xl shadow-lg">
          <div className={`${overallData.color} p-6 text-white`}>
            <div className="text-center space-y-4">
              <div className="text-6xl">{overallData.icon}</div>
              <h1 className="text-xl font-bold">
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
              <div className="text-xl font-bold text-gray-800">
                {overallData.title}
              </div>
              <div className="text-lg text-wechat-darkGray">
                {overallData.subtitle}
              </div>
              
              <div className="flex items-center justify-center space-x-2 mt-4">
                <TrendingUp className="h-5 w-5 text-wechat-green" />
                <span className="text-sm text-wechat-darkGray">
                  你的薪资: <span className="font-bold text-wechat-green">¥{userSalary.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* 2. Age-based Salary Ranking */}
        <Card className="relative overflow-hidden border-wechat-gray rounded-xl shadow-lg">
          <div className={`${ageData.color} p-6 text-white`}>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <BarChart3 className="h-6 w-6" />
                <h2 className="text-xl font-bold">📊 和同龄人PK，你是啥段位？</h2>
              </div>
              <div className="text-5xl">{ageData.icon}</div>
              <div className="bg-white/20 rounded-full p-4">
                <div className="text-3xl font-bold">第 {Math.ceil((100-agePercentile)/10)} 段位</div>
                <div className="text-sm">超越 {agePercentile}% 同龄人</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white text-center">
            <div className="text-lg font-bold text-gray-800 mb-2">
              {ageData.title}
            </div>
          </div>
        </Card>

        {/* 3. Industry Salary Ranking */}
        <Card className="relative overflow-hidden border-wechat-gray rounded-xl shadow-lg">
          <div className={`${industryData.color} p-6 text-white`}>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Swords className="h-6 w-6" />
                <h2 className="text-xl font-bold">⚔️ 在本行当里，你是卷王还是躺平？</h2>
              </div>
              <div className="text-5xl">{industryData.icon}</div>
              <div className="bg-white/20 rounded-full p-4">
                <div className="text-3xl font-bold">行业排名 {industryPercentile}%</div>
                <div className="text-sm">{userIndustry}行业</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white text-center">
            <div className="text-lg font-bold text-gray-800 mb-2">
              {industryData.title}
            </div>
          </div>
        </Card>

        {/* 4. Alumni Salary Discovery */}
        <Card className="relative overflow-hidden border-wechat-gray rounded-xl shadow-lg">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <GraduationCap className="h-6 w-6" />
                <h2 className="text-xl font-bold">🏫 校友圈薪资大揭秘！没给母校丢脸吧？</h2>
              </div>
              <div className="text-5xl">🎓</div>
              <div className="bg-white/20 rounded-full p-4">
                <div className="text-2xl font-bold">超越 {alumniPercentile}% 校友</div>
                <div className="text-sm">{userSchool}</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white space-y-4">
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-600 mb-2">
                你的薪资已超过{alumniPercentile}%的同校校友！母校为你骄傲！
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-gray-700">哦豁，你的直系学长平均薪资是</span>
                <span className="font-bold text-orange-600">¥18,500</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-gray-700">别划走！你的一位同班同学薪资比你高</span>
                <span className="font-bold text-red-600">¥5,000 👀</span>
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