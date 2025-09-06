import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SalaryRankingPage = () => {
  const navigate = useNavigate();
  
  // Mock user data
  const [userSalary] = useState(15000);
  const [userPercentile] = useState(75);
  const [agePercentile] = useState(82);
  const [industryPercentile] = useState(68);
  const [alumniPercentile] = useState(78);
  const [userIndustry] = useState("互联网");
  const [userSchool] = useState("清华大学");
  const [userMajor] = useState("计算机科学");
  const [isRelevant] = useState(true);
  const [selectedComplaint] = useState("");
  
  // Messages for different sections
  const getOverallMessage = (percentile: number) => {
    if (percentile >= 90) return { title: "你站在了金字塔尖！大佬，饿饿，饭饭！", icon: "🏆" };
    if (percentile >= 70) return { title: "优秀！你已经跑赢了绝大多数同龄人！", icon: "🚀" };
    if (percentile >= 60) return { title: "稳稳的中坚力量，生活不止有工作，还有诗和远方~", icon: "🌟" };
    return { title: "兄dei，是时候支棱起来了！你的潜力不止于此！", icon: "💪" };
  };

  const getAgeMessage = (percentile: number) => {
    if (percentile >= 80) return { title: "97年的你，活成了95后羡慕的样子！", icon: "👑" };
    if (percentile >= 40) return { title: "和大多数'XX后'一样，在努力搞钱的路上狂奔！", icon: "🏃‍♂️" };
    return { title: "别慌！你的同龄人可能只是比你多打了几年工👀", icon: "😅" };
  };

  const getIndustryMessage = (percentile: number) => {
    if (percentile >= 75) return { title: `不愧是${userIndustry}的黄金战士！这薪资很可以！`, icon: "⭐" };
    if (percentile >= 40) return { title: "稳稳拿捏行业平均水平，安心吃鸡！", icon: "✅" };
    return { title: "心疼你3秒……是行业不行，还是老板不行？", icon: "😢" };
  };

  const getMajorRelevanceMessage = (relevant: boolean) => {
    return relevant 
      ? { title: "学以致用，这学费交得值！", icon: "🎯" }
      : { title: "哈哈哈，又是一个'误入歧途'的小可爱！你的专业是毕业即考古吗？", icon: "🤷‍♂️" };
  };

  const majorComplaints = [
    { text: "天坑专业，快跑！", icon: "💨", count: 520 },
    { text: "表面光鲜，实则搬砖", icon: "🧱", count: 342 },
    { text: "全靠爱发电", icon: "🔋", count: 287 },
    { text: "越老越吃香（香不香我不知道）", icon: "👴", count: 156 }
  ];

  const overallData = getOverallMessage(userPercentile);
  const ageData = getAgeMessage(agePercentile);
  const industryData = getIndustryMessage(industryPercentile);
  const majorData = getMajorRelevanceMessage(isRelevant);

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
            <div className="text-sm text-gray-600">
              你的薪资: ¥{userSalary.toLocaleString()}
            </div>
          </div>
        </Card>

        {/* 2. Age-based Salary Ranking */}
        <Card className="p-4 bg-white">
          <div className="text-center space-y-3">
            <h2 className="text-base font-bold text-gray-800">
              📊 和同龄人PK，你是啥段位？
            </h2>
            <div className="text-2xl">{ageData.icon}</div>
            <div className="text-xl font-bold text-blue-600">{agePercentile}%</div>
            <div className="text-sm text-gray-600">{ageData.title}</div>
          </div>
        </Card>

        {/* 3. Industry Salary Ranking */}
        <Card className="p-4 bg-white">
          <div className="text-center space-y-3">
            <h2 className="text-base font-bold text-gray-800">
              ⚔️ 在本行当里，你是卷王还是躺平？
            </h2>
            <div className="text-2xl">{industryData.icon}</div>
            <div className="text-xl font-bold text-green-600">{industryPercentile}%</div>
            <div className="text-sm text-gray-600">{industryData.title}</div>
          </div>
        </Card>

        {/* 4. Alumni Salary Discovery */}
        <Card className="p-4 bg-white">
          <div className="text-center space-y-3">
            <h2 className="text-base font-bold text-gray-800">
              🏫 校友圈薪资大揭秘！没给母校丢脸吧？
            </h2>
            <div className="text-2xl">🎓</div>
            <div className="text-xl font-bold text-purple-600">{alumniPercentile}%</div>
            <div className="text-sm text-gray-600 mb-2">
              你的薪资已超过{alumniPercentile}%的同校校友！母校为你骄傲！
            </div>
            <div className="space-y-1 text-xs">
              <div className="p-2 bg-yellow-50 rounded text-gray-700">
                哦豁，你的直系学长平均薪资是¥18,500，差距看到了吗？
              </div>
              <div className="p-2 bg-red-50 rounded text-gray-700">
                别划走！你的一位同班同学薪资比你高¥5,000 👀
              </div>
            </div>
          </div>
        </Card>

        {/* 5. Major Relevance */}
        <Card className="p-4 bg-white">
          <div className="text-center space-y-3">
            <h2 className="text-base font-bold text-gray-800">
              📍 你的工作对得起学费吗？
            </h2>
            <div className="text-2xl">{majorData.icon}</div>
            <div className="text-sm text-gray-600">{majorData.title}</div>
          </div>
        </Card>

        {/* 6. Major Complaints */}
        <Card className="p-4 bg-white">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-gray-800 text-center">
              🚨 来！一起吐槽本专业的坑！
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {majorComplaints.map((complaint, index) => (
                <button
                  key={index}
                  className="p-2 bg-gray-50 rounded text-xs hover:bg-gray-100 transition-colors"
                >
                  <div className="text-lg mb-1">{complaint.icon}</div>
                  <div className="text-gray-700">{complaint.text}</div>
                  <div className="text-gray-500 text-xs">{complaint.count}人</div>
                </button>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600 mt-2">
              找到520位和你一样惨的战友！
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-2 mt-4">
          <Button 
            onClick={() => navigate("/polls")} 
            className="w-full"
          >
            📊 查看更多调查
          </Button>
          
          <Button 
            onClick={() => navigate("/results-demo")} 
            variant="outline"
            className="w-full"
          >
            📈 查看详细分析
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalaryRankingPage;