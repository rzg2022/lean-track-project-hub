import { Check, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "免费版",
    price: "免费",
    period: "永久免费",
    description: "适合小团队试用",
    icon: Star,
    features: [
      "≤5人团队",
      "3个活跃项目",
      "1GB存储空间",
      "基础项目管理功能",
      "标准APQP模板",
      "邮件技术支持"
    ],
    limitations: [
      "功能相对基础",
      "存储空间有限",
      "项目数量限制"
    ],
    buttonText: "立即免费注册",
    popular: false
  },
  {
    name: "专业版",
    price: "5,000元",
    period: "人/年",
    description: "适合中小企业团队",
    icon: Users,
    features: [
      "6-20人团队",
      "不限制活跃项目数量",
      "20GB存储空间",
      "完整功能模块",
      "高级分析报表",
      "优先技术支持",
      "在线培训服务",
      "API接口支持"
    ],
    limitations: [],
    buttonText: "联系销售",
    popular: true
  },
  {
    name: "企业版",
    price: "定制报价",
    period: "线下洽谈",
    description: "适合大型企业",
    icon: Zap,
    features: [
      ">20人团队",
      "无限项目和存储",
      "全部高级功能",
      "定制化开发",
      "现场培训服务",
      "专属客户经理",
      "7×24小时支持",
      "数据迁移服务",
      "私有化部署可选"
    ],
    limitations: [],
    buttonText: "商务洽谈",
    popular: false
  }
];

export const Pricing = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            产品定价
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            透明的定价策略，满足不同规模企业的需求。5人以下团队永久免费使用
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-primary scale-105 bg-primary/5" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                    推荐选择
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                  <div className="text-muted-foreground text-sm mt-1">{plan.period}</div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      包含功能
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-3 text-sm">
                        功能限制
                      </h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="text-xs text-muted-foreground">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "variant-outline"
                  }`}
                  onClick={plan.name === "免费版" ? scrollToRegister : undefined}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl max-w-4xl mx-auto border">
            <h3 className="text-xl font-bold text-foreground mb-4">
              定价说明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">免费版限制</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 团队人数不超过5人</li>
                  <li>• 同时活跃项目不超过3个</li>
                  <li>• 文件存储空间1GB</li>
                  <li>• 基础功能模块</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">付费版优势</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 完整功能模块</li>
                  <li>• 高级数据分析</li>
                  <li>• 优先技术支持</li>
                  <li>• 定制化服务</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>特别说明：</strong>企业版支持私有化部署、定制化开发、现场培训等服务，
                具体价格根据企业规模和需求定制。如需了解详细报价，请联系我们的销售团队。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};