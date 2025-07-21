import { Car, Cloud, Workflow, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Car,
    title: "汽车零部件行业专用",
    description: "深度理解汽车零部件行业特点，针对性设计的研发项目管理平台"
  },
  {
    icon: Workflow,
    title: "基于APQP理念",
    description: "遵循汽车行业APQP标准流程，覆盖产品开发项目全生命周期管理"
  },
  {
    icon: Cloud,
    title: "SaaS云端架构",
    description: "基于云计算架构，用户可在线注册使用，无需本地安装和维护"
  },
  {
    icon: Globe,
    title: "多租户支持",
    description: "支持多租户SaaS模式，满足不同规模企业的个性化管理需求"
  }
];

export const ProductIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            产品简介
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            LeanTrack（领拓）是专为汽车零部件行业量身定制的研发项目管理平台，
            基于APQP理念，覆盖项目全生命周期，助力企业实现项目管理数字化转型。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              为什么选择LeanTrack？
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              在汽车零部件行业深耕多年，我们深知行业痛点。LeanTrack不仅仅是一个项目管理工具，
              更是基于APQP标准流程的数字化解决方案。从项目立项到批量投产，
              LeanTrack为汽车零部件企业提供全流程、全方位的项目管理支持，
              帮助企业提升研发效率，缩短产品上市时间，确保产品质量。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};