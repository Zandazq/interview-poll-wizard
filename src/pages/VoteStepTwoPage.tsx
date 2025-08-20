import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";

const VoteStepTwoPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualIncome: "",
    majorRelevance: "",
    skillProficiency: "单选",
    age: "",
    graduationTime: "",
    school: "",
    major: "",
    majorGrade: [5],
    skillComparison: "",
    industryExperience: "单选",
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
              💰 您的年薪总包（单位：万元）
            </Label>
            
            <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
              <div className="mb-2">
                <strong>▸ 含税年薪 = 月薪×12 + 年终奖 + 补贴</strong>
              </div>
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

          {/* 通勤高票指数 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">单程通勤时长 (单选)</h3>
            <div className="space-y-3">
              {[
                "🏠  ≤10分钟​​：拖鞋睡衣上班党",
                "🚲  11-20分钟​​：单车小电驴搞定",
                "🚇  21-45分钟​​：刷完朋友圈刚好到",
                "🔥  46-90分钟​​：每天多打1小时黑工",
                "🌌  >90分钟​​：周一起床时室友刚睡"
              ].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("skillProficiency", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.skillProficiency === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.skillProficiency === option && <Check className="h-3 w-3" />}
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
              
              <Input
                id="school"
                placeholder="请输入学校名称"
                value={formData.school}
                onChange={(e) => handleChange("school", e.target.value)}
                className="wechat-input"
              />
            </div>

            <div>
              <Label htmlFor="major" className="text-wechat-darkGray mb-2 block">
                专业
              </Label>
              
              <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
                <div className="mb-2">📚 你的专业是金矿or天坑？</div>
                <div className="font-medium text-wechat-darkGray">💡 解锁秘籍：输入专业查对口率&薪资</div>
              </div>
              
              <Input
                id="major"
                placeholder="请输入专业名称"
                value={formData.major}
                onChange={(e) => handleChange("major", e.target.value)}
                className="wechat-input"
              />
            </div>
          </div>

          {/* 对本专业的前景打分 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">🔥 你的专业还能混口饭吗？（10分最香，1分快逃）</h3>
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

          {/* 一句话比拟本专业状况 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一句话吐槽本专业硬伤（可选）</h3>
            <div className="space-y-2">
              <Textarea
                id="skillComparison"
                placeholder="请吐槽您专业的硬伤..."
                value={formData.skillComparison}
                onChange={(e) => handleChange("skillComparison", e.target.value)}
                className="wechat-input resize-none"
                maxLength={50}
                rows={3}
              />
              <div className="text-right text-xs text-wechat-mediumGray">
                {formData.skillComparison.length}/50字
              </div>
            </div>
          </div>

          {/* 行业选择倾向 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">行业选择倾向 (单选)</h3>
            <div className="space-y-3">
              {["🏛️ 考公考编  ：宇宙尽头", "🎲 创业：赌命模式", "⛰️ 死磕本专业  ：愚公移山", "🔄 想转行：肉身翻墙"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("industryExperience", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.industryExperience === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.industryExperience === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
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