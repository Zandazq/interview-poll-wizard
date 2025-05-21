
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { mockUsers } from "@/data/mockData";

interface AuthFormProps {
  onSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSendCode = () => {
    if (!phone || phone.length !== 11) {
      toast({
        title: "手机号格式错误",
        description: "请输入11位有效手机号码",
        variant: "destructive",
      });
      return;
    }
    
    setCodeSent(true);
    toast({
      title: "验证码已发送",
      description: "验证码已发送到您的手机，请查收",
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || (isLogin && !code) || (!isLogin && !name)) {
      toast({
        title: "信息不完整",
        description: "请填写所有必填信息",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // 模拟登录/注册过程
    setTimeout(() => {
      setIsLoading(false);
      
      if (isLogin) {
        localStorage.setItem("currentUser", JSON.stringify(mockUsers[0]));
        toast({
          title: "登录成功",
          description: `欢迎回来，${mockUsers[0].name}`,
        });
      } else {
        const newUser = {
          id: "user_" + Date.now(),
          name: name,
          avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        };
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        toast({
          title: "注册成功",
          description: `欢迎加入，${name}`,
        });
      }
      
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/polls");
      }
    }, 1000);
  };
  
  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-wechat-darkGray mb-2">
          {isLogin ? "登录" : "注册"}
        </h2>
        <p className="text-wechat-mediumGray">
          {isLogin ? "登录以查看和参与薪资调查" : "注册新账户以参与薪资调查"}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm text-wechat-darkGray">
            手机号码
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="请输入手机号码"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="wechat-input"
            maxLength={11}
          />
        </div>
        
        {isLogin ? (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="code" className="block text-sm text-wechat-darkGray">
                验证码
              </label>
            </div>
            <div className="flex gap-2">
              <Input
                id="code"
                type="text"
                placeholder="请输入验证码"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="wechat-input"
                maxLength={6}
              />
              <Button
                type="button"
                onClick={handleSendCode}
                disabled={codeSent}
                className={`px-3 py-2 text-sm ${
                  codeSent
                    ? "bg-gray-200 text-gray-500"
                    : "bg-wechat-green text-white"
                }`}
                style={{ minWidth: "110px" }}
              >
                {codeSent ? "已发送(60s)" : "获取验证码"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-wechat-darkGray">
              姓名
            </label>
            <Input
              id="name"
              type="text"
              placeholder="请输入您的姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="wechat-input"
            />
          </div>
        )}
        
        <Button
          type="submit"
          disabled={isLoading}
          className="wechat-btn-primary mt-6"
        >
          {isLoading ? "处理中..." : isLogin ? "登录" : "注册"}
        </Button>
        
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-wechat-green hover:underline"
          >
            {isLogin ? "还没有账号？注册" : "已有账号？登录"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
