
import React, { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Poll, PollFilter, Industry } from "@/types";
import { mockPolls } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { industries } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SalaryResultsProps {
  pollId: string;
}

const CHART_COLORS = ["#07C160", "#10D56A", "#36E980", "#74F5AE", "#A9F5D0", "#CFF5E3"];

const SalaryResults: React.FC<SalaryResultsProps> = ({ pollId }) => {
  const [filter, setFilter] = useState<PollFilter>({});
  
  // Find the poll data
  const poll = mockPolls.find((p) => p.id === pollId) || mockPolls[0];
  
  if (!poll) {
    return <div>未找到调查数据</div>;
  }
  
  // 饼图数据
  const pieData = poll.salaryRanges.map((range, index) => ({
    name: range.range,
    value: range.count,
  }));
  
  // 柱状图数据
  const barData = poll.salaryRanges.map((range) => ({
    name: range.range,
    value: range.count,
  }));
  
  // 更改行业筛选
  const handleIndustryChange = (value: string) => {
    setFilter((prev) => ({ ...prev, industry: value as Industry }));
  };
  
  // 薪资统计
  const calculateStatistics = () => {
    const totalResponses = poll.salaryRanges.reduce((acc, range) => acc + range.count, 0);
    const highestCount = Math.max(...poll.salaryRanges.map((range) => range.count));
    const mostCommonRange = poll.salaryRanges.find(
      (range) => range.count === highestCount
    )?.range || "";
    
    return {
      total: totalResponses,
      mostCommon: mostCommonRange,
    };
  };
  
  const stats = calculateStatistics();
  
  return (
    <div className="p-4 space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-medium text-wechat-darkGray mb-4">
          {poll.title}
        </h2>
        <p className="text-sm text-wechat-mediumGray mb-4">{poll.description}</p>
        <div className="flex flex-wrap justify-between text-sm">
          <span className="text-wechat-mediumGray">
            总参与人数: <span className="font-bold">{stats.total}</span>
          </span>
          <span className="text-wechat-mediumGray">
            调查创建日期:{" "}
            {poll.createdAt.toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      
      {poll.industries && poll.industries.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-md font-medium mb-3">筛选选项</h3>
          <div className="space-y-2">
            <div>
              <Label htmlFor="industry" className="text-sm">行业</Label>
              <Select onValueChange={handleIndustryChange}>
                <SelectTrigger id="industry" className="wechat-input mt-1">
                  <SelectValue placeholder="选择行业" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部行业</SelectItem>
                  {industries
                    .filter((ind) => poll.industries?.includes(ind.value))
                    .map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-md font-medium mb-3">薪资分布</h3>
        <div>
          <p className="text-sm text-wechat-mediumGray mb-2">
            最常见薪资范围: <span className="text-wechat-green font-medium">{stats.mostCommon}</span>
          </p>
        </div>
        
        <Tabs defaultValue="pie" className="mt-4">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="pie">饼图</TabsTrigger>
            <TabsTrigger value="bar">柱状图</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pie" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#07C160"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="bar" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{
                  top: 5,
                  right: 5,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" scale="point" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#07C160" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-md font-medium mb-3">详细数据</h3>
        <div className="space-y-2">
          {poll.salaryRanges.map((range) => (
            <div key={range.id} className="flex justify-between items-center">
              <span className="text-sm">{range.range}</span>
              <div className="flex items-center">
                <span className="mr-2 text-sm">{range.count}人</span>
                <div className="h-4 bg-wechat-green rounded-full" style={{ 
                  width: `${(range.count / stats.total) * 200}px`,
                  minWidth: "20px"
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalaryResults;
