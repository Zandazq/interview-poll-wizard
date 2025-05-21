
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Header from "./Layout/Header";

interface SalaryRange {
  id: string;
  range: string;
}

const CreatePoll: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [expiryDays, setExpiryDays] = useState("30");
  
  // 调查字段
  const [fields, setFields] = useState({
    jobTitle: true,
    industry: true,
    location: true,
    experience: true,
    education: true,
    companySize: true,
  });
  
  // 薪资范围
  const [salaryRanges, setSalaryRanges] = useState<SalaryRange[]>([
    { id: "1", range: "10k以下" },
    { id: "2", range: "10k-15k" },
    { id: "3", range: "15k-20k" },
    { id: "4", range: "20k-30k" },
    { id: "5", range: "30k-50k" },
    { id: "6", range: "50k以上" },
  ]);
  
  const [newRange, setNewRange] = useState("");
  
  const toggleField = (field: keyof typeof fields) => {
    setFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  
  const addSalaryRange = () => {
    if (!newRange.trim()) return;
    
    const newId = (salaryRanges.length + 1).toString();
    setSalaryRanges([...salaryRanges, { id: newId, range: newRange.trim() }]);
    setNewRange("");
  };
  
  const removeSalaryRange = (id: string) => {
    setSalaryRanges(salaryRanges.filter((range) => range.id !== id));
  };
  
  const handleCreatePoll = () => {
    if (!title.trim()) {
      toast({
        title: "标题不能为空",
        description: "请输入调查标题",
        variant: "destructive",
      });
      return;
    }
    
    if (salaryRanges.length < 2) {
      toast({
        title: "薪资范围不足",
        description: "请至少添加两个薪资范围",
        variant: "destructive",
      });
      return;
    }
    
    // 模拟创建调查
    toast({
      title: "创建成功",
      description: "薪资调查已成功创建",
    });
    
    navigate("/polls");
  };
  
  return (
    <div className="pb-20">
      <Header title="创建薪资调查" showBack />
      
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <Label htmlFor="title">调查标题</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="例：2025北京地区前端开发薪资调查"
            className="wechat-input"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="description">调查描述</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="请描述此次薪资调查的目的和范围..."
            className="wechat-input min-h-[100px]"
          />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-md font-medium">调查信息字段</h3>
          <p className="text-sm text-wechat-mediumGray">选择您希望收集的信息</p>
          
          <div className="space-y-2">
            {Object.entries(fields).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  checked={value}
                  onCheckedChange={() => toggleField(key as keyof typeof fields)}
                />
                <label
                  htmlFor={key}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {
                    {
                      jobTitle: "职位名称",
                      industry: "所在行业",
                      location: "工作地点",
                      experience: "工作经验",
                      education: "教育背景",
                      companySize: "公司规模",
                    }[key]
                  }
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-md font-medium">薪资范围设置</h3>
          <p className="text-sm text-wechat-mediumGray">
            添加薪资范围选项（月薪）
          </p>
          
          <div className="space-y-3">
            {salaryRanges.map((range) => (
              <div key={range.id} className="flex items-center justify-between">
                <span>{range.range}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSalaryRange(range.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  删除
                </Button>
              </div>
            ))}
            
            <div className="flex space-x-2">
              <Input
                value={newRange}
                onChange={(e) => setNewRange(e.target.value)}
                placeholder="添加新范围，例：15k-20k"
                className="wechat-input"
              />
              <Button onClick={addSalaryRange}>添加</Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-md font-medium">匿名调查</h3>
              <p className="text-sm text-wechat-mediumGray">
                参与者的个人信息不会被显示
              </p>
            </div>
            <Switch
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="expiry">有效期（天）</Label>
          <Input
            id="expiry"
            type="number"
            value={expiryDays}
            onChange={(e) => setExpiryDays(e.target.value)}
            min="1"
            max="365"
            className="wechat-input"
          />
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-wechat-gray">
        <Button
          onClick={handleCreatePoll}
          className="wechat-btn-primary"
        >
          创建调查
        </Button>
      </div>
    </div>
  );
};

export default CreatePoll;
