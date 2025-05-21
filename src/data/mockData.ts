
import { Poll, PollResponse, User, Industry, JobLevel } from "../types";

export const mockUsers: User[] = [
  { id: "1", name: "张先生", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", name: "李小姐", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: "3", name: "王先生", avatar: "https://i.pravatar.cc/150?img=3" },
];

export const mockPolls: Poll[] = [
  {
    id: "1",
    title: "2025北京地区前端开发薪资调查",
    description: "此调查收集北京地区前端开发者薪资情况，帮助求职者了解市场行情。",
    createdBy: "1",
    createdAt: new Date("2025-05-01"),
    expiresAt: new Date("2025-06-01"),
    isAnonymous: true,
    totalVotes: 87,
    fields: {
      jobTitle: true,
      industry: true,
      location: true,
      experience: true,
      education: true,
      companySize: true,
    },
    salaryRanges: [
      { id: "1", range: "10k以下", count: 5 },
      { id: "2", range: "10k-15k", count: 12 },
      { id: "3", range: "15k-20k", count: 25 },
      { id: "4", range: "20k-30k", count: 30 },
      { id: "5", range: "30k-50k", count: 10 },
      { id: "6", range: "50k以上", count: 5 },
    ],
    industries: ["互联网", "金融", "教育"],
  },
  {
    id: "2",
    title: "2025上海产品经理薪资调研",
    description: "此调查收集上海地区产品经理薪资水平，为求职者提供参考。",
    createdBy: "2",
    createdAt: new Date("2025-05-10"),
    expiresAt: new Date("2025-06-10"),
    isAnonymous: true,
    totalVotes: 64,
    fields: {
      jobTitle: true,
      industry: true,
      location: true,
      experience: true,
      education: false,
      companySize: true,
    },
    salaryRanges: [
      { id: "1", range: "15k以下", count: 8 },
      { id: "2", range: "15k-20k", count: 15 },
      { id: "3", range: "20k-30k", count: 22 },
      { id: "4", range: "30k-40k", count: 13 },
      { id: "5", range: "40k以上", count: 6 },
    ],
    industries: ["互联网", "金融", "零售"],
  },
  {
    id: "3",
    title: "2025全国Java工程师薪资调查",
    description: "此调查收集全国范围内Java工程师的薪资情况。",
    createdBy: "3",
    createdAt: new Date("2025-05-15"),
    expiresAt: new Date("2025-06-15"),
    isAnonymous: true,
    totalVotes: 126,
    fields: {
      jobTitle: true,
      industry: true,
      location: true,
      experience: true,
      education: true,
      companySize: true,
    },
    salaryRanges: [
      { id: "1", range: "10k以下", count: 10 },
      { id: "2", range: "10k-15k", count: 28 },
      { id: "3", range: "15k-25k", count: 42 },
      { id: "4", range: "25k-35k", count: 31 },
      { id: "5", range: "35k以上", count: 15 },
    ],
    industries: ["互联网", "金融", "制造业"],
  }
];

export const mockPollResponses: PollResponse[] = [
  {
    id: "1",
    pollId: "1",
    userId: "2",
    jobTitle: "高级前端开发工程师",
    industry: "互联网",
    location: "北京",
    experience: 5,
    education: "本科",
    companySize: "500-1000人",
    salaryRangeId: "4",
    createdAt: new Date("2025-05-05"),
  },
  {
    id: "2",
    pollId: "1",
    userId: "3",
    jobTitle: "前端技术主管",
    industry: "金融",
    location: "北京",
    experience: 7,
    education: "硕士",
    companySize: "1000人以上",
    salaryRangeId: "5",
    createdAt: new Date("2025-05-06"),
  },
];

export const experienceLevels = [
  { value: "0-1", label: "0-1年" },
  { value: "1-3", label: "1-3年" },
  { value: "3-5", label: "3-5年" },
  { value: "5-10", label: "5-10年" },
  { value: "10+", label: "10年以上" },
];

export const companySizes = [
  { value: "1-50", label: "1-50人" },
  { value: "50-200", label: "50-200人" },
  { value: "200-500", label: "200-500人" },
  { value: "500-1000", label: "500-1000人" },
  { value: "1000+", label: "1000人以上" },
];

export const educationLevels = [
  { value: "high_school", label: "高中" },
  { value: "college", label: "大专" },
  { value: "bachelor", label: "本科" },
  { value: "master", label: "硕士" },
  { value: "phd", label: "博士" },
];

export const industries: { value: Industry; label: string }[] = [
  { value: "互联网", label: "互联网" },
  { value: "金融", label: "金融" },
  { value: "教育", label: "教育" },
  { value: "制造业", label: "制造业" },
  { value: "医疗", label: "医疗" },
  { value: "零售", label: "零售" },
  { value: "其他", label: "其他" },
];

export const jobLevels: { value: JobLevel; label: string }[] = [
  { value: "实习生", label: "实习生" },
  { value: "初级", label: "初级" },
  { value: "中级", label: "中级" },
  { value: "高级", label: "高级" },
  { value: "专家", label: "专家" },
  { value: "管理层", label: "管理层" },
];

export const cities = [
  "北京", "上海", "广州", "深圳", "杭州", 
  "南京", "成都", "武汉", "西安", "苏州", 
  "天津", "重庆", "郑州", "长沙", "宁波",
  "其他"
];
