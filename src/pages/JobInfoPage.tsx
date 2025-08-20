import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Search } from "lucide-react";

const JobInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "北京市", // 自动获取的城市
    role: "",
    gapPeriod: "",
    position: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job info form submitted:", formData);
    // Navigate to next step or appropriate page
    navigate("/vote-step-one");
  };

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="求职信息" 
        showBack={true}
      />
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-wechat-darkGray mb-2">
            基本信息收集
          </h2>
          <p className="text-sm text-wechat-mediumGray">
            请填写您的求职相关信息
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 城市（自动获取） */}
          <div className="bg-white rounded-lg p-4">
            <Label className="text-wechat-darkGray mb-2 block">
              城市（自动获取）
            </Label>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-4 w-4 text-wechat-mediumGray" />
              <span className="text-wechat-darkGray">{formData.city}</span>
            </div>
          </div>

          {/* 角色（单选，社招还是应届生） */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">你正在哪种生存模式？</h3>
            <div className="space-y-3">
              {[
                "🎓应届生：萌新求带（刚出新手村）",
                "💼社招：老司机求稳（职场求生中）"
              ].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("role", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.role === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.role === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* gap周期（单选） */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">⏳ 多久没上班了？</h3>
            <div className="space-y-3">
              {[
                "没休息：快累死了",
                "1-3个月：简历没人理",
                "3-6个月：要不上价了",
                "半年-1年：半废品",
                "1年以上：基本废了"
              ].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("gapPeriod", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.gapPeriod === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.gapPeriod === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 岗位（搜索选择） */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="position" className="text-wechat-darkGray mb-2 block">
              岗位（搜索选择）
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-wechat-mediumGray" />
              <Input
                id="position"
                placeholder="搜索职位名称，如：产品经理、前端开发..."
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                className="wechat-input pl-10"
              />
            </div>
            <div className="mt-3 text-xs text-wechat-mediumGray">
              💡 提示：可输入具体职位名称进行搜索
            </div>
          </div>
          
          <Button
            type="submit"
            className="wechat-btn-primary w-full mt-6"
          >
            确认提交
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JobInfoPage;