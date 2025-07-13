
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface RecentCompletion {
  workExperience: string;
  position: string;
  timeAgo: string;
}

const RecentCompletions: React.FC = () => {
  // 模拟数据，实际项目中这些数据应该从API获取
  const recentCompletions: RecentCompletion[] = [
    { workExperience: "一位15年经验", position: "产品总监", timeAgo: "2分钟前" },
    { workExperience: "一位17年经验", position: "技术经理", timeAgo: "5分钟前" },
    { workExperience: "一位13年经验", position: "前端工程师", timeAgo: "8分钟前" },
    { workExperience: "一位14年经验", position: "UI设计师", timeAgo: "12分钟前" },
    { workExperience: "一位16年经验", position: "后端工程师", timeAgo: "15分钟前" },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <h3 className="text-base font-medium mb-3 text-wechat-darkGray">最近完成者</h3>
      <ScrollArea className="h-32">
        <div className="space-y-2">
          {recentCompletions.map((completion, index) => (
            <div key={index} className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-wechat-darkGray font-medium">
                  {completion.workExperience}
                </span>
                <span className="text-wechat-mediumGray">
                  {completion.position}
                </span>
              </div>
              <span className="text-wechat-mediumGray text-xs">
                {completion.timeAgo}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecentCompletions;
