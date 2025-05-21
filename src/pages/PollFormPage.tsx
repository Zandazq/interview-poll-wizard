
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";

const PollFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workExperience: "",
    city: "",
    education: "",
    position: "",
    interviews: "0-5",
    workingStatus: "在职",
    expectedSalary: "",
    currentSalary: "",
    careerPlan: "想要转行",
    regret: "后悔",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/results");
  };

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="看看你的竞争力有多强" 
        showBack={true}
      />
      
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-wechat-mediumGray">让我们一起了解行业现状</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields Section */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="workExperience" className="text-wechat-darkGray">工作年限</Label>
                <Input
                  id="workExperience"
                  placeholder="请输入内容"
                  value={formData.workExperience}
                  onChange={(e) => handleChange("workExperience", e.target.value)}
                  className="wechat-input mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-wechat-darkGray">城市</Label>
                <Input
                  id="city"
                  placeholder="请输入内容"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="wechat-input mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="education" className="text-wechat-darkGray">学历</Label>
                <Input
                  id="education"
                  placeholder="请输入内容"
                  value={formData.education}
                  onChange={(e) => handleChange("education", e.target.value)}
                  className="wechat-input mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="position" className="text-wechat-darkGray">岗位</Label>
                <Input
                  id="position"
                  placeholder="请输入内容"
                  value={formData.position}
                  onChange={(e) => handleChange("position", e.target.value)}
                  className="wechat-input mt-1"
                />
              </div>
            </div>
          </div>
          
          {/* Monthly Interviews Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一个月平均面试几家</h3>
            <RadioGroup 
              value={formData.interviews} 
              onValueChange={(value) => handleChange("interviews", value)}
              className="space-y-2"
            >
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="0-5" className="text-base text-wechat-darkGray">0-5</Label>
                <RadioGroupItem value="0-5" id="0-5" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="6-10" className="text-base text-wechat-darkGray">6-10</Label>
                <RadioGroupItem value="6-10" id="6-10" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="11-15" className="text-base text-wechat-darkGray">11-15</Label>
                <RadioGroupItem value="11-15" id="11-15" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="16-20" className="text-base text-wechat-darkGray">16-20</Label>
                <RadioGroupItem value="16-20" id="16-20" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="21plus" className="text-base text-wechat-darkGray">21家以上</Label>
                <RadioGroupItem value="21plus" id="21plus" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="working" className="text-base text-wechat-darkGray">在职</Label>
                <RadioGroupItem value="在职" id="working" />
              </div>
            </RadioGroup>
          </div>
          
          {/* Salary Section */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div>
              <Label htmlFor="expectedSalary" className="text-wechat-darkGray">期望薪资</Label>
              <div className="flex items-center">
                <Input
                  id="expectedSalary"
                  placeholder="请输入内容"
                  value={formData.expectedSalary}
                  onChange={(e) => handleChange("expectedSalary", e.target.value)}
                  className="wechat-input mt-1 flex-1"
                />
                <span className="ml-2 text-wechat-darkGray">K/月</span>
              </div>
            </div>
            
            <div>
              <Label htmlFor="currentSalary" className="text-wechat-darkGray">当前薪资/上份薪资</Label>
              <div className="flex items-center">
                <Input
                  id="currentSalary"
                  placeholder="请输入内容"
                  value={formData.currentSalary}
                  onChange={(e) => handleChange("currentSalary", e.target.value)}
                  className="wechat-input mt-1 flex-1"
                />
                <span className="ml-2 text-wechat-darkGray">K/月</span>
              </div>
            </div>
          </div>
          
          {/* Career Plans Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">转行想法</h3>
            <RadioGroup 
              value={formData.careerPlan} 
              onValueChange={(value) => handleChange("careerPlan", value)}
              className="space-y-2"
            >
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="wantChange" className="text-base text-wechat-darkGray">想要转行</Label>
                <RadioGroupItem value="想要转行" id="wantChange" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="stayForNow" className="text-base text-wechat-darkGray">暂时忍着</Label>
                <RadioGroupItem value="暂时忍着" id="stayForNow" />
              </div>
            </RadioGroup>
          </div>
          
          {/* Regret Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">后悔吗</h3>
            <RadioGroup 
              value={formData.regret} 
              onValueChange={(value) => handleChange("regret", value)}
              className="space-y-2"
            >
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="regret" className="text-base text-wechat-darkGray">后悔</Label>
                <RadioGroupItem value="后悔" id="regret" />
              </div>
              
              <div className="flex items-center justify-between p-2">
                <Label htmlFor="noRegret" className="text-base text-wechat-darkGray">不后悔</Label>
                <RadioGroupItem value="不后悔" id="noRegret" />
              </div>
            </RadioGroup>
          </div>
          
          <Button
            type="submit"
            className="wechat-btn-primary w-full mt-6"
          >
            提交调查
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PollFormPage;
