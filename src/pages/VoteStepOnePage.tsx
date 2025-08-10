import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const VoteStepOnePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "",
    position: "",
    employmentStatus: "在职",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 可以通过URL参数或状态管理传递选择的城市和岗位信息
    navigate("/poll-form", { 
      state: { 
        selectedCity: formData.city, 
        selectedPosition: formData.position 
      } 
    });
  };

  const isFormValid = formData.city.trim() !== "" && formData.position.trim() !== "";

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="选择您想了解的信息" 
        showBack={true}
      />
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-wechat-darkGray mb-2">
            投票步骤一
          </h2>
          <p className="text-sm text-wechat-mediumGray">
            请选择您想了解薪资情况的城市和岗位
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields Section */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div>
              <Label htmlFor="city" className="text-wechat-darkGray mb-2 block">
                选择城市
              </Label>
              <Input
                id="city"
                placeholder="请输入您想了解的城市"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="wechat-input"
              />
            </div>
            
            <div>
              <Label htmlFor="position" className="text-wechat-darkGray mb-2 block">
                选择岗位
              </Label>
              <Input
                id="position"
                placeholder="请输入您想了解的岗位"
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                className="wechat-input"
              />
            </div>
          </div>

          {/* Employment Status Section */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4 text-wechat-darkGray">就业状态</h3>
            <div className="space-y-3">
              {["在职", "失业中"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("employmentStatus", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.employmentStatus === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.employmentStatus === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 提示信息 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-600">
              💡 选择完成后，您将进入详细投票页面，与其他用户一起了解行业薪资现状
            </p>
          </div>
          
          <Button
            type="submit"
            disabled={!isFormValid}
            className="wechat-btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            立即投票
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VoteStepOnePage;