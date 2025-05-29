import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PollFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workExperience: "",
    age: "",
    city: "",
    education: "",
    position: "",
    interviews: "0-5",
    workingStatus: "在职",
    expectedSalary: "",
    currentSalary: "",
    careerPlan: "想要转行",
    regret: "后悔",
    dataVisibility: "public", // 新增数据可见度字段
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
        title="让我们一起了解行业现状" 
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
                <Label htmlFor="age" className="text-wechat-darkGray">年龄</Label>
                <Input
                  id="age"
                  placeholder="请输入年龄"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  className="wechat-input mt-1"
                  type="number"
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
          
          {/* Data Visibility Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">数据可见度</h3>
            <div className="space-y-3">
              {[
                { value: "private", label: "仅自己可见", description: "只有您可以查看提交的数据" },
                { value: "public", label: "公开", description: "数据将匿名展示在结果统计中" }
              ].map((option) => (
                <div key={option.value} className="wechat-radio-item rounded-lg" onClick={() => handleChange("dataVisibility", option.value)}>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <Label htmlFor={option.value} className="text-wechat-darkGray cursor-pointer font-medium">
                        {option.label}
                      </Label>
                      <span className="text-sm text-wechat-mediumGray mt-1">{option.description}</span>
                    </div>
                    <div className={`wechat-checkbox-icon ${formData.dataVisibility === option.value ? "wechat-checkbox-selected" : ""}`}>
                      {formData.dataVisibility === option.value && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Monthly Interviews Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一个月平均面试几家</h3>
            <div className="space-y-3">
              {[
                { value: "0-5", label: "0-5", votes: "4696", percentage: "19.73" },
                { value: "6-10", label: "6-10", votes: "2866", percentage: "12.04" },
                { value: "11-15", label: "11-15", votes: "3214", percentage: "13.5" },
                { value: "16-20", label: "16-20", votes: "2129", percentage: "8.95" },
                { value: "21plus", label: "21家以上", votes: "3180", percentage: "13.36" },
                { value: "在职", label: "失业中 | 处于休息模式", votes: "7716", percentage: "32.42" }
              ].map((option) => (
                <div key={option.value} className="wechat-radio-item rounded-lg" onClick={() => handleChange("interviews", option.value)}>
                  <div className="flex justify-between w-full">
                    <Label htmlFor={option.value} className="text-wechat-darkGray cursor-pointer">
                      {option.label}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.interviews === option.value ? "wechat-checkbox-selected" : ""}`}>
                      {formData.interviews === option.value && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <h3 className="text-base font-medium mb-4">再来一次，还会选择做程序员吗?</h3>
            <div className="space-y-3">
              {[
                { value: "当然会", label: "当然会，代码比人心好懂", votes: "13038", percentage: "54.78" },
                { value: "不会", label: "不会，该给年轻人让路了", votes: "10762", percentage: "45.22" }
              ].map((option) => (
                <div key={option.value} className="wechat-radio-item" onClick={() => handleChange("careerPlan", option.value)}>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full mb-2">
                      <Label htmlFor={option.value} className="text-wechat-darkGray cursor-pointer">
                        {option.label}
                      </Label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">{option.votes}票</span>
                        <span className="text-wechat-green">{option.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-wechat-green h-2 rounded-full" 
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Current Salary Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">当前薪资 (投票后，可查看其他人答案)</h3>
            <div className="space-y-3">
              {[
                { value: "8K-15K", label: "8K-15K | 白银级", votes: "4696", percentage: "19.73" },
                { value: "16K-20K", label: "16K-20K | 黄金级", votes: "2866", percentage: "12.04" },
                { value: "21K-28K", label: "21K-28K | 铂金级", votes: "3214", percentage: "13.5" },
                { value: "29K-39K", label: "29K-39K | 钻石级", votes: "2129", percentage: "8.95" },
                { value: "40K+", label: "40K以上 | 王者级", votes: "3180", percentage: "13.36" },
                { value: "失业中", label: "失业中 | 处于休息模式", votes: "7716", percentage: "32.42" }
              ].map((option) => (
                <div key={option.value} className="wechat-radio-item" onClick={() => handleChange("workingStatus", option.value)}>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full mb-2">
                      <Label htmlFor={option.value} className="text-wechat-darkGray cursor-pointer">
                        {option.label}
                      </Label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">{option.votes}票</span>
                        <span className="text-wechat-green">{option.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-wechat-green h-2 rounded-full" 
                        style={{ width: `${option.percentage}%` }}
                      ></div>
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
            提交调查
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PollFormPage;
