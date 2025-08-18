import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const VoteStepTwoPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualIncome: "",
    majorRelevance: "1-10分",
    skillProficiency: "单选",
    age: "",
    graduationTime: "",
    school: "",
    major: "",
    majorGrade: "1-10分",
    skillComparison: "可选",
    industryExperience: "单选",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
              当前所在年收入
            </Label>
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
            <h3 className="text-base font-medium mb-4">专业对口相关性 (1-10分)</h3>
            <div className="space-y-3">
              {Array.from({length: 10}, (_, i) => (i + 1).toString()).map((score) => (
                <div key={score} className="wechat-radio-item rounded-lg" onClick={() => handleChange("majorRelevance", score)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {score}分
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.majorRelevance === score ? "wechat-checkbox-selected" : ""}`}>
                      {formData.majorRelevance === score && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 通勤高票指数 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">通勤高票指数 (单选)</h3>
            <div className="space-y-3">
              {["很方便", "一般", "比较远", "很远"].map((option) => (
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
            <h3 className="text-base font-medium mb-4">对本专业的前景打分 (1-10分)</h3>
            <div className="space-y-3">
              {Array.from({length: 10}, (_, i) => (i + 1).toString()).map((score) => (
                <div key={score} className="wechat-radio-item rounded-lg" onClick={() => handleChange("majorGrade", score)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {score}分
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.majorGrade === score ? "wechat-checkbox-selected" : ""}`}>
                      {formData.majorGrade === score && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 一句话比拟本专业状况 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一句话比拟本专业状况 (可选)</h3>
            <div className="space-y-3">
              {["前景光明", "平平无奇", "竞争激烈", "不太乐观", "需要转行"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("skillComparison", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.skillComparison === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.skillComparison === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 行业选择倾向 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">行业选择倾向 (单选)</h3>
            <div className="space-y-3">
              {["互联网", "金融", "制造业", "教育", "医疗", "政府机构", "创业", "其他"].map((option) => (
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