import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const VoteStepThreePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    annualPackage: "",
    monthlyInterviews: "🌄 0家：【还没出村】   \"战场在哪都不知道\"",
    age: "",
    graduationTime: "",
    education: "",
    overtime: "",
    position: "",
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
            <h3 className="text-base font-medium mb-4">1个月平均投面试几家</h3>
            <div className="space-y-3">
              {[
                "🌄 0家：【还没出村】   \"战场在哪都不知道\"",
                "💀 1-5家：【简历已凉】   \"HR已读不回是常态\"",
                "😑 6-10家：【差点意思】   \"简历能看但不够亮眼\"",
                "🆗 11-20家：【达标水平】   \"达到市场平均线的简历\"",
                "✨ 21-30家：【有点优秀】   \"简历质量突出，超越多数人\"",
                "🔥 31-40家：【相当出色】   \"简历让人眼前一亮，通过率很高\"",
                "🤯 41-50家：【疯狂投递】   \"不是在面试，就是在投简历的路上\"",
                "👽 50家以上：【非人类】   \"投递量突破天际，HR看到都怕\""
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
              
              <div className="mb-4 text-sm text-wechat-mediumGray bg-gray-50 rounded-lg p-3">
                <div className="mb-2">填完秒看：你被同届同学甩开了多远？</div>
                <div className="mb-1">→ 同岗位5年薪资差距表</div>
                <div>→ 同龄人晋升速度排行榜</div>
              </div>
              
              <Input
                id="graduationTime"
                placeholder="请输入毕业时间"
                value={formData.graduationTime}
                onChange={(e) => handleChange("graduationTime", e.target.value)}
                className="wechat-input"
              />
            </div>
          </div>

          {/* 学历 */}
          <div className="bg-white rounded-lg p-4">
            <Label htmlFor="education" className="text-wechat-darkGray mb-2 block">
              学历 (下拉选择)
            </Label>
            <Select value={formData.education} onValueChange={(value) => handleChange("education", value)}>
              <SelectTrigger className="wechat-input">
                <SelectValue placeholder="请选择学历" />
              </SelectTrigger>
              <SelectContent className="z-50 bg-white">
                <SelectItem value="高中及以下">高中及以下</SelectItem>
                <SelectItem value="专科">专科</SelectItem>
                <SelectItem value="本科">本科</SelectItem>
                <SelectItem value="硕士">硕士</SelectItem>
                <SelectItem value="博士">博士</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 如果时光倒流，你还会走上今天的岗位吗？ */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">如果时光倒流，你还会走上今天的岗位吗？</h3>
            <div className="space-y-3">
              {["会避开", "会更坚定"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("position", option)}>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <Label className="text-wechat-darkGray cursor-pointer">
                        {option}
                      </Label>
                      {option === "会避开" && (
                        <span className="text-xs text-wechat-mediumGray mt-1">现在的路，并不是我想要的</span>
                      )}
                      {option === "会更坚定" && (
                        <span className="text-xs text-wechat-mediumGray mt-1">这就是我该走的路，无悔</span>
                      )}
                    </div>
                    <div className={`wechat-checkbox-icon ${formData.position === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.position === option && <Check className="h-3 w-3" />}
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
            生成我的竞争力
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VoteStepThreePage;