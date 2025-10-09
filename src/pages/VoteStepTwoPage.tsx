import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const VoteStepTwoPage: React.FC = () => {
  const navigate = useNavigate();
  
  const schools = [
    "清华大学", "北京大学", "复旦大学", "上海交通大学", "浙江大学", "中国科学技术大学",
    "南京大学", "华中科技大学", "中山大学", "西安交通大学", "哈尔滨工业大学", "北京航空航天大学",
    "同济大学", "四川大学", "东南大学", "北京师范大学", "武汉大学", "南开大学", 
    "山东大学", "中南大学", "西北工业大学", "大连理工大学", "重庆大学", "电子科技大学",
    "华南理工大学", "北京理工大学", "天津大学", "东北大学", "湖南大学", "兰州大学",
    "华东师范大学", "中国农业大学", "北京科技大学", "西南交通大学", "华中师范大学", "中国海洋大学",
    "北京交通大学", "南京理工大学", "华东理工大学", "北京邮电大学", "合肥工业大学", "南京航空航天大学",
    "西安电子科技大学", "西南大学", "暨南大学", "北京化工大学", "陕西师范大学", "河海大学",
    "北京工业大学", "福州大学", "广西大学", "中国石油大学", "云南大学", "太原理工大学"
  ];

  const majors = [
    "计算机科学与技术", "软件工程", "人工智能", "数据科学与大数据技术", "网络工程", "信息安全",
    "电子信息工程", "通信工程", "自动化", "电气工程及其自动化", "机械工程", "机械设计制造及其自动化",
    "土木工程", "建筑学", "工程管理", "化学工程与工艺", "材料科学与工程", "环境工程",
    "金融学", "经济学", "国际经济与贸易", "会计学", "财务管理", "工商管理", "市场营销",
    "人力资源管理", "物流管理", "电子商务", "信息管理与信息系统", "法学", "汉语言文学",
    "英语", "新闻学", "广告学", "心理学", "教育学", "学前教育", "数学与应用数学",
    "物理学", "化学", "生物科学", "临床医学", "护理学", "药学", "中医学", "口腔医学",
    "建筑设计", "城乡规划", "风景园林", "工业设计", "视觉传达设计", "环境设计", "产品设计",
    "音乐学", "美术学", "舞蹈学", "播音与主持艺术", "表演", "动画", "数字媒体艺术"
  ];
  
  const [formData, setFormData] = useState({
    annualIncome: "",
    majorRelevance: "",
    age: "",
    graduationTime: "",
    school: "",
    major: "",
    majorGrade: [5],
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, majorGrade: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Step 2 form submitted:", formData);
    navigate("/vote-step-three");
  };

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="投票步骤二" 
        showBack={true}
      />
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-wechat-darkGray mb-2">
            应届生-在校/失业
          </h2>
          <p className="text-sm text-wechat-mediumGray">
            请填写您的基本信息
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 当前所在年收入 */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="annualIncome" className="text-wechat-darkGray mb-2 block">
              💰 您的税前年收入总额（单位：万元）
            </Label>
            
            <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
              <div className="mb-2">▸ 销售岗：底薪+提成年度总值</div>
              <div className="mb-3">▸ 股票/期权：按当前市场价值估算</div>
              
              <div className="border-t pt-3">
                <div className="font-medium text-wechat-darkGray mb-2">📌 填报指南：</div>
                <div className="mb-1">◉ 在职：填写当前预估年收入</div>
                <div className="mb-1">◉ 求职中：填写上份工作年收入</div>
                <div>◉ 自由职业：填写去年实际收入</div>
              </div>
            </div>
            
            <Input
              id="annualIncome"
              placeholder="请输入年收入"
              value={formData.annualIncome}
              onChange={(e) => handleChange("annualIncome", e.target.value)}
              className="wechat-input"
              type="number"
            />
          </div>

          {/* 专业对口相关性 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">专业对口相关性</h3>
            <div className="space-y-3">
              {[
                "😭 完全无关​​：转行/技能用不上",
                "🙂弱相关​​：部分通识课有用/需自学转行", 
                "😊较对口​​：专业大类匹配但细分方向不同",
                "🌟高度对口​​：专业名称与岗位直接一致"
              ].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("majorRelevance", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.majorRelevance === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.majorRelevance === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* 基本信息 */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div>
              <Label htmlFor="age" className="text-wechat-darkGray mb-2 block">
                年龄
              </Label>
              
              <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
                <div className="mb-2">同龄人都在赚多少？</div>
                <div className="font-medium text-wechat-darkGray">💡 解锁秘籍：填写年龄看同龄人薪资段位</div>
              </div>
              
              <Input
                id="age"
                placeholder="请输入年龄"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className="wechat-input"
                type="number"
              />
            </div>

            <div>
              <Label htmlFor="graduationTime" className="text-wechat-darkGray mb-2 block">
                毕业时间
              </Label>
              <Input
                id="graduationTime"
                placeholder="请输入毕业时间"
                value={formData.graduationTime}
                onChange={(e) => handleChange("graduationTime", e.target.value)}
                className="wechat-input"
              />
            </div>

            <div>
              <Label htmlFor="school" className="text-wechat-darkGray mb-2 block">
                学校
              </Label>
              
              <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
                <div className="mb-2">🏫 你的母校多能打？</div>
                <div className="font-medium text-wechat-darkGray">💡 解锁秘籍：输入学校查看校友薪资天花板</div>
              </div>
              
              <Select value={formData.school} onValueChange={(value) => handleChange("school", value)}>
                <SelectTrigger className="wechat-input">
                  <SelectValue placeholder="请选择学校" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-48">
                  {schools.map((school) => (
                    <SelectItem key={school} value={school} className="hover:bg-gray-50">
                      {school}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="major" className="text-wechat-darkGray mb-2 block">
                专业
              </Label>
              
              <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
                <div className="mb-2">📚 你的专业是金矿or天坑？</div>
                <div className="font-medium text-wechat-darkGray">💡 解锁秘籍：输入专业查对口率&薪资</div>
              </div>
              
              <Select value={formData.major} onValueChange={(value) => handleChange("major", value)}>
                <SelectTrigger className="wechat-input">
                  <SelectValue placeholder="请选择专业" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-48">
                  {majors.map((major) => (
                    <SelectItem key={major} value={major} className="hover:bg-gray-50">
                      {major}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 对本专业的前景打分 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">🔥 你的专业还能混口饭吗？（10分最香，1分快逃）</h3>
            
            <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-red-600">1-3分：趁早改行</span>
                  <div className="ml-4 text-xs">→ "毕业即失业，送外卖都嫌晚"</div>
                </div>
                <div>
                  <span className="font-medium text-orange-600">4-5分：勉强糊口</span>
                  <div className="ml-4 text-xs">→ "工资不够房租，靠爹妈接济"</div>
                </div>
                <div>
                  <span className="font-medium text-yellow-600">6-7分：饿不死</span>
                  <div className="ml-4 text-xs">→ "加班换温饱，升职别想了"</div>
                </div>
                <div>
                  <span className="font-medium text-blue-600">8-9分：吃香喝辣</span>
                  <div className="ml-4 text-xs">→ "猎头天天挖，跳槽就加薪"</div>
                </div>
                <div>
                  <span className="font-medium text-green-600">10分：人生赢家</span>
                  <div className="ml-4 text-xs">→ "躺着数钱，公司怕你离职"</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-wechat-mediumGray">
                <span>1分</span>
                <span>10分</span>
              </div>
              <Slider
                value={formData.majorGrade}
                onValueChange={handleSliderChange}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="text-center text-base font-medium text-wechat-darkGray">
                当前评分: {formData.majorGrade[0]}分
              </div>
            </div>
          </div>


          
          <Button
            type="submit"
            className="wechat-btn-primary w-full mt-6"
          >
            下一步
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VoteStepTwoPage;