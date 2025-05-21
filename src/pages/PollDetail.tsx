import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SalaryResults from "@/components/SalaryResults";
import { mockPolls, industries, experienceLevels, educationLevels, companySizes, cities } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SalaryRange } from "@/types";

const PollDetail = () => {
  const { pollId } = useParams<{ pollId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState("results");
  
  // Find poll data
  const poll = mockPolls.find((p) => p.id === pollId);
  
  // Form state
  const [formData, setFormData] = useState({
    jobTitle: "",
    industry: "",
    location: "",
    experience: "",
    education: "",
    companySize: "",
    salaryRangeId: "",
  });
  
  if (!poll) {
    return (
      <div className="wechat-container">
        <Header title="未找到" showBack />
        <div className="p-4 text-center">
          <p>未找到该调查，请返回列表页</p>
          <Button onClick={() => navigate("/polls")} className="mt-4">
            返回调查列表
          </Button>
        </div>
      </div>
    );
  }
  
  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = () => {
    // Validate required fields
    if (!formData.jobTitle || !formData.salaryRangeId) {
      toast({
        title: "请填写必填字段",
        description: "职位名称和薪资范围是必填的",
        variant: "destructive",
      });
      return;
    }
    
    // Submit poll response (in a real app, this would be an API call)
    toast({
      title: "提交成功",
      description: "感谢您参与此次薪资调查",
    });
    
    // Switch to results tab
    setActiveTab("results");
  };
  
  const viewDetailedResults = () => {
    navigate("/results");
  };
  
  return (
    <div className="wechat-container">
      <Header title={poll?.title || ""} showBack />
      
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="participate">参与调查</TabsTrigger>
          <TabsTrigger value="results">查看结果</TabsTrigger>
        </TabsList>
        
        <TabsContent value="participate" className="p-4 space-y-6">
          <div>
            <p className="text-sm text-wechat-mediumGray mb-4">
              {poll.description}
            </p>
            <p className="text-xs text-wechat-mediumGray mb-6">
              {poll.isAnonymous ? "* 此调查为匿名调查，您的个人信息将不会被公开" : ""}
            </p>
          </div>
          
          {poll.fields.jobTitle && (
            <div className="space-y-2">
              <Label htmlFor="jobTitle">职位名称 *</Label>
              <Input
                id="jobTitle"
                placeholder="例：前端开发工程师"
                value={formData.jobTitle}
                onChange={(e) => handleFormChange("jobTitle", e.target.value)}
                className="wechat-input"
              />
            </div>
          )}
          
          {poll.fields.industry && (
            <div className="space-y-2">
              <Label htmlFor="industry">所在行业</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleFormChange("industry", value)}
              >
                <SelectTrigger id="industry" className="wechat-input">
                  <SelectValue placeholder="选择行业" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {poll.fields.location && (
            <div className="space-y-2">
              <Label htmlFor="location">工作地点</Label>
              <Select
                value={formData.location}
                onValueChange={(value) => handleFormChange("location", value)}
              >
                <SelectTrigger id="location" className="wechat-input">
                  <SelectValue placeholder="选择城市" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {poll.fields.experience && (
            <div className="space-y-2">
              <Label htmlFor="experience">工作经验</Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => handleFormChange("experience", value)}
              >
                <SelectTrigger id="experience" className="wechat-input">
                  <SelectValue placeholder="选择工作经验" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {poll.fields.education && (
            <div className="space-y-2">
              <Label htmlFor="education">教育背景</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => handleFormChange("education", value)}
              >
                <SelectTrigger id="education" className="wechat-input">
                  <SelectValue placeholder="选择教育背景" />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {poll.fields.companySize && (
            <div className="space-y-2">
              <Label htmlFor="companySize">公司规模</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => handleFormChange("companySize", value)}
              >
                <SelectTrigger id="companySize" className="wechat-input">
                  <SelectValue placeholder="选择公司规模" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="space-y-3">
            <Label>您的月薪范围 *</Label>
            <RadioGroup
              value={formData.salaryRangeId}
              onValueChange={(value) => handleFormChange("salaryRangeId", value)}
              className="space-y-2"
            >
              {poll.salaryRanges.map((range: SalaryRange) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={range.id} id={`range-${range.id}`} />
                  <Label htmlFor={`range-${range.id}`}>{range.range}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="mt-8">
            <Button onClick={handleSubmit} className="wechat-btn-primary">
              提交调查
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="results">
          <SalaryResults pollId={pollId || ""} />
          
          <div className="p-4 flex justify-center">
            <Button 
              onClick={viewDetailedResults}
              className="wechat-btn-primary"
            >
              查看详细结果分析
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PollDetail;
