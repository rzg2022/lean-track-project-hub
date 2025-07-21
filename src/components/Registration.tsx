import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
}

export const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 验证表单
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.role) {
      toast({
        title: "请填写完整信息",
        description: "所有字段都是必填项",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "邮箱格式错误",
        description: "请输入正确的邮箱地址",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // 模拟提交
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "注册成功！",
        description: "欢迎使用LeanTrack，我们已向您的邮箱发送了登录信息。",
      });

      // 重置表单
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: ""
      });
    } catch (error) {
      toast({
        title: "注册失败",
        description: "请稍后重试或联系客服",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            免费注册使用
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5人以下团队永久免费，立即体验专业的汽车零部件项目管理平台
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 注册表单 */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">立即注册</CardTitle>
                </div>
                <CardDescription>
                  填写以下信息，马上开始使用LeanTrack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">公司名称 *</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="请输入公司名称"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">邮箱地址 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="请输入邮箱地址"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">手机号码 *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="请输入手机号码"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role">行业角色 *</Label>
                    <Select 
                      value={formData.role} 
                      onValueChange={(value) => handleInputChange("role", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="请选择您的行业角色" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project-manager">项目经理</SelectItem>
                        <SelectItem value="r-d-engineer">研发工程师</SelectItem>
                        <SelectItem value="quality-engineer">质量工程师</SelectItem>
                        <SelectItem value="production-engineer">生产工程师</SelectItem>
                        <SelectItem value="procurement">采购专员</SelectItem>
                        <SelectItem value="management">管理层</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "注册中..." : "立即免费注册"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    注册即表示您同意我们的服务条款和隐私政策
                  </p>
                </form>
              </CardContent>
            </Card>
            
            {/* 注册优势 */}
            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    免费版本包含
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      支持5人团队协作
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      管理3个活跃项目
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      1GB文件存储空间
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      基础APQP流程模板
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      项目计划与任务管理
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      邮件技术支持
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl">为什么选择我们？</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>行业专业性：</strong>
                        专为汽车零部件行业设计，深度理解APQP流程
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>即用即得：</strong>
                        SaaS模式，无需安装，注册后立即使用
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>持续改进：</strong>
                        基于用户反馈持续优化，功能不断更新
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>数据安全：</strong>
                        企业级安全保障，数据加密存储
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};