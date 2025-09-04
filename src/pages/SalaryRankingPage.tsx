import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TrendingUp, BarChart3, Target, GraduationCap } from "lucide-react";

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
        title: "你站在了金字塔尖！大佬，饿饿，饭饭！",
        icon: "🏆",
        level: "顶尖"
      };
    } else if (percentile >= 70) {
      return {
        title: "优秀！你已经跑赢了绝大多数同龄人！",
        icon: "🚀", 
        level: "优秀"
      };
    } else if (percentile >= 40) {
      return {
        title: "稳稳的中坚力量，生活不止有工作，还有诗和远方~",
        icon: "🌟",
        level: "中坚"
      };
    } else {
      return {
        title: "兄dei，是时候支棱起来了！你的潜力不止于此！",
        icon: "💪",
        level: "潜力"
      };
    }
  };

  // Age-based ranking emotional messages
  const getAgeMessage = (percentile: number) => {
    if (percentile >= 80) {
      return {
        title: "97年的你，活成了95后羡慕的样子！",
        icon: "👑"
      };
    } else if (percentile >= 40) {
      return {
        title: "和大多数'XX后'一样，在努力搞钱的路上狂奔！",
        icon: "🏃‍♂️"
      };
    } else {
      return {
        title: "别慌！你的同龄人可能只是比你多打了几年工👀",
        icon: "😅"
      };
    }
  };

  // Industry ranking emotional messages
  const getIndustryMessage = (percentile: number) => {
    if (percentile >= 75) {
      return {
        title: `不愧是${userIndustry}的黄金战士！这薪资很可以！`,
        icon: "⭐"
      };
    } else if (percentile >= 40) {
      return {
        title: "稳稳拿捏行业平均水平，安心吃鸡！",
        icon: "✅"
      };
    } else {
      return {
        title: "心疼你3秒……是行业不行，还是老板不行？",
        icon: "😢"
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
      
      <div className="p-4 space-y-4">
        {/* 1. Overall Salary Ranking */}
        <Card className="p-6 bg-white border border-gray-200">
          <div className="text-center space-y-4">
            <h1 className="text-lg font-bold text-gray-800">
              🤑 你的薪资打败了全国多少对手？
            </h1>
            <div className="text-4xl">{overallData.icon}</div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{userPercentile}%</div>
              <div className="text-gray-600">打败了全国{userPercentile}%的求职者</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-base font-medium text-gray-800">
                {overallData.title}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <TrendingUp className="h-4 w-4" />
              <span>你的薪资: ¥{userSalary.toLocaleString()}</span>
            </div>
          </div>
        </Card>

        {/* 2. Age-based Salary Ranking */}
        <Card className="p-6 bg-white border border-gray-200">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-bold text-gray-800">
              📊 和同龄人PK，你是啥段位？
            </h2>
            <div className="text-4xl">{ageData.icon}</div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">{agePercentile}%</div>
              <div className="text-gray-600">超越了{agePercentile}%的同龄人</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-base font-medium text-gray-800">
                {ageData.title}
              </div>
            </div>
          </div>
        </Card>

        {/* 3. Industry Salary Ranking */}
        <Card className="p-6 bg-white border border-gray-200">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-bold text-gray-800">
              ⚔️ 在本行当里，你是卷王还是躺平？
            </h2>
            <div className="text-4xl">{industryData.icon}</div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">{industryPercentile}%</div>
              <div className="text-gray-600">在{userIndustry}行业中的排名</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-base font-medium text-gray-800">
                {industryData.title}
              </div>
            </div>
          </div>
        </Card>

        {/* 4. Alumni Salary Discovery */}
        <Card className="p-6 bg-white border border-gray-200">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-bold text-gray-800">
              🏫 校友圈薪资大揭秘！没给母校丢脸吧？
            </h2>
            <div className="text-4xl">🎓</div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">{alumniPercentile}%</div>
              <div className="text-gray-600">超越了{alumniPercentile}%的{userSchool}校友</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-base font-medium text-indigo-600 mb-2">
                你的薪资已超过{alumniPercentile}%的同校校友！母校为你骄傲！
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-yellow-50 rounded-lg text-gray-700">
                哦豁，你的直系学长平均薪资是¥18,500，差距看到了吗？
              </div>
              <div className="p-3 bg-red-50 rounded-lg text-gray-700">
                别划走！你的一位同班同学薪资比你高¥5,000 👀
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-3 mt-6">
          <button 
            onClick={() => navigate("/polls")} 
            className="bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            📊 查看更多调查
          </button>
          
          <button 
            onClick={() => navigate("/results-demo")} 
            className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            📈 查看详细分析
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryRankingPage;