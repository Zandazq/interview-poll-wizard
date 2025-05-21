
export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface PollOption {
  id: string;
  text: string;
  count: number;
}

export interface SalaryRange {
  id: string;
  range: string;
  count: number;
}

export type JobLevel = "实习生" | "初级" | "中级" | "高级" | "专家" | "管理层";

export type Industry = "互联网" | "金融" | "教育" | "制造业" | "医疗" | "零售" | "其他";

export interface Poll {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: Date;
  expiresAt?: Date;
  isAnonymous: boolean;
  totalVotes: number;
  fields: {
    jobTitle: boolean;
    industry: boolean;
    location: boolean;
    experience: boolean;
    education: boolean;
    companySize: boolean;
  };
  salaryRanges: SalaryRange[];
  industries?: Industry[];
}

export interface PollResponse {
  id: string;
  pollId: string;
  userId: string;
  jobTitle?: string;
  industry?: Industry;
  location?: string;
  experience?: number;
  education?: string;
  companySize?: string;
  salaryRangeId: string;
  createdAt: Date;
}

export interface PollFilter {
  industry?: Industry;
  experienceMin?: number;
  experienceMax?: number;
  location?: string;
}

export interface SalaryStatistics {
  average: number;
  median: number;
  min: number;
  max: number;
  count: number;
}
