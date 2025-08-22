import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    mortgage: "无：羡慕哭了",
    mortgageAmount: "",
    carLoan: "无",
    carLoanAmount: "",
    otherLoans: "无",
    totalLoanAmount: "",
    commuteHappiness: "",
    overtime: "",
    position: "",
    skillSelfAssessment: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Step 3 form submitted:", formData);
    navigate("/results");
  };

  const hasAnyLoan = formData.mortgage === "有：房奴兄弟，抱一个" || formData.carLoan === "有" || formData.otherLoans === "有";

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
          </div>

          {/* 生活压力竞争力 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">生活压力竞争力</h3>
            <div className="space-y-4">
              {/* 房贷 */}
              <div>
                <Label className="text-wechat-darkGray mb-3 block">房贷</Label>
                <div className="space-y-2">
                  {["有：房奴兄弟，抱一个", "无：羡慕哭了"].map((option) => (
                    <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("mortgage", option)}>
                      <div className="flex justify-between w-full">
                        <Label className="text-wechat-darkGray cursor-pointer">
                          {option}
                        </Label>
                        <div className={`wechat-checkbox-icon ${formData.mortgage === option ? "wechat-checkbox-selected" : ""}`}>
                          {formData.mortgage === option && <Check className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 房贷月还款金额 - 条件显示 */}
                {formData.mortgage === "有：房奴兄弟，抱一个" && (
                  <div className="mt-3">
                    <Label htmlFor="mortgageAmount" className="text-wechat-darkGray">月还款金额</Label>
                    <div className="flex items-center">
                      <Input
                        id="mortgageAmount"
                        placeholder="请输入月还款金额"
                        value={formData.mortgageAmount}
                        onChange={(e) => handleChange("mortgageAmount", e.target.value)}
                        className="wechat-input mt-1 flex-1"
                        type="number"
                      />
                      <span className="ml-2 text-wechat-darkGray">元/月</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 车贷 */}
              <div>
                <Label className="text-wechat-darkGray mb-3 block">车贷</Label>
                <div className="space-y-2">
                  {["有", "无"].map((option) => (
                    <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("carLoan", option)}>
                      <div className="flex justify-between w-full">
                        <Label className="text-wechat-darkGray cursor-pointer">
                          {option}
                        </Label>
                        <div className={`wechat-checkbox-icon ${formData.carLoan === option ? "wechat-checkbox-selected" : ""}`}>
                          {formData.carLoan === option && <Check className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 车贷月还款金额 - 条件显示 */}
                {formData.carLoan === "有" && (
                  <div className="mt-3">
                    <Label htmlFor="carLoanAmount" className="text-wechat-darkGray">月还款金额</Label>
                    <div className="flex items-center">
                      <Input
                        id="carLoanAmount"
                        placeholder="请输入月还款金额"
                        value={formData.carLoanAmount}
                        onChange={(e) => handleChange("carLoanAmount", e.target.value)}
                        className="wechat-input mt-1 flex-1"
                        type="number"
                      />
                      <span className="ml-2 text-wechat-darkGray">元/月</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 其他贷款 */}
              <div>
                <Label className="text-wechat-darkGray mb-3 block">其他贷款</Label>
                <div className="space-y-2">
                  {["有", "无"].map((option) => (
                    <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("otherLoans", option)}>
                      <div className="flex justify-between w-full">
                        <Label className="text-wechat-darkGray cursor-pointer">
                          {option}
                        </Label>
                        <div className={`wechat-checkbox-icon ${formData.otherLoans === option ? "wechat-checkbox-selected" : ""}`}>
                          {formData.otherLoans === option && <Check className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 总贷款金额 - 条件显示 */}
              {hasAnyLoan && (
                <div>
                  <Label htmlFor="totalLoanAmount" className="text-wechat-darkGray">总贷款金额</Label>
                  <div className="flex items-center">
                    <Input
                      id="totalLoanAmount"
                      placeholder="请输入总贷款金额"
                      value={formData.totalLoanAmount}
                      onChange={(e) => handleChange("totalLoanAmount", e.target.value)}
                      className="wechat-input mt-1 flex-1"
                      type="number"
                    />
                    <span className="ml-2 text-wechat-darkGray">万元</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 单程通勤时长 */}
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
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("commuteHappiness", option)}>
                  <div className="flex justify-between w-full">
                    <Label className="text-wechat-darkGray cursor-pointer">
                      {option}
                    </Label>
                    <div className={`wechat-checkbox-icon ${formData.commuteHappiness === option ? "wechat-checkbox-selected" : ""}`}>
                      {formData.commuteHappiness === option && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              {["后悔", "不后悔"].map((option) => (
                <div key={option} className="wechat-radio-item rounded-lg" onClick={() => handleChange("position", option)}>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <Label className="text-wechat-darkGray cursor-pointer">
                        {option}
                      </Label>
                      {option === "后悔" && (
                        <span className="text-xs text-wechat-mediumGray mt-1">每天麻木搬砖</span>
                      )}
                      {option === "不后悔" && (
                        <span className="text-xs text-wechat-mediumGray mt-1">庆幸入对行</span>
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

          {/* 一句话吐槽本岗位 */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-base font-medium mb-4">一句话吐槽本岗位（可选）</h3>
            <div className="space-y-2">
              <Textarea
                id="skillSelfAssessment"
                placeholder="请吐槽您岗位的硬伤..."
                value={formData.skillSelfAssessment}
                onChange={(e) => handleChange("skillSelfAssessment", e.target.value)}
                className="wechat-input resize-none"
                maxLength={50}
                rows={3}
              />
              <div className="text-right text-xs text-wechat-mediumGray">
                {formData.skillSelfAssessment.length}/50字
              </div>
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