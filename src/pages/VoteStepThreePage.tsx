import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const VoteStepThreePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualPackage: "",
    monthlyInterviews: "还没有开始面试",
    age: "",
    graduationTime: "",
    lifePressure: "",
    commuteHappiness: "",
    overtime: "",
    position: "",
    skillSelfAssessment: "可选",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Step 3 form submitted:", formData);
    navigate("/results");
  };

  return (
    <div className="wechat-container bg-[#F6F6F6]">
      <Header 
        title="投票步骤三" 
        showBack={true}
      />
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-wechat-darkGray mb-2">
            有工作经验的-在职/失业
          </h2>
          <p className="text-sm text-wechat-mediumGray">
            请填写您的工作相关信息
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 当前所在年收入 */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="annualPackage" className="text-wechat-darkGray mb-2 block">
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
              id="annualPackage"
              placeholder="请输入年收入"
              value={formData.annualPackage}
              onChange={(e) => handleChange("annualPackage", e.target.value)}
              className="wechat-input"
              type="number"
            />
          </div>

          {/* 1个月平均投面试几家 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">1个月平均投面试几家 (提供在职/失业)</h3>
            <div className="space-y-3">
              {[
                "还没有开始面试",
                "1-3家",
                "4-6家", 
                "7-10家",
                "11-15家",
                "16-20家",
                "20家以上"
              ].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("monthlyInterviews", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.monthlyInterviews === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.monthlyInterviews === option && <Check className="h-3 w-3" />}
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
          </div>

          {/* 生活压力竞争力 */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="lifePressure" className="text-wechat-darkGray mb-2 block">
              生活压力竞争力
            </Label>
            <Input
              id="lifePressure"
              placeholder="请描述您的生活压力情况"
              value={formData.lifePressure}
              onChange={(e) => handleChange("lifePressure", e.target.value)}
              className="wechat-input"
            />
          </div>

          {/* 通勤高兴指数 */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="commuteHappiness" className="text-wechat-darkGray mb-2 block">
              通勤高兴指数
            </Label>
            <Input
              id="commuteHappiness"
              placeholder="请输入通勤高兴指数(1-10分)"
              value={formData.commuteHappiness}
              onChange={(e) => handleChange("commuteHappiness", e.target.value)}
              className="wechat-input"
              type="number"
              min="1"
              max="10"
            />
          </div>

          {/* 学历 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">学历 (下拉选择)</h3>
            <div className="space-y-3">
              {["高中及以下", "专科", "本科", "硕士", "博士"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("overtime", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.overtime === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.overtime === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 后悔吗 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">后悔吗</h3>
            <div className="space-y-3">
              {["非常后悔", "有点后悔", "一般", "不后悔", "很满意"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("position", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.position === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.position === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 一句话比拟当前岗位 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一句话比拟当前岗位 (可选)</h3>
            <div className="space-y-3">
              {["钱多事少离家近", "996福报", "躺平养老", "卷到起飞", "看不到希望", "还算满意"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("skillSelfAssessment", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.skillSelfAssessment === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.skillSelfAssessment === option && <Check className="h-3 w-3" />}
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
            完成投票
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VoteStepThreePage;