import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share2, Trophy, Users, Building2 } from "lucide-react";

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

  const handleShare = () => {
    const text = `我的薪资打败了全国${userPercentile}%的求职者！🚀\n查看你的薪资排名 👇`;
    if (navigator.share) {
      navigator.share({
        title: '薪资排名',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    }
  };

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
      
      <div className="p-4 space-y-3">
        {/* Main Result Card */}
        <Card className="p-4 bg-white text-center">
          <div className="text-3xl mb-2">{overallData.icon}</div>
          <h1 className="text-lg font-bold mb-2">🤑 你的薪资打败了全国多少对手？</h1>
          <div className="text-2xl font-bold text-primary mb-1">{userPercentile}%</div>
          <div className="text-sm text-gray-600 mb-2">你的薪资: ¥{userSalary.toLocaleString()}</div>
          <div className="bg-gray-50 rounded p-2 text-sm">{overallData.title}</div>
        </Card>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="p-3 text-center bg-white">
            <div className="text-lg">{ageData.icon}</div>
            <div className="text-xs text-gray-600 mb-1">同龄PK</div>
            <div className="text-sm font-bold text-blue-600">{agePercentile}%</div>
          </Card>
          
          <Card className="p-3 text-center bg-white">
            <div className="text-lg">{industryData.icon}</div>
            <div className="text-xs text-gray-600 mb-1">行业排名</div>
            <div className="text-sm font-bold text-green-600">{industryPercentile}%</div>
          </Card>
          
          <Card className="p-3 text-center bg-white">
            <div className="text-lg">🎓</div>
            <div className="text-xs text-gray-600 mb-1">校友圈</div>
            <div className="text-sm font-bold text-purple-600">{alumniPercentile}%</div>
          </Card>
        </div>

        {/* Insights */}
        <Card className="p-4 bg-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-blue-500" />
              <span>{ageData.title}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="w-4 h-4 text-green-500" />
              <span>{industryData.title}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Trophy className="w-4 h-4 text-purple-500" />
              <span>已超过{alumniPercentile}%同校校友！</span>
            </div>
          </div>
        </Card>

        {/* Major Relevance Module */}
        <Card className="p-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span className="text-sm font-medium">你的工作对得起学费吗？</span>
            </div>
            <button className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
              示例数据
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">完全对口</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">142 票</span>
                <span className="text-sm font-medium text-green-600">35%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "35%" }}></div>
            </div>
            
            <div className="border-2 border-green-400 rounded-lg p-3 bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">基本对口</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">您的选择</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">98 票</span>
                  <span className="text-sm font-medium text-green-600">24%</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "24%" }}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">部分对口</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">76 票</span>
                <span className="text-sm font-medium text-green-600">19%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "19%" }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">不太对口</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">54 票</span>
                <span className="text-sm font-medium text-green-600">13%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "13%" }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">完全不对口</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">36 票</span>
                <span className="text-sm font-medium text-green-600">9%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "9%" }}></div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-600">{majorData.title}</div>
          </div>
        </Card>

        {/* Major Prospects Module */}
        <Card className="p-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-medium">你的专业还能混口饭吗？</span>
            </div>
            <div className="text-xs text-gray-500">(10分最香，1分快逃)</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">1-3分:</span>
                <span className="text-sm text-gray-700">趁早改行</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">28 票</span>
                <span className="text-sm font-medium text-green-600">12%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "12%" }}></div>
            </div>
            <div className="text-xs text-gray-500 ml-4">→ "毕业即失业，送外卖都嫌晚"</div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">4-5分:</span>
                <span className="text-sm text-gray-700">勉强糊口</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">45 票</span>
                <span className="text-sm font-medium text-green-600">19%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "19%" }}></div>
            </div>
            <div className="text-xs text-gray-500 ml-4">→ "工资不够房租，靠爹妈接济"</div>
            
            <div className="border-2 border-green-400 rounded-lg p-3 bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600 font-bold">6-7分:</span>
                  <span className="text-sm text-gray-700">饿不死</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">您的选择</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">68 票</span>
                  <span className="text-sm font-medium text-green-600">28%</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "28%" }}></div>
              </div>
              <div className="text-xs text-gray-500 ml-4">→ "加班换温饱，升职别想了"</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">8-9分:</span>
                <span className="text-sm text-gray-700">吃香喝辣</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">72 票</span>
                <span className="text-sm font-medium text-green-600">30%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <div className="text-xs text-gray-500 ml-4">→ "猪头天天挖，跳槽就加薪"</div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">10分:</span>
                <span className="text-sm text-gray-700">人生赢家</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">27 票</span>
                <span className="text-sm font-medium text-green-600">11%</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "11%" }}></div>
            </div>
            <div className="text-xs text-gray-500 ml-4">→ "躺着数钱，公司怕你离职"</div>
          </div>
        </Card>

        {/* Major Complaints */}
        <Card className="p-4 bg-white">
          <div className="text-center">
            <div className="text-sm font-medium mb-2">🚨 一起吐槽本专业！</div>
            <div className="grid grid-cols-2 gap-2">
              {majorComplaints.slice(0, 4).map((complaint, index) => (
                <button
                  key={index}
                  className="p-2 bg-gray-50 rounded text-xs hover:bg-gray-100"
                >
                  <div className="text-sm">{complaint.icon}</div>
                  <div className="text-gray-700 text-xs">{complaint.text}</div>
                  <div className="text-gray-500 text-xs">{complaint.count}人</div>
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-600 mt-2">
              找到520位和你一样的战友！
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={handleShare}
            variant="outline"
            className="flex-1"
          >
            <Share2 className="w-4 h-4 mr-1" />
            分享排名
          </Button>
          
          <Button 
            onClick={() => navigate("/polls")} 
            className="flex-1"
          >
            📊 更多调查
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalaryRankingPage;